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
          className="relative aboutUsBack"
        >
          <div className="absolute -translate-y-1/2 top-1/2">
            <div className="px-16 md:w-4/4">
              <h1>About us</h1>
              <h2>{t("about_us_page_header")}</h2>
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
