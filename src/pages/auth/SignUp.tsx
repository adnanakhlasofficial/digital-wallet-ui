"use client";

import SignUpForm from "@/components/forms/SignUpForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-background to-muted p-4">
      <Card className="w-full max-w-2xl shadow-lg border-border">
        <CardHeader className="space-y-1 pb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
              <UserIcon className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-center tracking-tight text-foreground">
            Create your account
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground text-base">
            Fill in your details to sign up
          </CardDescription>
        </CardHeader>

        <CardContent>
          <SignUpForm />
        </CardContent>

        <CardFooter className="flex flex-col space-y-4 border-t pt-6">
          <div className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Button asChild variant="link" className="px-0">
              <Link to="/signin">Sign In</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
