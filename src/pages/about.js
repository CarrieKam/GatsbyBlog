import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>I am a Software Engineering at Polytechnique de Montreal.</p>
            <p>During the summer of 2021, I decided to join my friend at the event INIT2022
                to learn more about coding. We created a guild and thought it was the same
                thing as a group. </p>
            
            <p>When the event started, we realized that everyone could
                join and we had the responsibility to entertain the members and enjoy the
                whole event. We created a discord server later on and talked to some people
                in the guild. There was a challenge that we needed to draw on Ms Paint a famous
                painting. We shared our paintings we the rest of the guild and found out that
                there are a lot of talented artists.</p>
            <StaticImage
                alt="init2020"
                src="../images/init2022.png"
            />
        </Layout>
    )
}

export default AboutPage