import React from "react"
import TitleSectionStyle from "../components/titlesection.module.scss";
import titleImage from "../images/gatsby-icon.png";
import cmsImg from "../images/cms-img.png";

import internetImg from "../images/internet-img.png";

const TitleSection = () => {
return (
  <>
  
  <div className={TitleSectionStyle.container__header}>
        
          <div className={TitleSectionStyle.main__title}><p>“Perfection is achieved, not when there is nothing more to add, 
           but when there is nothing left to take away.” </p>
            <p>ANTOINE DE SAINT-EXUPÉRY</p></div>
        <div ><img src={internetImg}  alt="statistic" /></div>
        
  </div>



  
  <div className={TitleSectionStyle.card__section}>
        <div className={TitleSectionStyle.cart__wrapper}> 
            <div className={TitleSectionStyle.titleSection__card}>
                 <h3>Front-End</h3>
                
            </div> 
           <div className={TitleSectionStyle.titleSection__card}>
                  <h3>Design</h3>
                  
            </div> 
           <div className={TitleSectionStyle.titleSection__card}>
                 <h3>E-commerce</h3>
                
            </div> 
           <div className={TitleSectionStyle.titleSection__card}>
                 <h3>UX</h3>
                 
           </div> 
        </div>
          
  </div>


  </>
)

}

  export default TitleSection