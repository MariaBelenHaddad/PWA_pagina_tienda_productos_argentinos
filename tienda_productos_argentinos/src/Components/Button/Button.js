import "./Button.css"

function Button({texto}) {
    return (
      <div>
        <button className="btn my-2 btn-card"><a>{texto}</a></button>   
      </div>
    );
  }
  
  export default Button;