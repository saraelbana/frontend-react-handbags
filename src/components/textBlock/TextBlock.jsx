import './TextBlock.css';
function TextBlock({title, text}){

    return(
        <article>
            <h2 className="textBlock">{title} </h2>
            <p>{text}</p>
        </article>
    )
}
export default TextBlock;