'use client'
import Image from "next/image";
import { Footer } from "@/components/component/footer";
import { FormCurriculo } from "@/components/component/form-curriculo";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center bg-gray-700">
          <div className="flex items-center bg-gray-900 w-full justify-center py-2 shadow">
            <div className="">
              <Image src='/img/icon.png' width={0} height={0} sizes="100vw" alt="logo" className="w-20 h-20" />
            </div>
            <h1 className="text-2xl font-bold text-gray-100">Gerador de Currículo</h1>
          </div>
        <div className="px-2 py-8 w-full max-w-7xl">
          <FormCurriculo />
        </div>
      </main>
      <Footer git="https://github.com/jhowk14/projeto-adm-gerador-cv-next/" youtube="" twitter="" />
    </>
  );
}
