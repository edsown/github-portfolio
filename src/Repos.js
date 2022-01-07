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
            <li>
              <p>{repository.name}</p>
              {console.log(repository.name)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Repos;
