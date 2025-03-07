import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import { navigate } from "gatsby";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <button
        type="button"
        onClick={() => navigate("/")}
        style={{
          background: "green",
          color: "white",
          cursor: "pointer",
          padding: "10px",
          borderRadius: "5px",
          borderColor: "1px solid gray",
        }}
      >
        Back To Home Page
      </button>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
