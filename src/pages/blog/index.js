import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";
import { graphql, Link } from "gatsby";

const BlogPage = ({ data }) => {
  const BlogPosts = data.allMdx.nodes;

  return (
    <Layout pageTitle="My Blog Posts">
      {BlogPosts.length > 0 ? (
        BlogPosts.map((node) => {
          return (
            <article key={node.id}>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                <h2>{node.frontmatter.title}</h2>
              </Link>
              <p>Posted: {node.frontmatter.date}</p>
              {/* <p>{node.excerpt}</p> */}
            </article>
          );
        })
      ) : (
        <p>Blog Post Not Exists!</p>
      )}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "MMMM D, YYYY")
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
