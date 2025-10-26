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
import { DollarSignIcon, Loader2Icon, PhoneIcon, SendIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useGetWalletMeQuery } from "@/redux/features/wallet/wallet.api";
import MoneyOperationSkeleton from "@/components/shared/MoneyOperationSkeleton";
import { useSendBonusMutation } from "@/redux/features/transaction/transaction.api";

const sendBonusSchema = z.object({
  phone: z
    .string()
    .regex(/^01\d{9}$/, "Enter a valid 11-digit Bangladeshi phone number"),
  amount: z
    .string()
    .regex(/^\d+$/, "Amount must be a number")
    .refine((val) => Number(val) > 0, "Amount must be greater than 0"),
});

type SendBonusFormData = z.infer<typeof sendBonusSchema>;

export default function SendBonus() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const info = Object.fromEntries(params.entries());
  const { data, isLoading } = useGetWalletMeQuery({});
  const [sendBonus] = useSendBonusMutation();

  const form = useForm<SendBonusFormData>({
    resolver: zodResolver(sendBonusSchema),
    defaultValues: {
      phone: info?.phone || "",
      amount: "",
    },
  });

  const onSubmit = async (values: SendBonusFormData) => {
    const balance = data.balance;
    const amount = Number(values.amount);

    if (amount > balance) {
      toast.warning("Insufficient balance.");
      return;
    }

    const payload = { receiver: info?.phone, amount };

    const toastId = toast.loading("Sending bonus...");

    try {
      // Simulate API call
      await sendBonus(payload);
      toast.success("Bonus sent successfully!", { id: toastId });
      form.reset();
      navigate("/dashboard/my-transactions");
    } catch (err) {
      toast.error("Failed to send bonus", { id: toastId });
      console.error(err);
    }
  };

  if (isLoading) return <MoneyOperationSkeleton />;

  return (
    <div className="bg-background flex h-full items-center justify-center">
      <Card className="border-border bg-card text-card-foreground w-full max-w-md rounded-2xl border shadow-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-foreground text-2xl font-semibold">
            Send Bonus{" "}
            {info.name && (
              <>
                (<span className="text-base">{info.name}</span>)
              </>
            )}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter recipient's phone number and bonus amount.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Phone Number Field */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">
                      Phone Number
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

              {/* Amount Field */}
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
                    Sending...
                  </>
                ) : (
                  <>
                    <SendIcon className="mr-2 h-4 w-4" />
                    Send Bonus
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
