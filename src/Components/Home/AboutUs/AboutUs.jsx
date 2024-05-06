import { LazyLoadImage } from "react-lazy-load-image-component";
import RoomOne from "../../../assets/RoomOne.jpg";
import RoomTwo from "../../../assets/RoomTwo.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="mt-8 md:mt-36">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-row gap-x-4 md:gap-x-0 md:flex-row">
            <LazyLoadImage src={RoomOne} className="w-full" alt="Chambre 1" />
            <LazyLoadImage
              className="relative w-full -z-10 md:right-20 md:top-40"
              src={RoomTwo}
              alt="Chambre 2"
            />
          </div>
          <div className="md:w-[60%] mt-8 md:mt-0">
            <h1>Fancy Hotel Rooms</h1>
            <h2 className="my-4">Comfort and Easy Living</h2>
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
