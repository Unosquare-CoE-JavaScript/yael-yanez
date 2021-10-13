import React from "react"
import { graphql } from "gatsby"
import {
  ImageElement,
  RichTextElement,
} from "@kentico/gatsby-kontent-components"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"

const ProjectDetails = ({ data }) => {
  const { elements } = data.projectDetails
  const { content, featuredimg, stack, title } = elements

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title.value}</h2>
        <h3>{stack.value}</h3>
        <div className={styles.featured}>
          <ImageElement
            image={featuredimg.value[0]}
            alt={title.value}
            layout="fullWidth"
            height={1000}
            backgroundColor="transparent"
          />
        </div>
        <RichTextElement className={styles.html} value={content.value} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    projectDetails: kontentItemProject(
      elements: { slug: { value: { eq: $slug } } }
    ) {
      elements {
        content {
          value
        }
        featuredimg {
          value {
            url
          }
        }
        stack {
          value
        }
        title {
          value
        }
      }
    }
  }
`

export default ProjectDetails
