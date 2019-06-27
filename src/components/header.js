import React from "react";
import { Link} from "gatsby";
import headerStyles from "../components/header.module.scss";

const Header = () => {

return (
    <div className={headerStyles.header__graph}>
    <div className={headerStyles.container}>
      <nav className={headerStyles.navigation}>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Projects</Link></li>
              <li><Link to="/">Technology</Link></li>
              <li><Link to="/">Contact</Link></li>
              
          </ul>

      </nav>


    
    </div></div>
)

}

  export default Header