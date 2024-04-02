'use client'
import axios from "axios";
import { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from '@/components/ui/form';
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Footer } from "@/components/component/footer";
import FormInput from "@/components/component/FormInput";

const schema = z.object({
  firstName: z.string().min(3, { message: "Preencha com um nome válido" }),
  lastName: z.string().min(3, { message: "Preencha com um sobrenome válido" }),
  description: z.string().min(10, { message: "Preencha com uma Descrição válida" })
});

export type schemaType = z.infer<typeof schema>;

export default function Home() {
  const [pdfUrl, setPdfUrl] = useState('');
  const form = useForm<schemaType>({
    resolver: zodResolver(schema)
  });
  const { register, handleSubmit, formState: { errors, isSubmitting, isLoading } } = form;

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
      window.location.href = pdfUrl;
      setPdfUrl(pdfUrl);
    } catch (error) {
      console.error("Erro ao buscar PDF:", error);
    }
  };

  return (
    <>
      <main className="flex flex-col items-center">
        <div className="flex items-center">
          <div className="mr-4 mt-4">
            <Image src='/img/icon.png' width={0} height={0} sizes="100vw" alt="logo" className="w-20 h-20" />
          </div>
          <h1 className="text-3xl font-bold">Gerador de Currículo</h1>
        </div>
        <div className="w-full max-w-4xl p-7">
          <Form {...form}>
            <form onSubmit={handleSubmit(fetchPdf)} className="space-y-2">
              <FormInput
                label="Nome"
                name="firstName"
                placeholder="Fulano"
                register={register}
                errors={errors}
              />
              <FormInput
                label="Sobrenome"
                name="lastName"
                placeholder="Ciclano"
                register={register}
                errors={errors}
              />
              <FormInput
                label="Descrição"
                name="description"
                placeholder="Eu sou ..."
                register={register}
                errors={errors}
              />
              <Button type="submit" disabled={isSubmitting || isLoading}>
                {isSubmitting || isLoading ? "Carregando..." : "Gerar PDF"}
              </Button>
            </form>
          </Form>
        </div>
      </main>
      <Footer git="https://github.com/jhowk14/projeto-adm-gerador-cv-next/" youtube="" twitter="" />
    </>
  );
}
