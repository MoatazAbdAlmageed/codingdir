import React from "react";
import { Text } from "@chakra-ui/react";

export function LanguageFlag({ post }) {
  return !post?.categories ? (
    <></>
  ) : (
    post?.categories?.map((category) => (
      <Text m={(0, 2)}>
        <a href={`/${category}`}>
          {category.toLowerCase() === "english" ? "🇬🇧" : "🇸🇦"}
        </a>
      </Text>
    ))
  );
}
