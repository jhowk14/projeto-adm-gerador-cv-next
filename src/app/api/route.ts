import { generatePdf } from "@/utils/generatePdf";
import { pdfTemplate } from "@/utils/pdfTemplate";

export async function POST(req: Request) {
  const { firstName, lastName, description } = await req.json();

  const myPdf = await generatePdf(
    pdfTemplate({ firstName, lastName, description })
  );

  // Create a Blob from the ArrayBuffer
  const blob = new Blob([myPdf], { type: "application/pdf" });

  // Create a File from the Blob (you can specify the desired filename here)
  const file = new File([blob], firstName + "_" + lastName + ".pdf", {
    type: "application/pdf",
  });

  return new Response(file, { headers: { 'content-type': 'application/pdf' } })
}
