// PACKAGES
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as z from "zod";

// LOCAL MODULES
import * as registerAction from "@/actions/auth/register-action";
import { DEFAULT_AUTH_REDIRECT_ROUTE } from "@/constants";
import { RegisterSchema } from "@/schemas";

// COMPONENTS
import AuthCardWrapper from "@/components/auth/auth-card-wrapper";
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

export default function RegisterForm() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const mutation = useMutation({
    mutationFn: registerAction.registerAction,
    onSuccess: async (data) => {
      toast.success(data.message);
      localStorage.setItem("user_data", JSON.stringify(data));
      navigate(`${DEFAULT_AUTH_REDIRECT_ROUTE}`);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const formSubmitHandler = (values: z.infer<typeof RegisterSchema>) => {
    mutation.mutate(values);
    console.log(values);
  };

  return (
    <AuthCardWrapper
      title="Get started"
      description="Start your programming journey easily with Avocoding inside you browser."
      footer="If you already have an account, just login by switching to login tab."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(formSubmitHandler)}>
          <div className="space-y-3 md:space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="johndoe"
                      type="text"
                      disabled={mutation.isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="johndoe@mail.com"
                      type="email"
                      disabled={mutation.isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="C5AjJHe9FQvLlg"
                      type="password"
                      disabled={mutation.isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="C5AjJHe9FQvLlg"
                      type="password"
                      disabled={mutation.isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="mt-3 w-full md:mt-4">
            {mutation.isPending ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              "Register"
            )}
          </Button>
        </form>
      </Form>
    </AuthCardWrapper>
  );
}
