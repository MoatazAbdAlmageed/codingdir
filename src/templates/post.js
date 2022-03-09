import { Box, Center, Heading, Image } from "@chakra-ui/react";
import { graphql, Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import PostCategories from "../components/PostCategories";
import PostTags from "../components/PostTags";
import SEO from "../components/SEO";
import SocialLinks from "../components/SocialLinks";
import Layout from "../layout";
import styles from "./post.module.scss";
import "./prism-okaidia.css";
export default ({ data, pageContext }) => {
  const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  return (
    <Layout>
      <main>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Center>
          <Box width={{ base: "50%", sm: "80%" }}>
            <Heading style={{ color: "orange" }}>{post.title}</Heading>
            <Image
              borderRadius="full"
              boxSize="150px"
              src={post.cover}
              fallbackSrc="/YouTube-Icon-Gray-Box.png"
            />

            <div>
              <PostTags tags={[...new Set(post.tags)]} />
              <PostCategories categories={post.categories} />
            </div>

            {post.youtube && (
              <Link
                style={{ color: "orange" }}
                target="_blank"
                to={post.youtube}
                activeClassName={styles.activeNav}
              >
                {post.youtube}
              </Link>
            )}
            <br />
            {post.linkedin && (
              <Link
                style={{ color: "orange" }}
                target="_blank"
                to={post.linkedin}
                activeClassName={styles.activeNav}
              >
                {post.linkedin}
              </Link>
            )}
            <br />
            {post.github && (
              <Link
                style={{ color: "orange" }}
                target="_blank"
                to={post.github}
                activeClassName={styles.activeNav}
              >
                {post.github}
              </Link>
            )}
            <br />
            {post.site && (
              <Link
                style={{ color: "orange" }}
                target="_blank"
                to={post.site}
                activeClassName={styles.activeNav}
              >
                {post.site}
              </Link>
            )}
            <br />
            {post.behance && (
              <Link
                style={{ color: "orange" }}
                target="_blank"
                to={post.behance}
                activeClassName={styles.activeNav}
              >
                {post.behance}
              </Link>
            )}

            <div
              dangerouslySetInnerHTML={{
                __html: postNode.html.replace(/href/g, "target='_blank' href"),
              }}
            />

            <hr />
            {/* <Bio config={config} /> */}
            <div>
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
          </Box>
        </Center>
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
      </main>
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
        behance
      }
      fields {
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
