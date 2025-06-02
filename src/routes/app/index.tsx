import { Form } from "@/components/ui/form";
import ResumeContainer from "@/features/resume/components/resume-container";
import ResumeSidebar from "@/features/resume/components/resume-sidebar";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

export const Route = createFileRoute("/app/")({
  component: RouteComponent,
});

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  jobTitle: z.string().min(2, {
    message: "Job title must be at least 2 characters.",
  }),
  mobile: z.string().min(10, {
    message: "Mobile number must be at least 10 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
});

function RouteComponent() {
  // const form = useForm();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      jobTitle: "",
      mobile: "",
      email: "",
      address: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main className="flex flex-col flex-1 h-full">
      <FormProvider {...form}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_2fr] h-full"
          >
            <ResumeSidebar />
            <ResumeContainer />
            {/* <ResumeSecondarySidebar /> */}
            {/* <Button type="submit">Submit</Button> */}
          </form>
        </Form>
      </FormProvider>
    </main>
  );
}
