import './TextBlock.css';
function TextBlock({title, text}) {
    return(
        <h2 className="textBlock">
            {title}
        </h2>
        <p>
            {text}
        </p>
    )
}
export default TextBlock;