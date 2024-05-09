import Swiper from "./Swiper";

const WhatWeOffer = () => {
  return (
    <div className="md:mt-16 mt-72">
      <div>
        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <h2>What we offer</h2>
            <h1>Relaxation and luxury during your stay</h1>
          </div>
          <div className="mt-12 md:w-2/4 md:mt-20">
            <p>
              Relax and enjoy luxury with us. We have comfy rooms, great views,
              and a peaceful vibe just for you. Your comfort matters most!
            </p>
            <p className="mt-8">
              In our hotel apartment, we offer cozy rooms with kitchens, comfy
              beds, and amenities like WiFi, parking, and security. Choose from
              our F3, F2, and studio options. Our vision is to make you happy
              and feel at home while exploring our city.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Swiper />
      </div>
    </div>
  );
};

export default WhatWeOffer;
