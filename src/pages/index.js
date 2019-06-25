import React from "react";
import Portfolio from "../components/portfolio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.css";
import About from "../components/about"

const IndexPage = () => (
  <>
    <SEO title="Home" />   
    <Layout>
    <h1 className="Section__Title">Portfolio</h1>
    <Portfolio />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
      </div>
     <About />
     

    </Layout>








    
    
  </>
)

export default IndexPage
