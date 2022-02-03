import { useEffect, useState } from "react";

import React from "react";
var emoji = require("emoji-shorts");
function Repos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/edsown/repos")
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
  const displayNone = {
    display: "none",
  };
  const displayBlock = {
    display: "inline-block",
  };



  // fazer: adicionar imagens dinamicamente pra cada repositório
  return (
    <section className="card-list">
      <div className="pagina">
        {repositories.sort(compare).map((repository) => {
          console.log(repository.archive_url);
          return (
            <article className="card" >
              <header className="card-header">
                <p>{dateFormat(repository.created_at)}</p>
                <h2>
                  <a href="#sobre" style={{ textTransform: "uppercase" }}>
                    {repository.name}
                  </a>
                </h2>
                <p className="description">
                  {repository.name === "github-portfolio"
                    ? "You're already here!"
                    : emoji.toRich(repository.description)}
                </p>
              </header>
              <div className="tags">
                <a href={repository.html_url} target="_blank" rel="noreferrer">
                  github
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={
                    repository.homepage == null ? displayNone : displayBlock
                  }
                  href={repository.homepage}
                >
                  {repository.homepage == null ? "no demo" : "demo"}
                  {console.log(repository.issues_url.flat)}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Repos;
