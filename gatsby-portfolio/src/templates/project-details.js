import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/project-details.module.css"
import { graphql } from "gatsby"

const ProjectDetails = ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  const { title, stack, featuredImg } = markdownRemark.frontmatter
  const image = getImage(featuredImg.childrenImageSharp[0])

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage image={image} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        stack
        title
        featuredImg {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default ProjectDetails
