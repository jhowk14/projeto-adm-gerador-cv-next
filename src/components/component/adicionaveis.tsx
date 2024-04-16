import React, { useState } from "react";
import { z } from "zod";
import { ButtonAdd } from "./buttonAdd";
import { ButtonRemove } from "./buttonRemove";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const educacaoSchema = z.object({
  instituicao: z.string().optional(),
  curso: z.string().optional(),
  anoTermino: z.string().optional(),
});

const experienciaSchema = z.object({
  empresa: z.string().optional(),
  cargo: z.string().optional(),
  duracao: z.string().optional(),
  atividades: z.string().optional(),
});

const Adicionaveis = ({ onChange }: { onChange: (a: any) => void }) => {
  const [formacoes, setFormacoes] = useState([educacaoSchema.parse({})]);
  const [cursos, setCursos] = useState([educacaoSchema.parse({})]);
  const [experiencias, setExperiencias] = useState([
    experienciaSchema.parse({}),
  ]);

  const handleInputChange = () => {
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
        {formacoes.map((formacao, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-full space-y-2 mb-5">
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
        <div className="flex justify-center">
          <ButtonAdd onClick={adicionarFormacao} />
        </div>
        </CardContent>
      </Card>
      <Card onChange={handleInputChange}>
      <CardHeader>
            <CardTitle>Cursos</CardTitle>
        </CardHeader>
        <CardContent>
        {cursos.map((formacao, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-full space-y-2 mb-5">
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
        <div className="flex justify-center">
          <ButtonAdd onClick={adicionarCursos} />
        </div>
        </CardContent>
      </Card>
      <Card onChange={handleInputChange}>
      <CardHeader>
            <CardTitle>Experiências</CardTitle>
        </CardHeader>
        <CardContent>
        {experiencias.map((experiencia, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-full space-y-2 mb-5">
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
              <Input
                type="text"
                value={experiencia.duracao || ""}
                onChange={(e) => {
                  const novasExperiencias = [...experiencias];
                  novasExperiencias[index].duracao = e.target.value;
                  setExperiencias(novasExperiencias);
                }}
                placeholder="Duração"
                className="border rounded-md px-2 py-1 mr-2"
              />
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
        ))}
        <div className="flex justify-center">
          <ButtonAdd onClick={adicionarExperiencia} />
        </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Adicionaveis;
