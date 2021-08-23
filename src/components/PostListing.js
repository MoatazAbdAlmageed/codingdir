import { Box, Grid, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import uuid from "react-uuid";

const PostListing = ({ postEdges }) => {
  const getPostList = () => {
    const postList = [];
    postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        categories: postEdge.node.frontmatter.categories,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  };

  const postList = getPostList();

  const emptyQuery = "";

  const [state, setState] = React.useState({
    query: emptyQuery,
    filteredData: [],
  });

  const handleInputChange = (event) => {
    console.log(event.target.value);
    const query = event.target.value;
    const filteredData = postList.filter(({ excerpt, title, tags }) => {
      const low = query.toLowerCase();
      return (
        excerpt.toLowerCase().includes(low) ||
        title.toLowerCase().includes(low) ||
        (tags &&
          tags
            .join("")
            .toLowerCase()
            .includes(low))
      );
    });

    setState({
      query,
      filteredData,
    });
  };
  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query;
  const posts = hasSearchResults ? filteredData : postList;

  return (
    <Stack>
      <Box p={8}>
        <Input
          placeholder="Search by title, tags ,excerpt"
          onChange={handleInputChange}
        />

        <Text mt={2}>{posts.length} channel(s) found</Text>
      </Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={2}>
        {posts.map((post) => (
          <Box w="100%" key={uuid()} overflow="hidden">
            <Link
              to={post.path}
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              <Text margin="0">{post.title}</Text>

              <Image
                src={post.cover || "/YouTube-Icon-Gray-Box.png"}
                width="150px"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </Link>
          </Box>
        ))}
      </Grid>
    </Stack>
  );
};

export default PostListing;
