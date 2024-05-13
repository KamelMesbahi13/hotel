import Header from "./Header/Header";
import OurRooms from "./OurRooms/OurRooms";
import FindUs from "../../../Components/Home/FindUs/FindUs";

const FThreeHighApartments = () => {
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
