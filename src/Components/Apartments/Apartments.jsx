import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
import RoomOne from "../../assets/RoomSix.jpg";
import RoomTwo from "../../assets/RoomSeven.jpg";
import RoomThree from "../../assets/RoomEight.jpg";
import RoomFour from "../../assets/RoomNine.jpg";

const Boxes = [
  {
    id: 1,
    img: RoomOne,
    stats: "5000da / 100m²",
    button: "Plus de détails",
    button_en: "More details",
    button_ar: "المزيد من التفاصيل",
    title: "F3: Haut standing: Maisons de luxe extraordinaires.",
    title_en: "F3 High Standing: Extraordinary Luxury Homes.",
    title_ar: "F3 شقق راقية: منازل فاخرة غير عادية.",
  },

  {
    id: 2,
    img: RoomTwo,
    stats: "5000da / 100m²",
    button: "Plus de détails",
    button_en: "More details",
    button_ar: "المزيد من التفاصيل",
    title: "F3 Modern Luxury Apartments.",
    title_en: "F3 Modern Luxury Apartments.",
    title_ar: "شقق F3 الحديثة الفاخرة",
  },

  {
    id: 3,
    img: RoomThree,
    stats: "5000da / 100m²",
    button: "Plus de détails",
    button_en: "More details",
    button_ar: "المزيد من التفاصيل",
    title: "F2: Modern Comfort Apartments.",
    title_en: "F2: Appartements de confort moderne.",
    title_ar: "F2: شقق عصرية مريحة.",
  },

  {
    id: 4,
    img: RoomFour,
    stats: "5000da / 100m²",
    button: "Plus de détails",
    button_en: "More details",
    button_ar: "المزيد من التفاصيل",
    title: "Studios: Chambres douillettes et pratiques.",
    title_en: "Studios: Cozy & Convenient Rooms.",
    title_ar: "استوديوهات: غرف مريحة وملائمة.",
  },
];

const Apartments = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const modifiedData = Boxes.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        img: data.img,
        stats: data.stats,
        button: data.button_ar,
        title: data.title_ar,
      };
    }

    if (i18n.language === "en") {
      return {
        id: data.id,
        img: data.img,
        stats: data.stats,
        button: data.button_en,
        title: data.title_en,
      };
    }
    return data;
  });

  return (
    <div>
      <div>
        <div>
          <div className="mt-8 md:mt-48 md:textCenter">
            <div>
              <div className="md:w-3/4 md:mx-auto textCenter">
                <h2 className="mb-2">{t("apartment_subheader")}</h2>
                <h1 className="mb-4">{t("apartment_header")}</h1>
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

          <div className="grid w-full grid-cols-1 mt-8 md:gap-x-8 gap-y-8 md:gap-y-16 sm:grid-cols-2 md:mt-36">
            {modifiedData.map((item) => {
              return (
                <div key={item.id}>
                  <div>
                    <div>
                      <img
                        src={item.img}
                        className="h-[25rem] w-full rounded-xl"
                        alt={item.title}
                      />
                    </div>
                    <div>
                      <div className="textRight">
                        <button className="relative cursor-pointer px-4 py-2 font-bold duration-300 hover:bg-secondColor hover:-translate-y-2 hover:text-white bg-white border-[10px] rounded-[3rem] bottom-4 border-backgroundColor text-mainColor">
                          {item.button}
                        </button>
                      </div>
                      <div>
                        <h1 className="mb-2 text-sm italic font-bold">
                          {item.stats}
                        </h1>
                      </div>
                      <div>
                        <h6>{item.title}</h6>
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

export default Apartments;