import { lazy } from "react";
const Introduction = lazy(() => import("./Introduction/Introduction"));
const AboutUs = lazy(() => import("./AboutUs/AboutUs"));
const Mission = lazy(() => import("./Misson/Mission"));
const Apartments = lazy(() => import("./Apartments/Apartments"));
const ContactUsSection = lazy(() =>
  import("./ContactUsSection/ContactUsSection")
);
const FindUs = lazy(() => import("./FindUs/FindUs"));

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
      <FindUs />
    </>
  );
};

export default Home;
