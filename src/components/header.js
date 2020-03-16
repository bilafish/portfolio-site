import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
// import Image from "../components/image"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Icon from "../images/email.svg"

const StyledHeader = styled.div`
  background: #243184;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem 1rem;
`

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  position: fixed;
  right: 1rem;
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
        <Nav>
          <Link to="/works/">Works</Link>
          <a
            href="mailto:jasonzhengyj@gmail.com"
            role="button"
            style={{ border: "none" }}
          >
            <Icon />
          </a>
        </Nav>
      </StyledHeader>
    </header>
  )
}

export default Header
