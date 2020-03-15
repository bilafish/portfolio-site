import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
// import Image from "../components/image"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyledHeader = styled.div`
  background: #243184;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <header>
      <StyledHeader>
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        <Link to="/works/">Works</Link>
      </StyledHeader>
    </header>
  )
}

export default Header
