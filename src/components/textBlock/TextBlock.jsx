import './TextBlock.css';
// eslint-disable-next-line react/prop-types
function TextBlock({title, text}){

    return(
        <section>
            <h2 className="textBlock">{title} </h2>
            <p>{text}</p>
        </section>
    )
}
export default TextBlock;