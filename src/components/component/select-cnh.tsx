import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { SchemaType } from "@/components/component/form-curriculo"
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
export type FormFieldName = keyof SchemaType;

interface FormInputProps {
  register: any;
}
export function SelectCnh({register}: FormInputProps) {
  return (
  <>
    <FormField
      control={register.control}
      name="CNH"
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value=" ">Nenhum</SelectItem>
              <SelectItem value="A (Moto)">A (Moto)</SelectItem>
              <SelectItem value="B (Carro)">B (Carro)</SelectItem>
              <SelectItem value="C (Caminhão)">C (Caminhão)</SelectItem>
              <SelectItem value="D (Onibus)">D (Onibus)</SelectItem>
              <SelectItem value="E (Veículos Pesado)">E (Veículos Pesado)</SelectItem>
              <SelectItem value="AB (Carro + Moto)">AB (Carro + Moto)</SelectItem>
          </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  </>
  )
}
