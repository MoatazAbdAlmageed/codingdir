import { Container } from "@chakra-ui/react";
import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const MainLayout = ({ children }) => (
  <>
    <Nav zIndex={9999999} />
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <meta
        name="google-site-verification"
        content="Uyx7zn5ADHSsjqw3VQQ5opqVl3XmgkMHKEYPF3ZCpPw"
      />
           <script src="https://app.sendstrap.com/scripts/js/social_button.js?id=2416&key=x5EdqfpvyKIFrdgLQAIDuarBMxw0zIhEKDdp3Iln"></script>
              <script
                src="//code.tidio.co/hu1y1yihc632mh3wnzjitnrvou1gkrhq.js"
                async
              ></script>
    </Helmet>
    <Container maxW="container.xl" mb={40} zIndex={1}>
      {children}
    </Container>
    <Footer />
  </>
);

export default MainLayout;
