import {
  Accordion,
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
import { Plus, Trash } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

export default function WorkExperiences() {
  const form = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "experiences",
  });

  return (
    <>
      <Accordion type="single" collapsible className="w-full space-y-4 p-2">
        {fields?.map((field, index) => (
          <AccordionItem
            value={field.id}
            key={field.id}
            className="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 rounded-md border px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]"
          >
            <AccordionTrigger className="font-semibold">
              Frontend Developer at Google
            </AccordionTrigger>

            <AccordionContent className="space-y-4 px-1 pt-1">
              <FormField
                control={form.control}
                name={`experiences.${index}.title`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Job Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`experiences.${index}.employer`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Employer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`experiences.${index}.startDate`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Start Date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`experiences.${index}.endDate`}
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
                control={form.control}
                name={`experiences.${index}.city`}
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
                control={form.control}
                name={`experiences.${index}.description]`}
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
