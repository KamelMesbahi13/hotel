import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mx-auto mt-48 md:w-3/4 textCenter">
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
          <h1 className="tracking-widest ">{t("f3_high_standing_header")}</h1>
        </motion.div>
      </div>
      <div className="py-32 mt-64 fThreeHighBack">
        <div className="flex items-center justify-between">
          <div className="w-1/4">
            <h2>{t("f3_high_standing_header_two")}</h2>
          </div>
          <div className="justify-between textCenter">
            <div className="flex">
              <div>
                <h6>{t("f3_high_standing_price")}</h6>
                <h1 className="text-2xl">
                  {t("f3_high_standing_price_header")}
                </h1>
              </div>
              <div className="md:ltr:ml-24 md:ltr:pl-24 md:ltr:border-l-secondColor md:ltr:border-l-2 md:rtl:mr-24 md:rtl:pr-24 md:rtl:border-r-secondColor md:rtl:border-r-2 ">
                <h6>{t("f3_high_standing_space")}</h6>
                <h1 className="text-2xl">
                  {t("f3_high_standing_space_header")}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
