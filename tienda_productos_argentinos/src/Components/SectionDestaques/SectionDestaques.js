import {useState,useEffect} from 'react';
import "./SectionDestaques.css"
import Card from "../../Components/Card/Card.js";
import Button from "../../Components/Button/Button.js"

function SectionDestaques() {

    let [listProducts,setListProducts]=useState([]);
    let [bestProducts,setBestProducts]=useState([]); 

    const showProducts=async()=>{ 
        let info= await fetch("http://localhost:4000/products")
                .then((resp)=>{return resp.json()})
                //.then((data)=>{return data})
                .catch((error)=>{console.log(error)})//Acción si no logra obtener la info

        setListProducts(info.data) 
        setBestProducts([info.data[0], info.data[1], info.data[2], info.data[3]])
    };
    
    useEffect(()=>{
        showProducts()  
    },[]);

    let texto = "Ver todos los productos"
    
    return (
    <section className="d-flex flex-column align-items-center my-4">
        <h2 className="title">Productos en destaque</h2>
        <div className="d-flex flex-row justify-content-center display-cards m-2 gap-2">  
        
   
        {  
            listProducts.length !== 0 ?
                bestProducts.map((item)=>{
                    return <Card key={item.id} image={item.image} productName={item.productName} price={item.price}/>
                })
            :
                <div class="alert alert-success" role="alert">
                    Sorry! There are no products.
                </div>
            }

        </div>
        <Button texto={texto} url="/products"/>

    </section>
);

}
  
  export default SectionDestaques;