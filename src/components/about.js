import React from "react"
import aboutStyles from "./about.module.scss"
import photoshop from "../images/photoshop.png";
import uxpin from "../images/uxpin.png";
import jsIcon from "../images/javascript.png";
import GatsbyIcon from "../images/gatsby.png";
import reactLogo from "../images/reactjs.png";
import netlifyLogo from "../images/netlify.png";
import NPMlogo from "../images/npm.png";
import gitLogo from "../images/git.png";
import JAMStackLogo from "../images/jamstack.png";
import GraphCMS from "../images/graphcms.png";
import GraphQLLogo from "../images/graphql.png";
import Chatfuel from "../images/chatfuel.png";
import Ableton from "../images/ableton.png";
import SonyVegasPro from "../images/sony-vegas-pro.png";
import FacebookADS from "../images/facebook-ads.png"
 
const About = () => {
return (
  <>
  <div className={aboutStyles.section}>
 <h2>Jestem programistem</h2>
 <div className={aboutStyles.wrapper__boxes}>
<div className={aboutStyles.box}>Creative
  <div className={aboutStyles.wrapper__logos}>
    <img alt= "uxpin" src={uxpin}  />
    <img src={photoshop} alt="photoshop" /></div></div>
<div className={aboutStyles.box}>Development<div className={aboutStyles.wrapper__logos}>
          <img alt= "JavaScript Icon" src={jsIcon}  />
          <img alt= "Gatsby" src={GatsbyIcon}  />
          <img alt= "ReactJs Icon" src={reactLogo}  />
          <img alt= "Netlify Logo" src={netlifyLogo}  />
          <img alt= "NPM" src={NPMlogo} width="130" />
          <img alt= "Git Logo" src={gitLogo}  />
          <img className={aboutStyles.logoText} alt= "JAMStack" src={JAMStackLogo}  />
          <img className={aboutStyles.logoText} alt= "GraphCMS" src={GraphCMS}  />
          <img className={aboutStyles.logoText} alt= "GraphQL" src={GraphQLLogo}  />
  </div></div>
<div className={aboutStyles.box}> Fun<div className={aboutStyles.wrapper__logos}>
  <img alt= "Facebook Ads" src={FacebookADS}  />
  <img alt= "Ableton Live" src={Ableton}  />
  <img alt= "Sony Vegas Pro" src={SonyVegasPro}  />
  <img alt= "Chatfuel" src={Chatfuel}  /></div>
  </div>

 </div>
 </div>
  </>
)

}

  export default About