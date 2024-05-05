import { LazyLoadImage } from "react-lazy-load-image-component";
import RoomOne from "../../../assets/RoomOne.jpg";
import RoomTwo from "../../../assets/RoomTwo.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="mt-36">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex">
            <LazyLoadImage src={RoomOne} className="w-full" alt="" />
            <LazyLoadImage
              className="relative w-full -z-10 right-20 top-40"
              src={RoomTwo}
              alt=""
            />
          </div>
          <div className="w-3/4">
            <h1>Fancy Hotel Rooms</h1>
            <h2>Comfort and Easy Living</h2>
            <p>
              {" "}
              Our fancy hotel rooms give you the best comfort and easy living.
              With nice interiors and personal help, everything is made to make
              your stay great. Enjoy a nice place where we care about your
              comfort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
