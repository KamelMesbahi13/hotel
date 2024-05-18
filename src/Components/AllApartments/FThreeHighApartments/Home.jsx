import { useTranslation } from "react-i18next";
import Title from "../../../GeneralFunctions/Title";
import Header from "./Header/Header";
import OurRooms from "./OurRooms/OurRooms";
import FindUs from "../../../Components/Home/FindUs/FindUs";

const FThreeHighApartments = () => {
  const { t } = useTranslation();
  Title(`H.A.Z  | ${t("fThree_high_title")}`);

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

export default FThreeHighApartments;
