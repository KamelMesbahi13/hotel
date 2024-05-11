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
        className="relative contactUsPageBack"
      >
        <div className="absolute -translate-y-1/2 top-1/2">
          <div className="px-16 md:w-3/4">
            <h1>{t("about_us_page_header")}</h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
