import Helmet from "react-helmet";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import React from "react";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import { graphql } from "gatsby";

const Index = ({ data }) => (
  <Layout>
    <main>
      <Helmet title={config.siteTitle} />
      <SEO />
      <PostListing data={data} title="Latest Channels/Websites" />
    </main>
  </Layout>
);

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          html
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            youtube
            categories
            description
          }
        }
      }
    }
  }
`;
