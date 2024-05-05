import { useState } from "react";
import Data from "../../Data/Data.json";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaXmark, FaPhone } from "react-icons/fa6";
import TranslateIcon from "../../Ui/TranslationIcon/TranslationIcon";
import { useTranslation } from "react-i18next";

const Navbar = () => {
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

  const [nav, setNav] = useState(true);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <>
      <div id="nav">
        <div className="w-full bg-white">
          <div className="container">
            <div className="z-50 justify-between hidden w-full lg:flex">
              <div className="flex items-center w-full">
                <div>
                  <a href="/">
                    <img className="w-1/4" src={Logo} alt="Logo" />
                  </a>
                </div>

                <div className="flex w-1/2 gap-8">
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

                <div className="flex items-center w-1/4">
                  <div className="flex items-center">
                    <i className="mr-4 text-thirdColor">{<FaPhone />}</i>
                    <p className="linkColor">0555 55 55 55</p>
                  </div>
                  <span className="ml-12 text-2xl cursor-pointer">
                    <TranslateIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="container flex flex-row-reverse items-center justify-between lg:hidden">
            <div className={nav ? "visible lg:invisible" : "invisible"}>
              <img src={Logo} className="w-24" alt="Logo" />
            </div>
            <div>
              <div className="lg:hidden">
                <div className="cursor-pointer text-mainColor">
                  {nav ? (
                    <AiOutlineMenu className="w-6 h-6" onClick={navHandler} />
                  ) : (
                    <FaXmark className="w-6 h-6" onClick={navHandler} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className={
                nav
                  ? "absolute w-full rtl:left-[150%] h-[25rem] opacity-0 ltr:left-[-150%] duration-500 z-50"
                  : "absolute w-full left-0 bg-grey h-[25rem] opacity-100 shadow-2xl z-50 duration-500"
              }
            >
              <div className="container flex flex-col py-4 gap-y-8">
                <RouterLink onClick={navHandler} className="linkColor" to="/">
                  {modifiedDataNav.map((el) => el.ItemOne)}
                </RouterLink>
                <RouterLink onClick={navHandler} className="linkColor" to="/">
                  {modifiedDataNav.map((el) => el.ItemTwo)}
                </RouterLink>
                <RouterLink onClick={navHandler} className="linkColor" to="/">
                  {modifiedDataNav.map((el) => el.ItemThree)}
                </RouterLink>
              </div>
              <div className="container flex flex-row justify-between">
                <div className="mt-2 lg:hidden">
                  <img
                    className={nav ? "invisible w-24" : "visible w-24"}
                    src={Logo}
                    alt="Logo"
                  />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div>
                    <TranslateIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
