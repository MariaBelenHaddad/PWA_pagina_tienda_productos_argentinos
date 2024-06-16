import "./Home.css"
import Header from "../../Components/Header/Header.js"
import Navbar from "../../Components/Navbar/Navbar.js"
import SectionDestaques from "../../Components/SectionDestaques/SectionDestaques.js";
import Footer from "../../Components/Footer/Footer.js"
import Button from "../../Components/Button/Button.js";


function Home() {

    return (
      <div className="Home">
        <Header/>
        <Navbar/>
        <div className="img-fondo d-flex flex-row justify-content-center align-items-end"> 
          <div className="d-flex flex-column align-items-center">
            <h3 className="title-yellow">envíos gratis para compras de más de 25€</h3>
          <Button className="btn-home" texto="Comprar ahora" url="/products"/></div>
        </div>
        <SectionDestaques/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;