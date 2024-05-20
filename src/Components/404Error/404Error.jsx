import Img from "../../assets/404Page.webp";
import { Link } from "react-router-dom";
import Title from "../../GeneralFunctions/Title";
import { useTranslation } from "react-i18next";

const Error = () => {
  Title("Serviclim | 404");
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div>
          <div className="container">
            <div>
              <div>
                <div>
                  <div className="my-2 textCenter">
                    <div>
                      <img src={Img} alt="404 Image" />
                    </div>
                    <div>
                      <h1 className="mb-4">{t("error_header")}</h1>
                    </div>
                    <div>
                      <p>{t("error_paragraph")}</p>
                    </div>
                    <div className="mt-4">
                      <Link to="/">
                        <button className="buttonCust">
                          {t("error_button")}
                        </button>
                      </Link>
                    </div>
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

export default Error;
