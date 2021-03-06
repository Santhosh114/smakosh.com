import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';
import { Layout, Container, Head, PageTitle } from 'Common'
import { Details, Socials } from 'Components/AboutPage'

const About = () => (
	<StaticQuery
		query={graphql`
			query AboutImageQuery {
				AboutImage: imageSharp(fluid: {originalName: { regex: "/me.jpg/" }}) {
					fluid(maxWidth: 630 ) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
	`}
		render={data => (
			<Layout>
				<Container>
					<Head type="Organization" location="/about">
						Smakosh | About
					</Head>
					<PageTitle>About me</PageTitle>
					<AboutContainer>
						<Details />
						<Portrait>
							<a href={data.AboutImage.fluid.src}>
								<Img fluid={data.AboutImage.fluid} alt="just me chilling" />
							</a>
						</Portrait>
					</AboutContainer>
					<Socials />
				</Container>
			</Layout>
		)}
	/>
)

const AboutContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	@media (max-width: 960px) {
			flex-direction: column;
	}
`

const Portrait = styled.div`
	position: relative;
	flex: 1;
	width: 100%;
	padding-left: .5rem;
`

export default About
