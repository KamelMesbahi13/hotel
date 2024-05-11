import { lazy } from "react";
const Header = lazy(() => import("./Header/Header"));
const GetInTouch = lazy(() => import("./GetInTouch/GetInTouch"));
const Reservation = lazy(() => import("./Reservation/Reservation"));

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
