import "./Filter.css"

export default function Filter({title,filterName,filterProducts}) {

    return(
        <div className="form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id={filterName} value={filterName} onClick={(event)=>filterProducts(event.target)} />
            <label className="form-check-label" htmlFor={filterName}>{title}</label>
        </div>
    )
}
