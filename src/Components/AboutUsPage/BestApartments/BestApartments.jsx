import Deco from "../../../assets/AboutUsImgOne.webp";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const BestApartments = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bestApartmentsBack">
        <div>
          <div className="mt-12 lg:mt-36">
            <div className="flex flex-col justify-between lg:flex-row">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-0 lg:mt-24 lg:w-1/2 lg:ltr:mr-8"
              >
                <h2>{t("best_apartments_subheader")}</h2>
                <h1 className="my-4">{t("best_apartments_header")} </h1>
                <p>{t("best_apartments_paragraph")}</p>
              </motion.div>
              <div className="mt-8 lg:mt-0">
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
                    <img src={Deco} alt="Deco" />
                  </div>
                  <div className="hidden lg:block">
                    <div className="-z-10 bg-secondColor relative bottom-[29rem] h-[27rem] w-[27rem]"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestApartments;
