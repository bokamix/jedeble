import React from "react"
import TitleSectionStyle from "../components/titlesection.module.scss";
import titleImage from "../images/gatsby-icon.png"

const TitleSection = () => {
return (
  <>
  
  <div className={TitleSectionStyle.container}>
    <div className={TitleSectionStyle.box}><h2>Everything for Efficiency</h2>
    <p>Front-End Developer</p></div>
    <div className={TitleSectionStyle.box}><img src={titleImage} alt="title img"/></div>
    
  </div>
  </>
)

}

  export default TitleSection