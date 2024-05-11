import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="aboutUsBack"
        >
          <div className="pt-[12rem] textCenter">
            <div>
              <h1>{t("about_us_page_header")}</h1>
              <h6>{t("about_us_page_subheader")}</h6>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          className="container mt-8"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:ltr:mr-8 lg:rtl:ml-8">
              <p className="tracking-wider">
                {t("about_us_page_header_paragraph_one")}
              </p>
            </div>
            <div className="mt-8 lg:ltr:ml-8 lg:rtl:mr-8 lg:mt-0">
              <p className="tracking-wider">
                {t("about_us_page_header_paragraph_two")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
