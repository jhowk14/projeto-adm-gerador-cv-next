export const pdfTemplate = ({
  nome = "",
  idade = 0,
  estadoCivil = "",
  endereco = "",
  celularPessoal = "",
  celularRecado = "",
  email = "",
  educacao = [],
  cursos = [],
  experiencia = [],
  habilidades = "",
  sobre = "",
}: {
  nome?: string;
  idade?: number;
  estadoCivil?: string;
  endereco?: string;
  celularPessoal?: string;
  celularRecado?: string;
  email?: string;
  educacao?: { instituicao?: string; curso?: string; anoTermino?: string }[];
  cursos?: { instituicao?: string; curso?: string; anoTermino?: string }[];
  experiencia?: {
    empresa?: string;
    cargo?: string;
    duracao?: string;
    atividades?: string;
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
            <h1 class="text-xl font-bold mb-1">${nome.toUpperCase()}</h1>
            <hr class="bg-gray-800"/>
            <div class="my-2">
                <p><span class="font-bold">Idade:</span> ${idade}</p>
                <p><span class="font-bold">Estado Civil:</span> ${estadoCivil}</p>
                <p><span class="font-bold">Endereço:</span> ${endereco}</p>
                <p><span class="font-bold">Celular Pessoal:</span> ${celularPessoal}</p>
                <p><span class="font-bold">Celular Recado (Nome):</span> ${celularRecado}</p>
                <p><span class="font-bold">E-mail:</span> ${email}</p>
            </div>
            <hr class="bg-gray-800"/>
            <div class="my-2">
                <h2 class="text-lg font-bold mb-2">Formação Acadêmica</h2>
                <ul class="list-disc pl-6 mb-2">
                    ${educacao
                      .map((edu) => {
                        if (edu.instituicao || edu.curso || edu.anoTermino) {
                          return /*html*/ `
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
                    </li>`;
                        } else {
                          // Se nenhum campo estiver presente, retorna uma string vazia
                          return "";
                        }
                      })
                      .join("")}

                </ul>
            </div>
            <hr class="bg-gray-800"/>
            <div class="my-2">
                <h2 class="text-lg font-bold mb-2">Cursos</h2>
                <ul class="list-disc pl-6 mb-2">
                  ${cursos
                    .map((curso) => {
                      if (
                        curso.instituicao ||
                        curso.curso ||
                        curso.anoTermino
                      ) {
                        return /*html*/ `
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
                    </li>`;
                      } else {
                        // Se nenhum campo estiver presente, retorna uma string vazia
                        return "";
                      }
                    })
                    .join("")}
                </ul>
            </div>
            <hr class="bg-gray-800"/>
            <div class="my-2">
                <h2 class="text-lg font-bold mb-2">Experiência Profissional</h2>
                <ul class="list-disc pl-6 mb-2">
                    ${experiencia
                      .map((exp) => {
                        if (
                          exp.empresa ||
                          exp.cargo ||
                          exp.duracao ||
                          exp.atividades
                        ) {
                          return /*html*/ `
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
                          exp.duracao
                            ? `<span>Duração: </span>${exp.duracao}<br/>`
                            : ""
                        }
                        ${
                          exp.atividades
                            ? `<span>Atividades: </span>${exp.atividades}`
                            : ""
                        }
                    </li>`;
                        } else {
                          // Se nenhum campo estiver presente, retorna uma string vazia
                          return "";
                        }
                      })
                      .join("")}
                </ul>
            </div>
            <hr class="bg-gray-800"/>
            <div class="my-2">
                <h2 class="text-lg font-bold mb-2">Qualificações</h2>
                <p>${habilidades}</p>
            </div>
            <hr class="bg-gray-800"/>
            <div class="my-2">
                <h2 class="text-lg font-bold mb-2">Objetivo</h2>
                <p>${sobre}</p>
            </div>
        </div>
    </body>
    </html>  
          `;
};
