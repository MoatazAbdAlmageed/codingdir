import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { capitalize, kebabCase, uniq } from "lodash";

import Select from "@atlaskit/select";
import { navigate } from "gatsby";
import moment from "moment";
import React from "react";
import { FaStar } from "react-icons/fa";
import uuid from "react-uuid";
import { LanguageFlag } from "./LanguageFlag";

const PostListing = ({ data, title: listTitle }) => {
  const rowTags = [
    "english",
    "productivity",
    "books",
    "antiporn",
    "data analysis",
    "css",
    "html",
    "javascript",
    "react",
    "nodejs",
    "PHP",
    "mysql",
    "github",
    "git",
    "pwa",
    "testing",
    "automation",
    "cypress",
    "selenium",
    "python",
    "postman",
    "graphql",
    "gatsby",
    "nextjs",
    "reading",
    "website",
    "javascript",
    "sass",
    "java",
    "redux",
    "sql",
    "sqlite",
    "postgres",
    "dart",
    "android",
    "javascript",
    "pin",
    "backend",
    "C Sharp",
    "laravel",
    "SQL",
    "devops",
    "ASP.NET",
    "ASP.NET",
    "solid",
    "linq",
    "linux",
    "hadoop",
    "UI/UX",
    "deno",
    "bash",
    "embedded",
    "wordpress",
    "",
    "odoo",
    "GitOps",
    "K8s",
    "islamic",
    "kafka",
    "oop",
    "system design",
    "microservices",
    "vim",
    "podcast",
    "mobile",
    "swift",
    "thinking",
    "flutter",
    "software engineering",
    "algorithms",
    "interviews",
    "tips",
    "problem solving",
    "vuejs",
    "data structures",
    "cplusplus",
    "spring",
    "angular",
    "maven",
    "game development",
    "cyber-security",
    "hacking",
    "freelancing",
    "CS",
    "assembly",
    "mongodb",
    "firebase",
    "math",
    "analysis",
    "Machine Learning ML",
    "live",
    "c",
    "ruby",
    "golang",
    "React Native",
    "SEO",
    "security",
    "chrome",
    "extensions",
    "camtasia",
    "zapier",
    "kindle",
    "design patterns",
    "chakra ui",
    "tech",
    "web",
    "crawling",
    "chat",
    "docker",
    "express",
    "frontend",
    "hmvc",
    "jade",
    "realtime",
    "database",
    "networking",
    "MCSA",
    "CCNA",
    "WINDOWS",
    "kids",
    "bug-bounty",
    "Life Coaching",
    "Personal Development",
    "unity",
    "jquery",
    "ajax",
    "appium",
    "istqb",
    "OOP",
    "html5",
    "arduino",
    "azure",
    "AI",
    "haskell",
    "operating-system",
    "gatsbyjs",
    "typescript",
    "svg",
    "animation",
    "kotlin",
    "drupal",
    "ask",
    "guide",
    "adonis",
    "tailwindcss",
    "xd",
    "prisma",
    "rails",
    "nestjs",
    "shorts",
    "springboot",
    "tip",
    "ruby on rails",
    "bootstrap",
    "mobile ",
    "software development",
    "network programming",
    "clean code",
    "graphics",
    "hooks",
    "react native",
    "trsting",
    "vscode",
    "project-management",
    "programming",
    "PROGRAMMING languages",
    "software architecture",
    "system analysis",
    "blazor",
    "Domain-driven design DDD",
    "flowchart",
    "windows",
    "talks",
    "blockchain",
    "agile",
    "business-analysis",
    "e-commerce",
    "web design",
    "data",
    "oraclee",
    "gitkraken",
    "aws",
    "marketing",
    "adobe",
    "kubeless",
    "kubernetes",
    "excel",
    "tools",
    "data science",
    "deep learning",
    "nlp",
    "meetup",
    "swagger",
    "encryption",
    "woocommerce",
    "figma",
    "cs50",
    "authentication",
    "iam",
    "identity",
    "shopify",
    "flask",
    "talk",
    "kotlen",
    "pascal",
    "prolog",
    "scratch",
    "solid-principles",
    "regular-expressions",
    "computer science",
    "shorts",
    "angularjs",
    "azure",
    "delphi",
    "razor",
    "hosting",
    "notion",
    "arduino",
    "cloud",
    "pmp",
    "opensource",
    "cryptographic",
    "MVC",
    "web sockets",
    "axios",
    "cli",
    "design-principles",
    "gulp",
    "gupl",
    "jwt",
    "lodash",
    "moment-js",
    "parcel",
    "webpack",
    "yarn",
    "microsoft-office",
    "vba",
    "chrome extension",
    "it",
    "electronjs",
    "ccna",
    "emotional-intelligence",
    "electronic",
    "ATDD",
    "software-system",
    "scrum",
    "ReactiveX",
    "django",
    "ios",
    "strapi",
    "headless-cmd",
    "photoshop",
    "competitive-programming",
    "illustrator",
    "oracle",
    "es6",
    "howto",
    "di",
    "ionic",
    "computer programming",
    "Springboot",
    "database design",
    "kubernates",
    "iot",
    "declarative programming",
    "functional-programming",
    "Programming paradigm",
    "bot",
    "entity-framework",
    "localization",
    "optimization",
    "translation",
    "ngrx",
    "rx",
    "erlang",
    "bulma",
    "dneo",
    "grunt",
    "json",
    "material-ui",
    "tailind",
    "websockets",
    "svelt",
    "dom",
    "cms",
    "font-end",
    "react",
    "frontity",
    "unit testing",
    "big-data",
    "sharepoint",
    "tdd",
    "rxjs",
    "codeigniter",
    "pugjs",
    "cisco",
    "red-hat",
    "containerization",
    "ring",
    "compiler",
    "mern",
    "serverless",
    "nuxtjs",
    "pdo",
    "api",
    "es",
    "srping boot",
    "symfony",
    "chef",
    "vmware",
    "chatbot",
    "loopback",
    "mnogodb",
    "groovy",
    "sap",
    "blockhain",
    "scripting",
    "yii2",
    "mechanics",
    "computing",
    "crm",
    "iti",
    "web servers",
    "rxjava",
    "flutte",
    "perl",
    "zend",
    "blockchain and bitcoin",
    "oracel",
    "Apache Solr",
    "information-system",
    "r",
    "Jenkins",
    "GraphCMS",
    "slim",
    "hardware",
    "computer-architecture",
    "matlab",
    "cryptography",
    "image processing",
    "3d",
    "dl",
    "IP",
    "Apollo",
    "scrapping ",
    "shell",
  ];
  const tags = uniq(rowTags);
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
  console.log("postList: ", postList);

  const emptyQuery = "";

  const [state, setState] = React.useState({
    query: emptyQuery,
    filteredData: [],
  });

  const handleSelectChange = ({ value }) => {
    console.log("value", value);
    navigate(`/tag/${kebabCase(value)}`);
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
        <Box>
          <Center>
            <Text fontSize="xs">
              <a href="place-your-ad-here">Place your ad here? </a>
            </Text>
          </Center>

          <Center>
            <a href="https://www.youtube.com/@MoatazMohamady">
              <img width="600px" src="/place-your-ad-here.jpg" alt="logo" />
            </a>
          </Center>
        </Box>

        <Heading color="#e72c33" mb={5}>
          {capitalize(listTitle)}
        </Heading>

        <Select
          width="100%"
          classNamePrefix="react-select"
          options={tags
            .filter((tag) => tag !== "")
            .sort(function(a, b) {
              return a.toLowerCase().localeCompare(b.toLowerCase());
            })
            .map((tag) => {
              return {
                label: capitalize(tag),
                value: tag,
              };
            })}
          isSearchable={true}
          placeholder="I want to learn"
          onChange={handleSelectChange}
        />
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
                  alt="YouTube-Icon-Gray-Box"
                />
              </Center>
              <Text color={"#454159"}>
                <b>{post.title}</b>
              </Text>
            </a>
            {post.tags?.includes("pin") && (
              <Center>
                <FaStar color="#e72c33" />
              </Center>
            )}{" "}
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default PostListing;
