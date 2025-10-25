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

import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { Loader2Icon, LockIcon, LogInIcon, MailIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";

const signInSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().regex(/^\d{5}$/, "PIN must be exactly 5 digits"),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignInFormData) => {
    const toastId = toast.loading("Logging In...");
    try {
      await login(values).unwrap();
      toast.success("Login success", { id: toastId });
      navigate("/dashboard");
    } catch (err) {
      toast.error("Failed to login", { id: toastId });
      console.error(err);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <MailIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                    <Input
                      placeholder="you@example.com"
                      type="email"
                      className="h-11 pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 5-Digit PIN Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PIN</FormLabel>
                <FormControl>
                  <div className="relative">
                    <LockIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                    <Input
                      placeholder="•••••"
                      type="password"
                      inputMode="numeric"
                      maxLength={5}
                      className="h-11 pl-10 tracking-widest"
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ""); // only numbers
                        field.onChange(value.slice(0, 5)); // limit to 5 digits
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button with Icon */}
          <Button
            type="submit"
            className="h-11 w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                <LogInIcon className="mr-2 h-4 w-4" />
                Sign in
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
