import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>So you want to know about me?!</p>
            <StaticImage
                alt="init2020"
                src="../images/init2022.png"
            />
        </Layout>
    )
}

export default AboutPage