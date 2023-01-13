import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  FormHeader,
  FormSection,
} from "@atlaskit/form";
import React, { Fragment, useState } from "react";

import Button from "@atlaskit/button";
import Helmet from "react-helmet";
import Layout from "../layout/index";
import Select from "@atlaskit/select";
import TextArea from "@atlaskit/textarea";
import TextField from "@atlaskit/textfield";
import Tooltip from "@atlaskit/tooltip";
import config from "../../data/SiteConfig";

const Submit = ({ pageContext }) => {
  const { tags } = pageContext;
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    youtube: "",
    cover: "",
    tags: "",
    github: "",
    linkedin: "",
    site: "",
  });

  const onSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/vnd.github.everest-preview+json",
        Authorization: `Bearer ${process.env.GATSBY_APP_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        ref: "main",
        inputs: {
          branch: `add_${formData?.title
            .replace(/\s+/g, "-")
            .toLowerCase()}_channel`,
          category: formData?.category,
          title: formData?.title.trim(),
          description: formData?.description,
          tags: formData?.tags,
          youtube: formData?.youtube.trim(),
          cover: formData?.cover.trim(),
          github: formData?.github.trim(),
          linkedin: formData?.linkedin.trim(),
          site: formData?.site.trim(),
        },
      }),
    };
    fetch(
      "https://api.github.com/repos/MoatazAbdAlmageed/codingdir/actions/workflows/main.yml/dispatches",
      requestOptions
    ).then((res) => {
      console.log(formData);
      console.log(success);
      if (res?.status === 204) {
        setSuccess(true);
        location.href =
          "https://github.com/MoatazAbdAlmageed/codingdir/actions";
      } else {
        setSuccess(false);
        alert("Error");
      }
    });
    setFormData({
      title: "",
      description: "",
      category: "",
      youtube: "",
      site: "",
      cover: "",
      tags: "",
      github: "",
      linkedin: "",
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
  const onChangeTag = (tags) => {
    setFormData({
      ...formData,
      tags: tags.map(({ value }) => value).toString(),
    });
  };
  return (
    <Layout>
      <Grid p={8} flex={1}>
        <GridItem spacing={6} w={"full"} maxW={"lg"}>
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
                  </Field>{" "}
                  <Field
                    aria-required={true}
                    name="description"
                    label="Description"
                  >
                    {({ fieldProps }) => (
                      <Fragment>
                        <Tooltip content="Description" position="top">
                          <TextArea
                            {...fieldProps}
                            minimumRows="10"
                            resize="auto"
                            value={formData?.description}
                            onChange={(e) => handleChange(e)}
                          />
                        </Tooltip>
                      </Fragment>
                    )}
                  </Field>
                  <Field
                    aria-required={true}
                    name="tags"
                    label="Tags"
                    isRequired
                  >
                    {({ fieldProps, error }) => {
                      return (
                        <Fragment>
                          <Tooltip position="top" content="Tags">
                            <Select
                              {...fieldProps}
                              classNamePrefix="react-select"
                              options={tags.map((tag) => {
                                return {
                                  label: tag,
                                  value: tag,
                                };
                              })}
                              isMulti
                              isSearchable={true}
                              placeholder="Choose Tag"
                              onChange={onChangeTag}
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
                            { label: "English", value: "english" },
                          ]}
                          placeholder="Choose Language"
                          onChange={onChangeCategory}
                        />
                      );
                    }}
                  </Field>
                  <Field aria-required={true} name="youtube" label="Youtube">
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
                  <Field
                    aria-required={true}
                    name="cover"
                    label="Logo"
                    isRequired
                  >
                    {({ fieldProps }) => {
                      return (
                        <Fragment>
                          <Tooltip
                            position="top"
                            content="YouTube channel Logo URL"
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
                  <Field aria-required={true} name="github" label="Github">
                    {({ fieldProps }) => {
                      return (
                        <Fragment>
                          <Tooltip position="top" content="Github account link">
                            <TextField
                              type="text"
                              {...fieldProps}
                              value={formData?.github}
                              onChange={(e) => handleChange(e)}
                            />
                          </Tooltip>
                        </Fragment>
                      );
                    }}
                  </Field>{" "}
                  <Field aria-required={true} name="linkedin" label="Linkedin">
                    {({ fieldProps }) => {
                      return (
                        <Fragment>
                          <Tooltip
                            position="top"
                            content="Linkedin account link"
                          >
                            <TextField
                              type="text"
                              {...fieldProps}
                              value={formData?.linkedin}
                              onChange={(e) => handleChange(e)}
                            />
                          </Tooltip>
                        </Fragment>
                      );
                    }}
                  </Field>{" "}
                  <Field aria-required={true} name="site" label="Site">
                    {({ fieldProps }) => {
                      return (
                        <Fragment>
                          <Tooltip position="top" content="site">
                            <TextField
                              type="text"
                              {...fieldProps}
                              value={formData?.site}
                              onChange={(e) => handleChange(e)}
                            />
                          </Tooltip>
                        </Fragment>
                      );
                    }}
                  </Field>{" "}
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
        </GridItem>

        <GridItem spacing={6} w={"full"} maxW={"lg"}>
          <iframe
            autoplay
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LaYj1AXHuVc?start=24"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </GridItem>
      </Grid>
    </Layout>
  );
};
export default Submit;
