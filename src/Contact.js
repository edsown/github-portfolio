import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <h4>
        Find me: <br />
        <br />
        <a
          className="social"
          href="http://linkedin.com/in/edsown"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="social"
          href="http://github.com/edsown"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
      </h4>
    </div>
  );
}

export default Contact;
