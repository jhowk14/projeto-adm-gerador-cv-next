export const pdfTemplate = ({
  nome = '',
  idade,
  estadoCivil= '',
  endereco= '',
  celularPessoal= '',
  celularRecado= '',
  email= '',
  educacao = [],
  cursos = [],
  CNH= '',
  experiencia = [],
  habilidades= '',
  sobre= '',
}: {
  nome?: string;
  idade?: number;
  estadoCivil?: string;
  endereco?: string;
  CNH?: string;
  celularPessoal?: string;
  celularRecado?: string;
  email?: string;
  educacao?: { instituicao?: string; curso?: string; anoTermino?: string }[];
  cursos?: { instituicao?: string; curso?: string; anoTermino?: string }[];
  experiencia?: {
    empresa?: string;
    cargo?: string;
    atividades?: string;
    from?: string,
    to?: string,
    trabalhoAtual?: boolean
  }[];
  habilidades?: string;
  sobre?: string;
}) => {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <style>
            body {
                font-family: Arial, sans-serif; /* Use Arial font */
                font-size: 12px; /* Set font size to 12 */
            }
        </style>
    </head>
    
    <body class="bg-gray-100">
        <div class="container mx-auto p-4">
           ${nome && ` <h1 class="text-xl font-bold mb-1">${nome.toUpperCase()}</h1>`}
            <hr class="bg-gray-800"/>
            <div class="my-2">
            ${idade && `  <p><span class="font-bold">Idade:</span> ${idade}</p>`}
            ${estadoCivil && `  <p><span class="font-bold">Estado Civil:</span> ${estadoCivil}</p>`}
            ${endereco && `  <p><span class="font-bold">Endereço:</span> ${endereco}</p>`}
            ${celularPessoal && `  <p><span class="font-bold">Celular Pessoal:</span> ${celularPessoal}</p>`}
            ${celularRecado && `  <p><span class="font-bold">Celular Recado:</span> ${celularRecado}</p>`}
            ${email && `  <p><span class="font-bold">E-mail:</span> ${email}</p>`}
            ${CNH && `  <p><span class="font-bold">CNH:</span> ${CNH}</p>`}
            </div>
            ${educacao
              .map((edu) => {
                if (edu.instituicao || edu.curso || edu.anoTermino) {
                  return /*html*/ `
                  <hr class="bg-gray-800"/>
                  <div class="my-2">
                      <h2 class="text-lg font-bold mb-2">Formação Acadêmica</h2>
                      <ul class="list-disc pl-6 mb-2">
                    <li class="mb-2">
                        ${
                          edu.instituicao
                            ? `<span>Instituição: </span>${edu.instituicao}<br/>`
                            : ""
                        }
                        ${
                          edu.curso
                            ? `<span>Curso: </span>${edu.curso}<br/>`
                            : ""
                        }
                        ${
                          edu.anoTermino
                            ? `<span>Ano de término: </span>${edu.anoTermino}<br/>`
                            : ""
                        }
                    </li>
                    </ul>
                </div>
                    `;
                        } else {
                          // Se nenhum campo estiver presente, retorna uma string vazia
                          return "";
                        }
                      })
                      .join("")}

            ${cursos
              .map((curso) => {
                if (
                  curso.instituicao ||
                  curso.curso ||
                  curso.anoTermino
                ) {
                  return /*html*/ `
                  <hr class="bg-gray-800"/>
                  <div class="my-2">
                      <h2 class="text-lg font-bold mb-2">Cursos</h2>
                      <ul class="list-disc pl-6 mb-2">
                    <li class="mb-2">
                        ${
                          curso.instituicao
                            ? `<span>Instituição: </span>${curso.instituicao}<br/>`
                            : ""
                        }
                        ${
                          curso.curso
                            ? `<span>Curso: </span>${curso.curso}<br/>`
                            : ""
                        }
                        ${
                          curso.anoTermino
                            ? `<span>Ano de término: </span>${curso.anoTermino}<br/>`
                            : ""
                        }
                        </li>;
                        </ul>
                    </div>`
                      } else {
                        // Se nenhum campo estiver presente, retorna uma string vazia
                        return "";
                      }
                    })
                    .join("")}
                    ${experiencia
                      .map((exp) => {
                        if (
                          exp.empresa ||
                          exp.cargo ||
                          exp.atividades
                        ) {
                          return /*html*/ `
                          <hr class="bg-gray-800"/>
                          <div class="my-2">
                              <h2 class="text-lg font-bold mb-2">Experiência Profissional</h2>
                              <ul class="list-disc pl-6 mb-2">
                    <li class="mb-2">
                        ${
                          exp.empresa
                            ? `<span>Empresa: </span>${exp.empresa}<br/>`
                            : ""
                        }
                        ${
                          exp.cargo
                            ? `<span>Cargo: </span>${exp.cargo}<br/>`
                            : ""
                        }
                        ${
                          exp.from
                            ? `<span>Duração: </span>${exp.from} ${exp.to && !exp.trabalhoAtual ?`até ${exp.to}`: ''}<br/>`
                            : ""
                        }
                        ${
                          exp.trabalhoAtual
                            ? `<span>Trabalho Atual: </span>Sim<br/>`
                            : ""
                        }
                        ${
                          exp.atividades
                            ? `<span>Atividades: </span>${exp.atividades}`
                            : ""
                        }
                    </li>
                    </ul>
                </div> 
                    `;
                        } else {
                          // Se nenhum campo estiver presente, retorna uma string vazia
                          return "";
                        }
                      })
                      .join("")}
            ${habilidades && /*html*/ `
            <hr class="bg-gray-800"/>
            <div class="my-2">
                <h2 class="text-lg font-bold mb-2">Qualificações</h2>
                <p>${habilidades}</p>
            </div>`}
            ${sobre && /*html*/ `
            <hr class="bg-gray-800"/>
            <div class="my-2">
                <h2 class="text-lg font-bold mb-2">Objetivo</h2>
                <p>${sobre}</p>
            </div>
            `}
        </div>
    </body>
    </html>  
          `;
};
