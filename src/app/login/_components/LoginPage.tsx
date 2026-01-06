import SubmitButton from '@/app/_components/SubmitButton';
import { auth, signIn } from '@/app/utils/auth';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { redirect } from 'next/navigation';



export default  async function LoginPage() {
  const session = await auth()
  if(session?.user){
    redirect("/dashboard")
  }
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
            <form
              action={async (formData) => {
                'use server';
                await signIn('nodemailer', formData);
              }}
              className="flex flex-col gap-y-4"
            >
              <div className="flex flex-col gap-y-2">
                <Label>Email</Label>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="hi@hi.com"
                />
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
