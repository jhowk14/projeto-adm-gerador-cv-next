import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Form } from "../ui/form";
import { SelectEstadocivil } from "./select-estadocivil";
import { useState } from "react";
import Adicionaveis, { educacaoSchema, experienciaSchema } from "./adicionaveis";
import { SelectCnh } from "./select-cnh";
import { Input } from "../ui/input";

const schema = z.object({
  nome: z.string().optional(),
  idade: z.string().optional(),
  endereco: z.string().optional(),
  estadoCivil: z.string().optional(),
  CNH: z.string().optional(),
  celularPessoal: z.string().optional(),
  celularRecado: z.string().optional(),
  email: z.string().optional(),
  habilidades: z.string().optional(),
  sobre: z.string().optional(),
});

export type SchemaType = z.infer<typeof schema>;

export const FormCurriculo = () => {
  const [adicionaveis, setAdicionaveis] = useState({
    educacao: [educacaoSchema.parse({})],
    experiencia: [experienciaSchema.parse({})],
    cursos: [educacaoSchema.parse({})],
  });

  const handleFormularioChange = (data: typeof adicionaveis) => {
    console.log(data);
    setAdicionaveis(data);
  };

  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
    register,
  } = form;

  const onSubmit = async (data: SchemaType) => {
    try {
      const pdfData = {
        ...data,
      };
      
      const pdf = await generatePdf({ ...pdfData, ...adicionaveis });
      if(pdf){
        form.reset()
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const generatePdf = async (data: any) => {
    console.log(data);
    const response = await axios.post("/api", data, {
      responseType: "blob",
    });
    const pdfBlob = new Blob([response.data], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.location.href = pdfUrl;
    return pdfUrl;
  };
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="bg-gray-100">
          <CardContent className="space-y-4 mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                autoComplete="off"
                  id="name"
                  placeholder="Digite seu nome"
                  {...register("nome")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="idade">Idade</Label>
                <Input
                autoComplete="off"
                  id="idade"
                  type="number"
                  placeholder="Digite sua idade"
                  {...register("idade")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="estadoCivil">Estado Civil</Label>
                <SelectEstadocivil register={form} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endereco">Endereço</Label>
                <Input
                autoComplete="off"
                  id="endereco"
                  placeholder="Digite seu endereço"
                  {...register("endereco")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="celularPessoal">Celular Pessoal</Label>
                <Input
                autoComplete="off"
                  id="celularPessoal"
                  placeholder="Digite seu celular pessoal"
                  {...register("celularPessoal")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="celularRecado">Celular Recado</Label>
                <Input
                autoComplete="off"
                  id="celularRecado"
                  placeholder="Digite o celular para recado"
                  {...register("celularRecado")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                autoComplete="off"
                  id="email"
                  type="text"
                  placeholder="Digite seu e-mail"
                  {...register("email")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="CNH">Cateira De Motorista</Label>
                <SelectCnh register={form} />
              </div>
            </div>
            <div className="space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>Objetivo</CardTitle>
                  <CardDescription>Fale um pouco sobre você.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    className="min-h-[100px]"
                    id="sobre"
                    placeholder="Objetivo..."
                    {...register("sobre")}
                  />
                </CardContent>
              </Card>
            </div>
              <Adicionaveis onChange={handleFormularioChange} />
            <div className="space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>Habilidades</CardTitle>
                  <CardDescription>
                    Digite suas habilidades separadas por vírgulas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    className="min-h-[100px]"
                    id="skills"
                    placeholder="Digite suas habilidades"
                    {...register("habilidades")}
                  />
                </CardContent>
              </Card>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button type="submit" disabled={isSubmitting || isLoading}>
              {isSubmitting || isLoading ? "Carregando..." : "Gerar Curriculo"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};
