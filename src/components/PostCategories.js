import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import styles from "./PostTags.module.scss";

const PostCategories = ({ categories }) => {
  return (
    <div className={styles.categoryContainer}>
      {categories &&
        categories.map((tag) => (
          <Link key={tag} to={`/${_.kebabCase(tag)}`}>
            <span>{tag}</span>
          </Link>
        ))}
    </div>
  );
};

export default PostCategories;
