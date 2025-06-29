import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import {
  Download,
  Menu,
  Share,
  Sparkle,
  SparkleIcon,
  UploadCloud,
} from "lucide-react";

export const Route = createFileRoute("/app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <header className="flex items-center justify-between gap-2 p-4 border-b sticky top-0 z-10 bg-background">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <SparkleIcon className="size-4 text-primary" />
            <h1 className="text-base font-semibold">Resumade AI</h1>
          </div>
        </div>

        <p className="flex-1 hidden lg:flex justify-center items-center gap-2 text-sm ">
          <UploadCloud className="size-4" /> Saving your resume...
        </p>

        <div className="flex-1 hidden lg:flex justify-end items-center gap-2 ">
          <Button variant="outline">
            <Sparkle className="size-4" /> AI Tools
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Download className="size-4" /> Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>Export as PDF</DropdownMenuItem>
              <DropdownMenuItem>Export as DOCX</DropdownMenuItem>
              <DropdownMenuItem>Export as TXT</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button>
            <Share className="size-4" /> Share
          </Button>

          <ModeToggle />
        </div>

        <div className="flex-1 flex lg:hidden justify-end items-center gap-2 ">
          <ModeToggle />
          <Button variant="outline" size="icon">
            <Menu className="size-4" />
          </Button>
        </div>
      </header>

      <Outlet />
    </>
  );
}
