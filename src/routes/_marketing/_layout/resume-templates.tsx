import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

interface Template {
  id: string;
  name: string;
  description: string;
  preview: string;
  category: "modern" | "classic" | "creative";
  isPro?: boolean;
}

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
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/resume-templates">
              Resume Templates
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section>
        <h1 className="text-5xl font-playfair font-bold text-center">
          Resume templates
        </h1>
        <p className="text-lg text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
          Each resume template is designed to follow the exact rules you need to
          get hired faster. Use our resume templates and get free access to 18
          more career tools!
        </p>
        <Button className="mt-6 mx-auto block">Create my resume</Button>
      </section>

      <section className="-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {templates.map((template) => (
            <Card
              key={template.id}
              className={"cursor-pointer transition-all border-0 shadow-none"}
            >
              <CardContent className="p-4">
                <div className="relative mb-4">
                  {/* <img
                    src={template.preview || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full h-48 object-cover rounded border"
                  /> */}
                  <div className="w-full bg-slate-200 h-[400px] object-cover rounded-2xl border"></div>
                  {template.isPro && (
                    <Badge className="absolute top-2 right-2">Pro</Badge>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2">{template.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {template.description}
                </p>
                <Badge variant="outline" className="capitalize">
                  {template.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
