import React from "react";
import { Link } from "gatsby";
import Portfolio from "../components/portfolio";
import Layout from "../components/layout";
import SEO from "../components/seo";



const IndexPage = () => (
  <>
    <SEO title="Home" />   
    <Layout>
    
    <Portfolio />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
      </div>
     
      <Link to="/">Go to page 2</Link>

    </Layout>








    
    
  </>
)

export default IndexPage
