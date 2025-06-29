import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import Experience from "./experience";

export default function WorkExperiences() {
  const form = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "experiences",
  });

  return (
    <>
      <Accordion type="single" collapsible className="w-full space-y-4 p-2">
        {fields?.map((field, index) => (
          <Experience
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
              title: "",
              employer: "",
              startDate: "",
              endDate: "",
              city: "",
              description: "",
            })
          }
        >
          <Plus className="size-4" /> Add More Experience
        </Button>
      </Accordion>
    </>
  );
}
