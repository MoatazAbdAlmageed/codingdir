import { Container, Text } from "@chakra-ui/react";
import * as React from "react";

const Footer = () => (
  <Container as="footer" role="contentinfo">
    <Text textAlign="center" fontSize="sm" color="subtle">
      <a style={{ color: "orange" }} href="/moataz-mohammady">
        By Moataz Mohammady
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
        style={{ color: "orange" }}
        target="_blank"
        href="https://github.com/MoatazAbdAlmageed/YouTube-Channels/blob/main/CONTRIBUTING.md"
      >
        Contributing?
      </a>
    </Text>
  </Container>
);

export default Footer;
