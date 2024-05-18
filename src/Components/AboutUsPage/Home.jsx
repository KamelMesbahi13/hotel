import { lazy } from "react";
import { useTranslation } from "react-i18next";
import Title from "../../GeneralFunctions/Title";
const Header = lazy(() => import("./Header/Header"));
const BestApartments = lazy(() => import("./BestApartments/BestApartments"));
const WhatWeOffer = lazy(() => import("./WhatWeOffer/WhatWeOffer"));
const Stats = lazy(() => import("./Stats/Stats"));
const Faq = lazy(() => import("./Faq/Faq"));

const Home = () => {
  const { t } = useTranslation();
  Title(`H.A.Z  | ${t("aboutUs")}`);

  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div className="container">
          <BestApartments />
          <WhatWeOffer />
        </div>
        <Stats />
        <Faq />
      </div>
    </div>
  );
};

export default Home;
