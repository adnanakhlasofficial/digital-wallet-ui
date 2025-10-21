import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Loader2Icon, LockIcon, LogInIcon, MailIcon } from "lucide-react";

const signInSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().regex(/^\d{5}$/, "PIN must be exactly 5 digits"),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignInFormData) => {
    try {
      console.log("Sign-in data:", values);
    } catch (err) {
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
                    <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="you@example.com"
                      type="email"
                      className="pl-10 h-11"
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
                    <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="•••••"
                      type="password"
                      inputMode="numeric"
                      maxLength={5}
                      className="pl-10 h-11 tracking-widest"
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
            className="w-full h-11"
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
