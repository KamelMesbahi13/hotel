import Stats from "../Home/AboutUs/Stats/Stats";
import BestApartments from "./BestApartments/BestApartments";
import Faq from "./Faq/Faq";
import Header from "./Header/Header";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div className="container">
          <BestApartments />
          <WhatWeOffer />
          <Faq />
        </div>
        <Stats />
      </div>
    </div>
  );
};

export default Home;
