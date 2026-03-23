import { Container } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import "../index.css";
import React from "react";
import { withPrefix } from "gatsby";
import config from "../../data/SiteConfig";

const MainLayout = ({ children }) => (
  <>
    <Nav zIndex={9999999} />
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <link rel="icon" href={withPrefix("/favicon.ico")} />
      <meta
        name="google-site-verification"
        content="Uyx7zn5ADHSsjqw3VQQ5opqVl3XmgkMHKEYPF3ZCpPw"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Container maxW="container.xl" mb={40} zIndex={1}>
      {children}
      <Footer />
    </Container>
  </>
);

export default MainLayout;
