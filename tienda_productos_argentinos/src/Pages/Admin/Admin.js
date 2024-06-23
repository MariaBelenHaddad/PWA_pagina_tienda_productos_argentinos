
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Admin.css"
import CardEdit from "../../Components/CardEdit/CardEdit.js";
import Button from "../../Components/Button/Button.js"

function Admin() {

  let [listProducts,setListProducts]=useState([]); 

    const showProducts=async()=>{ 
        let info= await fetch("http://localhost:4000/products")
                .then((resp)=>{return resp.json()})
                .catch((error)=>{console.log(error)}) 

        //console.log(info.data) //muestro por consola la info que traje de la API
        setListProducts(info.data)    
    };

    const verProductos=(event)=>{
      event.preventDefault(); //manipular el envio 
      showProducts()
  };

  return (
  <div className='bg-brown' > 
    <header className="d-flex flex-column justify-content-center align-items-center header p-3">
      <Link to={"/"} className='react-link'><a className="w-title" href="">La Paulina</a></Link>
      <h1 className="w-text-title p-3">Panel del administrador</h1>
      <nav className="d-flex flex-row admin-panel">
        <button onClick={(event) =>verProductos(event)} className="btn m-2 btn-edit">Editar o Eliminar productos</button>
        <Link className="react-link" to="/newProduct"><button className="btn m-2 btn-edit">Crear Nuevo Producto</button></Link>
      </nav>
    </header>  

      {/*SectionCards*/}

    <section className="d-flex flex-column align-items-center my-4">

      <div className="d-flex flex-row justify-content-center display-cards my-3"> 
          
        { listProducts.length !== 0 ?
          listProducts.map((item)=>{
            return <CardEdit key={item.id} item={item} showProducts={showProducts}/>
          }) : null   
        }
        
      </div>

      <footer className='div-footer d-flex flex-column justify-content-center align-items-center py-3'>
      <Button texto="Ver como quedó la tienda" url="/products"/>
      <p className="d-block nav-list f-text py-2 text-center">@2024 Programación Web Avanzada - UTN</p>
      </footer>
      
    </section>
  </div> 
  );
}

export default Admin;