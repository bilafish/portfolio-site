import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const ProjectPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
    </Layout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
