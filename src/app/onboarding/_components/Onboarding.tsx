import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import React from "react";

export default function Onboarding() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Card className=" min-w-sm mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">You are almost finished!</CardTitle>
          <CardDescription className="mt-2">
            Enter your information to create an account.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <div className="flex flex-col gap-2">
                    <label>First Name</label>
                    <input placeholder="tripty" />
                </div>
            </form>
        </CardContent>
      </Card>
    </div>
  );
}
