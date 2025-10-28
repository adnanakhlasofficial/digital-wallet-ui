import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowLeftRightIcon,
  Loader2Icon,
  PhoneIcon,
  SendIcon,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useGetWalletMeQuery } from "@/redux/features/wallet/wallet.api";
import MoneyOperationSkeleton from "@/components/shared/MoneyOperationSkeleton";
import { useAgentTransferMutation } from "@/redux/features/transaction/transaction.api";
import type { ApiErrorResponse } from "@/types";

const agentTransferSchema = z.object({
  agentPhone: z
    .string()
    .regex(/^01\d{9}$/, "Enter a valid 11-digit Bangladeshi phone number"),
  amount: z
    .string()
    .regex(/^\d+$/, "Amount must be a number")
    .refine((val) => Number(val) > 0, "Amount must be greater than 0"),
});

type AgentTransferFormData = z.infer<typeof agentTransferSchema>;

export default function AgentTransfer() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const info = Object.fromEntries(params.entries());

  const { data, isLoading } = useGetWalletMeQuery({});
  const [agentTransfer] = useAgentTransferMutation();

  const form = useForm<AgentTransferFormData>({
    resolver: zodResolver(agentTransferSchema),
    defaultValues: {
      agentPhone: info?.phone || "",
      amount: "",
    },
  });

  const onSubmit = async (values: AgentTransferFormData) => {
    const balance = data.balance;
    const amount = Number(values.amount);

    if (amount > balance) {
      toast.warning("Insufficient balance.");
      return;
    }

    const payload = { receiver: values.agentPhone, amount };

    const toastId = toast.loading("Processing agent transfer...");

    try {
      await agentTransfer(payload).unwrap();
      toast.success("Agent transfer successful!", { id: toastId });
      form.reset();
      navigate("/dashboard/my-transactions");
    } catch (err) {
      const error = err as ApiErrorResponse;
      toast.error(error?.data?.message || "Failed to complete transfer", {
        id: toastId,
      });
      console.error(error);
    }
  };

  if (isLoading) return <MoneyOperationSkeleton />;

  return (
    <div className="bg-background flex h-full items-center justify-center">
      <Card className="border-border bg-card text-card-foreground w-full max-w-md rounded-2xl border shadow-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-foreground text-2xl font-semibold">
            Agent Transfer{" "}
            {info?.name && (
              <span className="text-muted-foreground text-base">
                ({info.name})
              </span>
            )}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Send money to another agent account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Agent Phone */}
              <FormField
                control={form.control}
                name="agentPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">
                      Agent Phone Number
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <PhoneIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                        <Input
                          placeholder="01XXXXXXXXX"
                          inputMode="numeric"
                          maxLength={11}
                          className="h-11 pl-10"
                          {...field}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            field.onChange(value.slice(0, 11));
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Amount */}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Amount</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <ArrowLeftRightIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                        <Input
                          placeholder="Enter amount"
                          inputMode="numeric"
                          className="h-11 pl-10"
                          {...field}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            field.onChange(value);
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="h-11 w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <SendIcon className="mr-2 h-4 w-4" />
                    Transfer
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
