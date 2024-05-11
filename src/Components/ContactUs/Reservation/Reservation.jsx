import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Reservation = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="reservationBack">
        <div className="container">
          <div>
            <div className="flex flex-col py-8 md:py-40 justify-evenly md:flex-row">
              <div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9 }}
                  variants={{
                    hidden: { opacity: 0, y: 250 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="textCenter md:initialDirection"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.669850087001!2d3.4540857746309466!3d36.75449497027669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e685e3bdd12a1%3A0x9b134c10fe59d691!2sR%C3%A9sidence%20Zidane%2C%20Lotissement%20A%C3%AFn%20Abdellah!5e0!3m2!1sen!2sdz!4v1715088631450!5m2!1sen!2sdz"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                    className="md:w-[600px] md:h-[450px] w-[300px] h-[250px] border-[10px] border-white"
                  ></iframe>
                </motion.div>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="px-4 py-8 mt-8 border md:mt-0 md:px-8 md:py-16 textCenter"
              >
                <div className="mb-8 md:mb-16">
                  <div className="mb-4">
                    <h2 className="text-xs md:text-sm text-secondColor">
                      {t("reservation_first_subheader")}
                    </h2>
                    <h2>{t("reservation_first_header")}</h2>
                  </div>
                  <div>
                    <p className="mb-2">
                      {t("reservation_email")} : hotel@gmail.com
                    </p>
                    <div className="flex justify-center">
                      <p>{t("reservation_call")} :</p>
                      <p className="md:ltr:ml-1 md:rtl:mr-1 initialDirection">
                        0555 55 55 55
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <h2 className="text-xs md:text-sm text-secondColor">
                      {t("reservation_second_subheader")}
                    </h2>
                    <h2>{t("reservation_second_header")}</h2>
                  </div>
                  <div>
                    <p>{t("reservation_location")}</p>
                  </div>
                  <div>
                    <div className="flex justify-center w-1/2 mt-4">
                      <i>
                        <FaInstagram />
                      </i>
                      <i className="mx-4">
                        <FaFacebook />
                      </i>
                      <i>
                        <FaTiktok />
                      </i>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
