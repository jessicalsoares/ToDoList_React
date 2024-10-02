import { ListaTarefasItem } from "./ListaTarefasItem/ListaTarefasItem";

import style from "./ListaTarefas.module.css";
import { useAppContext } from "../../hooks";

const ListaTarefas = () => {
  const { tarefas } = useAppContext();

  return (
    <ul className={style.ListaTarefa}>
        {!tarefas.length && (
            <p>Não há tarefas adicionadas...</p>
        )}
      {tarefas.map((item) => (
        <ListaTarefasItem 
        key={item.id} 
        id={item.id} 
        nome={item.nome} 
        />
      ))}
    </ul>
  );
};

export { ListaTarefas };
