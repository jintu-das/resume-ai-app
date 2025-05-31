import { Card, CardContent } from "@/components/ui/card";

export default function ResumeContainer() {
  return (
    <section className="grid place-content-center bg-primary-foreground dark:bg-background">
      <Card className="max-w-[600px] h-[800px] mx-3">
        <CardContent>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ut
            odio quas, quaerat sint quos autem harum dolorum ea. Possimus iusto
            corrupti cumque, dignissimos laborum impedit ea ipsam neque rem?
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
