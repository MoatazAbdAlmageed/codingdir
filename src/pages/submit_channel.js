import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Layout from "../layout/index";

const SubmitChannel = () => (
  <Layout>
    <main>
      <Helmet title={`Submit Channel | ${config.siteTitle}`} />
      <h1>
        If you need to submit your channel or another useful one please submit a
        pull request to project repo here
        https://github.com/MoatazAbdAlmageed/YouTube-Channels steps
      </h1>
      <p>
        If you don't know how to contribute kindly check this awesome tutorial
        here First check this tutorial here
        https://www.youtube.com/watch?v=G1I3HF4YWEw
      </p>
    </main>
  </Layout>
);

export default SubmitChannel;
