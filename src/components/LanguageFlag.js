import { Link, Text } from "@chakra-ui/react";

import React from "react";

export function LanguageFlag({ post }) {
  return (
    <Text m={(0, 2)}>
      {post.categories &&
        `${post.categories.map((category) => (
          <Link to={`/${category}}`}>
            {category.toLowerCase() === "english" ? "🇬🇧" : "🇸🇦"}
          </Link>
        ))}`}
    </Text>
  );
}
