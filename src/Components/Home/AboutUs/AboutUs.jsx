import RoomOne from "../../../assets/HomeImgOne.webp";
import RoomTwo from "../../../assets/HomeImgTwo.webp";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLinkClick = (route) => {
    navigate(route);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="mt-8 md:mt-36">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-row gap-x-4 place-content-center md:gap-x-0 md:flex-row">
            <motion.div
              className="w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                className=" h-[15rem] md:h-auto"
                src={RoomOne}
                alt="Chambre 1"
              />
            </motion.div>
            <motion.div
              className="relative w-1/2 -z-10 md:rtl:left-20 md:ltr:right-20 md:top-40"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                className=" h-[15rem] md:h-auto"
                src={RoomTwo}
                alt="Chambre 2"
              />
            </motion.div>
          </div>
          <div className="mt-8 md:w-full md:mt-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 200 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div>
                <h1>{t("about_us_home_header")}</h1>
                <h2 className="my-4">{t("about_us_home_subheader")}</h2>
                <p>{t("about_us_home_paragraph")}</p>
              </div>
              <div className="mt-8">
                <Link onClick={handleLinkClick} to="/À-Propos-de-Nous">
                  <button className="button">{t("button_two")}</button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
