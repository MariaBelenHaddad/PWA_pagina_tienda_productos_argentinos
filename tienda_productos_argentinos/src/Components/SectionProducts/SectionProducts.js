import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import "./SectionProducts.css"
import Card from "../../Components/Card/Card.js";
import Button from "../../Components/Button/Button.js"

function SectionProducts() {

    let [listProducts,setListProducts]=useState([]); //genero un estado que inicia como un array vacio, luego lo modifico con la info que traigo de la API
    let [allProducts,setAllProducts]=useState([])

    const showProducts=async()=>{ 
        let info= await fetch("http://localhost:4000/products")
                .then((resp)=>{return resp.json()})
                //.then((data)=>{return data})
                .catch((error)=>{console.log(error)})//Acción si no logra obtener la info

        //console.log(info.data) //muestro por consola la info que traje de la API
        setListProducts(info.data)
        setAllProducts(info.data)       
    };

    const handlerSearch=(event)=>{
        event.preventDefault(); //manipular el envio 
        let category = event.target.id
        if (category === "all"){
            setListProducts(allProducts)
        }else{
            showByCategory(category)
        }
        
    };

    const showByCategory=async(category)=>{ 
        let info= await fetch("http://localhost:4000/products/search/?category="+category)
        .then((resp)=>{return resp.json()})
        .catch(err=>console.log(err))
        //console.log(info.data)
        setListProducts(info.data)    
    };

   useEffect(()=>{
        showProducts()
    },[]);

    let texto = "Volver al inicio"

    return (
    <section>
        {/*NavBar*/}

        <form className="background py-4">
            <ul className="d-flex flex-row justify-content-around align-items-center">
                <li className="nav-item nav-list"><Link to={"/"} className='react-link'><a className="nav-link w-text-title" href="">La Paulina</a></Link></li>
                
                {/*DropDown Button*/}

                <div class="dropdown">
                <button class="btn btn-categories dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                </button>
                <ul class="dropdown-menu">
                    <li><a id="all" class="dropdown-item" onClick={(event) =>handlerSearch(event)}>Ver todos</a></li>
                    <li><a id="alfajores" class="dropdown-item" onClick={(event) =>handlerSearch(event)}>Alfajores</a></li>
                    <li><a id="dulce de leche" class="dropdown-item" onClick={(event) =>handlerSearch(event)}>Dulce de leche</a></li>
                    <li><a id="galletitas" class="dropdown-item" onClick={(event) =>handlerSearch(event)}>Galletitas</a></li>
                    <li><a id="yerba mate" class="dropdown-item" onClick={(event) =>handlerSearch(event)}>Yerba Mate</a></li>
                </ul>
                </div>

                <button id="all" className="dropdown-categories nav-link w-text" onClick={(event) =>handlerSearch(event)}>Ver todos</button>
                <button id="alfajores" className="dropdown-categories nav-link w-text" onClick={(event) =>handlerSearch(event)}>Alfajores</button>
                <button id="dulce de leche" className="dropdown-categories nav-link w-text" onClick={(event) =>handlerSearch(event)}>Dulce de leche</button>
                <button id="galletitas" className="dropdown-categories nav-link w-text" onClick={(event) =>handlerSearch(event)}>Galletitas</button>
                <button id="yerba mate" className="dropdown-categories nav-link w-text" onClick={(event) =>handlerSearch(event)}>Yerba Mate</button>
                               
                <li className="dropdown-categories nav-item nav-list"><a className="nav-link w-text" aria-current="page" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg></a></li>
                
            </ul>
        </form>

        {/*SectionCards*/}

        <section className="d-flex flex-column align-items-center my-4">
        <h2 className="title">Productos</h2>
        <div className="d-flex flex-row justify-content-center display-cards my-2">   
            {  
            listProducts.length !== 0 ?
                listProducts.map((item)=>{
                    return <Card key={item.id} image={item.image} productName={item.productName} price={item.price}/>
                })
            :
                <div class="alert alert-success" role="alert">
                    Sorry! There are no products.
                </div>
            }
        </div>
        <Button texto={texto} url="/"/>
        </section>
        </section>
    );
  }
  
  export default SectionProducts;