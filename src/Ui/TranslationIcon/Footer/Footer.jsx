import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import Data from "../../../Data/Data.json";
import Logo from "../../../assets/Logo.png";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram, FaTiktok, FaFacebook, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const { i18n } = useTranslation();

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
      <div className="bg-white text-backgroundColor w-full h-[40rem]">
        <div className="container pb-8 border-b-4 border-mainColor">
          <div className="flex flex-col pt-28 md:flex-row">
            <div className="md:w-1/4">
              <h1 className="mb-8">Contact</h1>
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
            <div className="md:w-1/2 textCenter">
              <h1 className="mb-8">Links</h1>
              <div className="flex flex-col gap-8">
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
            <div className="md:w-1/4">
              <h1>Follow Us</h1>
              <p className="my-8">
                Connect with us on social media for the latest updates, news,
                and exclusive offers!
              </p>
              <div className="flex justify-between w-1/2 text-2xl">
                <i>
                  <FaInstagram />
                </i>
                <i>
                  <FaFacebook />
                </i>
                <i>
                  <FaTiktok />
                </i>
              </div>
            </div>
          </div>
          <div className="mt-24 textCenter">
            <img className="w-40" src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
