import { useTranslation } from "react-i18next";
import Swiper from "./Swiper";
import { motion } from "framer-motion";
import Deco from "../../../assets/DecoTwo.png";

const WhatWeOffer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="md:mt-16 mt-72">
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
          <div>
            <div className="flex flex-col justify-between md:flex-row">
              <div>
                <h2>{t("what_we_offer_subheader_about_us")}</h2>
                <h1>{t("what_we_offer_header_about_us")}</h1>
              </div>
              <div className="mt-12 md:w-2/4 md:mt-20">
                <p>{t("what_we_offer_paragraph_one_about_us")}</p>
                <p className="mt-8">
                  {t("what_we_offer_paragraph_two_about_us")}
                </p>
              </div>
            </div>
            <div>
              <img src={Deco} alt="Deco" />
            </div>
          </div>
        </motion.div>
        <div>
          <Swiper />
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
