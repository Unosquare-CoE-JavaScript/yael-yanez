import React from "react"
import { graphql } from "gatsby"
import { RichTextElement } from "@kentico/gatsby-kontent-components"
import Layout from "../components/Layout"

const About = ({ data }) => {
  const { elements } = data.pageContent
  const { title, content } = elements

  return (
    <Layout>
      <div>
        <h1>{title.value}</h1>
        <RichTextElement value={content.value} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetAboutPageContent {
    pageContent: kontentItemPage(
      elements: { id: { value: { eq: "about-page" } } }
    ) {
      elements {
        title {
          value
        }
        content {
          value
        }
      }
    }
  }
`

export default About
