import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { SchemaType } from "@/components/component/form-curriculo"
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
export type FormFieldName = keyof SchemaType;

interface FormInputProps {
  register: any;
}
export function SelectEstadocivil({register}: FormInputProps) {
  return (
  <>
    <FormField
      control={register.control}
      name="estadoCivil"
      render={({ field }) => (
        <FormItem className="text-gray-600">
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="Solteiro">Solteiro</SelectItem>
              <SelectItem value="Casado">Casado</SelectItem>
              <SelectItem value="Divorciado">Divorciado</SelectItem>
              <SelectItem value="Viúvo">Viúvo</SelectItem>
              <SelectItem value="União estavel">União estavel</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  </>
  )
}
