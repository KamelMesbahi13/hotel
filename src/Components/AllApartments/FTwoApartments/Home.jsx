import Header from "./Header/Header";
import OurRooms from "./OurRooms/OurRooms";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <OurRooms />
      </div>
    </div>
  );
};

export default Home;
