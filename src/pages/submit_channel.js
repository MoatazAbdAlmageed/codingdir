import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Layout from "../layout/index";
import styles from "./index.module.scss";
const SubmitChannel = () => (
  <Layout>
    <main className={styles.page}>
      <Helmet title={`Submit Channel | ${config.siteTitle}`} />
      <h1>Submit Channel</h1>

      <p>
        If you need to submit your channel or another useful one please submit a
        pull request to project repo{" "}
        <a
          target="_blank"
          href="https://github.com/MoatazAbdAlmageed/YouTube-Channels"
        >
          here
        </a>
      </p>

      <h2>Steps</h2>
      <ol>
        <li>
          Fork the repo If you don't know how to contribute kindly check this
          awesome tutorial here First check this tutorial{" "}
          <a target="_blank" href="https://www.youtube.com/watch?v=G1I3HF4YWEw">
            here
          </a>
        </li>
        <li>duplicate `.\content\template.md` file with channel name</li>
        <li>Update file with channel name , tags , link , ...</li>
        <li>Send a pull request</li>
      </ol>
    </main>
  </Layout>
);

export default SubmitChannel;
