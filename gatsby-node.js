const path = require('path');




exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve(`src/templates/projectTemplate.js`)
    const projectQuery = await graphql(`
    {portfolio{
        projects: projectsConnection(first: 100) {
        edges {
          node {
            status
            updatedAt
            createdAt
            id
            name
            about
            donedata
            imgscreen {
              status
              updatedAt
              createdAt
              id
              handle
              fileName
              height
              width
              size
              mimeType
              url
            }
            linktoproject
            slug
          }
        }}}}
        
        `)

        projectQuery.data.portfolio.projects.edges.forEach(project => {
          createPage({
                path:project.node.slug,
                component: projectTemplate,
                context:{
                  data:project.node
                }
           

          })
        });
    }
  