import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import RoomOne from "../../../assets/RoomSix.webp";
import RoomTwo from "../../../assets/RoomSeven.webp";
import RoomThree from "../../../assets/RoomEight.webp";
import RoomFour from "../../../assets/RoomNine.webp";
import { Link, useNavigate } from "react-router-dom";

const Boxes = [
  {
    id: 1,
    img: RoomOne,
    stats: "5000da / 100m²",
    link: "FTroisHighStandingAppartements",
    button: "Plus de détails",
    button_en: "More details",
    button_ar: "المزيد من التفاصيل",
    title: "F3: Haut standing: Maisons de luxe extraordinaires.",
    title_en: "F3: High Standing: Extraordinary Luxury Homes.",
    title_ar: "F3 شقق راقية : منازل فاخرة غير عادية.",
  },

  {
    id: 2,
    img: RoomTwo,
    stats: "5000da / 100m²",
    link: "FTroisAppartements",
    button: "Plus de détails",
    button_en: "More details",
    button_ar: "المزيد من التفاصيل",
    title: "F3: Appartements de luxe modernes.",
    title_en: "F3: Modern Luxury Apartments.",
    title_ar: "شقق F3 :  الحديثة الفاخرة. ",
  },

  {
    id: 3,
    img: RoomThree,
    stats: "5000da / 100m²",
    link: "FDeuxAppartements",
    button: "Plus de détails",
    button_en: "More details",
    button_ar: "المزيد من التفاصيل",
    title: "F2: Appartements de confort moderne.",
    title_en: "F2: Modern Comfort Apartments",
    title_ar: "F2: شقق عصرية مريحة.",
  },

  {
    id: 4,
    img: RoomFour,
    stats: "5000da / 100m²",
    link: "StudiosAppartements",
    button: "Plus de détails",
    button_en: "More details",
    button_ar: "المزيد من التفاصيل",
    title: "Studios: Chambres douillettes et pratiques.",
    title_en: "Studios: Cozy & Convenient Rooms.",
    title_ar: "استوديوهات: غرف مريحة وملائمة.",
  },
];

const Apartments = () => {
  const navigate = useNavigate();

  const handleLinkClick = (route) => {
    navigate(route);
    window.scrollTo(0, 0);
  };

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
        link: data.link,
      };
    }

    if (i18n.language === "en") {
      return {
        id: data.id,
        img: data.img,
        stats: data.stats,
        button: data.button_en,
        title: data.title_en,
        link: data.link,
      };
    }
    return data;
  });

  return (
    <div>
      <div>
        <div className="mt-20 md:mt-36 md:textCenter">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
            >
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
            </motion.div>
          </div>

          <div className="grid w-full grid-cols-1 mt-8 sm:gap-x-8 gap-y-8 md:gap-y-28 sm:grid-cols-2 md:mt-24">
            {modifiedData.map((item) => {
              return (
                <div key={item.id}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9 }}
                    variants={{
                      hidden: { opacity: 0, y: 25 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={item.img}
                        className="h-[15rem] duration-500 hover:scale-105 sm:h-[20rem] md:h-[25rem] w-full rounded-xl"
                        alt={item.title}
                      />
                    </div>
                    <div>
                      <div className="textRight">
                        <Link to={item.link} onClick={handleLinkClick}>
                          <button className="relative cursor-pointer px-4 py-2 font-bold duration-300 hover:bg-secondColor hover:-translate-y-2 hover:text-white bg-white dark:border-[10px] border-2 shadow-xl rounded-[3rem] bottom-4 border-backgroundColor text-mainColor">
                            {item.button}
                          </button>
                        </Link>
                      </div>
                      <div>
                        <h1 className="mb-2 text-sm italic font-light">
                          {item.stats}
                        </h1>
                      </div>
                      <div>
                        <h6>{item.title}</h6>
                      </div>
                    </div>
                  </motion.div>
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
