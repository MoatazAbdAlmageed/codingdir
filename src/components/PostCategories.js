import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import styles from "./PostTags.module.scss";

const PostCategories = ({ categories }) => {
  return (
    <div className={styles.categoryContainer}>
      {categories &&
        categories.map((category) => (
          <Link key={category} to={`/${_.kebabCase(category)}`}>
            <span>{category.toUpperCase()}</span>
          </Link>
        ))}
    </div>
  );
};

export default PostCategories;
