'use client'
import axios from "axios";
import { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from '@/components/ui/form';
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Footer } from "@/components/component/footer";
import FormInput from "@/components/component/FormInput";
import { FormCurriculo } from "@/components/component/form-curriculo";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center">
          <div className="flex items-center bg-gray-900 w-full justify-center py-2 shadow-xl">
            <div className="">
              <Image src='/img/icon.png' width={0} height={0} sizes="100vw" alt="logo" className="w-20 h-20" />
            </div>
            <h1 className="text-2xl font-bold text-gray-100">Gerador de Currículo</h1>
          </div>
        <div className="p-2 w-full max-w-7xl">
          <FormCurriculo />
        </div>
      </main>
      <Footer git="https://github.com/jhowk14/projeto-adm-gerador-cv-next/" youtube="" twitter="" />
    </>
  );
}
