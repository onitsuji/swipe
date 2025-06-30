import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("api/auth/*", "routes/api/auth.ts"),
  index("routes/home.tsx"),
  route("auth/sign-up", "routes/auth/sign-up.tsx"),
] satisfies RouteConfig;
