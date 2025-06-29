import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import Education from "./education";

export default function Educations() {
  const form = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "educations",
  });

  return (
    <>
      <Accordion type="single" collapsible className="w-full space-y-4 p-2">
        {fields?.map((field, index) => (
          <Education
            key={index}
            control={form.control}
            field={field}
            index={index}
            remove={remove}
          />
        ))}

        <Button
          variant="link"
          size="sm"
          onClick={() =>
            append({
              school: "",
              degree: "",
              endDate: "",
              city: "",
              description: "",
            })
          }
        >
          <Plus className="size-4" /> Add More Education
        </Button>
      </Accordion>
    </>
  );
}
