import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Layout from "../layout/index";
import styles from "../pages/index.module.scss";
import React, { Fragment, useState } from "react";
import Tooltip from "@atlaskit/tooltip";
import Button from "@atlaskit/button";
import Select from "@atlaskit/select";
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
    title: "",
    category: "",
    youtube: "",
    cover: "",
    tag: "",
  });

  const onSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/vnd.github.everest-preview+json",
        Authorization: "Bearer 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",
      },
      body: JSON.stringify({
        ref: "main",
        inputs: {
          category: formData?.category,
          title: formData?.title,
          tag: formData?.tag,
          youtube: formData?.youtube,
          cover: formData?.cover,
        },
      }),
    };
    fetch(
      "https://api.github.com/repos/MoatazAbdAlmageed/YouTube-Channels/actions/workflows/main.yml/dispatches",
      requestOptions
    ).then((res) => {
      console.log(formData);
      console.log(res?.status);
      console.log(success);
      res?.status === 204 ? setSuccess(true) : setSuccess(false);
      alert(success);
    });
    setFormData({
      title: "",
      category: "",
      youtube: "",
      cover: "",
      tag: "",
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.currentTarget.value,
    });
  };

  const onChangeCategory = ({ value }) => {
    setFormData({ ...formData, category: value });
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
                      name="title"
                      label="Channel Title"
                      isRequired
                    >
                      {({ fieldProps }) => (
                        <Fragment>
                          <Tooltip content="Channel title" position="top">
                            <TextField
                              {...fieldProps}
                              value={formData?.title}
                              onChange={(e) => handleChange(e)}
                            />
                          </Tooltip>
                        </Fragment>
                      )}
                    </Field>
                    <Field
                      aria-required={true}
                      name="tag"
                      label="Tag"
                      isRequired
                    >
                      {({ fieldProps, error }) => {
                        return (
                          <Fragment>
                            <Tooltip position="top" content="Tag">
                              <TextField
                                type="text"
                                {...fieldProps}
                                value={formData?.tag}
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
                      name="category"
                      label="Category"
                      isRequired
                    >
                      {({ fieldProps }) => {
                        return (
                          <Select
                            {...fieldProps}
                            classNamePrefix="react-select"
                            options={[
                              { label: "عربي", value: "عربي" },
                              { label: "English", value: "English" },
                            ]}
                            placeholder="Choose Language"
                            onChange={onChangeCategory}
                          />
                        );
                      }}
                    </Field>
                    <Field aria-required={true} name="youtube" label="Link">
                      {({ fieldProps }) => {
                        return (
                          <Fragment>
                            <Tooltip
                              position="top"
                              content="YouTube channel link"
                            >
                              <TextField
                                type="text"
                                {...fieldProps}
                                value={formData?.youtube}
                                onChange={(e) => handleChange(e)}
                              />
                            </Tooltip>
                          </Fragment>
                        );
                      }}
                    </Field>
                    <Field aria-required={true} name="cover" label="Cover">
                      {({ fieldProps }) => {
                        return (
                          <Fragment>
                            <Tooltip
                              position="top"
                              content="YouTube channel cover"
                            >
                              <TextField
                                type="text"
                                {...fieldProps}
                                value={formData?.cover}
                                onChange={(e) => handleChange(e)}
                              />
                            </Tooltip>
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
