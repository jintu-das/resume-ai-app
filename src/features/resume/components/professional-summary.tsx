import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
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
                <Textarea placeholder="Summary" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
