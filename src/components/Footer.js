import { Link, Text } from "@chakra-ui/react";
import React from "react";
import config from "../../data/SiteConfig";

const Footer = () => (
  <footer>
    <Text p={2}>
      <Link href={config.gitHub} target="_blank" rel="noopener noreferrer">
        GitHub
      </Link>
      <Link
        href={`https://www.linkedin.com/in/${config.userLinkedin}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </Link>
      <Link
        href={config.siteUrl + config.siteRss}
        target="_blank"
        rel="noopener noreferrer"
      >
        RSS
      </Link>
    </Text>
    <Text p={2}>
      Built with love by
      <Link
        target="_blank"
        to="https://moatazabdalmageed.github.io/"
        color="orange"
      >
        Moataz Mohammady
      </Link>
      using
      <Link target="_blank" href="https://www.gatsbyjs.com/">
        Gatsbyjs
      </Link>
    </Text>
  </footer>
);

export default Footer;
