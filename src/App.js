/* import Accordian from "./components/Accordian/Accordian"; */
import RandomColor from "./components/random-color/RandomColor";
import StartRating from './components/star-Rating/StartRating';
import ImageSlider from "./components/Image-Slider/ImageSlider";

function App() {
  return (
    <div>
     {/*  <Accordian /> */}
     {/* <RandomColor/> */}
        {/*<StartRating noOfStars={10}/>*/}
        <ImageSlider url={'https://picsum.photos/v2/list'} page={"1"} limit={'10'}/>
    </div>
  );
}

export default App;
