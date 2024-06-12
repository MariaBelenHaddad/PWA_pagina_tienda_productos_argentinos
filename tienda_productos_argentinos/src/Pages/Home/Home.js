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
        <div>
            <div className="img-fondo"><button className="btn d-block my-2 btn-home"><a>Comprar ahora</a></button></div>
        </div>
        <SectionDestaques/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;