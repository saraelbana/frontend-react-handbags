import './App.css'
import ShoppingNavigationBar from "./components/shoppingNavigationBar/ShoppingNavigationBar.jsx";
import ShoppingItem from "./components/shoppingItem/ShoppingItem.jsx";
import TextBlock from "./components/textBlock/TextBlock.jsx";
import ImageBlock from "./components/imageBlock/ImageBlock.jsx";
import {theBrandText, ourStoryText} from "./constants/text.js";

function App() {
  return (
      <div>
          <h1>Handbags & Purses</h1>
          <ShoppingNavigationBar/>
          <main>
              <ShoppingItem name="The handy bag" price="400.5" imgPath="./src/assets/bag_1.png" imgTitle="The handy bag" stickerName="Best seller" stickerType="best-seller"/>
              <ShoppingItem name="The stylish bag" price="250" imgPath="./src/assets/bag_2.png" imgTitle="The stylish bag" stickerName="New collection" stickerType="new-collection"/>
              <ShoppingItem name="The simple bag" price="300.5" imgPath="./src/assets/bag_3.png" imgTitle="The simple bag" stickerName="Best seller" stickerType="best-seller"/>
              <ShoppingItem name="The trendy bag" price="150" imgPath="./src/assets/bag_4.png" imgTitle="The trendy bag" stickerName="New collection" stickerType="new-collection"/>
          </main>
          <footer>
              <TextBlock title="THE BRAND" text= {theBrandText}/>
              <ImageBlock title="The brand" imagePath="./src/assets/brand.png"/>
              <ImageBlock title = "our story" imagePath="./src/assets/our_story.png"/>
              <TextBlock title="OUR STORY" text= {ourStoryText}/>

          </footer>
      </div>
  )
}

export default App
