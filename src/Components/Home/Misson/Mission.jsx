import { useTranslation } from "react-i18next";
import Parking from "../../../assets/Parking.png";
import HouseCleaning from "../../../assets/HouseCleaning.png";
import Kitchen from "../../../assets/Kitchen.png";
import Reception from "../../../assets/Reception.png";
import Wifi from "../../../assets/Wifi.png";
import Deco from "../../../assets/Deco.webp";
import Security from "../../../assets/SecurityCamera.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const Boxes = [
  {
    id: 1,
    img: Parking,
    title: "Parking sécurisé",
    title_en: "Secure Parking",
    title_ar: "موقف آمن للسيارات",
    paragraph:
      "Un parking sécurisé est disponible pour votre véhicule, vous permettant d'explorer la ville en toute tranquillité.",
    paragraph_en:
      "Secure parking is available for your vehicle, allowing you to explore the city in peace.",
    paragraph_ar: "يتوفر موقف آمن لسيارتك، مما يتيح لك استكشاف المدينة بسلام.",
  },

  {
    id: 2,
    img: Wifi,
    title: "Wi-Fi à haut débit",
    title_en: "High-Speed Wi-Fi",
    title_ar: "شبكة Wi-Fi عالية السرعة",
    paragraph:
      "Profitez du Wi-Fi rapide pour rester connecté pendant votre séjour.",
    paragraph_en:
      "Take advantage of fast Wi-Fi to stay connected during your stay.",
    paragraph_ar:
      "استفد من خدمة الإنترنت اللاسلكي السريع للبقاء على اتصال أثناء إقامتك.",
  },

  {
    id: 3,
    img: Security,
    title: "Sécurité 24 heures sur 24",
    title_en: "Round-the-Clock Security",
    title_ar: "الأمان على مدار الساعة",
    paragraph:
      "Notre équipe de sécurité veille à votre sécurité 24/7, vous offrant la tranquillité d'esprit.",
    paragraph_en:
      "Our security team looks after your safety 24/7, giving you peace of mind.",
    paragraph_ar:
      "يعتني فريق الأمن لدينا بسلامتك على مدار الساعة طوال أيام الأسبوع، مما يمنحك راحة البال.",
  },

  {
    id: 4,
    img: Reception,
    title: "Réception de bienvenue",
    title_en: "Welcoming Reception",
    title_ar: "استقبال ترحيبي",
    paragraph:
      "Le personnel de réception vous aide pour l'enregistrement, les recommandations locales, et plus encore.",
    paragraph_en:
      "Reception staff will help with check-in, local recommendations, and more.",
    paragraph_ar:
      "سيساعدك موظفو الاستقبال في تسجيل الوصول والتوصيات المحلية وغير ذلك الكثير.",
  },

  {
    id: 5,
    img: Kitchen,
    title: "Cuisines entièrement équipées",
    title_en: "Fully-Equipped Kitchens",
    title_ar: "مطابخ مجهزة بالكامل",
    paragraph:
      "Nos cuisines sont équipées pour des repas faits maison, ajoutant une touche personnelle à votre séjour.",
    paragraph_en:
      "Our kitchens are equipped for home-cooked meals, adding a personal touch to your stay.",
    paragraph_ar:
      "مطابخنا مجهزة لإعداد الوجبات المطبوخة في المنزل، مما يضفي لمسة شخصية على إقامتك.",
  },

  {
    id: 6,
    img: HouseCleaning,
    title: "Nettoyage de la maison",
    title_en: "House Cleaning",
    title_ar: "تنظيف المنزل",
    paragraph:
      "Le ménage régulier assure un environnement propre et confortable pendant votre séjour.",
    paragraph_en:
      "Regular housekeeping ensures a clean and comfortable environment during your stay.",
    paragraph_ar:
      "تضمن لك خدمة تنظيف الغرف بانتظام بيئة نظيفة ومريحة أثناء إقامتك.",
  },
];

const Mission = () => {
  const { i18n } = useTranslation();

  const modifiedData = Boxes.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        img: data.img,
        title: data.title_ar,
        paragraph: data.paragraph_ar,
      };
    }

    if (i18n.language === "en") {
      return {
        id: data.id,
        img: data.img,
        title: data.title_en,
        paragraph: data.paragraph_en,
      };
    }
    return data;
  });

  const { t } = useTranslation();

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <div className="mt-8 md:mt-64 md:textCenter">
            <div>
              <div className="md:w-3/4 md:mx-auto textCenter">
                <h2 className="mb-2">{t("mission_subheader")}</h2>
                <h1 className="mb-4">{t("mission_header")}</h1>
                <div className="flex justify-center md:mt-2">
                  <div className="w-8 h-1 md:w-12 bg-secondColor"></div>
                  <div className="flex ml-1">
                    <div className="w-[3px] h1 bg-secondColor"></div>
                    <div className="w-[3px] mx-1 bg-secondColor"></div>
                    <div className="w-[3px] h1 bg-secondColor"></div>
                  </div>
                  <div className="w-8 h-1 md:w-12 bg-secondColor"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-8 md:mt-20">
            <div>
              <LazyLoadImage
                className="absolute top-[15rem] hidden md:block left-0 w-[40%]"
                src={Deco}
                alt="Decoration"
              />
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="mb-8 md:mb-0">
                <h2>{t("what_we_offer")}</h2>
                <h1>{t("what_we_offer_header")}</h1>
              </div>
              <div className="grid w-full grid-cols-1 mt-8 md:gap-x-8 gap-y-8 md:gap-y-16 sm:grid-cols-2 lg:grid-cols-3 md:mt-36">
                {modifiedData.map((item) => {
                  return (
                    <div key={item.id}>
                      <div>
                        <div>
                          <LazyLoadImage
                            className="w-10 mb-4"
                            src={item.img}
                            alt={item.title}
                          />
                        </div>
                        <div>
                          <h6>{item.title}</h6>
                        </div>
                        <div>
                          <p>{item.paragraph}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Mission;
