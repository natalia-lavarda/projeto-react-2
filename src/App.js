import "./App.css";
import BuscarRepos from "./components/BuscarRepos";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <Titulo texto="Meu Segundo Projeto React do Zero" />
      <BuscarRepos />
    </>
  );
}

export default App;