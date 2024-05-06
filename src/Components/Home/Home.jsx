import Introduction from "./Introduction/Introduction";
import AboutUs from "./AboutUs/AboutUs";
import Mission from "./Misson/Mission";
import Apartments from "./Apartments/Apartments";
import ContactUsSection from "./ContactUsSection/ContactUsSection";

const Home = () => {
  return (
    <>
      <Introduction />
      <div className="container">
        <AboutUs />
        <Mission />
        <Apartments />
        <ContactUsSection />
      </div>
    </>
  );
};

export default Home;
