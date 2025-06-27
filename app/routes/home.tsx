import { useState } from "react";
import type { Route } from "./+types/home";
import { Form } from "react-router";
import { signUp } from "~/lib/auth-client";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Swipe" },
    {
      name: "description",
      content: "Welcome to Swipe your financial dashboard!",
    },
  ];
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signUpWithEmailAndPassword = async () => {
    await signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onRequest: (ctx) => {
          // show loading state
        },
        onSuccess: (ctx) => {
          // redirect to home
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      }
    );
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <Form onSubmit={signUpWithEmailAndPassword}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </Form>
    </div>
  );
}
