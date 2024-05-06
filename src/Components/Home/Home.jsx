import Introduction from "./Introduction/Introduction";
import AboutUs from "./AboutUs/AboutUs";
import Mission from "./Misson/Mission";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Introduction />
      <div className="container">
        <AboutUs />
        <Mission />
        <WhyChooseUs />
      </div>
    </>
  );
};

export default Home;
