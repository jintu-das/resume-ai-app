import ResumeContainer from "@/features/resume/components/resume-container";
import ResumeSecondarySidebar from "@/features/resume/components/resume-secondary-sidebar";
import ResumeSidebar from "@/features/resume/components/resume-sidebar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 grid grid-cols-1 lg:grid-cols-[400px_1fr_400px] h-full">
      <ResumeSidebar />
      <ResumeContainer />
      <ResumeSecondarySidebar />
    </main>
  );
}
