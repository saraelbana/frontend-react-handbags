import './Sticker.css';
import BestSellerSticker from "../bestSellerSticker/BestSellerSticker.jsx";
import NewCollectionSticker from "../newCollectionSticker/NewCollectionSticker.jsx";

//while playing around with the code I noticed I can save the HTML elements that is changed based on the if statement in a variable and then return this  variable in the return statement
// I did that to have an umbrella for the new-collection and best-seller stickers (ie let them be treated as one component) while also defining each one as an independent component
// so that if I want to edit in any of these component separately I can do that without affecting the other component.
// and if I want to edit both i would be able to do that through the umbrella component (sticker)

function Sticker({type, name}) {
    let stickerHTMLCode = '';
    if(type === "best-seller"){
        stickerHTMLCode = <BestSellerSticker name = {name}/>;
    }
    else if(type === "new-collection"){
    stickerHTMLCode = <NewCollectionSticker name = {name}/>;

    }
    return stickerHTMLCode;
}
export default Sticker;