import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../Components";

const LayoutPadrao = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Jessica" />
      <Conteudo>
        <Outlet />
      </Conteudo>
      <Rodape criador="Jessica" />
    </>
  )
}

export { LayoutPadrao }
