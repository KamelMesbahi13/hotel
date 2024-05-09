import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ImgOne from "../../../assets/RoomGalleryOne.jpg";
import ImgTwo from "../../../assets/RoomGalleryTwo.jpg";
import ImgThree from "../../../assets/RoomGalleryThree.jpg";
import ImgFour from "../../../assets/RoomGalleryFour.jpg";
import ImgFive from "../../../assets/RoomGalleryFive.jpg";

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
  return (
    <>
      <div className="mt-12">
        <Swiper
          grabCursor={true}
          slidesPerView={3}
          spaceBetween={30}
          className="mySwiper"
        >
          {Imgs.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <img src={item.Img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
