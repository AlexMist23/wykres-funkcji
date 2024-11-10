"use client";

import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GoogleAuthLogo from "@/components/icons/google-auth-logo";
import GithubAuthLogo from "@/components/icons/github-auth-logo";
import { Fragment } from "react";

const providers = [
  { id: "github", name: "GitHub", icon: GithubAuthLogo },
  { id: "google", name: "Google", icon: GoogleAuthLogo },
  // Add more providers as needed
];

export default function SignIn() {
  return (
    <Card className="max-w-[450px] mx-auto my-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Choose a method to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {providers.map((provider, index) => (
          <Fragment key={provider.id}>
            <Button
              key={provider.id}
              className="w-full"
              variant="outline"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <provider.icon className="mr-2 h-4 w-4" />
              {provider.name}
            </Button>
            {index + 1 < providers.length && <Separator />}
          </Fragment>
        ))}
      </CardContent>
      <CardFooter className="flex flex-col items-center text-center">
        <p className="text-sm text-muted-foreground px-6">
          By clicking continue, you agree to our{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  );
}
