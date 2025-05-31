import { buttonVariants } from "@/components/ui/button";
import TemplateCard from "@/features/templates/components/template-card";
import TemplatesBreadcrumb from "@/features/templates/components/templates-breadcrumb";
import type { Template } from "@/features/templates/types";
import { createFileRoute, Link } from "@tanstack/react-router";

const templates: Template[] = [
  {
    id: "modern-1",
    name: "Modern Professional",
    description: "Clean and contemporary design perfect for tech roles",
    preview: "/placeholder.svg?height=300&width=200",
    category: "modern",
  },
  {
    id: "classic-1",
    name: "Classic Executive",
    description: "Traditional format ideal for corporate positions",
    preview: "/placeholder.svg?height=300&width=200",
    category: "classic",
  },
  {
    id: "modern-2",
    name: "Minimal Clean",
    description: "Minimalist design with focus on content",
    preview: "/placeholder.svg?height=300&width=200",
    category: "modern",
  },
  {
    id: "creative-1",
    name: "Creative Portfolio",
    description: "Eye-catching design for creative professionals",
    preview: "/placeholder.svg?height=300&width=200",
    category: "creative",
    isPro: true,
  },
  {
    id: "modern-3",
    name: "Tech Focused",
    description: "Perfect for software engineers and developers",
    preview: "/placeholder.svg?height=300&width=200",
    category: "modern",
  },
  {
    id: "classic-2",
    name: "Academic Standard",
    description: "Formal layout for academic and research positions",
    preview: "/placeholder.svg?height=300&width=200",
    category: "classic",
  },
];

export const Route = createFileRoute("/_marketing/_layout/resume-templates")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <TemplatesBreadcrumb />

      <section className="flex flex-col items-center">
        <h1 className="text-5xl font-playfair font-bold text-center">
          Resume Templates
        </h1>
        <p className="text-lg text-muted-foreground text-center mt-4 max-w-4xl mx-auto text-balance">
          Our expertly crafted resume templates are built to meet industry
          standards and hiring requirements, helping you secure job
          opportunities more efficiently. Each template includes access to 18
          additional career development tools at no extra cost.
        </p>
        <Link
          to="/app"
          className={buttonVariants({
            className: "mt-6 mx-auto block",
          })}
        >
          Get Started
        </Link>
      </section>

      <section className="-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </section>
    </>
  );
}
