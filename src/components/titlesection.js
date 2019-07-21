import React from "react"
import TitleSectionStyle from "../components/titlesection.module.scss";


import internetImg from "../images/React.js_logo.png";

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
  <div className={TitleSectionStyle.about__container}>
        <h2>About</h2>
  <p>Cześć, jestem Wojtek Janiak
Tworzyłem między innymi komercyjne strony internetowe dla firm, sklepy, katalogi produktów i blogi.
 Mam doświadczenie w projektowaniu grafiki i pisaniu aplikacji webowych. </p></div>
     
      <div className={TitleSectionStyle.card__wrapper}> 
            <div className={TitleSectionStyle.titleSection__card}>
                 <h2>Front-End</h2>
                
            </div> 
           <div className={TitleSectionStyle.titleSection__card}>
                  <h2>Design</h2>
                
                  
            </div> 
           <div id="card3co" className={TitleSectionStyle.titleSection__card}>
                 <h2>E-commerce</h2>
                 
            </div> 
           <div className={TitleSectionStyle.titleSection__card}>
                 <h2>UX</h2>
              
           </div> 
        </div>
      
          
  </div>


  </>
)

}

  export default TitleSection