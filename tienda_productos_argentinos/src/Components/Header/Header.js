import "./Header.css"

function Header() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <h1 className="h-text-title">Tienda de productos argentinos</h1>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="yerba mate" aria-label="Search"/>
            <button className="btn btn-header" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
    );
  }
  
  export default Header;