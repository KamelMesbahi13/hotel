import BestApartments from "./BestApartments/BestApartments";
import Faq from "./Faq/Faq";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div className="container">
          <BestApartments />
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default Home;
