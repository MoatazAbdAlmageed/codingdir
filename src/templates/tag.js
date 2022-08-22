import Helmet from "react-helmet";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import React from "react";
import config from "../../data/SiteConfig";
import { graphql } from "gatsby";

const TagTemplate = ({ data, pageContext }) => (
  <Layout>
    <main>
      <Helmet title={`${pageContext.tag} Channels | ${config.siteTitle}`} />
      <PostListing data={data} title={pageContext.tag} />
    </main>
  </Layout>
);
export default TagTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: ASC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            categories
          }
        }
      }
    }
  }
`;
