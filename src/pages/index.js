import React from "react";
import Portfolio from "../components/portfolio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.css";
import About from "../components/about"
import Contact from "../components/contact"
import TitleSection from "../components/titlesection";

const IndexPage = () => (
  <>
    <SEO title="Home" />   
   
    <Layout>
     
      <TitleSection />
    <h1 className="Section__Title">Portfolio</h1>
    <Portfolio />
    
     <About />
     <Contact />

    </Layout>
 
 
 
 








    
    
  </>
)

export default IndexPage
