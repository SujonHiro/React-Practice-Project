/*import Accordian from "./components/Accordian/Accordian";
 import RandomColor from "./components/random-color/RandomColor";
import StartRating from './components/star-Rating/StartRating';
import ImageSlider from "./components/Image-Slider/ImageSlider";
import LoadMoreProduct from "./components/load-more-Products/LoadMoreProduct";
import TreeView from "./components/tree-view/treeView";
import menus from "./components/tree-view/data";
import ScrollIndicator from "./components/Scroll-Indicator/ScrollIndicator";*/
import Comments from "./components/comment-replay/Comments";
import "./index.css"

function App() {
  return (
    <div>
     {/* <Accordian />*/}
     {/* <RandomColor/> */}
        {/*<StartRating noOfStars={10}/>*/}
        {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={"1"} limit={'10'}/> */}
        {/*Load more Products*/}
        {/*<LoadMoreProduct/>*/}
        {/*<TreeView menus={menus}/>*/}
       {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
        <Comments/>
    </div>
  );
}

export default App;
