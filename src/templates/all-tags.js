import { Heading, SimpleGrid } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import styles from "../components/PostTags.module.scss";
import Layout from "../layout";
const _ = require("lodash");

const AllTags = ({ pageContext }) => {
  const { tags } = pageContext;

  return (
    <Layout>
      <main>
        <Helmet title="Tags" />
        <Heading>Topics</Heading>
        <div className={styles.tagContainer}>
          <SimpleGrid columns={{ lg: 5, sm: 1, md: 3 }}>
            {tags.sort().map((tag) => {
              return (
                <Link to={`/tags/${_.kebabCase(tag)}`}>
                  {" "}
                  <span>{tag.toUpperCase()}</span>
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
