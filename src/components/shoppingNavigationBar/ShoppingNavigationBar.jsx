import './ShoppingNavigationBar.css';
import Button from "../button/Button.jsx";

function ShoppingNavigationBar(){
    return(
        <nav>
            <Button name = "to the collection" clickable= "true"/>
            <Button name = "shop all bags" clickable="true"/>
            <Button name = "pre-orders" clickable="false"/>
        </nav>
    )
}
export default ShoppingNavigationBar;