import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="textCenter">
        <div className="text-white f3HighStandingBack">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: -25 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mx-auto pt-52 md:pt-48 md:w-3/4"
          >
            <h1 className="ltr:tracking-widest ">{t("f2_header")}</h1>
          </motion.div>
        </div>
      </div>
      <div className="container">
        <div className="mt-12 md:mt-20">
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
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="md:w-1/4">
                <h2>{t("f2_header_two")}</h2>
              </div>
              <div className="justify-between mt-12 md:mt-0 textCenter">
                <div className="flex">
                  <div>
                    <h6>{t("f2_price")}</h6>
                    <h1 className="text-2xl">{t("f2_price_header")}</h1>
                  </div>
                  <div className="ltr:ml-20 rtl:mr-20 md:ltr:ml-24 md:ltr:pl-24 md:ltr:border-l-secondColor md:ltr:border-l-2 md:rtl:mr-24 md:rtl:pr-24 md:rtl:border-r-secondColor md:rtl:border-r-2">
                    <h6>{t("f2_space")}</h6>
                    <h1 className="text-2xl">{t("f2_space_header")}</h1>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
