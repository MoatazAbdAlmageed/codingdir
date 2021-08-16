import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import styles from "../components/PostTags.module.scss";
import Layout from "../layout";

const AllTags = ({ pathContext }) => {
  const { tags } = pathContext;

  return (
    <Layout>
      <main>
        <Helmet title="Tags" />
        <div className={styles.tagContainer}>
          <ul>
            {tags.map((tag) => {
              return (
                <li>
                  <Link to={`/tags/${tag}`}>
                    {" "}
                    <span>{tag}</span>
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
