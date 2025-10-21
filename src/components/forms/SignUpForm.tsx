"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Calendar as CalendarIcon,
  IdCard,
  Loader2,
  Lock,
  LogIn,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Calendar } from "@/components/ui/calendar"; // ShadCN calendar
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Label } from "../ui/label";

const signUpSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^01[3-9]\d{8}$/, {
    message:
      "Phone number must be a valid Bangladeshi local format (e.g., 017XXXXXXXX)",
  }),
  password: z
    .string()
    .length(5, { message: "PIN must be exactly 5 digits" })
    .regex(/^\d+$/, { message: "PIN must contain only numbers" }),
  role: z.enum(["admin", "user"], { message: "Select a role" }),
  profilePicture: z.instanceof(FileList).optional(),
  nid: z
    .string()
    .length(10, { message: "NID must be exactly 10 digits long" })
    .regex(/^\d+$/, { message: "NID must contain only numbers" }),
  address: z.string().optional(),
  dateOfBirth: z.date({ message: "Date of birth is required" }),
});

type CreateUserFormData = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
  const form = useForm<CreateUserFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      role: "user",
      nid: "",
      address: "",
      dateOfBirth: new Date(),
    },
  });

  const onSubmit = async (data: CreateUserFormData) => {
    try {
      console.log("User Data:", {
        ...data,
        profilePicture: data.profilePicture?.[0] || null,
      });
      // ✅ send to backend API
      // await axios.post("/api/users", data)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Full name"
                      className="pl-10 h-11"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10 h-11"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="017XXXXXXXX"
                      className="pl-10 h-11"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* PIN Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PIN (5-digit)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="•••••"
                      maxLength={5}
                      inputMode="numeric"
                      className="pl-10 h-11 tracking-widest"
                      {...field}
                      onChange={(e) => {
                        const val = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 5);
                        field.onChange(val);
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Role */}
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="h-11 w-full">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* NID */}
          <FormField
            control={form.control}
            name="nid"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NID</FormLabel>
                <FormControl>
                  <div className="relative">
                    <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="10-digit NID"
                      className="pl-10 h-11"
                      maxLength={10}
                      inputMode="numeric"
                      {...field}
                      onChange={(e) => {
                        const val = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);
                        field.onChange(val);
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Profile Picture */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input
              className="file:text-muted-foreground text-muted-foreground"
              id="picture"
              type="file"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger className="justify-start" asChild>
                        <Button
                          variant="outline"
                          className="w-full pl-10 text-left h-11 text-muted-foreground active:text-muted-foreground"
                        >
                          <CalendarIcon className="h-4 w-4" />
                          {field.value
                            ? format(field.value, "PPP")
                            : format(new Date(), "PPP")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value} // <-- bind to form value
                          onSelect={(date) => field.onChange(date)} // <-- update form value
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Address */}
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Your address"
                        className="pl-10 h-11"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <Button
              type="submit"
              className="w-full h-11"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign Up
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
