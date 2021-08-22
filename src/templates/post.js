import { Box, Heading, Image } from "@chakra-ui/react";
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
        <Box>
          <Heading>{post.title}</Heading>
          <Image
            src={
              post.cover ||
              "https://yt3.ggpht.com/ytc/AKedOLTs5xPwjVzxhss34sTUBnFyrJApSllD0pa3oQaOhw=s88-c-k-c0x00ffffff-no-rj"
            }
          />
          <div>
            <PostTags tags={[...new Set(post.tags)]} />
            <PostCategories categories={post.categories} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />

          <hr />
          {/* <Bio config={config} /> */}
          <div>
            <SocialLinks postPath={slug} postNode={postNode} />
          </div>
        </Box>

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
      }
      fields {
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
