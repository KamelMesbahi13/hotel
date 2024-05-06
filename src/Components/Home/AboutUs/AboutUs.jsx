import { LazyLoadImage } from "react-lazy-load-image-component";
import RoomOne from "../../../assets/RoomOne.jpg";
import RoomTwo from "../../../assets/RoomTwo.jpg";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mt-8 md:mt-36">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-row gap-x-4 place-content-center md:gap-x-0 md:flex-row">
            <LazyLoadImage src={RoomOne} className="w-1/2" alt="Chambre 1" />
            <LazyLoadImage
              className="relative w-1/2 -z-10 md:right-20 md:top-40"
              src={RoomTwo}
              alt="Chambre 2"
            />
          </div>
          <div className="md:w-[60%] mt-8 md:mt-0">
            <div>
              <h1>{t("about_us_home_header")}</h1>
              <h2 className="my-4">{t("about_us_home_subheader")}</h2>
              <p>{t("about_us_home_paragraph")}</p>
            </div>
            <div className="mt-8">
              <button className="button">{t("button_two")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
