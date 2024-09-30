import { Cabecalho, Conteudo, Rodape } from "./Components";
import { Inicial } from "./Pages"
import "./App.css";

const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario = "Jessica" />
      <Conteudo>
      <Inicial/>
      </Conteudo>
      <Rodape criador = "Jessica"/>
    </>
  );
};

export { App };
