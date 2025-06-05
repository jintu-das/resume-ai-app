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

export default function SocialLinks() {
  const form = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "socialLinks",
  });

  return (
    <>
      <div className="space-y-4 p-2">
        {fields?.map((field, index) => (
          <div key={field.id} className="flex gap-2 items-start ">
            <FormField
              control={form.control}
              name={`socialLinks.${index}.platform`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Social Link" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`socialLinks.${index}.url`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="URL" {...field} className="flex-1" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant="ghost" size="icon" onClick={() => remove(index)}>
              <Trash className="size-4" />
            </Button>
          </div>
        ))}

        <Button
          variant="link"
          size="sm"
          onClick={() => append({ platform: "", url: "" })}
        >
          <Plus className="size-4" /> Add More Skill
        </Button>
      </div>
    </>
  );
}
