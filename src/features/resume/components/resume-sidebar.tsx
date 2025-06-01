import {
  Award,
  Briefcase,
  Code,
  FileText,
  GraduationCap,
  User,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <aside className="border-r  hidden lg:block">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        {NAV_ITEMS?.map((item) => (
          <AccordionItem key={item.id} value={item.tab_id} className="px-6">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <item.icon className="size-4" />
                {item.title}
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {/* Content for each section can be added here */}
              <p>
                This is the content for {item.title}. You can add more details
                about this section here.
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
}
