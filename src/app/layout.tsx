import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerador de CV",
  description: "Gerador de Curriculo simplificado Desenvolvido Por Jonathan, Guilherme e Elieser TII Senac Catanduva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Analytics/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
