import "./Card.css"

function Card({image, productName, price}) {
    return (
      <div className="d-flex flex-column mx-2 py-3 card-product justify-content-between align-items-center">
          <p className='c-text'>{productName}</p>
          <div className="d-flex justify-content-center align-items-center product-img"><img className="img p-3" src={image} alt="Product"/></div>
          <p className='c-text'>€ {price}</p>
          <button className="btn-cart">Añadir al carrito</button> 
          </div>
                

    );
  }
  
  export default Card;

  