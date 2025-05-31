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
    tab_id: "personal-info",
    title: "Personal Information",
    icon: User,
  },
  {
    id: 2,
    tab_id: "work-experience",
    title: "Work Experience",
    icon: Briefcase,
  },
  {
    id: 3,
    tab_id: "education",
    title: "Education",
    icon: GraduationCap,
  },
  {
    id: 4,
    tab_id: "skills",
    title: "Skills",
    icon: Code,
  },
  {
    id: 5,
    tab_id: "projects",
    title: "Projects",
    icon: FileText,
  },
  {
    id: 6,
    tab_id: "certifications",
    title: "Certifications",
    icon: Award,
  },
];

export default function ResumeSidebar() {
  return (
    <aside className="border-r p-6 hidden lg:block">
      <div className="space-y-6 ">
        {NAV_ITEMS?.map((item) => (
          <Button
            key={item.id}
            size="lg"
            variant={item.id === 1 ? "default" : "ghost"}
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
