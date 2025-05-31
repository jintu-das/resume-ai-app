import { Button } from "@/components/ui/button";
import {
  Award,
  Briefcase,
  Code,
  FileText,
  GraduationCap,
  Plus,
  User,
} from "lucide-react";

const NAV_ITEMS = [
  {
    id: 1,
    title: "Personal Information",
    icon: User,
  },
  {
    id: 2,
    title: "Work Experience",
    icon: Briefcase,
  },
  {
    id: 3,
    title: "Education",
    icon: GraduationCap,
  },
  {
    id: 4,
    title: "Skills",
    icon: Code,
  },
  {
    id: 5,
    title: "Projects",
    icon: FileText,
  },
  {
    id: 6,
    title: "Certifications",
    icon: Award,
  },
];

export default function ResumeSidebar() {
  return (
    <aside className="border-r p-4 hidden lg:block">
      <h1 className="font-medium text-lg">Resume Sections</h1>

      <div className="space-y-6 py-12">
        {NAV_ITEMS?.map((item) => (
          <Button
            key={item.id}
            size="lg"
            variant="ghost"
            className="w-full justify-start !pl-6"
          >
            <item.icon className="size-4 mr-2" />
            {item.title}
          </Button>
        ))}

        <Button variant="outline" className="w-full">
          <Plus className="size-4" /> Add Section
        </Button>
      </div>
    </aside>
  );
}
