import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { ValidationError, useForm } from "@formspree/react";

import Form from "@atlaskit/form";
import Helmet from "react-helmet";
import Layout from "../layout/index";
import { default as React } from "react";
import TextArea from "@atlaskit/textarea";
import TextField from "@atlaskit/textfield";
import config from "../../data/SiteConfig";

function ContactForm() {
  const [state, handleSubmit] = useForm("moqbazwj");

  return (
    <Layout>
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Helmet title={`Place your ad here | ${config.siteTitle}`} />
            <div>
              <Heading>Place your ad here?</Heading>

              {state.succeeded ? (
                <p>Thanks for submitting!</p>
              ) : (
                <Form>
                  {({ formProps, submitting }) => (
                    <form onSubmit={handleSubmit}>
                      <label htmlFor="email">Email Address</label>
                      <TextField id="email" type="email" name="email" />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                      <br />

                      <label htmlFor="message">Message</label>
                      <TextArea id="message" name="message" />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                      <br />
                      <Button type="submit" disabled={state.submitting}>
                        Submit
                      </Button>
                    </form>
                  )}
                </Form>
              )}
            </div>
          </Stack>
        </Flex>
      </Stack>
    </Layout>
  );
}
function PlaceYourAdHere() {
  return <ContactForm />;
}
export default PlaceYourAdHere;
