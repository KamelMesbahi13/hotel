import { useTranslation } from "react-i18next";
import Boxes from "../Data";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const OurRooms = () => {
  const navigate = useNavigate();
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
  const handleLinkClick = (route) => {
    navigate(route);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="md:mt-56 mt-28">
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: -25 },
              visible: { opacity: 1, y: 0 },
            }}
          >
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
          </motion.div>
        </div>
        <div>
          <div className="grid grid-cols-1 mt-8 md:grid-cols-3 md:mt-20">
            {modifiedData.map((item) => {
              return (
                <div key={item.id}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9 }}
                    variants={{
                      hidden: { opacity: 0, y: -25 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className="p-8">
                      <div className="overflow-hidden rounded-lg shadow-lg dark:shadow-none bg-grey">
                        <img
                          className="object-cover w-full h-[35vh] md:h-[55vh] object-end"
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
                            <Link
                              onClick={handleLinkClick}
                              to={`/StudiosAppartements/${item.id}`}
                            >
                              <button className="buttonContactUs">
                                {item.button}
                              </button>
                            </Link>
                          </div>
                        </div>
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

export default OurRooms;
