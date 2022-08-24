import { Heading, SimpleGrid } from "@chakra-ui/react";
import { capitalize, kebabCase } from "lodash";

import Helmet from "react-helmet";
import Layout from "../layout";
import { Link } from "gatsby";
import React from "react";
import styles from "../components/PostTags.module.scss";

const AllTags = ({ pageContext }) => {
  const { tags } = pageContext;

  return (
    <Layout>
      <main>
        <Helmet title="Tags" />
        <Heading>Topics</Heading>
        <div className={styles.tagContainer}>
          <SimpleGrid columns={{ lg: 5, sm: 1, md: 3 }}>
            {tags
              .filter((tag) => tag != "")
              .sort()
              .map((tag) => {
                return (
                  <Link to={`/tags/${kebabCase(tag)}`}>
                    {" "}
                    <span>{capitalize(tag)}</span>
                  </Link>
                );
              })}
          </SimpleGrid>
        </div>
      </main>
    </Layout>
  );
};
export default AllTags;
