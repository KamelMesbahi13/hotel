import GetInTouch from "./GetInTouch/GetInTouch";
import Header from "./Header/Header";
import Reservation from "./Reservation/Reservation";

const Home = () => {
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
