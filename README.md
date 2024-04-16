# Regador de Currículos: README

---

## Descrição do Projeto

O Regador de Currículos é um projeto de Produto Mínimo Viável (PMV) desenvolvido com o framework Next.js. O objetivo é criar uma aplicação web onde os usuários podem preencher um formulário com informações de seus currículos e gerar um PDF personalizado a partir desses dados. A geração do PDF é feita através de um template HTML utilizando a rota API do Next.js.

## Funcionalidades

- **Formulário de Currículo**: Os usuários podem preencher um formulário com informações pessoais, acadêmicas e profissionais relevantes para seus currículos.
  
- **Geração de PDF**: Após preencher o formulário, os usuários têm a opção de gerar um PDF com base nas informações fornecidas. O PDF é gerado a partir de um template HTML.

## Estrutura do Projeto

```
projeto/
│
├── pages/
│   ├── api/
│   │   └── gerar-pdf.js
│   │
│   ├── index.tsx
│   └── _app.tsx
│
├── components/
│   ├── Formulario.tsx
│   └── ...
│
├── templates/
│   └── curriculo-template.html
│
├── public/
│   └── ...
│
└── README.md
```

- **app/**: Contém as páginas da aplicação.
  - **page.tsx**: Página principal com o formulário de currículo.
  - **api/route.ts**: Rota da API do Next.js responsável por gerar o PDF a partir do template HTML.

- **components/**: Componentes reutilizáveis da aplicação, como o formulário de currículo.
-  **utils/**: Arquivos para utilidades do projeto.
- **public/**: Diretório público para arquivos estáticos, como imagens e estilos.

## Como Executar o Projeto

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/projeto.git
   ```

2. Instale as dependências:

   ```bash
   cd projeto
   npm install
   ```

3. Execute o projeto:

   ```bash
   npm run dev
   ```

   O projeto estará disponível em `http://localhost:3000`.

## Contribuindo

Se deseja contribuir com melhorias ou correções, sinta-se à vontade para abrir uma issue ou enviar um pull request.

---

Este é um projeto de Produto Mínimo Viável (PMV), portanto, ainda está em fase inicial de desenvolvimento. Sugestões e feedbacks são bem-vindos!
