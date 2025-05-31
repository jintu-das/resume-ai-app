import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="font-inter antialiased min-h-screen flex flex-col">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
