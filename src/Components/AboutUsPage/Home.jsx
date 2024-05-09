import BestApartments from "./BestApartments/BestApartments";
import Faq from "./Faq/Faq";
import Header from "./Header/Header";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import Stats from "./Stats/Stats";

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
        </div>
        <Faq />
        <Stats />
      </div>
    </div>
  );
};

export default Home;
