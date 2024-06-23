import {useState,useEffect} from 'react';
import "./CardEdit.css"

function CardEdit({item, showProducts}) {

  let [hide,setHide]=useState(true);
  let [success,setSuccess]=useState(false);  
  let [validationError, setValidationError] =useState(false);

  const showMore=()=>{ 
    setHide(false)
};

const ocultar=()=>{
  setHide(true)
};

  const goToDelete=(event)=>{
    event.preventDefault(); 
    deleteItem(event.target.id)
};

  const deleteItem=async(productId)=>{ 
    console.log(productId)
    let info= await fetch("http://localhost:4000/products/"+productId, {method: 'DELETE'})
      .then((resp)=>{return resp.json()})
      .catch((error)=>{console.log(error)}) 
    console.log(info);
    showProducts()

  };  

  const goToEdit=(event)=>{
    event.preventDefault(event.target); 
    let productId = event.target.id

    //Tomo los valores del formulario
    let productName = event.target.productName.value 
    let price = event.target.price.valueAsNumber 
    let stock = event.target.stock.valueAsNumber
    let category = event.target.category.value 
    let image = event.target.image.value 
    const values = {}

    //Analizando los datos
    if(productName != ""){ values.productName = productName; console.log("Agregué: "+productName)}
    if(isNaN(price)){console.log("Price is NaN")}else{ values.price = price; console.log("Agregué: "+price)}
    if(isNaN(stock)){console.log("Stock is NaN")}else{ values.stock = stock; console.log("Agregué: "+stock)}
    if(category != ""){ values.category = category; console.log("Agregué: "+category)}
    if(image != ""){ values.image = image; console.log("Agregué: "+image)}

    //Veo los valores ingresados por consola
    //console.log("Values")
    //console.log(values)

    editItem(productId, values);
    event.target.reset()
};

const editItem=async(productId, values)=>{ 
  console.log(productId, values)
  let info= await fetch("http://localhost:4000/products/"+productId, 
    {method: 'PATCH', 
    headers: { 'Content-Type': 'application/json' }, 
    body:  JSON.stringify(values) })
    .then((resp)=>{return resp.json()})
    .catch((error)=>{console.log(error)}) 
  console.log(info);
  if(info.info.status === 200){
    setSuccess(true)
    const deleteMessage = setTimeout(() => {
      setSuccess(false);
      showProducts();
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
    <section className="d-flex flex-column mx-2 py-3 card-product justify-content-between align-items-center">
      <p className='c-text'>{item.productName}</p>
      <div className="d-flex justify-content-center align-items-center product-img"><img className="img p-3" src={item.image} alt="Product"/></div>
      <button id={item.id} onClick={() =>showMore()} className="btn-cart m-1">Editar</button> 
      <button id={item.id} onClick={(event) =>goToDelete(event)} className="btn-cart m-1">Eliminar</button>
  
    { hide === false ?  
    
    <div className="edit-card p-4">

        <div className="d-flex flex-row justify-content-between">
          <h2>Editar producto</h2>
          <button className="btn btn-x m-2" onClick={ocultar}>X</button>
        </div>
          
        <form id={item.id} onSubmit={(event)=>goToEdit(event)}>
          <div className="mb-3 m-2">
          
          <label htmlFor="productName" className="form-label">Nombre del producto: {item.productName}</label>
          <input type="text" className="form-control" id="productName" aria-describedby="nombre del producto" placeholder="Ingrese nuevo nombre"/>

          <label htmlFor="price" className="form-label">Precio actual: € {item.price}</label>
          <input type="number" step="0.01" className="form-control" id="price" aria-describedby="precio del producto" placeholder="Ingrese nuevo precio"/>
          
          <label htmlFor="stock" className="form-label">Stock actual: {item.stock}</label>
          <input type="number" className="form-control" id="stock" aria-describedby="cantidad del producto" placeholder="Ingrese nuevo stock"/>

          <label htmlFor="category" className="form-label">Categoría actual: {item.category}</label>
          <input className="form-control" list="datalistOptions" id="category" placeholder="Selecciones categoria"/>
          <datalist id="datalistOptions">
          <option value="alfajores"/>
          <option value="dulce de leche"/>
          <option value="galletitas"/>
          <option value="yerba mate"/>
          </datalist>

          <label htmlFor="image" className="form-label">Url Imagen</label>
          <input type="text" className="form-control" id="image" aria-describedby="Url imagen" placeholder="Ingrese nueva url"/>

        </div>

        <div className="d-flex flex-row justify-content-center">
          <button type="submit" className="btn btn-card m-2">Editar</button>
        </div>
            
        </form>

        {/*Mensajes de alerta*/}
        { success === true && <p class="alert alert-success" role="alert">Editó un producto con éxito</p> }
        { validationError === true && <p class="alert alert-warning" role="alert">Errores de validación, ingrese los datos correctamente</p>}
                  
        </div>

    : null }

    </section>
                
    );
  }
  
  export default CardEdit;

  