import { useState } from "react";
import { CampoTexto, Botao } from "../../Components"
import { useAppContext } from "../../hooks";

import style from "./FormCriarTarefa.module.css"


const FormCriarTarefa = () => {
  const { adicionarTarefa } = useAppContext()

  const [nomeTarefa, setNomeTarefa] = useState("")

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value)
  };

  const submeterFormulario = (event) => {
    event.preventDefault();

    if (!nomeTarefa) {
      return;
    }

    adicionarTarefa(nomeTarefa)

    setNomeTarefa('')
  };

  return (
    <form className={style.FormCriarTarefa} onSubmit={submeterFormulario}>
      <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa} />
      <Botao texto="+" />
    </form>
  );
};

export { FormCriarTarefa }
