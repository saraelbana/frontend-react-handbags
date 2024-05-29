export const getPriceDisplayFormat  = (price) =>{
    console.log("price: ", price);
    let priceDisplayFormat = "€";
    if (price.includes(".")) {
        priceDisplayFormat += price.substring(0, price.indexOf("."));
        priceDisplayFormat += ",";
        priceDisplayFormat += price.substring(price.indexOf(".") + 1, price.length);
    } else {
        priceDisplayFormat += price;
        priceDisplayFormat += ",-";
    }
    console.log("priceDisplayFormat: ", priceDisplayFormat);
    return priceDisplayFormat;
}