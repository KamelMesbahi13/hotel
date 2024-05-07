import BestApartments from "./BestApartments/BestApartments";
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
        </div>
      </div>
    </div>
  );
};

export default Home;
