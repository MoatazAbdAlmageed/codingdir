import { Container } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import React from "react";
import config from "../../data/SiteConfig";

const MainLayout = ({ children }) => (
  <>
    <Nav zIndex={9999999} />
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <meta
        name="google-site-verification"
        content="Uyx7zn5ADHSsjqw3VQQ5opqVl3XmgkMHKEYPF3ZCpPw"
      />
    </Helmet>
    <Container maxW="container.xl" mb={40} zIndex={1}>
      {children}
      <Footer />
    </Container>
  </>
);

export default MainLayout;
