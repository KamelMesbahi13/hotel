import { lazy } from "react";
import { useTranslation } from "react-i18next";
import Title from "../../GeneralFunctions/Title";
const Introduction = lazy(() => import("./Introduction/Introduction"));
const AboutUs = lazy(() => import("./AboutUs/AboutUs"));
const Mission = lazy(() => import("./Misson/Mission"));
const Apartments = lazy(() => import("./Apartments/Apartments"));
const ContactUsSection = lazy(() =>
  import("./ContactUsSection/ContactUsSection")
);
const FindUs = lazy(() => import("./FindUs/FindUs"));

const Home = () => {
  const { t } = useTranslation();

  Title(`H.A.Z  | ${t("home")}`);

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
