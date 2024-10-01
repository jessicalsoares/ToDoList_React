import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { Cabecalho, Rodape } from "./Components";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
  );
};

export { App };
