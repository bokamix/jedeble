import React from "react";
import { graphql, useStaticQuery} from "gatsby";
import headerStyles from "../components/header.module.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
  query{
    site {
      siteMetadata{
         title
      }

    }

  }
  `)

return (
    <div className={headerStyles.container}>
 <p>{data.site.siteMetadata.title}</p>
    
    </div>
)

}

  export default Header