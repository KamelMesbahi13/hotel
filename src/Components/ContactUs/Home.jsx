import { lazy } from "react";
import { useTranslation } from "react-i18next";
import Title from "../../GeneralFunctions/Title";
const Header = lazy(() => import("./Header/Header"));
const GetInTouch = lazy(() => import("./GetInTouch/GetInTouch"));
const Reservation = lazy(() => import("./Reservation/Reservation"));

const Home = () => {
  const { t } = useTranslation();
  Title(`H.A.Z  | ${t("contactus")}`);

  return (
    <div>
      <div>
        <Header />
      </div>
      <Reservation />
      <GetInTouch />
    </div>
  );
};

export default Home;
