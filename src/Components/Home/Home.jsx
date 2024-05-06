import Introduction from "./Introduction/Introduction";
import AboutUs from "./AboutUs/AboutUs";
import Mission from "./Misson/Mission";
import Apartments from "./Apartments/Apartments";

const Home = () => {
  return (
    <>
      <Introduction />
      <div className="container">
        <AboutUs />
        <Mission />
        <Apartments />
      </div>
    </>
  );
};

export default Home;
