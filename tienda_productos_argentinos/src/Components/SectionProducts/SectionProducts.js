import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import "./SectionProducts.css"
import Card from "../../Components/Card/Card.js";
import Button from "../../Components/Button/Button.js"
import Filter from "../../Components/Filter/Filter.js"

function SectionProducts() {

    let [listProducts,setListProducts]=useState([]); //genero un estado que inicia como un array vacio, luego lo modifico con la info que traigo de la API
    let [allProducts,setAllProducts]=useState([])
    let [filtrosAplicados,setFiltrosAplicados]=useState([]);

    const showProducts=async()=>{ 

    let info=
    [{
        id : 5000,
        productName: "Playadito 1kg",
        stock: 25,
        price: 10.00,
        category:"yerba mate",
        image: "../../../Images/products/playadito_1kg.png"
    },
    { 
        id : 5001,
        productName: "Playadito 500g",
        stock: 25,
        price: 6.00,
        category:"yerba mate",
        image: "../../Images/products/playadito_500g.jpg"
    },
    { 
        id : 5002,
        productName: "Cruz de Malta 1kg",
        stock: 0,
        price: 9.00,
        category:"yerba mate",
        image: "../../Images/products/cruz-de_malta_1kg.jpg"
    },
    { 
        id: 5003,
        productName: "Mañanita 1kg",
        stock: 0,
        price: 9.50,
        category:"yerba mate",
        image: "../../Images/products/mananita_1kg.png"
    },
    { 
        id : 5004,
        productName: "Taragui 1kg",
       stock: 0,
        price: 8.00,
        category:"yerba mate",
        image:"../../Images/products/taragui_1kg.jpg"
    },{ 
        id : 5017,
        productName: "Mardel clásico 1kg",
        stock: 0,
        price: 9.00,
        category:"dulce de leche",
        image:"../../Images/products/mardel_clasico_1kg.jpg"
    },
    { 
        id : 5019,
        productName: "San Ignacio 450gr",
        stock: 0,
        price: 6.00,
        category:"dulce de leche",
        image:"../../Images/products/san_ignacio_450gr.jpg"
    },
    { 
        id : 5020,
        productName: "Havanna Chocolate x 6",
        stock: 0,
        price: 12.00,
        category:"alfajores",
        image:"../../Images/products/havanna.jpg"
    }]

    setListProducts(info)
    setAllProducts(info)  

    };

    const filterProducts=(target)=>{
        //se fija si se "pulso" o "despulso" un filtro y arma la lista de todos los filtros a aplicar
        if(target.checked === true){
            //si se pulso (marcamos el checkbox) agrega a una lista el filtro aplicado
            setFiltrosAplicados([...filtrosAplicados,target.value])
        }else{
            //si "despulso" el filtro
            setListProducts(allProducts)
            let filtrosNuevos=filtrosAplicados.filter((filtro)=> filtro !== target.value);//saco el filtro aplicado de la lista
            setFiltrosAplicados(filtrosNuevos)//cambio los filtros aplicados
        }
    }


    useEffect(()=>{
        setListProducts(allProducts)
        console.log(filtrosAplicados)
        console.log(allProducts)
        //por cada filtro que tiene pulsado, modifica la informacion de "listaPersonaje"
        filtrosAplicados.forEach((data)=>   {
            if(data === "all"){
                setListProducts([])
            }else if(data === "alfajores"){
                let dataFiltrada=listProducts.filter((product)=>product.category === data);
                setListProducts(dataFiltrada)
            }else if(data === "dulce de leche"){
                let dataFiltrada=listProducts.filter((product)=>product.category === data);
                setListProducts(dataFiltrada)
            }else if(data === "galletitas"){
                let dataFiltrada=listProducts.filter((product)=>product.category === data);
                setListProducts(dataFiltrada)
            }else if(data === "yerba mate"){
                let dataFiltrada=listProducts.filter((product)=>product.category === data);
                setListProducts(dataFiltrada)
        }})
        
    },[filtrosAplicados])

    useEffect(()=>{
        showProducts()
    },[]);

    let texto = "Volver al inicio"

    return (
    <section>
        {/*Navbar*/}

        <form className="p-4 bg-brown">
            <ul className="d-flex flex-row justify-content-around align-items-center">
                <li className="nav-item nav-list"><Link to={"/"} className='react-link'><a className="nav-link w-text-title" href="">La Paulina</a></Link></li>
                <Filter filterName="all" title="Ver todos" filterProducts={filterProducts}/>
                <Filter filterName="alfajores" title="Alfajores" filterProducts={filterProducts}/>                
                <Filter filterName="dulce de leche" title="Dulce de leche" filterProducts={filterProducts}/>
                <Filter filterName="galletitas" title="Galletitas" filterProducts={filterProducts}/>
                <Filter filterName="yerba mate" title="Yerba Mate" filterProducts={filterProducts}/>
                
                <li className="nav-item nav-list"><a className="nav-link w-text" aria-current="page" href="">
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