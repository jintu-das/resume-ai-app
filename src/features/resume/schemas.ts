import { z } from "zod";

export const resumeFormSchema = z.object({
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
  professionalSummary: z
    .string()
    .min(10, {
      message: "Professional summary must be at least 10 characters.",
    })
    .optional(),
  skills: z.array(z.string()).nonempty("Please at least one item"),
  experiences: z
    .array(
      z.object({
        title: z.string().min(2, {
          message: "Company name must be at least 2 characters.",
        }),
        employer: z.string().min(2, {
          message: "Position must be at least 2 characters.",
        }),
        startDate: z.string().min(1, {
          message: "Start date is required.",
        }),
        endDate: z.string().optional(),
        city: z.string().min(2, {
          message: "City must be at least 2 characters.",
        }),
        description: z.string().min(5, {
          message: "Description must be at least 5 characters.",
        }),
      })
    )
    .nonempty("Please add at least one work experience"),
  educations: z
    .array(
      z.object({
        school: z.string().min(2, {
          message: "School name must be at least 2 characters.",
        }),
        degree: z.string().min(2, {
          message: "Degree must be at least 2 characters.",
        }),
        endDate: z.string().min(1, {
          message: "End date is required.",
        }),
        city: z.string().min(2, {
          message: "City must be at least 2 characters.",
        }),
        description: z.string().optional(),
      })
    )
    .nonempty("Please add at least one education"),
  socialLinks: z
    .array(
      z.object({
        platform: z.string().min(1, {
          message: "Platform is required.",
        }),
        url: z.string().url({
          message: "Invalid URL format.",
        }),
      })
    )
    .optional(),
});
