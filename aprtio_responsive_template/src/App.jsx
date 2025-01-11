import "./style/App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import SideBar from "./components/SideBar";
import Statistics from "./components/Statistics";
import LivingSpace from "./components/LivingSpace";
import Apartment from "./components/Apartment";
import Furniture from "./components/Furniture";
import Floor from "./components/Floor";
import LivingRoom from "./components/LivingRoom";
import Links from "./components/Links";
import Gallary from "./components/Gallary";
import Video from "./components/Video";
import FurnitureNews from "./components/FurnitureNews";
import Footer from "./components/Footer";
import MySlider from './Slider/MySlider';
function App() {
  return (
    <div className="App container">
      <Header />
      {/* <Slider /> */}
      <MySlider/>
      <SideBar />
      <Statistics />
      <LivingSpace />
      <Apartment
        p1={"Apartio With Best Deals & Favours"}
        title={"Select Apartment Style"}
        p2={`Sed perspiciatis unde omnis iste natus error sit 
          voluptatem laudantium totam rem
          aperiam eaqu ipsa quae ab illo inventore
          veritatis met quasis.`}
      />
      <Furniture />
      <Apartment
        p1={"Apartio With Best Deals & Favours"}
        title={"Apartment Floor Plans"}
        p2={`Sed perspiciatis unde omnis iste natus error 
          sit voluptatem laudantium totam rem
           aperiam eaqu ipsa quae ab illo inventore veritatis met quasis.`}
      />
      <Floor/>
      <LivingRoom/>
      <Apartment
        p1={"Apartio With Best Amenities & Deals"}
        title={"Modern Living Gallery"}
      />
      <Links/>
      <Gallary/>
      <Video/>
      <FurnitureNews/>
      <Footer/> 
    </div>
  );
}

export default App;
