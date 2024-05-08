import Deco from "../../../assets/AboutUsImgOne.jpg";
import { useTranslation } from "react-i18next";

const BestApartments = () => {
  const { t } = useTranslation();

  return (
    <div className="bestApartmentsBack">
      <div className="mt-12 lg:mt-36">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="mt-0 lg:mt-24 lg:w-1/2 lg:ltr:mr-8">
            <h2>{t("best_apartments_subheader")}</h2>
            <h1 className="my-4">{t("best_apartments_header")} </h1>
            <p>{t("best_apartments_paragraph")}</p>
          </div>
          <div className="mt-8 lg:mt-0">
            <div>
              <div>
                <img src={Deco} alt="Deco" />
              </div>
              <div className="hidden lg:block">
                <div className="-z-10 bg-secondColor relative bottom-[29rem] h-[27rem] w-[27rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestApartments;
