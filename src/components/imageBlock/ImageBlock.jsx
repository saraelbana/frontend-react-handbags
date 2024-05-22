import './ImageBlock.css';

// eslint-disable-next-line react/prop-types
function ImageBlock({title, imagePath}){
    return(
        <section>
            <img src={imagePath} alt={title} />
        </section>
    )
}
export default ImageBlock;