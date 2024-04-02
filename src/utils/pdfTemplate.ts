export const pdfTemplate = ({
  nome,
  telefone,
  email,
  sobre,
  educacao,
  experiencia,
  habilidades
}: {
  nome: string;
  telefone: string;
  email: string;
  sobre: string;
  educacao: { instituicao: string; curso: string; anoTermino: string }[];
  experiencia: { empresa: string; cargo: string; duracao: string }[];
  habilidades: string;
}) => {
  return /*html*/`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
          
            <title>Document</title>
        </head>
        
        <body>
            <style>
                @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");
                * {
                   font-family: "Poppins", "sans-serif" !important ;
                 }
                 html {
                    -webkit-print-color-adjust: exact;
                  }
                 @media print {
                     body {
                       font-size: 16px;
                        color: lightgrey;
                     }
        
                      .no-break-inside {
                          /* apply this class to every component that shouldn't be cut off between two pages of your PDF */
                          break-inside: avoid;
                     }
        
                    .break-before {
                    /* apply this class to every component that should always display on the next page */
                    break-before: always;
          }
        }
            </style>
            <main class="w-[800px] mx-auto p-[20px] text-gray-900 ">
                <!-- introdução  -->
                <div class="w-full min-h-[70px] h-fit pt-1 mb-4 flex justify-between border-b ">
                      <div class="w-[50%] flex items-start h-full flex-col justify-start p-4">
                          <h1  class="font-bold  leading-6 text-lg text-gray-900 text-start">${nome}</h1>
                      </div>
                </div>
                <div class="w-full  min-h-[20px] my-2  pt-1 flex justify-start items-start px-4">
                  <p class="text-gray-900">${sobre}</p>
                </div>
                <!-- Educação -->
                <div class="w-full my-2">
                  <h2 class="font-bold text-lg mb-2">Educação</h2>
                  ${educacao.map(edu => `
                    <div class="flex justify-between items-start border-b py-2">
                      <div>
                        <p class="font-semibold">${edu.instituicao}</p>
                        <p>${edu.curso}</p>
                      </div>
                      <p>${edu.anoTermino}</p>
                    </div>
                  `).join('')}
                </div>

                <!-- Experiência -->
                <div class="w-full mb-4">
                  <h2 class="font-bold text-lg mb-2">Experiência</h2>
                  ${experiencia.map(exp => `
                    <div class="flex justify-between items-start border-b py-2">
                      <div>
                        <p class="font-semibold">${exp.empresa}</p>
                        <p>${exp.cargo}</p>
                      </div>
                      <p>${exp.duracao}</p>
                    </div>
                  `).join('')}
                </div>

                <!-- Habilidades -->
                <div class="w-full">
                  <h2 class="font-bold text-lg mb-2">Habilidades</h2>
                  <p>${habilidades}</p>
                </div>
          </main>
</body>
<script src="https://cdn.tailwindcss.com" ></script>
</html>
        `;
};
