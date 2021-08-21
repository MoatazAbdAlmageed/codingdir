import React from "react";
import Helmet from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import config from "../../data/SiteConfig";
import { Container } from "@chakra-ui/react";

const MainLayout = ({ children }) => (
  <>
    <Header />
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <meta
        name="google-site-verification"
        content="Uyx7zn5ADHSsjqw3VQQ5opqVl3XmgkMHKEYPF3ZCpPw"
      />
    </Helmet>
    <Container maxW={"7xl"} p="12">
      {children}
      <Footer />
    </Container>
  </>
);

export default MainLayout;
