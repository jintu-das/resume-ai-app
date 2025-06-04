import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus, Trash } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

export default function Skills() {
  const form = useFormContext();
  const { fields, append } = useFieldArray({
    name: "skills",
  });

  return (
    <>
      <div className="space-y-4 p-2">
        {fields?.map((field, index) => (
          <div key={field.id} className="flex gap-2 items-center">
            <FormField
              control={form.control}
              name={`skills.${index}`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Skill" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant="ghost" size="icon">
              <Trash className="size-4" />
            </Button>
          </div>
        ))}

        <Button variant="outline" size="sm" onClick={() => append("")}>
          <Plus className="size-4" /> Add More
        </Button>
      </div>
    </>
  );
}
