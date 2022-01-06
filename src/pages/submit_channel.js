import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Layout from "../layout/index";

const SubmitChannel = () => (
  <Layout>
    <main>
      <Helmet title={`Submit Channel | ${config.siteTitle}`} />
      <h1>Submit Channel</h1>

      <p>
        If you need to submit your channel or another useful one please submit a
        pull request to project repo here
        https://github.com/MoatazAbdAlmageed/YouTube-Channels
      </p>

      <h2>Steps</h2>
      <ul>
        <li>
          Fork the repo If you don't know how to contribute kindly check this
          awesome tutorial here First check this tutorial here
          https://www.youtube.com/watch?v=G1I3HF4YWEw
        </li>
        <li>duplicate .\content\template.md file with channel name</li>
        <li>Update file with channel name , tags , link , ...</li>
        <li>Send a pull request</li>
      </ul>
    </main>
  </Layout>
);

export default SubmitChannel;
