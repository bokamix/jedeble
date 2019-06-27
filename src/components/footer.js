import React from "react"
import styleFooter from "./footer.module.scss";




const Footer = () => {
return (
   <footer><div className={styleFooter.container}>

      
<div className={styleFooter.box}><p>Powered by Jede, Gatsby, ReactJS, GraphCMS, GraphQL</p> </div>

<div className={styleFooter.box}><p>Copyright © 2019 Jede</p></div>   
    </div>
    </footer> 
)

}

  export default Footer