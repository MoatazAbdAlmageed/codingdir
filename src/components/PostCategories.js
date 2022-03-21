import { HStack, Tag } from "@chakra-ui/react";
import { Link } from "gatsby";
import _ from "lodash";
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
            <Link key={category} to={`/${_.kebabCase(category)}`}>
              <span>{category.toUpperCase()}</span>
            </Link>
          </Tag>
        ))}
    </HStack>
  );
};

export default PostCategories;
