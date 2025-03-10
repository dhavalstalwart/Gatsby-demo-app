import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by learing the Gatsby Framework!</p>
      <StaticImage 
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" 
        // src="../images/icon.png"
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" description={"Home Description"}/>

export default IndexPage