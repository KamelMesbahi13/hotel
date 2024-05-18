import { useTranslation } from "react-i18next";
import FindUs from "../../Home/FindUs/FindUs";
import Header from "./Header/Header";
import OurRooms from "./OurRooms/OurRooms";
import Title from "../../../GeneralFunctions/Title";

const Home = () => {
  const { t } = useTranslation();
  Title(`H.A.Z  | ${t("studio_title")}`);
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
