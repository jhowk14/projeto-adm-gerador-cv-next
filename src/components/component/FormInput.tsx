import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { schemaType } from './form-curriculo';

type FormFieldName = keyof schemaType;

interface FormInputProps {
  label: string;
  name: FormFieldName;
  placeholder: string;
  register: any; // ou useFormContext
  errors: any; // ou useFormContext
}

const FormInput: React.FC<FormInputProps> = ({ label, name, placeholder, register, errors }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input placeholder={placeholder} {...register(name)} />
      {errors[name] && (
        <span className="text-red-500 text-sm inline-block mt-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default FormInput;
