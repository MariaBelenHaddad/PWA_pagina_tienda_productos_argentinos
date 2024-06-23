import {useState} from 'react';
import Button from "../Button/Button";
import "./Footer.css"

function Footer() {

  let [success,setSuccess]=useState(false);  
  let [validationError, setValidationError] =useState(false);

  const goToSendEmail=(event)=>{
    event.preventDefault();
    //console.log(event.target)
    let email = event.target.email.value
    suscribeToNewsletter(email);
    event.target.reset()
};

const suscribeToNewsletter=async(email)=>{ 

  let info= await fetch("http://localhost:4000/products/suscribe", 
      {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(email)
      })
    .then((resp)=>{return resp.json()})
    .catch((error)=>{console.log(error)}) 
  console.log(info);
      if(info.info.status === 201){
        setSuccess(true)
        const deleteMessage = setTimeout(() => {
          setSuccess(false);
        }, 3000);
          }
      if(info.info.status === 422 ){
        setValidationError(true)
        const deleteMessage = setTimeout(() => {
          setValidationError(false);
        }, 3000);
      }
  
};  
    

    return (
      <footer className="footer"> 
        <div className="d-flex flex-row justify-content-center py-5 div-footer">
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

        <div className="section-suscribe px-5">
          <h2 className="f-text-title">Suscríbete aquí:</h2>
          <div className="d-flex flex-column"> 
            <form class="form-suscribe" role="search" onSubmit={(event)=>goToSendEmail(event)}>
              <input id="email" className="form-control" type="email" placeholder="Ingrese su email" aria-label="email"/>
              <Button texto="Unirse" type="submit"/>
            </form>
            {/*Mensajes de alerta*/}
        { success === true && <p class="alert alert-success" role="alert">Se suscribió a nuestro newsletter!</p> }
        { validationError === true && <p class="alert alert-warning" role="alert">Errores de validación, ingrese su email correctamente</p>} 
          </div> 
        </div>

        </div>
        <p className="d-block nav-list f-text py-2 text-center">@2024 Programación Web Avanzada - UTN</p>
      </footer>
    );
  }
  
  export default Footer;