import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/Seo'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => {
   
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query {
  allFile(sort: {atime: DESC}, filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
      name
    }
  }
}
`

export const Head = () => <Seo title="My Blog Post List" />

export default BlogPage

