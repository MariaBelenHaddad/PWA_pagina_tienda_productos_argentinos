import "./Home.css"
import Header from "../../Components/Header/Header.js"
import Navbar from "../../Components/Navbar/Navbar.js"
import SectionDestaques from "../../Components/SectionDestaques/SectionDestaques.js";
import Footer from "../../Components/Footer/Footer.js"
import Button from "../../Components/Button/Button.js";
import SolMayo from "../../Images/sol_mayo.png"


function Home() {

  console.log(SolMayo);

    return (
      <div className="Home">
        <Header/>
        <Navbar/>
        <div className="img-fondo d-flex flex-row justify-content-center align-items-end"> 
          <div className="d-flex flex-column align-items-center">
            <h3 className="title-yellow px-4">envíos gratis para compras de más de 25€</h3>
          <Button className="btn-home" texto="Comprar ahora" url="/products"/></div>
        </div>
        <SectionDestaques/>
        <article className="section-entregas">
        <div className="d-flex flex-column justify-content-center align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#F2C335" class="bi bi-truck" viewBox="0 0 16 16">
        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
        </svg>
          <p className="p-yellow">Gratis<br/>para compras de<br/> más de 25€</p></div>
          <div ></div>

          <img src={SolMayo} alt="Sol de mayo" width="200" height="200" className="m-5" ></img>

          <div className="d-flex flex-column justify-content-center align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#F2C335" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>
          <p className="p-yellow">Enviamos<br/>para<br/>todo Portugal</p></div>
        </article>
        <Footer/>
      </div>
    );
  }
  
  export default Home;