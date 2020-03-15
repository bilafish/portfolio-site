/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Header from "./header"
import { Helmet } from "react-helmet"

const StyledContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, “Segoe UI”, “Roboto”, “Oxygen”,
    “Ubuntu”, “Cantarell”, “Fira Sans”, “Droid Sans”, “Helvetica Neue”,
    sans-serif;
  color: #fffefe;
  height: 100vh;
  padding: 0 1.5rem;
`

const StyledFooter = styled.footer`
  margin-top: 5rem;
  margin-bottom: 2rem;
`

const MainBody = styled.main`
  @media (min-width: 980px) {
    height: 75%;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 18, height: 18) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <StyledContainer>
      <Helmet>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID}`}
        />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID}');
          `}
        </script>
      </Helmet>
      <Header />
      <MainBody>{children}</MainBody>
      <StyledFooter>
        © {new Date().getFullYear()} Jason Zheng. Built with
        {` `}
        <Img fixed={data.placeholderImage.childImageSharp.fixed} /> {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>. All rights reserved.
      </StyledFooter>
    </StyledContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
