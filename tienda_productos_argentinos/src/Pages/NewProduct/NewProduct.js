import {useState} from 'react';
import {Link} from 'react-router-dom';
import "./NewProduct.css"
import Button from '../../Components/Button/Button.js';

function NewProduct() {

    let [success,setSuccess]=useState(false);  
    let [validationError, setValidationError] =useState(false);

  const goToCreate=(event)=>{
    event.preventDefault();
    //console.log(event.target)
    //console.log("Estoy en la función handleCreate")

    let productName = event.target.productName.value
    let price = event.target.price.valueAsNumber
    let stock = event.target.stock.valueAsNumber
    let category = event.target.category.value
    let image = event.target.image.value 

    let values = {productName, price, stock, category, image}
    //console.log(values)
    createNewItem(values)
};

const createNewItem=async(values)=>{ 
    
    let info= await fetch("http://localhost:4000/products/new", 
        {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
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
      <div className='bg-brown' >
        <header className="d-flex flex-column justify-content-center align-items-center header p-3">
          <Link to={"/"} className='react-link'><a className="w-title" href="">La Paulina</a></Link>
          <h1 className="w-text-title p-3">Panel del administrador</h1>
          <nav className="d-flex flex-row admin-panel">
          <Link className="react-link" to="/admin"><button className="btn m-2 btn-edit">Editar o Eliminar productos</button></Link>
          <Link className="react-link" to="/products"><button className="btn m-2 btn-edit">Ver como quedó la tienda</button></Link>
          </nav>
        </header>  

      {/*Formulario*/}
      <section className='d-flex flex-column justify-content-center align-items-center '>
      <div className='bg-white d-flex justify-content-center p-4'>
      <form onSubmit={(event)=>goToCreate(event)}>
        <h2>Crear nuevo producto</h2>
        
        <label htmlFor="productName" className="form-label">Nombre del producto</label>
        <input type="text" className="form-control my-1" id="productName" aria-describedby="nombre del producto"/>

        <label htmlFor="price" className="form-label">Precio</label>
        <input type="number" step="0.01" className="form-control my-1" id="price" aria-describedby="precio del producto"/>
        {/*la propiedad step sirve para incluir decimales*/} 

        <label htmlFor="stock" className="form-label">Stock</label>
        <input type="number" className="form-control my-1" id="stock" aria-describedby="cantidad del producto"/>

        <label htmlFor="category" className="form-label">Categoría</label>
        <input className="form-control" list="datalistOptions" id="category" placeholder="Elegir categoría..."/>
            <datalist id="datalistOptions">
            <option value="alfajores"/>
            <option value="dulce de leche"/>
            <option value="galletitas"/>
            <option value="yerba mate"/>
            </datalist>
        
        <label htmlFor="image" className="form-label">Url Imagen</label>
        <input type="text" className="form-control my-1" id="image" aria-describedby="Url imagen"/>

        <div className="d-flex flex-row justify-content-center">
            <button type="submit" className="btn btn-nuevo-producto">Submit</button>
        </div>    

      </form>
      </div>
      
        {/*Mensajes de alerta*/}
        { success === true && <p class="alert alert-success" role="alert">Ingresó un nuevo producto con éxito</p> }
        { validationError === true && <p class="alert alert-warning" role="alert">Errores de validación, ingrese los datos correctamente</p>} 

        </section>

        <footer className='div-footer d-flex flex-column justify-content-center align-items-center py-3'>
        <Button texto="Editar o eliminar productos" url="/admin"/>
        <p className="d-block nav-list f-text py-2 text-center">@2024 Programación Web Avanzada - UTN</p>
        </footer>
            
    </div>
                 
    );
  }
  
  export default NewProduct;
