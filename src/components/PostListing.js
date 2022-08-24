import {
  Box,
  Center,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FaStar } from "react-icons/fa";
import { LanguageFlag } from "./LanguageFlag";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import _ from "lodash";
import moment from "moment";
import uuid from "react-uuid";

const PostListing = ({ data, title: listTitle }) => {
  const postEdges = data?.allMarkdownRemark?.edges;
  const getPostList = () => {
    const postList = [];
    postEdges?.forEach((postEdge) => {
      postList.push({
        html: postEdge.node.html,
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        categories: postEdge.node.frontmatter.categories,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        youtube: postEdge.node.frontmatter.youtube,
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
    const query = event.target.value.trim();
    const filteredData = postList.filter(
      ({ description, excerpt, title, tags, html }) => {
        const low = query.toLowerCase();
        return (
          html?.toLowerCase().includes(low) ||
          description?.toLowerCase().includes(low) ||
          excerpt?.toLowerCase().includes(low) ||
          title?.toLowerCase().includes(low) ||
          (tags &&
            tags
              .join("")
              .toLowerCase()
              .includes(low))
        );
      }
    );

    setState({
      query,
      filteredData,
    });
  };
  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query;
  const rowPosts = hasSearchResults ? filteredData : postList;
  const posts = [...new Set(rowPosts)].sort((a, b) =>
    moment(a.date, "DD/MM/YYYY").toDate() >
    moment(b.date, "DD/MM/YYYY").toDate()
      ? -1
      : 1
  );

  return (
    <Stack>
      <Box>
        <Center>
          <a href="/place-your-ad-here">
            <img src="/place-your-ad-here.jpg" alt="logo" />
          </a>
        </Center>

        <Heading mb={5}>{_.capitalize(listTitle)}</Heading>
        <InputGroup mt={2}>
          <InputLeftElement
            zIndex={0}
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
      </Box>
      <SimpleGrid columns={{ lg: 5, sm: 1, md: 3 }} spacing="40px">
        {posts.map((post) => (
          <Box
            p={5}
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
            <LanguageFlag post={post} />
            <a
              href={post.path}
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              <Center>
                <Image
                  borderRadius="full"
                  src={post.cover}
                  fallbackSrc="/YouTube-Icon-Gray-Box.jpg"
                  boxSize="88px"
                  width="auto"
                />
              </Center>
              <Text>
                <b>{post.title}</b>
              </Text>
            </a>
            {post.tags?.includes("pin") && (
              <Center>
                <FaStar color="orange" />
              </Center>
            )}{" "}
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default PostListing;
