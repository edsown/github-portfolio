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

  // todo: add images to each repo dinamically
  return (
    <section className="card-list">
      <div className="pagina">
        {repositories.map((repository) => {
          return (
            <article className="card">
              <header className="card-header">
                <p>{repository.created_at}</p>
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
                <a href="#">vercel</a>
              </div>
            </article>
          );
        })}
      </div>{" "}
    </section>
  );
}

export default Repos;
