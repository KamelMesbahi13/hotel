import { Link } from "react-scroll";
import Hotel from "../../../assets/HotelOne.webp";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex flex-col md:flex-row">
        <div>
          <div className="container mt-8 md:px-20 xl:mt-32">
            <div>
              <h1>{t("introduction_header")}</h1>
              <h2 className="my-4">{t("introduction_subheader")}</h2>
              <p>{t("introduction_text")}</p>
            </div>
            <div>
              <div className="mt-8">
                <Link
                  activeClass="active"
                  to="mission"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={900}
                >
                  <button className="button">{t("button_one")}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:w-3/4 md:mt-0">
          <img src={Hotel} alt="Hotel" />
        </div>
      </div>
    </motion.div>
  );
};

export default Introduction;
