import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../Components";
import { useAppContext } from "../../hooks";

const LayoutPadrao = () => {
  const { criador } = useAppContext()


  return (
    <>
      <Cabecalho nomeUsuario={ criador } />
      <Conteudo>
        <Outlet />
      </Conteudo>
      <Rodape criador={ criador } />
    </>
  )
}

export { LayoutPadrao }
