import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Form } from "../ui/form";
import { ButtonAdd } from "./buttonAdd";
import { ButtonRemove } from "./buttonRemove";
import { SelectEstadocivil } from './select-estadocivil';

const educacao = z.object({
  instituicao: z.string().optional(),
  curso: z.string().optional(),
  anoTermino: z.string().optional(),
});

const experiencia = z.object({
  empresa: z.string().optional(),
  cargo: z.string().optional(),
  duracao: z.string().optional(),
  atividades: z.string().optional(),
});


const schema = z.object({
  nome: z.string().optional(),
  idade: z.string().optional(),
  endereco: z.string().optional(),
  estadoCivil: z.string().optional(),
  celularPessoal: z.string().optional(),
  celularRecado: z.string().optional(),
  email: z.string().email().optional(),
  educacao: z.array(educacao).optional(),
  cursos: z.array(educacao).optional(),
  experiencia: z.array(experiencia).optional(),
  habilidades: z.string().optional(),
  sobre: z.string().optional(),
});

export type SchemaType = z.infer<typeof schema>;

export const FormCurriculo = () => {
  const [pdfUrl, setPdfUrl] = useState("");
  const [numEducacao, setNumEducacao] = useState(1); // Start with one education field
  const [numExperiencia, setNumExperiencia] = useState(1); // Start with one experience field
  

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
      const pdf = await generatePdf(pdfData);
      setPdfUrl(pdf);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const generatePdf = async (data: SchemaType) => {
    console.log(data)
    const response = await axios.post("/api", data, {
      responseType: "blob",
    });
    const pdfBlob = new Blob([response.data], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.location.href = pdfUrl;
    return pdfUrl;
  };

  const addEducacaoField = () => {
    setNumEducacao(num => num + 1);
  };

  const addExperienciaField = () => {
    setNumExperiencia(num => num + 1);
  };

  console.log(errors)

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="bg-gray-100">
        <CardContent className="space-y-4 mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Digite seu nome"
                {...register("nome")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="idade">Idade</Label>
              <Input
                id="idade"
                type="number"
                placeholder="Digite sua idade"
                {...register("idade")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="estadoCivil">Estado Civil</Label>
              <SelectEstadocivil register={form}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="endereco">Endereço</Label>
              <Input
                id="endereco"
                placeholder="Digite seu endereço"
                {...register("endereco")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="celularPessoal">Celular Pessoal</Label>
              <Input
                id="celularPessoal"
                placeholder="Digite seu celular pessoal"
                {...register("celularPessoal")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="celularRecado">Celular Recado (Nome)</Label>
              <Input
                id="celularRecado"
                placeholder="Digite o celular para recado"
                {...register("celularRecado")}
              />
            </div>
          </div>
  <div className="space-y-2">
    <Label htmlFor="email">E-mail</Label>
    <Input
      id="email"
      type="email"
      placeholder="Digite seu e-mail"
      {...register("email")}
    />
  </div>
  <div className="space-y-2">
    <Card>
      <CardHeader>
        <CardTitle>Sobre você</CardTitle>
        <CardDescription>Fale um pouco sobre você.</CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea
          className="min-h-[100px]"
          id="sobre"
          placeholder="Fale sobre você"
          {...register("sobre")}
        />
      </CardContent>
    </Card>
  </div>
  <div className="space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>Educação</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="school">Instituição</Label>
                    <Input
                      id="school"
                      placeholder="Digite o nome da sua instituição de ensino"
                      {...register("educacao.0.instituicao")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="degree">Curso</Label>
                    <Input
                      id="degree"
                      placeholder="Digite o curso"
                      {...register("educacao.0.curso")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduation-year">Ano de Término</Label>
                    <Input
                      id="graduation-year"
                      placeholder="Digite o ano de término"
                      {...register("educacao.0.anoTermino")}
                    />
                  </div>
                </CardContent>
              </Card>
            <div className="flex justify-center gap-5">
              <ButtonAdd onClick={addEducacaoField}></ButtonAdd>
              <ButtonRemove onClick={()=>{}}></ButtonRemove>
            </div>
            </div>
            <div className="space-y-2">
            <Card>
              <CardHeader>
                <CardTitle>Curso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="curso">Curso</Label>
                  <Input
                    id="curso"
                    placeholder="Digite o nome do curso"
                    {...register(`cursos.0.curso`)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instituicaoCurso">Instituição</Label>
                  <Input
                    id="instituicaoCurso"
                    placeholder="Digite o nome da instituição"
                    {...register(`cursos.0.instituicao`)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="anoTerminoCurso">Ano de Término</Label>
                  <Input
                    id="anoTerminoCurso"
                    placeholder="Digite o ano de término"
                    {...register(`cursos.0.anoTermino`)}
                  />
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center gap-5">
            <ButtonAdd onClick={addExperienciaField}></ButtonAdd>
            <ButtonRemove onClick={()=>{}}></ButtonRemove>
          </div>
          </div>
            <div className="space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>Experiência Profissional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      placeholder="Digite o nome da sua empresa"
                      {...register("experiencia.0.empresa")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Cargo</Label>
                    <Input
                      id="job-title"
                      placeholder="Digite seu cargo"
                      {...register("experiencia.0.cargo")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duração</Label>
                    <Input
                      id="duration"
                      placeholder="Digite a duração"
                      {...register("experiencia.0.duracao")}
                    />
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor={`atividades`}>Atividades</Label>
                  <Textarea
                    id={`atividades`}
                    placeholder="Descreva suas atividades"
                    {...register(`experiencia.0.atividades`)}
                  />
                </div>
                </CardContent>
              </Card>
  <div className="flex justify-center gap-5">
    <ButtonAdd onClick={addExperienciaField}></ButtonAdd>
    <ButtonRemove onClick={()=>{}}></ButtonRemove>
  </div>
  </div>
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
<CardFooter>
  <Button type="submit" disabled={isSubmitting || isLoading}>
    {isSubmitting || isLoading ? "Carregando..." : "Gerar PDF"}
  </Button>
</CardFooter>
        </Card>
      </form>
    </Form>
  );
};
