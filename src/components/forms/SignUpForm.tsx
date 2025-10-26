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

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { uploadImage } from "@/lib/cloudinary";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { format } from "date-fns";
import type { DropdownNavProps, DropdownProps } from "react-day-picker";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { UserRoles } from "@/constraints/UserRoles";

const userRoles = Object.values(UserRoles);

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
  role: z.enum(userRoles, { message: "Select a role" }),
  profilePicture: z
    .any()
    .optional()
    .refine(
      (val) => !val || val instanceof File || typeof val === "string",
      "Invalid file format",
    ),
  nid: z
    .string()
    .length(10, { message: "NID must be exactly 10 digits long" })
    .regex(/^\d+$/, { message: "NID must contain only numbers" }),
  address: z.string().optional(),
  dateOfBirth: z.date({ message: "Date of birth is required" }),
});

type CreateUserFormData = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();

  const form = useForm<CreateUserFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      profilePicture: null,
      role: UserRoles.USER,
      nid: "",
      address: "",
      dateOfBirth: undefined,
    },
  });

  const handleCalendarChange = (
    _value: string | number,
    _e: React.ChangeEventHandler<HTMLSelectElement>,
  ) => {
    const _event = {
      target: {
        value: String(_value),
      },
    } as React.ChangeEvent<HTMLSelectElement>;
    _e(_event);
  };

  const onSubmit = async (values: CreateUserFormData) => {
    const payload = {
      ...values,
      dateOfBirth: values.dateOfBirth.toISOString().split("T")[0],
    };
    if (values.profilePicture) {
      const toastId = toast.loading("Image uploading...");

      const res = await uploadImage(values.profilePicture as File);
      toast.success("Image upload successfully.", { id: toastId });
      payload.profilePicture = res as string;
    } else {
      delete payload.profilePicture;
    }
    if (!values.address) {
      delete payload.address;
    }

    console.log(payload);
    const toastId = toast.loading("Registering...");
    try {
      const res = await register(payload).unwrap();
      console.log(res);
      toast.success("Register success", { id: toastId });
      navigate("/signin");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.", { id: toastId });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Name <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                    <Input
                      placeholder="Full name"
                      className="h-11 pl-10"
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
                <FormLabel>
                  Email <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="h-11 pl-10"
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
                <FormLabel>
                  Phone <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                    <Input
                      placeholder="017XXXXXXXX"
                      className="h-11 pl-10"
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
                <FormLabel>
                  PIN (5-digit) <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                    <Input
                      type="password"
                      placeholder="•••••"
                      maxLength={5}
                      inputMode="numeric"
                      className="h-11 pl-10 tracking-widest"
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
              <FormItem className="sr-only">
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="h-11 w-full">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent defaultValue={"User"}>
                      {userRoles.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
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
                <FormLabel>
                  NID <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <IdCard className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                    <Input
                      placeholder="10-digit NID"
                      className="h-11 pl-10"
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
          <FormField
            control={form.control}
            name="profilePicture"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="profile">Profile Image URL</FormLabel>
                <FormControl>
                  <Input
                    id="profile"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        field.onChange(file);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Date of Birth */}
          <div>
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Date of Birth <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger className="justify-start" asChild>
                        <Button
                          variant="outline"
                          className="text-muted-foreground active:text-muted-foreground h-11 w-full pl-10 text-left"
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
                          selected={field.value}
                          onSelect={(data) => field.onChange(data)}
                          className="rounded-md border p-2"
                          classNames={{
                            month_caption: "mx-0",
                          }}
                          captionLayout="dropdown"
                          defaultMonth={new Date()}
                          startMonth={new Date(1980, 6)}
                          hideNavigation
                          components={{
                            DropdownNav: (props: DropdownNavProps) => {
                              return (
                                <div className="flex w-full items-center gap-2">
                                  {props.children}
                                </div>
                              );
                            },
                            Dropdown: (props: DropdownProps) => {
                              return (
                                <Select
                                  value={String(props.value)}
                                  onValueChange={(value) => {
                                    if (props.onChange) {
                                      handleCalendarChange(
                                        value,
                                        props.onChange,
                                      );
                                    }
                                  }}
                                >
                                  <SelectTrigger className="h-8 w-fit font-medium first:grow">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent className="max-h-[min(26rem,var(--radix-select-content-available-height))]">
                                    {props.options?.map((option) => (
                                      <SelectItem
                                        key={option.value}
                                        value={String(option.value)}
                                        disabled={option.disabled}
                                      >
                                        {option.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              );
                            },
                          }}
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
          <div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                      <Input
                        placeholder="Your address"
                        className="h-11 pl-10"
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
              className="h-11 w-full"
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
