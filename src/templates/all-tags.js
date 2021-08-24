import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import styles from "../components/PostTags.module.scss";
import Layout from "../layout";
const _ = require("lodash");
import { Grid , Heading } from "@chakra-ui/react";

const AllTags = ({ pageContext }) => {
  const { tags } = pageContext;

  return (
    <Layout>
      <main>
        <Helmet title="Tags" />
        <Heading>Topics</Heading>
        <div className={styles.tagContainer}>
          <Grid templateColumns="repeat(6, 1fr)" gap={2}>
            {tags.sort().map((tag) => {
              return (
                <Link to={`/tags/${_.kebabCase(tag)}`}>
                  {" "}
                  <span>{tag.toUpperCase()}</span>
                </Link>
              );
            })}
          </Grid>
        </div>
      </main>
    </Layout>
  );
};
export default AllTags;
