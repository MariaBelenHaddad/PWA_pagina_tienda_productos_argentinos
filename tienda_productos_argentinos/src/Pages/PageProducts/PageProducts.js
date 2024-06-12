import "./PageProducts.css"
import Header from "../../Components/Header/Header.js"
import Navbar from "../../Components/Navbar/Navbar.js"
import Footer from "../../Components/Footer/Footer.js"
import SectionCards from "../../Components/SectionCards/SectionCards.js";

function PageProducts() {
    return (
      <div className="Home">
        <Header/>
        <Navbar/>
        <div>
            <h1>Página 2</h1>
        </div>
        <SectionCards></SectionCards>
        <Footer/>
      </div>
    );
  }
  
  export default PageProducts;