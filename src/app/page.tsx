'use client'
import axios from "axios";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  description: z.string().min(10)
});
export type schemaType = z.infer<typeof schema>
export default function Home() {
  const [pdfUrl, setPdfUrl] = useState('');
  const { register, handleSubmit, formState: { errors, isSubmitting, isLoading } } = useForm({
    resolver: zodResolver(schema)
  });

  async function fetchPdf(data: any){
    try {
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
    <main>
      {
      !pdfUrl && (
      <>
      <form onSubmit={handleSubmit(fetchPdf)}>
        <div className="flex flex-col justify-center items-center mt-20">
          <input type="text" {...register("firstName")} placeholder="Primeiro Nome" className="p-2 my-1 rounded border" />
          {errors.firstName && <span className="text-red-500">Este campo é obrigatório</span>}
          <input type="text" {...register("lastName")} placeholder="Sobrenome" className="p-2 my-1 rounded border" />
          {errors.lastName && <span className="text-red-500">Este campo é obrigatório</span>}
          <input type="text" {...register("description")} placeholder="Descrição" className="p-2 my-1 rounded border" />
          {errors.description && <span className="text-red-500">Este campo é obrigatório</span>}
          <button type="submit" className="p-2 bg-blue-600 rounded">Gerar PDF</button>
      {isLoading || isSubmitting && (
        <><h1>carregando ...</h1></>
      )}
        </div>
      </form>
      </>
      )
      }
      {pdfUrl && (
        <iframe className="w-screen h-screen" src={pdfUrl} width="100%" height="500px"></iframe>
      )}
    </main>
  );
}
