import React from "react";
import { Link} from "gatsby";
import headerStyles from "../components/header.module.scss";
import jedeLogo from "../images/logojededesign.png"
const Header = () => {

return (
    <div className={headerStyles.header__graph}>
    <div className={headerStyles.container}>
      <nav className={headerStyles.navigation}>
          <ul>
              
              <li><Link to="/"><img alt ="Logo Jede"src={jedeLogo} width="100" /> </Link></li>
              
              
          </ul>
       
        
      </nav>

      
    
    </div></div>
)

}

  export default Header