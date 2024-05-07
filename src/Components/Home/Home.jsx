import Introduction from "./Introduction/Introduction";
import AboutUs from "./AboutUs/AboutUs";
import Mission from "./Misson/Mission";
import Apartments from "./Apartments/Apartments";
import ContactUsSection from "./ContactUsSection/ContactUsSection";
import FindUs from "./FindUs/FindUs";

const Home = () => {
  return (
    <>
      <Introduction />
      <div className="container">
        <AboutUs />
        <Mission />
        <Apartments />
      </div>
      <ContactUsSection />
      <div className="container">
        <FindUs />
      </div>
    </>
  );
};

export default Home;
