import { Link } from "react-scroll";
import Hotel from "../../../assets/HotelOne.jpg";
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div>
          <div className="container mt-32">
            <div>
              <h1>{t("introduction_header")}</h1>
              <h2 className="my-4">{t("introduction_subheader")}</h2>
              <p>{t("introduction_text")}</p>
            </div>
            <div>
              <div>
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
        <div className="w-3/4">
          <img src={Hotel} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
