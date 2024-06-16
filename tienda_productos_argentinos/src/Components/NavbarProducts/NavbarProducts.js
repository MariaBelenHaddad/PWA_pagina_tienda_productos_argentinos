import {Link} from 'react-router-dom';
import "./NavbarProducts.css"
import Filter from '../Filter/Filter';

function NavbarProducts() {

    const filterCharacter = "Filtro"

    return (
    <div>
    <form className="p-4 bg-brown">
            <ul className="d-flex flex-row justify-content-around align-items-center">
                <li className="nav-item nav-list"><Link to={"/"} className='react-link'><a className="nav-link w-text-title" href="">La Paulina</a></Link></li>
                
                <li className="nav-item nav-list"><p className="nav-link w-text">Ver todos</p></li>
                <li className="nav-item nav-list"><p className="nav-link w-text" >Alfajores</p></li>
                <li className="nav-item nav-list"><p className="nav-link w-text" >Dulce de leche</p></li>
                <li className="nav-item nav-list"><p className="nav-link w-text" >Galletitas</p></li>
                <li className="nav-item nav-list"><p className="nav-link w-text" >Yerba Mate</p></li>

                <li className="nav-item nav-list"><a className="nav-link w-text" aria-current="page" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg></a></li>
            </ul>
    </form>

    </div>
    );
  }
  
  export default NavbarProducts;