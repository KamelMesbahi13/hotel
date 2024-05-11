import Header from "./Header/Header";
import Reservation from "./Reservation/Reservation";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container">
        <Reservation />
      </div>
    </div>
  );
};

export default Home;
