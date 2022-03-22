import { Container, Text } from "@chakra-ui/react";
import { Link } from "gatsby";
import * as React from "react";

const Footer = () => (
  <Container as="footer" role="contentinfo">
    <Text fontSize="sm" color="subtle">
      <Link style={{ color: "orange" }} target="_blank" to="/moataz-mohammady">
        By Moataz Mohammady
      </Link>{" "}
      &copy; {new Date().getFullYear()} Built with ♥ using{" "}
      <a href="https://www.gatsbyjs.com/" target="_blank">
        Gatsby
      </a>{" "}
      and{" "}
      <a href="https://chakra-ui.com/" target="_blank">
        Chakra UI
      </a>{" "}
    </Text>
  </Container>
);

export default Footer;
