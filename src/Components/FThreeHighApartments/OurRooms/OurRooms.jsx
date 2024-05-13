import { useTranslation } from "react-i18next";
import RoomOne from "../../../assets/fThreeHighStandingOne.jpg";
import RoomTwo from "../../../assets/fThreeHighStandingTwo.jpg";
import RoomThree from "../../../assets/fThreeHighStandingThree.jpg";
import RoomFour from "../../../assets/fThreeHighStandingFour.jpg";
import RoomFive from "../../../assets/fThreeHighStandingFive.jpg";
import RoomSix from "../../../assets/fThreeHighStandingSix.jpg";

const OurRooms = () => {
  const Boxes = [
    {
      id: 1,
      img: RoomOne,
      stats: "5000da / 100m²",
      button: "Plus de détails",
      button_en: "More details",
      button_ar: "المزيد من التفاصيل",
      new: "Nouveau",
      new_en: "New",
      new_ar: "جديد",
      price: "5000da",
      day: "Jour",
      da_en: "Day",
      day_ar: "يوم",
      title: "Maisons de luxe extraordinaires.",
      title_en: "Extraordinary Luxury Homes.",
      title_ar: " شقق راقية.",
    },

    {
      id: 2,
      img: RoomTwo,
      stats: "5000da / 100m²",
      button: "Plus de détails",
      button_en: "More details",
      button_ar: "المزيد من التفاصيل",
      new: "Nouveau",
      new_en: "New",
      new_ar: "جديد",
      price: "5000da",
      day: "Jour",
      da_en: "Day",
      day_ar: "يوم",
      title: "Maisons de luxe extraordinaires.",
      title_en: "Extraordinary Luxury Homes.",
      title_ar: " شقق راقية.",
    },

    {
      id: 3,
      img: RoomThree,
      stats: "5000da / 100m²",
      button: "Plus de détails",
      button_en: "More details",
      button_ar: "المزيد من التفاصيل",
      new: "Nouveau",
      new_en: "New",
      new_ar: "جديد",
      price: "5000da",
      day: "Jour",
      da_en: "Day",
      day_ar: "يوم",
      title: "Maisons de luxe extraordinaires.",
      title_en: "Extraordinary Luxury Homes.",
      title_ar: " شقق راقية.",
    },

    {
      id: 4,
      img: RoomFour,
      stats: "5000da / 100m²",
      button: "Plus de détails",
      button_en: "More details",
      button_ar: "المزيد من التفاصيل",
      new: "Nouveau",
      new_en: "New",
      new_ar: "جديد",
      price: "5000da",
      day: "Jour",
      da_en: "Day",
      day_ar: "يوم",
      title: "Maisons de luxe extraordinaires.",
      title_en: "Extraordinary Luxury Homes.",
      title_ar: " شقق راقية.",
    },

    {
      id: 5,
      img: RoomFive,
      stats: "5000da / 100m²",
      link: "fTroisAppartements",
      button: "Plus de détails",
      button_en: "More details",
      button_ar: "المزيد من التفاصيل",
      new: "Nouveau",
      new_en: "New",
      new_ar: "جديد",
      price: "5000da",
      day: "Jour",
      da_en: "Day",
      day_ar: "يوم",
      title: "Maisons de luxe extraordinaires.",
      title_en: "Extraordinary Luxury Homes.",
      title_ar: " شقق راقية.",
    },

    {
      id: 6,
      img: RoomSix,
      stats: "5000da / 100m²",
      link: "fTroisAppartements",
      button: "Plus de détails",
      button_en: "More details",
      button_ar: "المزيد من التفاصيل",
      new: "Nouveau",
      new_en: "New",
      new_ar: "جديد",
      price: "5000da",
      day: "Jour",
      da_en: "Day",
      day_ar: "يوم",
      title: "Maisons de luxe extraordinaires.",
      title_en: "Extraordinary Luxury Homes.",
      title_ar: " شقق راقية.",
    },
  ];

  const { t } = useTranslation();

  return (
    <div>
      <div className="md:mt-56">
        <div>
          <div>
            {" "}
            <div className="mt-8 md:mt-64 md:textCenter">
              <div>
                <div className="md:w-3/4 md:mx-auto textCenter">
                  <h2 className="mb-2">
                    {t("f3_high_standing_space_our_rooms_subheader")}
                  </h2>
                  <h1 className="mb-4">
                    {t("f3_high_standing_space_our_rooms_header")}
                  </h1>
                  <div className="flex justify-center md:mt-2">
                    <div className="w-8 h-1 md:w-12 bg-secondColor"></div>
                    <div className="flex ml-1">
                      <div className="w-[3px] h1 bg-secondColor"></div>
                      <div className="w-[3px] mx-1 bg-secondColor"></div>
                      <div className="w-[3px] h1 bg-secondColor"></div>
                    </div>
                    <div className="w-8 h-1 md:w-12 bg-secondColor"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 mt-20">
            {Boxes.map((item) => {
              return (
                <div key={item.id}>
                  <div>
                    <div className="p-8">
                      <div className="overflow-hidden bg-white rounded-lg shadow-2xl">
                        <img
                          className="object-cover object-end"
                          src={item.img}
                          alt="Home in Countryside"
                        />
                        <div className="p-6 text-backgroundColor">
                          <div className="flex items-baseline">
                            <span className="py-1 text-xs font-semibold tracking-wide text-teal-800 uppercase bg-teal-200 rounded-full">
                              {item.new}
                            </span>
                            <div className="ml-2 text-xs font-semibold tracking-wide uppercase">
                              3 beds &bull; 2 baths
                            </div>
                          </div>
                          <h4 className="mt-2 text-lg font-semibold leading-tight truncate">
                            {item.title}
                          </h4>
                          <div className="mt-1">
                            <span>{item.price}</span>
                            <span className="text-sm text-gray-600">
                              / {item.day}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRooms;
