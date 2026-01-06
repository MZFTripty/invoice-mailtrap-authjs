import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card className="w-[380px] px-5">
        <CardHeader className="text-center">
          <div className="mb-4 mx-auto flex size-20 items-center justify-center rounded-full bg-blue-100">
            <Mail className="size-12 text-blue-500"/>
          </div>
          <CardTitle className="text-xl font-bold">Check your email</CardTitle>
          <CardDescription>We've sent a verification link to your email address.</CardDescription>
        </CardHeader>
        <CardContent className="mt-4 rounded-md bg-yellow-50 border-yellow-300 p-3">
            <div className="flex items-center">
                <AlertCircle className="size-5 text-yellow-400"/>
                <p className="pl-3 text-sm text-yellow-700 font-medium">Be sure to check your spam folder</p>
            </div>
        </CardContent>
        <CardFooter>
            <Link href="/"
            className={buttonVariants({
                className: "w-full",
                variant: "outline"
            })}>
                <ArrowLeft className="size-5 mr-2"/> Back to Homepahge
            </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
