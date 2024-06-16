import {Link} from 'react-router-dom';
import "./SectionDestaques.css"
import Card from "../../Components/Card/Card.js";
import Button from "../../Components/Button/Button.js"

function SectionDestaques() {

    let listProducts = [
        { 
            id : 5013,
            productName: "Havanna 250gr",
            stock: 0,
            price: 3.50,
            category:"dulce de leche",
            image:"https://www.nevis.pt/wp-content/uploads/2020/03/s11623-doce-de-leite-havanna-250g.jpg"
        },{ 
            id : 5003,
            productName: "Mañanita 1kg",
            stock: 0,
            price: 9.50,
        category:"yerba mate",
            image: "https://m.media-amazon.com/images/I/51X5hHLZnhL._AC_.jpg"
        },{
            id : 5000,
            productName: "Playadito 1kg",
            stock: 25,
            price: 10.00,
            category:"yerba mate",
            image: "https://m.media-amazon.com/images/I/51eDQeFIKPL._AC_SX679_.jpg"
        },{ 
            "id" : 5031,
            "productName": "Biscochitos Don Satur dulces 200gr",
            "stock": 0,
            "price": 3.50,
            "category":"galletitas",
            "image": "https://www.cebate.pt/494-large_default/bizcochos-dulces-don-satur-200gr.jpg"
        }
    ];

    let texto = "Ver todos los productos"
    
    return (
    <section className="d-flex flex-column align-items-center my-4">
        <h2 className="title">Productos en destaque</h2>
        <div className="d-flex flex-row justify-content-between display-cards my-2">   
            {   
            listProducts.length !== 0 ?
                listProducts.map((item)=>{
                    return <Card key={item.id} image={item.image} productName={item.productName} price={item.price}/>
                })
            :
                <div class="alert alert-success" role="alert">
                    Sorry! There are no characters width all those properties.
                </div>
            }
        </div>
        <Button texto={texto} url="/products"/>

    </section>
    );
  }
  
  export default SectionDestaques;