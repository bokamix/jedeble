import React from "react";
import { graphql, useStaticQuery, Link} from "gatsby";
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
      <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Project</Link></li>
              <li><Link to="/">Technology</Link></li>
              <li><Link to="/">Contact</Link></li>
          </ul>

      </nav>

 <p>{data.site.siteMetadata.title}</p>
    
    </div>
)

}

  export default Header