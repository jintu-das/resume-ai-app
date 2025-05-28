import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SparkleIcon, Sparkles } from "lucide-react";

export const Route = createFileRoute("/_marketing/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <SparkleIcon className="size-5 md:size-6 text-primary" />
            <h1 className="text-base md:text-xl font-semibold">Resumade AI</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Sparkles className="h-4 w-4 mr-2" />
              Upgrade to Pro
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="container space-y-28 md:space-y-40 px-4 py-8 bg-background">
        <Outlet />
      </main>
    </div>
  );
}
