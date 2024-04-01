'use client'
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [pdfUrl, setPdfUrl] = useState('');

  const fetchPdf = async () => {
    try {
      const response = await axios.post('/api', {
        firstName: "aa",
        lastName: "aa",
        description: "aa"
      }, {
        responseType: 'blob' // Define o tipo de resposta como blob
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
      <div className="flex justify-center items-center mt-20">
        <button onClick={fetchPdf} className="p-2 bg-blue-600 rounded">Gerar PDF</button>
      </div>
      </>
      )
      }
      {pdfUrl && (
        <iframe className="w-screen h-screen" src={pdfUrl} width="100%" height="500px"></iframe>
      )}
    </main>
  );
}
