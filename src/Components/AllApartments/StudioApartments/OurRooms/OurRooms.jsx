import { useTranslation } from "react-i18next";
import RoomOne from "../../../../assets/fThreeHighStandingOne.jpg";
import RoomTwo from "../../../../assets/fThreeHighStandingTwo.jpg";
import RoomThree from "../../../../assets/fThreeHighStandingThree.jpg";
import RoomFour from "../../../../assets/fThreeHighStandingFour.jpg";
import RoomFive from "../../../../assets/fThreeHighStandingFive.jpg";
import RoomSix from "../../../../assets/fThreeHighStandingSix.jpg";
import { Link } from "react-router-dom";

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
      day_en: "Day",
      day_ar: "يوم",
      room: "2 chambres",
      room_en: "2 rooms",
      room_ar: "2 غرف",
      bath: "1 salle de bain",
      bath_en: "1 bethroom",
      bath_ar: "1 حمام",
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
      day_en: "Day",
      day_ar: "يوم",
      room: "2 chambres",
      room_en: "2 rooms",
      room_ar: "2 غرف",
      bath: "1 salle de bain",
      bath_en: "1 bethroom",
      bath_ar: "1 حمام",
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
      day_en: "Day",
      day_ar: "يوم",
      room: "2 chambres",
      room_en: "2 rooms",
      room_ar: "2 غرف",
      bath: "1 salle de bain",
      bath_en: "1 bethroom",
      bath_ar: "1 حمام",
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
      day_en: "Day",
      day_ar: "يوم",
      room: "2 chambres",
      room_en: "2 rooms",
      room_ar: "2 غرف",
      bath: "1 salle de bain",
      bath_en: "1 bethroom",
      bath_ar: "1 حمام",
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
      day_en: "Day",
      day_ar: "يوم",
      room: "2 chambres",
      room_en: "2 rooms",
      room_ar: "2 غرف",
      bath: "1 salle de bain",
      bath_en: "1 bethroom",
      bath_ar: "1 حمام",
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
      day_en: "Day",
      day_ar: "يوم",
      room: "2 chambres",
      room_en: "2 rooms",
      room_ar: "2 غرف",
      bath: "1 salle de bain",
      bath_en: "1 bethroom",
      bath_ar: "1 حمام",
      title: "Maisons de luxe extraordinaires.",
      title_en: "Extraordinary Luxury Homes.",
      title_ar: " شقق راقية.",
    },
  ];

  const { i18n } = useTranslation();

  const modifiedData = Boxes.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        img: data.img,
        new: data.new_ar,
        room: data.room_ar,
        bath: data.bath_ar,
        button: data.button_ar,
        title: data.title_ar,
        price: data.price,
        day: data.day_ar,
      };
    }

    if (i18n.language === "en") {
      return {
        id: data.id,
        img: data.img,
        button: data.button_en,
        new: data.new_en,
        room: data.room_en,
        bath: data.bath_en,
        title: data.title_en,
        price: data.price,
        day: data.day_en,
      };
    }
    return data;
  });

  const { t } = useTranslation();

  return (
    <div>
      <div className="md:mt-56 mt-28">
        <div>
          <div>
            {" "}
            <div className="mt-8 md:mt-12 md:textCenter">
              <div>
                <div className="md:w-3/4 md:mx-auto textCenter">
                  <h2 className="mb-2">{t("studios_our_rooms_subheader")}</h2>
                  <h1 className="mb-4">{t("studios_our_rooms_header")}</h1>
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
          <div className="grid grid-cols-1 mt-8 md:grid-cols-3 md:mt-20">
            {modifiedData.map((item) => {
              return (
                <div key={item.id}>
                  <div>
                    <div className="p-8">
                      <div className="overflow-hidden bg-white rounded-lg">
                        <img
                          className="object-cover object-end"
                          src={item.img}
                          alt="Home in Countryside"
                        />
                        <div className="p-6 text-mainColor">
                          <div className="flex items-baseline">
                            <span className="py-1 text-xs font-extrabold tracking-wide uppercase text-secondColor">
                              {item.new}
                            </span>
                            <div className="text-xs font-semibold tracking-wide uppercase ltr:ml-2 rtl:mr-2">
                              {item.room} &bull; {item.bath}
                            </div>
                          </div>
                          <h4 className="mt-2 text-lg font-semibold leading-tight truncate">
                            {item.title}
                          </h4>
                          <div className="mt-1">
                            <span>{item.price}</span>
                            <span className="text-sm"> / {item.day}</span>
                          </div>
                          <div className="mt-4">
                            <Link to="">
                              <button className="buttonContactUs">
                                {item.button}
                              </button>
                            </Link>
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
