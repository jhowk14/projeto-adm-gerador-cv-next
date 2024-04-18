'use client'
import Image from "next/image";
import { Footer } from "@/components/component/footer";
import { FormCurriculo } from "@/components/component/form-curriculo";

// testando sync
export default function Home() {
  return (
    <>
     <main className="flex flex-col justify-center items-center bg-gray-700">
        <div id="header" className="flex items-center opacity-85 bg-gray-900 w-full justify-center py-4 gap-10 shadow-md shadow-gray-950 fixed top-0 z-10">
          <div className="opacity-100 blur-none">
            <Image src='/img/icon.png' width={0} height={0} sizes="100vw" alt="logo" className="w-10 h-10" />
          </div>
          <h1 className="text-xl opacity-100 font-bold text-gray-100">Gerador de Currículo</h1>
        </div>
        <div className="py-8 w-full max-w-7xl mt-10">
          <FormCurriculo />
        </div>
      </main>
      <Footer git="https://github.com/jhowk14/projeto-adm-gerador-cv-next/" youtube="" twitter="" />
    </>
  );
}
