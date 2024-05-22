import './ShoppingItem.css';
import {getPriceDisplayFormat} from "../../helpers/GetPriceDisplayFormat.js";
import Sticker from "../stickers/sticker/Sticker.jsx";

// eslint-disable-next-line react/prop-types
function ShoppingItem({price,name, imgPath, imgTitle, stickerName, stickerType}) {
    let priceDisplayFormat = getPriceDisplayFormat(price);
    return (
      <article className="shopping-item">
          <Sticker name={stickerName} type={stickerType}/>
          <img src={imgPath} alt={imgTitle}/>
          <p>{name}</p>
          <h4>{priceDisplayFormat}</h4>
      </article>
  );
}
export default ShoppingItem;