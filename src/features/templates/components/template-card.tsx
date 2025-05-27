import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Template } from "../types";

export default function TemplateCard({ template }: { template: Template }) {
  return (
    <Card
      key={template.id}
      className={
        "cursor-pointer transition-all border-0 shadow-none bg-background "
      }
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
  );
}
