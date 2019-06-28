import React from "react"
import TitleSectionStyle from "../components/titlesection.module.scss";
import titleImage from "../images/gatsby-icon.png"

const TitleSection = () => {
return (
  <>
  
  <div className={TitleSectionStyle.container}>
    <div className={TitleSectionStyle.box}><h2 className={TitleSectionStyle.main__title}>Everything for Efficiency</h2>
    <p>Front-End Developer</p></div>
    <div className={TitleSectionStyle.box}></div>
    
  </div>
  </>
)

}

  export default TitleSection