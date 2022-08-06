import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
import { default as React } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Layout from "../layout/index";

function ContactForm() {
  const [state, handleSubmit] = useForm("moqbazwj");
  if (state.succeeded) {
    return <p>Thanks for submitting!</p>;
  }
  return (
    <Layout>
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Helmet title={`Submit add | ${config.siteTitle}`} />
            <div>
              <Heading>Submit add?</Heading>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <br />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <Button
                  type="submit"
                  disabled={state.submitting}
                  rounded={"full"}
                >
                  Submit
                </Button>
              </form>
            </div>
          </Stack>
        </Flex>
      </Stack>
    </Layout>
  );
}
function Add() {
  return <ContactForm />;
}
export default Add;
