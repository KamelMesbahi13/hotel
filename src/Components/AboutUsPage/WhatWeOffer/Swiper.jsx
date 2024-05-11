import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import ImgOne from "../../../assets/RoomGalleryOne.jpg";
import ImgTwo from "../../../assets/RoomGalleryTwo.jpg";
import ImgThree from "../../../assets/RoomGalleryThree.jpg";
import ImgFour from "../../../assets/RoomGalleryFour.jpg";
import ImgFive from "../../../assets/RoomGalleryFive.jpg";
import { useEffect, useState } from "react";

const Imgs = [
  {
    id: 1,
    Img: ImgOne,
  },
  {
    id: 2,
    Img: ImgTwo,
  },
  {
    id: 3,
    Img: ImgThree,
  },
  {
    id: 4,
    Img: ImgFour,
  },
  {
    id: 5,
    Img: ImgFive,
  },
];

export default function App() {
  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth < 768 ? 1.5 : 2.5
  );

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1.5 : 2.5);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9 }}
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
        className="mt-12"
      >
        <Swiper
          slidesPerView={slidesPerView}
          grabCursor={true}
          spaceBetween={30}
          className="mySwiper initialDirection"
        >
          {Imgs.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <img src={item.Img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </>
  );
}
