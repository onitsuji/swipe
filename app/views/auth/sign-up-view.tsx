import { useState } from "react";
import { useNavigate } from "react-router";
import { signUp } from "~/lib/auth-client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export default function SignUpView() {
  const navigate = useNavigate();
  // Error to show to user from Better Auth
  const [error, setError] = useState("");
  // Form Schema
  const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  });
  // Instantiate useForm hook and pass resolver to match form schema, then initialise default values
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // onSubmit func which will call the better auth emthod
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");

    await signUp.email(
      {
        ...values,
      },
      {
        onRequest: (ctx) => {
          // show loading state
        },
        onSuccess: (ctx) => {
          // redirect to home
          navigate("/");
        },
        onError: (ctx) => {
          setError(ctx.error.message);
        },
      }
    );
  }

  // Create our Form
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormDescription>This is your full name.</FormDescription>
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
                <Input placeholder="johndoe@example.com" {...field} />
              </FormControl>
              <FormDescription>This is your email address.</FormDescription>
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
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && <div>{error}</div>}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
