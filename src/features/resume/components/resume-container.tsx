import { Card, CardContent } from "@/components/ui/card";
import { useFormContext } from "react-hook-form";

export default function ResumeContainer() {
  const form = useFormContext();
  return (
    <section className="grid place-content-center bg-primary-foreground dark:bg-background">
      <Card className="w=full min-w-[500px] max-w-[600px] h-[800px] mx-3">
        <CardContent>
          <p className="whitespace-pre">
            {JSON.stringify(form.getValues(), null, 6)}
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
