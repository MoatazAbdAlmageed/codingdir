import { SearchIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Center,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
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
  const rowPosts = hasSearchResults ? filteredData : postList;
  const posts = [...new Set(rowPosts)].sort((a, b) =>
    // a.tags?.length > b.tags?.length ? -1 : 1
    a.title > b.title ? -1 : 1
  );

  return (
    <Stack>
      <Box>
        <InputGroup mt={2}>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            rounded="md"
            boxShadow="md"
            placeholder="Search by title, tags ,excerpt"
            onChange={handleInputChange}
          />
        </InputGroup>
        <Text mt={2}>
          <Badge colorScheme="red">{posts.length}</Badge> channel(s) found
        </Text>
      </Box>
      <SimpleGrid columns={{ lg: 5, sm: 1, md: 3 }} spacing="40px">
        {posts.map((post) => (
          <Box
            textAlign="center"
            boxShadow="md"
            rounded="lg"
            w="100%"
            key={uuid()}
            overflow="hidden"
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            <Link
              to={post.path}
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              <Text mb={2}>{post.title}</Text>
              <Center>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src={post.cover}
                  fallbackSrc="/YouTube-Icon-Gray-Box.png"
                  width="150px"
                />
              </Center>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default PostListing;
