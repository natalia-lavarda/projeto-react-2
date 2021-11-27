import { useState, useEffect } from "react";
import Card from "./card";

const MostrarRepos = () => {
  const [repos, setRepositories] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.github.com/users/natalia-lavarda/repos"
      );
      const data = await response.json();

      setRepositories(data);
    }
    getData();
  }, []);

  useEffect(() => {
    const filtrar = busca.trim().toLowerCase();
    setFiltro(
      repos.filter((repo) => {
        return repo.name.includes(filtrar);
      })
    );
  }, [repos, busca]);

  return (
    <>
      <div>
        <input
          placeholder="Procure um repositório aqui:"
          onChange={(e) => {
            setBusca(e.target.value);
          }}
        />
      </div>
      <div>
        {filtro.map((repo) => (
          <Card href={repo.html_url} id={repo.id} name={repo.name} />
        ))}
      </div>
    </>
  );
};

export default MostrarRepos;