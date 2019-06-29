import React from "react"
import TitleSectionStyle from "../components/titlesection.module.scss";
import titleImage from "../images/gatsby-icon.png"

const TitleSection = () => {
return (
  <>
  
  <div className={TitleSectionStyle.container}>
    <div className={TitleSectionStyle.box}><h2 className={TitleSectionStyle.main__title}>“Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.” ANTOINE DE SAINT-EXUPÉRY</h2>
    <p>Front-End Developer</p></div>
    <div className={TitleSectionStyle.box}></div>
    
  </div>
  <h2>Jakie są najpopularniejsze CMS?</h2>
  <div className={TitleSectionStyle.statisctcs__container}>
  <div>Wordpress 59% </div>
  <div>Joomla 6.7%</div>
  <div>Drupal 4.7%</div>
  <div>Magento 2.3%</div>
  <p>Data from 2018: BuiltWith.com, W3tech.com, SimilarTech, Google Trends.</p>
  </div>

  <h2>Gdzie ludzie używają internetów?</h2>
  <div className={TitleSectionStyle.statisctcs__container}>
  <div>64% Mobile</div>
  <div>57% desktop</div>
  <div>45% Social media user</div>
  <div>43% Mobile social media user</div>
  <p>data from wearesocial.com, hootsuite.com</p>
  </div>

  <h2>Co ich wkurza??</h2>
  <div className={TitleSectionStyle.statisctcs__container}>
      <div>DŁugi czas wczytywania strony</div>
      <div>Reklamy</div>
      <div>Wyskakujące okienka</div>
      <div>Powtarzające się treści</div>
  </div>

  <h2>Rozwiązanie na niektóre problemy</h2>
  <p>Internetu nie naprawimy, ale możemy go przyśpieszyć i zadbać o jego większe bezpieczeństwo.
    
  </p>
  <div className={TitleSectionStyle.statisctcs__container}>
  <div>Bezpieczny CMS</div>
  <div>Mobile first website</div>
  <div>Nie </div>
  <div>123123</div>
  </div>
  </>
)

}

  export default TitleSection