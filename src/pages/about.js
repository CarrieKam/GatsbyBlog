import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>I am a Software Engineering student at Polytechnique de Montreal.</p>
            <p>During the summer of 2022, I got accepted to be a MLH Fellow in the Product Engineering program. 
                I was very honored for that. I learned a lot of things and made some friends. I took notes for 
                everything that I learned so that I can't forget them in the future. </p>
            
            <p>During the summer of 2021, I decided to join my friend at the event INIT2022
                to learn more about coding. We created a guild and thought it was the same
                thing as a group. </p>
            
            <StaticImage
                alt="init2020"
                src="../images/init2022.png"
            />
        </Layout>
    )
}

export default AboutPage
