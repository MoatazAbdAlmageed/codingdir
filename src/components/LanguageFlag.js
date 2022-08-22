import { Link, Text } from "@chakra-ui/react";

import React from "react";

export function LanguageFlag({ post }) {
  return !post?.categories ? (
    <></>
  ) : (
    post?.categories?.map((category) => (
      <Text m={(0, 2)}>
        <Link to={`/${category}`}>
          {category.toLowerCase() === "english" ? "🇬🇧" : "🇸🇦"}
        </Link>
      </Text>
    ))
  );
}
