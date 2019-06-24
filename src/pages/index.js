import React from "react";
import { Link } from "gatsby";
import Portfolio from "../components/portfolio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.css";


const IndexPage = () => (
  <>
    <SEO title="Home" />   
    <Layout>
    <h1 className="Section__Title">Portfolio</h1>
    <Portfolio />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
      </div>
     
      <Link to="/">Go to page 2</Link>

    </Layout>








    
    
  </>
)

export default IndexPage
