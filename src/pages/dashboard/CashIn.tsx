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
  DollarSignIcon,
  Loader2Icon,
  PhoneIcon,
  UploadCloudIcon,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useGetWalletMeQuery } from "@/redux/features/wallet/wallet.api";
import MoneyOperationSkeleton from "@/components/shared/MoneyOperationSkeleton";
import { useCashInMutation } from "@/redux/features/transaction/transaction.api";

const cashInSchema = z.object({
  agentPhone: z
    .string()
    .regex(/^01\d{9}$/, "Enter a valid 11-digit Bangladeshi phone number"),
  amount: z
    .string()
    .regex(/^\d+$/, "Amount must be a number")
    .refine((val) => Number(val) > 0, "Amount must be greater than 0"),
});

type CashInFormData = z.infer<typeof cashInSchema>;

export default function CashIn() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const info = Object.fromEntries(params.entries());

  const { data, isLoading } = useGetWalletMeQuery({});
  const [cashIn] = useCashInMutation();

  const form = useForm<CashInFormData>({
    resolver: zodResolver(cashInSchema),
    defaultValues: {
      agentPhone: info?.phone || "",
      amount: "",
    },
  });

  const onSubmit = async (values: CashInFormData) => {
    const balance = data.balance;
    const amount = Number(values.amount);

    if (amount > balance) {
      toast.warning("Insufficient balance.");
      return;
    }

    const payload = { receiver: values.agentPhone, amount };

    const toastId = toast.loading("Processing cash in...");

    try {
      await cashIn(payload).unwrap();
      toast.success("Cash in successful!", { id: toastId });
      form.reset();
      navigate("/dashboard/my-transactions");
    } catch (err) {
      toast.error("Failed to complete cash in", { id: toastId });
      console.error(err);
    }
  };

  if (isLoading) return <MoneyOperationSkeleton />;

  return (
    <div className="bg-background flex h-full items-center justify-center">
      <Card className="border-border bg-card text-card-foreground w-full max-w-md rounded-2xl border shadow-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-foreground text-2xl font-semibold">
            Cash In{" "}
            {info?.name && (
              <span className="text-muted-foreground text-base">
                ({info.name})
              </span>
            )}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Transfer money to an authorized agent for cash in.
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
                        <DollarSignIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
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
                    <UploadCloudIcon className="mr-2 h-4 w-4" />
                    Cash In
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
