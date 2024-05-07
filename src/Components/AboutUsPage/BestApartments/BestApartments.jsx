import Deco from "../../../assets/AboutUsImgOne.jpg";

const BestApartments = () => {
  return (
    <div>
      <div className="mt-12 md:mt-36">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="mt-0 md:mt-24 md:w-1/2">
            <h2>Luxury property</h2>
            <h1 className="my-4">
              We offer the best hotel apartments in the city.
            </h1>
            <p>
              Check out our fancy hotel apartments for a comfy and luxurious
              stay, whether you re here for work or play. Get ready for some
              top-notch hospitality!
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <div>
              <div>
                <img src={Deco} alt="" />
              </div>
              <div className="hidden md:block">
                <div className="-z-10 bg-secondColor relative bottom-[29rem] h-[27rem] w-[30rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestApartments;
