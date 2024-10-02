import { ListaTarefasItem } from "./ListaTarefasItem/ListaTarefasItem";

import style from "./ListaTarefas.module.css";
import { useAppContext } from "../../hooks";
import { Loading } from "../Loading";

const ListaTarefas = () => {
  const { tarefas, loadingCarregar } = useAppContext();

  return (
    <ul className={style.ListaTarefa}>
      {loadingCarregar && (
        <p>
          Carregando...
          <Loading />
        </p>
      )}

        {loadingCarregar && !tarefas.length && (
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
