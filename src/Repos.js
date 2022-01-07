import { useEffect, useState } from "react";

import React from "react";

function Repos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("http://api.github.com/users/edsown/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <div>
      <ul>
        {repositories.map((repository) => {
          return (
            <div>
              <article style={{ textTransform: "uppercase" }}>
                {repository.name === "github-portfolio"
                  ? repository.name + " (você já está aqui!)"
                  : repository.name}
              </article>
              {console.log(repository.name)}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Repos;
