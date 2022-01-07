import React from "react";
import config from "../../data/SiteConfig";
import styles from "./Footer.module.scss";

const Footer = () => (
  <footer>
    <div className={styles.container}>
      <div>
        <a href={config.gitHub} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href={`https://www.linkedin.com/in/${config.userLinkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          href={config.siteUrl + config.siteRss}
          target="_blank"
          rel="noopener noreferrer"
        >
          RSS
        </a>
      </div>
      <div>
        {" "}
        <a target="_blank" href="https://www.gatsbyjs.com/">
          Built with love using Gatsbyjs
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
