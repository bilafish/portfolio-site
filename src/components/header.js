import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Image from "../components/image"

const StyledHeader = styled.div`
  background: #243184;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Header = ({ siteTitle }) => (
  <header>
    <StyledHeader>
      <div style={{ width: `128px` }}>
        <Image />
      </div>
      <Link to="/works/">Works</Link>
    </StyledHeader>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
