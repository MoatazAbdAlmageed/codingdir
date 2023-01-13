import {
  Box,
  Heading,
  Image,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaBehance,
  FaGithub,
  FaLink,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link, graphql } from "gatsby";
import { capitalize, kebabCase } from "lodash";

import Helmet from "react-helmet";
import { LanguageFlag } from "../components/LanguageFlag";
import Layout from "../layout";
import React from "react";
import SEO from "../components/SEO";
import SocialLinks from "../components/SocialLinks";
import config from "../../data/SiteConfig";
import styles from "./post.module.scss";

const BlogTags = (props) => {
  return (
    <Box marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag margin={(0, 1)} variant="solid" colorScheme="red" key={tag}>
            <Link key={tag} to={`/tag/${kebabCase(tag)}`}>
              <span>{capitalize(tag)}</span>
            </Link>
          </Tag>
        );
      })}
    </Box>
  );
};

export default ({ data, pageContext }) => {
  const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }

  return (
    <Layout maxW={"7xl"} p="12">
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />

      <Box display="flex" flex="1" position="relative">
        <Box
          width={{ base: "100%", sm: "85%" }}
          marginLeft={{ base: "0", sm: "5%" }}
          marginTop="5%"
          zIndex={1}
        >
          <Image
            margin={"auto"}
            borderRadius="full"
            src={post.cover || "/YouTube-Icon-Gray-Box.jpg"}
            alt={post.title}
            objectFit="contain"
            height="88px"
            width="auto"
          />
        </Box>
        <Box width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              "radial(#e72c33.600 1px, transparent 1px)",
              "radial(#e72c33.300 1px, transparent 1px)"
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: "3", sm: "0" }}
      >
        <Heading color="#454159" marginBottom={2}>
          {post.youtube ? (
            <a
              style={{ fontSize: ".8em" }}
              target="_blank"
              href={post.youtube}
              activeClassName={styles.activeNav}
            >
              <FaYoutube color="#e72c33" />
              Click here to visit{" "}
              <i style={{ color: "#e72c33" }}>{post.title}</i>
            </a>
          ) : (
            post.title
          )}
        </Heading>
        <LanguageFlag post={post} />
        Topics:
        <BlogTags tags={[...new Set(post.tags)]} />
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue("gray.700", "gray.200")}
        ></Text>
        <ul>
          {post.github && (
            <a
              style={{ color: "#e72c33" }}
              target="_blank"
              href={post.github}
              activeClassName={styles.activeNav}
            >
              <FaGithub />
              {post.github}
            </a>
          )}{" "}
          {post.linkedin && (
            <li>
              <a
                style={{ color: "#e72c33" }}
                target="_blank"
                href={post.linkedin}
                activeClassName={styles.activeNav}
              >
                <FaLinkedinIn />
                {post.linkedin}
              </a>
            </li>
          )}
          {post.site && (
            <li>
              <a
                style={{ color: "#e72c33" }}
                target="_blank"
                href={post.site}
                activeClassName={styles.activeNav}
              >
                <FaLink />
                {post.site}
              </a>
            </li>
          )}
          {post.behance && (
            <li>
              <a
                style={{ color: "#e72c33" }}
                target="_blank"
                href={post.behance}
                activeClassName={styles.activeNav}
              >
                <FaBehance />
                {post.behance}
              </a>
            </li>
          )}
        </ul>
        <div
          dangerouslySetInnerHTML={{
            __html: postNode.html
              .replace(/href/g, "target='_blank' href")
              .replace(/"/g, "")
              .replace(/,/g, "")
              .replace(/]/g, "")
              .replace(/\[/g, "")
              .replace(/\\/g, ""),
          }}
        />
        <a
          className="admin_only"
          style={{ color: "#e72c33", visibility: "hidden" }}
          target="_blank"
          href={`https://github.com/MoatazAbdAlmageed/codingdir/edit/main/content/${post.title
            .replace(/ /g, "_")
            .replace(/\./g, "_")}.md`}
        >
          Edit ✏
        </a>
      </Box>

      <SocialLinks postPath={slug} postNode={postNode} />
      <nav>
        <ul className={styles.pagination}>
          <li>
            <Link to={prevslug} rel="prev">
              ← {prevtitle}
            </Link>
          </li>
          <li>
            <Link to={nextslug} rel="next">
              {nexttitle}→
            </Link>
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        categories
        tags
        youtube
        site
        github
        linkedin
        twitter
        behance
        description
      }
      fields {
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
