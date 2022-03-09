import { Container, Stack, Text } from "@chakra-ui/react";
import { Link } from "gatsby";
import * as React from "react";

const Footer = () => (
  <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
    <Stack spacing={{ base: "4", md: "5" }}>
      <Text fontSize="sm" color="subtle">
        <Link
          style={{ color: "orange" }}
          target="_blank"
          to="/moataz-mohammady"
        >
          By Moataz Mohammady
        </Link>{" "}
        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
        reserved.
      </Text>
    </Stack>
  </Container>
);

export default Footer;
