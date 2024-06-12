import "./Card.css"

function Card({name, price}) {
    return (
      <div className="d-flex flex-column align-content-center p-2 mx-2 card-product">
        <img src="../../../Images/sol.mayo.png" alt="product"/>
        <p className="c-text">{name}</p>
        <p className="c-text">{price}</p>        
      </div>
    );
  }
  
  export default Card;