import { Link } from "react-scroll";
import Hotel from "../../../assets/HotelOne.jpg";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div>
          <div className="container mt-8 md:px-20 xl:mt-32">
            <div>
              <h1>{t("introduction_header")}</h1>
              <h2 className="my-4">{t("introduction_subheader")}</h2>
              <p>{t("introduction_text")}</p>
            </div>
            <div>
              <div className="mt-8">
                <button className="button">
                  <Link
                    activeClass="active"
                    to="introduction"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Explorer plus{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:w-3/4 md:mt-0">
          <LazyLoadImage src={Hotel} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
