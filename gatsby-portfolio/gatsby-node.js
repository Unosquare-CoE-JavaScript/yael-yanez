const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      projects: allKontentItemProject {
        nodes {
          elements {
            slug {
              value
            }
          }
        }
      }
    }
  `)

  const { nodes } = data.projects

  nodes.forEach(({ elements }) => {
    actions.createPage({
      path: "/projects/" + elements.slug.value,
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: elements.slug.value },
    })
  })
}
