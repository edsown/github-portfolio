import { useEffect, useState } from "react";
import images from "./images";

import React from "react";

function Repos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("http://api.github.com/users/thiagopnts/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  function dateFormat(date) {
    return date.slice(8, 10) + "-" + date.slice(5, 7) + "-" + date.slice(0, 4);
  }

  // todo: add images to each repo dinamically
  return (
    <section className="card-list">
      <div className="pagina">
        {repositories.map((repository) => {
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
                <a href="http://github.com/edsown" target="_blank">
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
