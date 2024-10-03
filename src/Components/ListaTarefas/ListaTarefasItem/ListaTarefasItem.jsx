import { useState } from "react";
import { useAppContext } from "../../../hooks";
import { Botao, CampoTexto, Loading, TIPO_BOTAO } from "../../../Components";

import style from "./ListaTarefasItem.module.css";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const { loadingEditar, loadingDeletar, editarTarefa, removerTarefa } = useAppContext();

  const [emEdicao, setEmEdicao] = useState(false);

  const onBlurTarefa = (event) => {
    const nomeTarefa = event.currentTarget.value

    editarTarefa(id, nomeTarefa)
    setEmEdicao(false)
  }

  const loadingEmEdicao = loadingEditar == id
  const loadingEstaDeletando = loadingDeletar == id



 
  return (
    <li className={style.ListaTarefasItem}>
      {(loadingEmEdicao || emEdicao) && (
        <CampoTexto
          defaultValue={nome}
          onBlur={onBlurTarefa} 
          autoFocus
        />
      )}

      {!loadingEmEdicao && !emEdicao && (
        <span onDoubleClick={() => setEmEdicao(true)}>
          {nome}
        </span>
        )}

        {loadingEmEdicao && (
          <Loading/>
        )}

      <Botao
        texto={ loadingEstaDeletando ? <Loading/> : '-'}
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa(id)}
      />
    </li>
  );
};

export { ListaTarefasItem };
