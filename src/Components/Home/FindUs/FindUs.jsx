import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const FindUs = () => {
  const { t } = useTranslation();

  return (
    <div className="faqBack">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="py-16 mb-8 md:py-36">
          <div className="flex flex-col md:justify-between md:flex-row">
            <div className="w-full md:w-[40%] mb-8 md:mb-0 md:mt-20">
              <h2 className="mb-2">{t("find_us_subheader")}</h2>
              <h1 className="mb-8">{t("find_us_header")}</h1>
              <p>{t("find_us_paragraph")}</p>
            </div>
            <div className="textCenter md:initialDirection">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.669850087001!2d3.4540857746309466!3d36.75449497027669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e685e3bdd12a1%3A0x9b134c10fe59d691!2sR%C3%A9sidence%20Zidane%2C%20Lotissement%20A%C3%AFn%20Abdellah!5e0!3m2!1sen!2sdz!4v1715088631450!5m2!1sen!2sdz"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
                className="md:w-[600px] md:h-[450px] w-[300px] h-[250px] border-[10px] border-white"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FindUs;
