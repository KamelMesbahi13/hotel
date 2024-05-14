import FindUs from "../../Home/FindUs/FindUs";
import Header from "./Header/Header";
import OurRooms from "./OurRooms/OurRooms";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <OurRooms />
      </div>
      <FindUs />
    </div>
  );
};

export default Home;
