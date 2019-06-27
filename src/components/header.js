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
    <div className={headerStyles.header__graphics}>
    <div className={headerStyles.container}>
      <nav className={headerStyles.navigation}>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Projects</Link></li>
              <li><Link to="/">Technology</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><button>show my party mode</button></li>
          </ul>

      </nav>

 <p>{data.site.siteMetadata.title}</p>
    
    </div></div>
)

}

  export default Header