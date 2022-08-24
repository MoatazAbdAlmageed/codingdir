import { Grid, Text } from "@chakra-ui/react";

import React from "react";

export function LanguageFlag({ post }) {
  return !post?.categories ? (
    <></>
  ) : (
    <Grid templateColumns="repeat(2, 1fr)" gap={2}>
      {post?.categories?.map((category) => (
        <Text m={(0, 2)}>
          <a href={`/${category}`}>
            {category.toLowerCase() === "english" ? "🇬🇧" : "🇸🇦"}
          </a>
        </Text>
      ))}
    </Grid>
  );
}
