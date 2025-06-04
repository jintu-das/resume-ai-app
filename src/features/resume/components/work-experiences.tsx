import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

export default function WorkExperiences() {
  const form = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "experiences",
  });

  return (
    <>
      <div className="space-y-4 p-2">
        {fields?.map((field, index) => (
          <Card key={field.id}>
            <CardHeader>
              <CardTitle>Google</CardTitle>
              <CardDescription>December 2021</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
                      <Textarea placeholder="Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>

            <CardFooter>
              <Button onClick={() => remove(index)}>
                <Trash className="size-4" />
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}

        <Button variant="outline" size="sm" onClick={() => append("")}>
          <Plus className="size-4" /> Add More Experience
        </Button>
      </div>
    </>
  );
}
