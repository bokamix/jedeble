import React from "react"
import TitleSectionStyle from "../components/titlesection.module.scss";
import titleImage from "../images/gatsby-icon.png"

const TitleSection = () => {
return (
  <>
  
  <div className={TitleSectionStyle.container}>
        
          <p className={TitleSectionStyle.main__title}>“Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.” ANTOINE DE SAINT-EXUPÉRY</p>
        <p>Front-End Developer</p>
        
  </div>


  <div className={TitleSectionStyle.statisctcs__container}>
          <div className={TitleSectionStyle.content__section}>
              <h3>Jakie są najpopularniejsze CMS?</h3>
              <p>Data from 2018: BuiltWith.com, W3tech.com, SimilarTech, Google Trends.</p>     
              <div className={TitleSectionStyle.wrapper__statistics}>
                    <div className={TitleSectionStyle.item__statistics}>
                      <span>59%</span><p>Wordpress  </p>
                      <span>6.7%</span><p>Joomla </p>
                    </div>
                    <div className={TitleSectionStyle.item__statistics}>  
                      <span>4,7%</span><p>Drupal </p>
                      <span> 2.3%</span><p>Magento</p>
                    </div>
              </div>
          </div>
      <div className={TitleSectionStyle.content__section__img}>
          <img src={titleImage} width="300"alt="statistic" />
       </div>

  </div>





  <div className={TitleSectionStyle.statisctcs__container}>
        <div className={TitleSectionStyle.content__section__img}>
          <img src={titleImage} width="300"alt="statistic" />
        </div>
    <div className={TitleSectionStyle.content__section}>
      <h3>Gdzie ludzie używają internetów?</h3>
      <p>data from wearesocial.com, hootsuite.com</p>
          <div className={TitleSectionStyle.wrapper__statistics}>
            <div className={TitleSectionStyle.item__statistics}>
                <span>64%</span> <p> Mobile</p>
                <span>57% </span><p>desktop</p>
            </div>
            <div className={TitleSectionStyle.item__statistics}> 
                <span>45% </span><p>Social media </p>
                <span>43% </span> <p>Mobile social</p>
            </div>
          </div>
    </div>
 </div>

  
  <div className={TitleSectionStyle.card__section}>
        <div className={TitleSectionStyle.cart__wrapper}> 
            <div className={TitleSectionStyle.titleSection__card}>
                 <h3>Długi czas wczytywania strony</h3>
                 <p>Długi czas wczytywania strony</p>
            </div> 
           <div className={TitleSectionStyle.titleSection__card}>
                  <h3>Reklamy</h3>
                  <p>Reklamy</p>
            </div> 
           <div className={TitleSectionStyle.titleSection__card}>
                 <h3>Wyskakujące okienka</h3>
                 <p>Wyskakujące okienka</p>
            </div> 
           <div className={TitleSectionStyle.titleSection__card}>
                 <h3>Powtarzające się treści</h3>
                 <p>Powtarzające się treści</p>
           </div> 
        </div>
          <div>
            <h2>takie tam sobie rzeczy</h2><p>sijdasdoasjdoijsaoi jsdoiasjdoi</p>
          </div>
  </div>

  <h2>Maść na wysypkę internetową</h2>

  <div className={TitleSectionStyle.statisctcs__container}>
  <p>Zaufanie traci się tylko raz. Internetu nie naprawimy, ale możemy go przyśpieszyć i zadbać o jego większe bezpieczeństwo.</p>
        <div>Bezpieczny CMS</div>
        <div>Mobile first website</div>
        <div>Nie </div>
        <div>123123</div>
  </div>
  </>
)

}

  export default TitleSection