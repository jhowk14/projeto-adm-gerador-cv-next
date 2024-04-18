import React, { useState } from "react";
import { z } from "zod";
import { ButtonAdd } from "./buttonAdd";
import { ButtonRemove } from "./buttonRemove";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

export const educacaoSchema = z.object({
  instituicao: z.string().optional(),
  curso: z.string().optional(),
  anoTermino: z.string().optional(),
});

export const experienciaSchema = z.object({
  empresa: z.string().optional(),
  cargo: z.string().optional(),
  atividades: z.string().optional(),
  from: z.string().optional(),
  to: z.string().optional(),
  trabalhoAtual: z.boolean().optional()
});

type educacaoType = z.infer<typeof educacaoSchema>
type experienciaType = z.infer<typeof experienciaSchema>

const Adicionaveis = ({ onChange }: { onChange: (a: any) => void }) => {
  const [formacoes, setFormacoes] = useState<educacaoType[]>([]);
  const [cursos, setCursos] = useState<educacaoType[]>([]);
  const [experiencias, setExperiencias] = useState<experienciaType[]>([]);

  const handleInputChange = () => {
    console.log(experiencias);
    onChange({ educacao: formacoes, experiencia: experiencias, cursos });
  };

  const adicionarFormacao = () => {
    setFormacoes([...formacoes, educacaoSchema.parse({})]);
  };

  const removerFormacao = (index: any) => {
    const novasFormacoes = [...formacoes];
    novasFormacoes.splice(index, 1);
    setFormacoes(novasFormacoes);
  };
  const adicionarCursos = () => {
    setCursos([...cursos, educacaoSchema.parse({})]);
  };

  const removerCursos = (index: any) => {
    const novasFormacoes = [...cursos];
    novasFormacoes.splice(index, 1);
    setCursos(novasFormacoes);
  };
  const adicionarExperiencia = () => {
    setExperiencias([...experiencias, experienciaSchema.parse({})]);
  };

  const removerExperiencia = (index: any) => {
    const novasExperiencias = [...experiencias];
    novasExperiencias.splice(index, 1);
    setExperiencias(novasExperiencias);
  };

  return (
    <>
      <Card onChange={handleInputChange}>
        <CardHeader>
          <CardTitle>Formações</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="space-y-8">
          {formacoes.map((formacao, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-full space-y-2">
                <Input
                  type="text"
                  value={formacao.instituicao || ""}
                  onChange={(e) => {
                    const novasFormacoes = [...formacoes];
                    novasFormacoes[index].instituicao = e.target.value;
                    setFormacoes(novasFormacoes);
                  }}
                  placeholder="Instituição"
                  className="border rounded-md px-2 py-1 mr-2"
                />
                <Input
                  type="text"
                  value={formacao.curso || ""}
                  onChange={(e) => {
                    const novasFormacoes = [...formacoes];
                    novasFormacoes[index].curso = e.target.value;
                    setFormacoes(novasFormacoes);
                  }}
                  placeholder="Curso"
                  className="border rounded-md px-2 py-1 mr-2"
                />
                <Input
                  type="text"
                  value={formacao.anoTermino || ""}
                  onChange={(e) => {
                    const novasFormacoes = [...formacoes];
                    novasFormacoes[index].anoTermino = e.target.value;
                    setFormacoes(novasFormacoes);
                  }}
                  placeholder="Ano de término"
                  className="border rounded-md px-2 py-1 mr-2"
                />
              </div>
              <ButtonRemove onClick={() => removerFormacao(index)} />
            </div>
          ))}
        </div>
          <div className="flex justify-center mt-5">
            <ButtonAdd onClick={adicionarFormacao} />
          </div>
        </CardContent>
      </Card>
      <Card onChange={handleInputChange}>
        <CardHeader>
          <CardTitle>Cursos</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="space-y-8">
          {cursos.map((formacao, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-full space-y-2">
                <Input
                  type="text"
                  value={formacao.instituicao || ""}
                  onChange={(e) => {
                    const novasFormacoes = [...cursos];
                    novasFormacoes[index].instituicao = e.target.value;
                    setCursos(novasFormacoes);
                  }}
                  placeholder="Instituição"
                  className="border rounded-md px-2 py-1 mr-2"
                />
                <Input
                  type="text"
                  value={formacao.curso || ""}
                  onChange={(e) => {
                    const novasFormacoes = [...cursos];
                    novasFormacoes[index].curso = e.target.value;
                    setCursos(novasFormacoes);
                  }}
                  placeholder="Curso"
                  className="border rounded-md px-2 py-1 mr-2"
                />
                <Input
                  type="text"
                  value={formacao.anoTermino || ""}
                  onChange={(e) => {
                    const novasFormacoes = [...cursos];
                    novasFormacoes[index].anoTermino = e.target.value;
                    setCursos(novasFormacoes);
                  }}
                  placeholder="Ano de término"
                  className="border rounded-md px-2 py-1 mr-2"
                />
              </div>
              <ButtonRemove onClick={() => removerCursos(index)} />
            </div>
          ))}
        </div>
          <div className="flex justify-center mt-5">
            <ButtonAdd onClick={adicionarCursos} />
          </div>
        </CardContent>
      </Card>
      <Card onChange={handleInputChange}>
        <CardHeader>
          <CardTitle>Experiências</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-10">
          {experiencias.map((experiencia, index) => (
            <>
            <div key={index} className="flex items-center space-x-2">
            <div className="w-full space-y-2">
                <Input
                  type="text"
                  value={experiencia.empresa || ""}
                  onChange={(e) => {
                    const novasExperiencias = [...experiencias];
                    novasExperiencias[index].empresa = e.target.value;
                    setExperiencias(novasExperiencias);
                  }}
                  placeholder="Empresa"
                  className="border rounded-md px-2 py-1 mr-2"
                />
                <Input
                  type="text"
                  value={experiencia.cargo || ""}
                  onChange={(e) => {
                    const novasExperiencias = [...experiencias];
                    novasExperiencias[index].cargo = e.target.value;
                    setExperiencias(novasExperiencias);
                  }}
                  placeholder="Cargo"
                  className="border rounded-md px-2 py-1 mr-2"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from">De</Label>
                    <Input
                      value={experiencia.from || ""}
                      onChange={(e) => {
                        const novasExperiencias = [...experiencias];
                        novasExperiencias[index].from = e.target.value;
                        setExperiencias(novasExperiencias);
                      }}
                      id="from"
                      placeholder="Seu cargo"
                      type="month"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to">Até</Label>
                    <Input
                        value={experiencia.to || ""}
                        onChange={(e) => {
                          const novasExperiencias = [...experiencias];
                          novasExperiencias[index].to = e.target.value;
                          setExperiencias(novasExperiencias);
                        }}
                        id="to"
                        placeholder="Seu cargo"
                        type="month"
                        disabled={experiencia.trabalhoAtual}
                      />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={experiencia.trabalhoAtual || false}
                    onCheckedChange={(value) => {
                      const novasExperiencias = [...experiencias];
                      //@ts-ignore
                      novasExperiencias[index].trabalhoAtual = value.valueOf();
                      setExperiencias(novasExperiencias);
                    }}
                  />
                  <label
                    htmlFor={`trabalho-atual-${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Trabalho Atual
                  </label>
                </div>
                <Textarea
                  value={experiencia.atividades || ""}
                  onChange={(e) => {
                    const novasExperiencias = [...experiencias];
                    novasExperiencias[index].atividades = e.target.value;
                    setExperiencias(novasExperiencias);
                  }}
                  placeholder="Atividades"
                  className="border rounded-md px-2 py-1 mr-2"
                />
              </div>
              <ButtonRemove onClick={() => removerExperiencia(index)} />
              </div>
              </>
          ))}
          </div>
          <div className="flex justify-center mt-5">
            <ButtonAdd onClick={adicionarExperiencia} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Adicionaveis;
