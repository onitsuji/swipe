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
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
