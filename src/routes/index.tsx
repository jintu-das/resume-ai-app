import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Download, FileText, Plus, Sparkles } from "lucide-react";

interface Resume {
  id: string;
  title: string;
  template: string;
  lastModified: string;
  status: "draft" | "complete";
}

const mockResumes: Resume[] = [
  {
    id: "1",
    title: "Software Engineer Resume",
    template: "Modern",
    lastModified: "2024-01-15",
    status: "complete",
  },
  {
    id: "2",
    title: "Product Manager Resume",
    template: "Classic",
    lastModified: "2024-01-10",
    status: "draft",
  },
  {
    id: "3",
    title: "Data Scientist Resume",
    template: "Minimal",
    lastModified: "2024-01-08",
    status: "complete",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">ResumeAI</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Sparkles className="h-4 w-4 mr-2" />
              Upgrade to Pro
            </Button>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Build Your Perfect Resume</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create professional resumes with AI-powered suggestions and
            beautiful templates. Land your dream job with a resume that stands
            out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Plus className="h-5 w-5 mr-2" />
              Create New Resume
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="h-5 w-5 mr-2" />
              Import Resume
            </Button>
          </div>
        </div>

        {/* Resume Cards */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold">Your Resumes</h3>
            <Button variant="ghost">
              <Plus className="h-4 w-4 mr-2" />
              New Resume
            </Button>
          </div>

          {mockResumes.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h4 className="text-lg font-medium mb-2">No resumes yet</h4>
                <p className="text-muted-foreground mb-4">
                  Create your first resume to get started
                </p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Resume
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockResumes.map((resume) => (
                <Card
                  key={resume.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          {resume.title}
                        </CardTitle>
                        <CardDescription className="flex items-center mt-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          Modified{" "}
                          {new Date(resume.lastModified).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <Badge
                        variant={
                          resume.status === "complete" ? "default" : "secondary"
                        }
                      >
                        {resume.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Template: {resume.template}
                      </span>
                      <div className="flex space-x-2">
                        <Button size="sm">Edit</Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold mb-2">AI-Powered Writing</h4>
            <p className="text-muted-foreground">
              Get intelligent suggestions for your resume content based on your
              experience and target role.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold mb-2">
              Professional Templates
            </h4>
            <p className="text-muted-foreground">
              Choose from a variety of ATS-friendly templates designed by hiring
              experts.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Multiple Formats</h4>
            <p className="text-muted-foreground">
              Export your resume in PDF, DOCX, or Markdown format with
              customizable styling.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
