import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="klee"
        src="https://thegaminggenie.com/wp-content/uploads/2021/08/Genshin-Impact-Klee.png"
      />
    </Layout>
  )
}

export default IndexPage