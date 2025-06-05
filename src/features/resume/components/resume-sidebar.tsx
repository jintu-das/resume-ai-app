import {
  Briefcase,
  CirclePlus,
  Code,
  FileText,
  GraduationCap,
  Link,
  Lock,
  ScrollText,
  User,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Educations from "./educations";
import PersonalInformation from "./personal-information";
import ProfessionalSummary from "./professional-summary";
import Skills from "./skills";
import SocialLinks from "./social-links";
import WorkExperiences from "./work-experiences";

const NAV_ITEMS = [
  {
    id: 1,
    tab_id: "personal-info",
    title: "Personal Information",
    icon: User,
    isPro: false,
    isDisabled: false,
    component: PersonalInformation,
  },
  {
    id: 2,
    tab_id: "professional-summary",
    title: "Professional Summary",
    icon: ScrollText,
    isPro: false,
    isDisabled: false,
    component: ProfessionalSummary,
  },
  {
    id: 3,
    tab_id: "work-experience",
    title: "Work Experience",
    icon: Briefcase,
    isPro: false,
    isDisabled: false,
    component: WorkExperiences,
  },
  {
    id: 4,
    tab_id: "education",
    title: "Education",
    icon: GraduationCap,
    isPro: false,
    isDisabled: false,
    component: Educations,
  },
  {
    id: 5,
    tab_id: "skills",
    title: "Skills",
    icon: Code,
    isPro: false,
    isDisabled: false,
    component: Skills,
  },
  {
    id: 6,
    tab_id: "social-links",
    title: "Social Links",
    icon: Link,
    isPro: false,
    isDisabled: false,
    component: SocialLinks,
  },
  {
    id: 7,
    tab_id: "projects",
    title: "Projects",
    icon: FileText,
    isPro: true,
    isDisabled: true,
    component: PersonalInformation,
  },
  {
    id: 8,
    tab_id: "add-more-details",
    title: "Add More Details",
    icon: CirclePlus,
    isPro: true, // Assuming this is a pro feature
    isDisabled: true,
    component: PersonalInformation,
  },
];

export default function ResumeSidebar() {
  console.log("ResumeSidebar rendered");

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
            <AccordionTrigger disabled={item.isDisabled}>
              <div className="flex items-center gap-2 font-medium">
                <item.icon className="size-4" />
                {item.title}{" "}
                {item.isPro && (
                  <Badge>
                    <Lock className="size-1" /> Upcoming
                  </Badge>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <item.component />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
}
