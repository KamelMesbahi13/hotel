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
    title: "F3 haut standing",
    title_en: "F3 high standing",
    title_ar: "مكانة عالية F3",
  },

  {
    id: 2,
    img: RoomTwo,
    stats: "5000da / 100m²",
    button: "Plus de détails",
    button_en: "More details",
    button_ar: "المزيد من التفاصيل",
    title: "F3",
    title_en: "F3",
    title_ar: "F3",
  },

  {
    id: 3,
    img: RoomThree,
    stats: "5000da / 100m²",
    button: "Plus de détails",
    button_en: "More details",
    button_ar: "المزيد من التفاصيل",
    title: "F2",
    title_en: "F2",
    title_ar: "F2",
  },

  {
    id: 4,
    img: RoomFour,
    stats: "5000da / 100m²",
    button: "Plus de détails",
    button_en: "More details",
    button_ar: "المزيد من التفاصيل",
    title: "Studio",
    title_en: "Studio",
    title_ar: "استوديو",
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
        button: data.button_fr,
        title: data.title_fr,
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
          <div>
            <div className="grid grid-cols-2">
              {modifiedData.map((item) => {
                return (
                  <div key={item.id}>
                    <div>
                      <div>
                        <img src={item.img} alt={item.title} />
                      </div>
                      <div>
                        <button>{item.button}</button>
                      </div>
                      <div>
                        <h6>{item.stats}</h6>
                      </div>
                      <div>
                        <h2>{item.title}</h2>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartments;
