import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Deco from "../../../assets/DecoNine.webp";

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
      <div className="mt-80">
        <div className="flex items-center justify-between">
          <div className="w-1/4">
            <h2>HELPING YOU FIND THE PROPERTY OF YOUR DREAMS</h2>
          </div>
          <div>
            <img className="w-1/4" src={Deco} alt="Deco" />
          </div>
          <div className="justify-between textCenter">
            <div className="flex">
              <div>
                <h6>200</h6>
                <h1 className="text-2xl">Mètre carré</h1>
              </div>
              <div className="md:ltr:ml-24 md:ltr:pl-24 md:ltr:border-l-secondColor md:ltr:border-l-2">
                <h6>5000da</h6>
                <h1 className="text-2xl">Pour une journée</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
