import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <Card className="max-w-sm p-4 w-full shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Please enter your credentials to log in.
            </CardDescription>
          </CardHeader>
          {/* Add your login form here */}
          <CardContent>
            <form className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-2">
                <Label>Email</Label>
                <Input placeholder="hi@hi.com" />
              </div>
              <Button>Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
