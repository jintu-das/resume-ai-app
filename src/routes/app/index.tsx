import { Form } from "@/components/ui/form";
import ResumeContainer from "@/features/resume/components/resume-container";
import ResumeSidebar from "@/features/resume/components/resume-sidebar";
import { resumeFormSchema } from "@/features/resume/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

export const Route = createFileRoute("/app/")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useForm<z.infer<typeof resumeFormSchema>>({
    resolver: zodResolver(resumeFormSchema),
    defaultValues: {
      fullName: "",
      jobTitle: "",
      mobile: "",
      email: "",
      address: "",
      skills: ["React"],
      experiences: [
        {
          title: "",
          employer: "",
          startDate: "",
          endDate: "",
          city: "",
          description: "",
        },
      ],
      educations: [
        {
          school: "",
          degree: "",
          endDate: "",
          city: "",
          description: "",
        },
      ],
      professionalSummary: "",
      socialLinks: [
        {
          platform: "LinkedIn",
          url: "",
        },
        {
          platform: "GitHub",
          url: "",
        },
      ],
    },
  });

  // function onSubmit(values: z.infer<typeof resumeFormSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values);
  // }

  return (
    <main className="flex flex-col flex-1 h-full">
      <FormProvider {...form}>
        <Form {...form}>
          <div
            // onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_2fr] h-full"
          >
            <ResumeSidebar />
            <ResumeContainer />
          </div>
        </Form>
      </FormProvider>
    </main>
  );
}
