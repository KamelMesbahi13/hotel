import RoomOne from "../../../assets/RoomOne.jpg";
import RoomTwo from "../../../assets/RoomTwo.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="mt-36">
        <div>
          <div>
            <img src={RoomOne} className="w-[35%]" alt="" />
            <img
              className="absolute top-[65rem] w-[25%] left-[20rem]"
              src={RoomTwo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
