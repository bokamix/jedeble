import React from "react"

import {StaticQuery, graphql, Link} from "gatsby";
import stylePortfolio from "./portfolio.module.scss"
const Portfolio = () => (
  <div className={stylePortfolio.container}>
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
          slug
        }
        
      }
   }
    
    
    `}
    render={({portfolio: {projects}}) => (
      <>
      {projects.map(project => (
          
      <div key={project.id} className={stylePortfolio.div__children}>
       <Link className={stylePortfolio.link}to={project.slug}>  <div className={stylePortfolio.card}><img className={stylePortfolio.img__cover} src={project.imgscreen.url} alt={project.imgscreen.id} />
         <div className={stylePortfolio.div__children__info}>
                <h2>{project.name}</h2>
                <p>{project.about}</p>
                <p>{project.donedata}</p>
          </div></div></Link>
         
          
       </div>
         
        ))
        }
       </>
     
    )}
  /></div>

)
export default Portfolio;