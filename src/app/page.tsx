'use client'
import axios from "axios";
import { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormDescription} from '@/components/ui/form';
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  firstName: z.string().min(3, {
    message: "Preencha com um nome valido"
  }),
  lastName: z.string().min(3, {message: "Preencha com um sobrenome valido"}),
  description: z.string().min(10, {message: "Preencha com uma Descrição valida"})
});

export type schemaType = z.infer<typeof schema>;

export default function Home() {
  const [pdfUrl, setPdfUrl] = useState('');
  const form = useForm<schemaType>({
    resolver: zodResolver(schema)
  });
  const { register, handleSubmit, formState: { errors, isSubmitting, isLoading } } = form

  async function fetchPdf(data: schemaType) {
    try {
      // Inicia o estado de carregamento
      setPdfUrl('');
      
      const response = await axios.post('/api', data, {
        responseType: 'blob'
      });
      // Criar um URL do objeto Blob retornado
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      
      setPdfUrl(pdfUrl);
    } catch (error) {
      console.error("Erro ao buscar PDF:", error);
    }
  };

  return (
    <main className="flex justify-center">
      {
        !pdfUrl && (
          <div className="w-full max-w-4xl p-7">
          <Form {...form}>
            <form onSubmit={handleSubmit(fetchPdf)} className="space-y-2">
              <div>
                <Label>Nome</Label>
                <Input placeholder="Fulano" {...register('firstName')} />
                {errors.firstName && <span className="text-red-500 text-sm inline-block mt-1">
                  {errors.firstName?.message}
                </span>}
              </div>
              <div>
                <Label>Sobrenome</Label>
                <Input placeholder="Ciclano" {...register('lastName')} />
                {errors.lastName && <span className="text-red-500 text-sm inline-block mt-1">
                  {errors.lastName?.message}
                </span>}
              </div>
              <div>
                <Label>Descrição</Label>
                <Input placeholder="Eu sou ..." {...register('description')} />
                <FormDescription>
                  Fale um pouco de sobre você
                </FormDescription>
                {errors.description && <span className="text-red-500 text-sm inline-block mt-1">
                  {errors.description?.message}
                </span>}
              </div>
            <Button type="submit" disabled={isSubmitting || isLoading}>
              {isSubmitting || isLoading ? "Carregando..." : "Gerar PDF"}
            </Button>
            </form>
          </Form>
          </div>
        )
      }
      {pdfUrl && (
        <iframe className="w-screen h-screen" src={pdfUrl} width="100%" height="500px"></iframe>
      )}
    </main>
  );
}
