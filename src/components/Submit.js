import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Layout from "../layout/index";
import styles from "../pages/index.module.scss";
import React, { Fragment, useState } from "react";
import Tooltip from "@atlaskit/tooltip";
import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  FormHeader,
  FormSection,
} from "@atlaskit/form";
const Submit = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    appName: "",
    url: "",
    bundleIdentifier: "",
    icon: "",
    splash: "",
    adaptiveIcon: "",
    slug: "",
    email: "",
  });

  const onSubmit = (values) => {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/vnd.github.everest-preview+json",
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        ref: "main",
        inputs: {
          url: values?.url,
          appName: values?.appName,
          slug: values?.slug,
          splash: values?.splash,
          bundleIdentifier: values?.bundleIdentifier,
          adaptiveIcon: values?.adaptiveIcon,
          icon: values?.icon,
          email: values?.email,
        },
      }),
    };
    fetch(
      "https://api.github.com/repos/wuilt/storefront-mobile/actions/workflows/main.yml/dispatches",
      requestOptions
    ).then((res) => {
      alert("DONE");
      res?.status === 204 ? setSuccess(true) : setSuccess(false);
    });
    setFormData({
      appName: "",
      url: "",
      bundleIdentifier: "",
      icon: "",
      splash: "",
      adaptiveIcon: "",
      slug: "",
      email: "",
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.currentTarget.value,
    });
  };

  return (
    <Layout>
      <Stack className={styles.page} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Helmet title={`Submit Channel | ${config.siteTitle}`} />
            <Form onSubmit={onSubmit}>
              {({ formProps, submitting }) => (
                <form {...formProps}>
                  <FormHeader
                    title="Add new channel"
                    description="* indicates a required field"
                  />
                  <FormSection>
                    <Field
                      aria-required={true}
                      name="appName"
                      label="App Name"
                      isRequired
                    >
                      {({ fieldProps, error }) => (
                        <Fragment>
                          <Tooltip
                            content="The name of your app as it appears on your home screen as a standalone app."
                            position="top"
                          >
                            <TextField
                              {...fieldProps}
                              value={formData?.appName}
                              onChange={(e) => handleChange(e)}
                            />
                          </Tooltip>
                        </Fragment>
                      )}
                    </Field>
                    <Field
                      aria-required={true}
                      name="slug"
                      label="Slug"
                      isRequired
                    >
                      {({ fieldProps, error }) => {
                        return (
                          <Fragment>
                            <Tooltip
                              position="top"
                              content="The friendly URL name for publishing. For example, myAppName will refer to the expo.dev/@project-owner/myAppName project."
                            >
                              <TextField
                                type="text"
                                {...fieldProps}
                                value={formData?.slug}
                                onChange={(e) => handleChange(e)}
                              />
                            </Tooltip>
                            {error && <ErrorMessage>{error}</ErrorMessage>}
                          </Fragment>
                        );
                      }}
                    </Field>
                    <Field
                      aria-required={true}
                      name="url"
                      label="Store Link"
                      isRequired
                      defaultValue={formData?.url}
                    >
                      {({ fieldProps, error }) => (
                        <Fragment>
                          <Tooltip position="top" content="Preview Link">
                            <TextField
                              type="text"
                              {...fieldProps}
                              value={formData?.url}
                              onChange={(e) => handleChange(e)}
                            />
                          </Tooltip>
                          {error && <ErrorMessage>{error}</ErrorMessage>}
                        </Fragment>
                      )}
                    </Field>
                    <Field aria-required={true} name="icon" label="Icon">
                      {({ fieldProps }) => {
                        return (
                          <Fragment>
                            <Tooltip
                              position="top"
                              content="Local path or remote URL to an image to use for your app's icon.
                        We recommend that you use a 1024x1024 png file.
                        This icon will appear on the home screen and within the Expo app."
                            >
                              <TextField
                                type="text"
                                {...fieldProps}
                                value={formData?.icon}
                                onChange={(e) => handleChange(e)}
                              />
                            </Tooltip>
                          </Fragment>
                        );
                      }}
                    </Field>
                    <Field
                      aria-required={true}
                      name="bundleIdentifier"
                      label="Bundle Identifier"
                      isRequired
                      defaultValue={formData?.bundleIdentifier}
                    >
                      {({ fieldProps, error }) => {
                        return (
                          <Fragment>
                            <Tooltip
                              position="top"
                              content="A bundle identifier lets iOS and macOS recognize any updates to your app.
                      Your bundle ID must be registered with Apple and be unique to your app.
                      Bundle identifiers are written out in reverse DNS notation (I.e com.myCompany.myApp).
                      "
                            >
                              <TextField
                                type="text"
                                {...fieldProps}
                                value={formData?.bundleIdentifier}
                                onChange={(e) => handleChange(e)}
                              />
                            </Tooltip>
                            {error && <ErrorMessage>{error}</ErrorMessage>}
                          </Fragment>
                        );
                      }}
                    </Field>
                    <Field aria-required={true} name="splash" label="Splash">
                      {({ fieldProps }) => {
                        return (
                          <Fragment>
                            <Tooltip
                              position="top"
                              content="Local path or remote URL to an image to fill the background of the loading screen. 
                        Image size and aspect ratio are up to you. Must be a .png."
                            >
                              <TextField
                                type="text"
                                {...fieldProps}
                                value={formData?.splash}
                                onChange={(e) => handleChange(e)}
                              />
                            </Tooltip>
                          </Fragment>
                        );
                      }}
                    </Field>
                    <Field
                      aria-required={true}
                      name="adaptiveIcon"
                      label="Adaptive Icon"
                    >
                      {({ fieldProps }) => {
                        return (
                          <Fragment>
                            <Tooltip
                              position="top"
                              content="Local path or remote URL to an image to use for your app's icon on Android. If specified, this overrides the top-level icon and the android.icon keys."
                            >
                              <TextField
                                type="text"
                                {...fieldProps}
                                value={formData?.adaptiveIcon}
                                onChange={(e) => handleChange(e)}
                              />
                            </Tooltip>
                          </Fragment>
                        );
                      }}
                    </Field>
                    <Field
                      aria-required={true}
                      name="email"
                      label="Email"
                      isRequired
                      defaultValue={formData?.email}
                    >
                      {({ fieldProps, error }) => {
                        return (
                          <Fragment>
                            <Tooltip
                              position="top"
                              content="This email will receive the app's apk and ipa links."
                            >
                              <TextField
                                type="email"
                                {...fieldProps}
                                value={formData?.email}
                                onChange={(e) => handleChange(e)}
                              />
                            </Tooltip>
                            {error && <ErrorMessage>{error}</ErrorMessage>}
                          </Fragment>
                        );
                      }}
                    </Field>
                  </FormSection>

                  <FormFooter>
                    <Button
                      type="submit"
                      appearance="primary"
                      isLoading={submitting}
                    >
                      Submit
                    </Button>
                  </FormFooter>
                </form>
              )}
            </Form>
          </Stack>
        </Flex>
      </Stack>
    </Layout>
  );
};
export default Submit;
