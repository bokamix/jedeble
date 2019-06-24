const path = require('path');




exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const albumTemplate = path.resolve(`src/templates/albumTemplate.js`)
    const albumsQuery = await graphql(`
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
            }
            linktoproject
            slug
          }
        }}}}
        
        `)

       albumsQuery.data.portfolio.projects.edges.forEach(project => {
          createPage({
                path:project.node.slug,
                component: albumTemplate,
                context:{
                  data:project.node
                }
           

          })
        });
    }
  