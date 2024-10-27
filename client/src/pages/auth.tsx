// components
import LoginForm from "@/components/auth/forms/login-form";
import RegisterForm from "@/components/auth/forms/register-form";
import AppMainLink from "@/components/common/app-main-link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Auth() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center space-y-5 p-4">
      <div className="flex w-[350px] flex-col items-center space-y-2 sm:w-[400px] md:w-[420px] lg:w-[450px]">
        <AppMainLink href="/" iconSize="size-7" textSize="text-xl" />
        <h2 className="text-center">
          Fully open source link shortener. Make short links in seconds. Make
          short links in seconds.{" "}
        </h2>
      </div>
      <Tabs
        defaultValue="login"
        className="w-[350px] sm:w-[400px] md:w-[420px] lg:w-[450px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="register">Register</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
      </Tabs>
    </main>
  );
}
