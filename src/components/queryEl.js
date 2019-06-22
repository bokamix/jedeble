import React from "react"

import {StaticQuery, graphql} from "gatsby";

const Portfolio = () => (
  <StaticQuery
    query={graphql`
    query {
      portfolio{
        projects {
          id
          name
          about
          donedata
          imgscreen {
            id
            url
          }
          linktoproject
        }
        
      }
   }
    
    
    `}
    render={({portfolio: {projects}}) => (
      <>
      {projects.map(project => (
          
       <div key={project.id} >
          <h1>{project.name}</h1>
          <h2>{project.about}</h2>
          <h4>{project.donedata}</h4>
          <a href={project.linktoproject}><img src={project.imgscreen.url} alt={project.imgscreen.id} width="300"/></a>
       </div>
         
        ))
        }
       </>
     
    )}
  />

)
export default Portfolio;