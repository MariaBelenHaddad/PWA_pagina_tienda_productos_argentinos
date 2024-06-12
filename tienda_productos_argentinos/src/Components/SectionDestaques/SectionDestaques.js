import "./SectionDestaques.css"
import Card from "../../Components/Card/Card.js";
import Button from "../../Components/Button/Button.js"

function SectionDestaques() {
    let texto = "Ver todos los productos"
    return (
    <section className="d-flex flex-column justify-content-center align-items-center my-5">
        <h2 className="title">Productos en destaque</h2>
        <div className="d-flex flex-row justify-content-center my-2">        
            <Card name={"Alfajor"} price={"2,50€"}/>
            <Card/>
            <Card/>
        </div>
        <Button texto={texto}/>

    </section>
    );
  }
  
  export default SectionDestaques;