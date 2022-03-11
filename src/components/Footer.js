import { Container, Text } from "@chakra-ui/react";
import { Link } from "gatsby";
import * as React from "react";

const Footer = () => (
  <Container as="footer" role="contentinfo">
    <Text fontSize="sm" color="subtle">
      <Link style={{ color: "orange" }} target="_blank" to="/moataz-mohammady">
        By Moataz Mohammady
      </Link>{" "}
      &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
    </Text>
  </Container>
);

export default Footer;
