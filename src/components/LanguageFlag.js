import { Text } from "@chakra-ui/react";

import React from "react";

export function LanguageFlag({ post }) {
  console.log("post", post);

  return (
    <Text m={(0, 2)}>
      {post.categories &&
        `${post.categories.map(
          (category) => `${category === "english" ? "🇬🇧" : "🇸🇦"} `
        )}`}
    </Text>
  );
}
