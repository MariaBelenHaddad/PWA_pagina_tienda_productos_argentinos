import Button from "../Button/Button";
import "./Footer.css"

function Footer() {
    let texto = "Unirse"
    return (
      <footer className="div-footer"> 
        <div className="d-flex flex-row justify-content-center py-5">
        <ul className="d-flex flex-column justify-content-end align-items-start px-5">
          <h2 className="f-text-title-h2">La Paulina</h2>
            <li className="nav-item nav-list"><a className="nav-link f-link" aria-current="page" href="">Tienda</a></li>
            <li className="nav-item nav-list"><a className="nav-link f-link" aria-current="page" href="">Sobre Nosotros</a></li>
            <li className="nav-item nav-list"><a className="nav-link f-link" aria-current="page" href="">Envíos y devoluciones</a></li>        
        </ul>
        <ul className="d-flex flex-column justify-content-end align-items-start px-5">
            <li className="nav-item nav-list f-text">info@lapaulina.com</li>
            <li className="nav-item nav-list f-text">Tel. 401-2354</li>
            <li className="nav-item nav-list f-text">Av. Sarmiento 980</li>
            <li className="nav-item nav-list f-text">Salta, Argentina CP 4400</li>          
        </ul>
        <div className="d-flex flex-column justify-content-center align-items-start px-5">
            <h2 className="f-text-title">Suscríbete aquí:</h2>
            <div className="d-flex flex-column"> 
            <form class="d-flex flex-row" role="search">
                <input className="form-control" type="email" placeholder="Ingrese su email" aria-label="email"/>
                <Button texto={texto} type="submit"/>
            </form></div>   
        </div></div>
        <p className="d-block nav-list f-text py-2 text-center">@2024 Programación Web Avanzada - UTN</p>
      </footer>
    );
  }
  
  export default Footer;