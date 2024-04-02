import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { Form } from "../ui/form"
import { ButtonAdd } from './buttonAdd';
import { ButtonRemove } from './buttonRemove';

const educacao = z.object({
  instituicao: z.string().min(3),
  curso: z.string().min(3),
  anoTermino: z.string().min(4),
})
const experiencia = z.object({
  empresa: z.string().min(3),
  cargo: z.string().min(3),
  duracao: z.string().min(4),
})

const schema = z.object({
  nome: z.string().min(3, { message: "Preencha com um nome válido" }),
  telefone: z.string().min(3, { message: "Preencha com um sobrenome válido" }),
  email: z.string().min(10, { message: "Preencha com um e-mail válido" }),
  sobre: z.string().min(10, { message: "Preencha com uma descrição válida" }),
  educacao: z.array(educacao),
  experiencia: z.array(experiencia),
  habilidades: z.string().min(10, { message: "Preencha com uma descrição válida" }),
});

export type schemaType = z.infer<typeof schema>;

export const FormCurriculo = () => {
  const [pdfUrl, setPdfUrl] = useState('');
  const [numEducacao, setNumEducacao] = useState(0); // Número inicial de campos de educação
  const [numExperiencia, setNumExperiencia] = useState(0);
  const form = useForm<schemaType>({
    resolver: zodResolver(schema)
  });
  const { handleSubmit, formState: { errors, isSubmitting, isLoading }, register } = form;

  async function fetchPdf(data: schemaType) {
    try {
      console.log(data)
      setPdfUrl('');
      const response = await axios.post('/api', data, {
        responseType: 'blob'
      });
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.location.href = pdfUrl;
      setPdfUrl(pdfUrl);
    } catch (error) {
      console.error("Erro ao buscar PDF:", error);
    }
  };

  const addEducacaoField = () => {
    setNumEducacao(num => num + 1);
  };

  const addExperienciaField = () => {
    setNumExperiencia(num => num + 1);
  };
  const removeEducacaoField = () => {
    setNumEducacao(num => num > 0 ? num - 1 : 0);
  };

  const removeExperienciaField = () => {
    setNumExperiencia(num => num > 0 ? num - 1 : 0);
  };

console.log(errors)

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(fetchPdf)}>
      <Card>
        <CardContent className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Digite seu nome" {...register('nome')}/>
          </div>
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" placeholder="Digite seu telefone" {...register('telefone')}/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Digite seu email" type="email" {...register('email')}/>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Card>
              <CardHeader>
                <CardTitle>Sobre você</CardTitle>
                <CardDescription>Fale um pouco sobre você.</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea className="min-h-[100px]" id="sobre" placeholder="Fale sobre você" {...register('sobre')}/>
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
                  <Input id="school" placeholder="Digite o nome da sua instituição de ensino" {...register('educacao.0.instituicao')}/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="degree">Curso</Label>
                  <Input id="degree" placeholder="Digite o curso" {...register('educacao.0.curso')}/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="graduation-year">Ano de Término</Label>
                  <Input id="graduation-year" placeholder="Digite o ano de término" {...register('educacao.0.anoTermino')}/>
                </div>
              </CardContent>
            </Card>
            {[...Array(numEducacao)].map((_, index) => (
            <div key={index} className="space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>Educação {index + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor={`instituicao${index}`}>Instituição</Label>
                    <Input id={`instituicao${index}`} placeholder="Digite o nome da sua instituição de ensino" {...register(`educacao.${index+1}.instituicao`)}/>
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="degree">Curso</Label>
                  <Input id="degree" placeholder="Digite o curso" {...register(`educacao.${index+1}.curso`)}/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="graduation-year">Ano de Término</Label>
                  <Input id="graduation-year" placeholder="Digite o ano de término" {...register(`educacao.${index+1}.anoTermino`)}/>
                </div>
                </CardContent>
              </Card>
            </div>
          ))}
          <div className="flex justify-center gap-5">
          <ButtonAdd onClick={addEducacaoField}></ButtonAdd>
          {
            numEducacao > 0 &&
            <ButtonRemove onClick={removeEducacaoField}></ButtonRemove>
          }
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
                  <Input id="company" placeholder="Digite o nome da sua empresa" {...register('experiencia.0.empresa')}/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-title">Cargo</Label>
                  <Input id="job-title" placeholder="Digite seu cargo" {...register('experiencia.0.cargo')}/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duração</Label>
                  <Input id="duration" placeholder="Digite a duração" {...register('experiencia.0.duracao')}/>
                </div>
              </CardContent>
            </Card>
            {[...Array(numExperiencia)].map((_, index) => (
            <div key={index} className="space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>Experiência Profissional {index + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor={`empresa${index}`}>Empresa</Label>
                    <Input id={`empresa${index}`} placeholder="Digite o nome da sua empresa" {...register(`experiencia.${index+1}.empresa`)}/>
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="job-title">Cargo</Label>
                  <Input id="job-title" placeholder="Digite seu cargo" {...register(`experiencia.${index+1}.cargo`)}/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duração</Label>
                    <Input id="duration" placeholder="Digite a duração" {...register(`experiencia.${index+1}.duracao`)}/>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
          <div className="flex justify-center gap-5">
          <ButtonAdd onClick={addExperienciaField}></ButtonAdd>
          {
            numExperiencia > 0 &&
            <ButtonRemove onClick={removeExperienciaField}></ButtonRemove>
          }
          </div>
          </div>
          <div className="space-y-2">
            <Card>
              <CardHeader>
                <CardTitle>Habilidades</CardTitle>
                <CardDescription>Digite suas habilidades separadas por vírgulas.</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea className="min-h-[100px]" id="skills" placeholder="Digite suas habilidades" {...register('habilidades')} />
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
  )
}
