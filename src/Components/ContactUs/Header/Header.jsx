import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
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
        className="contactUsPageBack"
      >
        <div className="textCenter pt-[12rem]">
          <div className="text-white">
            <h1>{t("contact_us_page_header")}</h1>
            <h6>{t("contact_us_page_subheader")}</h6>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
