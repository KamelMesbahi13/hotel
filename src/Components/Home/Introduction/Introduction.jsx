import { Link } from "react-scroll";
import Hotel from "../../../assets/HotelOne.jpg";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
        hidden: { opacity: 0, y: -200 },
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
                <button className="button">
                  <Link
                    activeClass="active"
                    to="introduction"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {t("button_one")}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:w-3/4 md:mt-0">
          <LazyLoadImage src={Hotel} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default Introduction;
