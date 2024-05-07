import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import Data from "../../../Data/Data.json";
import Deco from "../../../assets/DecoFour.png";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

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
      <div className="bg-white text-backgroundColor w-full h-[30rem]">
        <div className="container border-b">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4">
              <h1>Contact</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                corporis eligendi delectus.
              </p>
              <p>+213 55 55 55 55</p>
              <p>Gmail: admin@gmail.com</p>
            </div>
            <div className="md:w-1/2 textCenter">
              <h1>Links</h1>
              <div className="flex flex-col gap-8">
                <RouterLink className="link linkColor" to="/">
                  {modifiedDataNav.map((el) => el.ItemOne)}
                </RouterLink>
                <RouterLink className="link linkColor" to="/">
                  {modifiedDataNav.map((el) => el.ItemTwo)}
                </RouterLink>
                <RouterLink className="link linkColor" to="/">
                  {modifiedDataNav.map((el) => el.ItemThree)}
                </RouterLink>
              </div>
            </div>
            <div className="md:w-1/4">
              <h1>Follow Us</h1>
              <div className="flex">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
