import { useState } from "react";
import { useAppContext } from "../../../hooks";
import { Botao, CampoTexto, TIPO_BOTAO } from "../../../Components";

import style from "./ListaTarefasItem.module.css";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const { editarTarefa, removerTarefa } = useAppContext();

  const [emEdicao, setEmEdicao] = useState(false);
 

  

  return (
    <li className={style.ListaTarefasItem}>
      {emEdicao && (
        <CampoTexto
          defaultValue={nome}
          onChange={event => editarTarefa(id, event.currentTarget.value)}
          onBlur={() => setEmEdicao(false)} 
          autoFocus
        />
      )}

      {!emEdicao && (
        <span onDoubleClick={() => setEmEdicao(true)}>
          {nome}
        </span>
        )}

      <Botao
        texto="-"
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa(id)}
      />
    </li>
  );
};

export { ListaTarefasItem };
