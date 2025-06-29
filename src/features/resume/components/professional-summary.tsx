import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import TextEditor from "@/components/ui/text-editor";
import { useFormContext } from "react-hook-form";

export default function ProfessionalSummary() {
  const form = useFormContext();

  return (
    <>
      <div className="space-y-4 p-2">
        <FormField
          control={form.control}
          name="professionalSummary"
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
      </div>
    </>
  );
}
