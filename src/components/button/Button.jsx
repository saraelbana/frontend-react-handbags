import './Button.css';

function Button({name, clickable}) {
    let disableButton = true;
    if(clickable === "true"){
        disableButton = false;
    }
    else disableButton = true;
    return(
        <button className="button" disabled={disableButton} >
            {name}
        </button>
    )
}
export default Button;