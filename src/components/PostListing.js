import React from "react";
import { Link } from "gatsby";
import styles from "./PostsListing.module.scss";
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
    <div>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          aria-label="Search"
          placeholder="Search by title, tags ,excerpt"
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.articleList}>
        {/* Your post list here. */
        posts.map((post) => (
          <Link className={styles.articleBox} to={post.path} key={uuid()}>
            <article>
              <div className={styles.right}>
                <h3>{post.title}</h3>
                <img src={post.cover} />
                <div className={styles.meta}>
                  {post.date} &mdash;{" "}
                  <span>{post.categories && post.categories.join(" / ")}</span>{" "}
                </div>
                <p>{post.excerpt}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostListing;
