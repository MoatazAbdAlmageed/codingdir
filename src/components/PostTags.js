import { Link } from "gatsby";
import React from "react";
import { kebabCase } from "lodash";
import styles from "./PostTags.module.scss";
const PostTags = ({ tags }) => {
  return (
    <div className={styles.tagContainer}>
      {tags &&
        tags.map((tag) => (
          <Link key={tag} to={`/tags/${kebabCase(tag)}`}>
            <span>{tag.toUpperCase()}</span>
          </Link>
        ))}
    </div>
  );
};

export default PostTags;
