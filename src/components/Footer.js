import * as React from "react";

import { Container, Text } from "@chakra-ui/react";

const Footer = () => (
  <Container as="footer" role="contentinfo" mt={5}>
    <Text textAlign="center" fontSize="sm" color="subtle">
      <a style={{ color: "#e72c33" }} href="/moataz-mohammady">
        By{" "}
        <i>
          <b> Moataz Mohammady</b>
        </i>
      </a>{" "}
      <br />
      &copy; {new Date().getFullYear()} Built with ♥ using{" "}
      <a href="https://www.gatsbyjs.com/" target="_blank">
        Gatsby
      </a>{" "}
      and{" "}
      <a href="https://chakra-ui.com/" target="_blank">
        Chakra UI
      </a>{" "}
      <br />
      <a
        style={{ color: "#e72c33" }}
        target="_blank"
        href="https://github.com/MoatazAbdAlmageed/YouTube-Channels"
      >
        Github Repo
      </a>
    </Text>
  </Container>
);

export default Footer;
