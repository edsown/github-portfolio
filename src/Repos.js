import { useEffect, useState } from "react";
import images from "./images";

import React from "react";

function Repos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("http://api.github.com/users/edsown/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  function dateFormat(date) {
    return date.slice(8, 10) + "-" + date.slice(5, 7) + "-" + date.slice(0, 4);
  }

  function compare(a, b) {
    // função comparativa pra organizar os repositórios por data de criação
    if (a.created_at > b.created_at) {
      return -1;
    }
    if (a.created_at < b.created_at) {
      return 1;
    }
    return 0;
  }

  // fazer: adicionar imagens dinamicamente pra cada repositório
  return (
    <section className="card-list">
      <div className="pagina">
        {repositories.sort(compare).map((repository) => {
          return (
            <article className="card">
              <header className="card-header">
                <p>{dateFormat(repository.created_at)}</p>
                <h2>
                  <a href="#sobre" style={{ textTransform: "uppercase" }}>
                    {repository.name}
                  </a>
                </h2>
                <p className="description">
                  {repository.name === "github-portfolio"
                    ? "Você já está aqui!"
                    : repository.description}
                </p>
              </header>
              <div className="tags">
                <a href={repository.html_url} target="_blank">
                  github
                </a>
                <a href="#">demo</a>
              </div>
            </article>
          );
        })}
      </div>{" "}
    </section>
  );
}

export default Repos;
