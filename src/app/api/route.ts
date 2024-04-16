import { generatePdf } from "@/utils/generatePdf";
import { pdfTemplate } from "@/utils/pdfTemplate";

export async function POST(req: Request) {
  const {
    celularPessoal,
    email,
    celularRecado,
    habilidades,
    nome,
    cursos,
    educacao,
    endereco,
    estadoCivil,
    experiencia,
    idade,
    CNH,
    sobre,
  } = await req.json();
  const myPdf = await generatePdf(
    pdfTemplate({
      celularPessoal,
      email,
      celularRecado,
      habilidades,
      nome,
      CNH,
      cursos,
      educacao,
      endereco,
      estadoCivil,
      experiencia,
      idade,
      sobre,
    })
  );

  // Create a Blob from the ArrayBuffer
  const blob = new Blob([myPdf], { type: "application/pdf" });

  // Create a File from the Blob (you can specify the desired filename here)
  const file = new File([blob], nome + "_" + ".pdf", {
    type: "application/pdf",
  });

  return new Response(file, { headers: { "content-type": "application/pdf" } });
}
