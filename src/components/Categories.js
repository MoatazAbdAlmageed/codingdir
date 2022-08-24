import { Link, graphql, useStaticQuery } from "gatsby";

import React from "react";

const { kebabCase } = require("lodash");

const Categories = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <>
      {data.allMarkdownRemark.group.map((category) => (
        <li key={category.fieldValue}>
          <Link
            to={`/${kebabCase(category.fieldValue)}`}
            key={category.fieldValue}
            activeClassName={props.activeClassName}
          >
            {category.fieldValue.toUpperCase()}
            <strong> ({category.totalCount})</strong>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Categories;
