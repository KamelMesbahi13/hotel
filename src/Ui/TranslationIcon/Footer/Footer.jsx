import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import Data from "../../../Data/Data.json";
import Logo from "../../../assets/Logo.png";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram, FaTiktok, FaFacebook, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const { i18n } = useTranslation();
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  const modifiedDataNav = Data.navbarItems.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        ItemOne: data.ItemOne_ar,
        ItemTwo: data.ItemTwo_ar,
        ItemThree: data.ItemThree_ar,
        ItemFour: data.ItemFour_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        ItemOne: data.ItemOne_fr,
        ItemTwo: data.ItemTwo_fr,
        ItemThree: data.ItemThree_fr,
        ItemFour: data.ItemFour_fr,
      };
    }
    return data;
  });
  return (
    <div>
      <div className="w-full bg-white text-backgroundColor">
        <div className="container pb-4 md:pb-8 ">
          <div className="flex flex-col pt-12 md:pt-28 md:flex-row">
            <div className="pb-8 border-b-4 border-secondColor md:pb-0 md:border-b-0 md:w-1/4">
              <h1 className="mb-4 md:mb-8">Contact</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                corporis eligendi delectus.
              </p>
              <div className="flex items-center my-4">
                <i className="mr-3 text-xl text-mainColor">
                  <FaPhoneAlt />
                </i>
                <p className="italic font-bold">+213 55 55 55 55</p>
              </div>
              <div className="flex items-center">
                <i className="mr-3 text-2xl text-mainColor">
                  <BiLogoGmail />
                </i>{" "}
                <p className="italic font-bold">admin@gmail.com</p>
              </div>
            </div>
            <div className="pb-8 border-b-4 border-secondColor md:w-1/2 md:text-center md:pb-0 md:border-b-0">
              <h1 className="mt-8 mb-4 md:mb-8 md:mt-0">Links</h1>
              <div className="flex flex-row gap-8 md:flex-col">
                <RouterLink to="/">
                  {modifiedDataNav.map((el) => el.ItemOne)}
                </RouterLink>
                <RouterLink to="/">
                  {modifiedDataNav.map((el) => el.ItemTwo)}
                </RouterLink>
                <RouterLink to="/">
                  {modifiedDataNav.map((el) => el.ItemThree)}
                </RouterLink>
              </div>
            </div>
            <div className="pb-8 mt-8 border-b-4 border-secondColor md:w-1/4 md:mt-0 md:pb-0 md:border-b-0">
              <h1>Follow Us</h1>
              <p className="my-4 md:my-8">
                Connect with us on social media for the latest updates, news,
                and exclusive offers!
              </p>
              <div className="flex justify-between w-1/2 text-2xl">
                <i className="text-mainColor">
                  <FaInstagram />
                </i>
                <i className="text-mainColor">
                  <FaFacebook />
                </i>
                <i className="text-mainColor">
                  <FaTiktok />
                </i>
              </div>
            </div>
          </div>
          <div className="md:mt-24 mt-14 textCenter">
            <img className="w-40" src={Logo} alt="" />
          </div>
          <div>
            <div className="w-full h-2 mt-8 bg-mainColor"></div>
          </div>
          <div className="textRight">
            <p className="mt-4 italic font-bold">
              {t("Content_Copyright")} &#169; {year} {t("Content")} Hotel Zidane
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
