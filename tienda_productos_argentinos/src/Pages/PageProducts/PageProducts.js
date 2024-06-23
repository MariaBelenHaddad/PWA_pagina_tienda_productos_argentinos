import "./PageProducts.css"
import Header from "../../Components/Header/Header.js"
import Footer from "../../Components/Footer/Footer.js"
import SectionProducts from "../../Components/SectionProducts/SectionProducts.js";

function PageProducts() {
    return (
      <div className="Home">
        <Header/>
        <SectionProducts/>
        <Footer/>
      </div>
    );
  }
  
  export default PageProducts;