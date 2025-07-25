import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import TextEditor from "@/components/ui/text-editor";
import { Trash } from "lucide-react";
import {
  useWatch,
  type Control,
  type FieldValues,
  type UseFieldArrayRemove,
} from "react-hook-form";

type EducationProps = {
  field: Record<"id", string>;
  index: number;
  control: Control<FieldValues, unknown, FieldValues>;
  remove: UseFieldArrayRemove;
};

export default function Education({
  control,
  field,
  index,
  remove,
}: EducationProps) {
  const watch = useWatch({
    control,
    name: `educations.${index}`,
  });

  return (
    <AccordionItem
      value={field.id}
      key={field.id}
      className="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 rounded-md border px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]"
    >
      <AccordionTrigger className="font-semibold">
        {watch?.degree && watch?.school
          ? `${watch.degree} at ${watch.school}${watch?.city ? `, ${watch.city}` : ""}`
          : "Not Specified"}
      </AccordionTrigger>

      <AccordionContent className="space-y-4 px-1 pt-1">
        <FormField
          control={control}
          name={`educations.${index}.school`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="School Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`educations.${index}.degree`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Degree" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`educations.${index}.endDate`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="End Date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={`educations.${index}.city`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`educations.${index}.description]`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextEditor
                  content={field.value}
                  onChange={(content) => field.onChange(content)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button onClick={() => remove(index)}>
          <Trash className="size-4" />
          Delete
        </Button>
      </AccordionContent>
    </AccordionItem>
  );
}
