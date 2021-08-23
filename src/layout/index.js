import React from "react";
import Helmet from "react-helmet";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import config from "../../data/SiteConfig";
import { Container } from "@chakra-ui/react";

const MainLayout = ({ children }) => (
  <>
    <Nav />
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <meta
        name="google-site-verification"
        content="Uyx7zn5ADHSsjqw3VQQ5opqVl3XmgkMHKEYPF3ZCpPw"
      />
    </Helmet>
    <Container maxW="container.xl">
      {children}
      <Footer />
    </Container>
  </>
);

export default MainLayout;
