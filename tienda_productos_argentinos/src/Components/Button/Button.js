import "./Button.css"
import {Link} from 'react-router-dom';

function Button({texto, url}) {
    return (
      <div>
        <button className="btn my-2 btn-card"><Link className="react-link" to={url}><a>{texto}</a></Link></button>   
      </div>
    );
  }
  
  export default Button;