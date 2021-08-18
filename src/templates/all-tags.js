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
        <div className={styles.tagContainer}>
          <ul>
            {tags.sort().map((tag) => {
              return (
                <li>
                  <Link to={`/tags/${_.kebabCase(tag)}`}>
                    {" "}
                    <span>{tag.toUpperCase()}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </Layout>
  );
};
export default AllTags;
