import { HStack, Tag } from "@chakra-ui/react";
import { capitalize, kebabCase } from "lodash";

import { Link } from "gatsby";
import React from "react";

const PostCategories = ({ categories, margin }) => {
  return (
    <HStack marginBottom={1}>
      {categories &&
        categories.map((category) => (
          <Tag
            style={{ background: "orange" }}
            size={"md"}
            variant="solid"
            colorScheme="blue"
            margin={margin}
          >
            <Link key={category} to={`/${kebabCase(category)}`}>
              <span>{capitalize(category)}</span>
            </Link>
          </Tag>
        ))}
    </HStack>
  );
};

export default PostCategories;
