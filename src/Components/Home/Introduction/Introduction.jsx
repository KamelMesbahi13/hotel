import Boumerdes from "../../../assets/BoumerdesTwo.png";
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="relative">
        <div>
          {" "}
          <img src={Boumerdes} className="w-full" alt="" />
        </div>
        <div className="absolute py-12 -translate-x-1/2 -translate-y-1/2 bg-mainColor textCenter left-1/2 top-1/2">
          <div className="w-3/4 textCenter">
            <h1>{t("introduction_header")}</h1>
            <h2 className="my-4">{t("introduction_subheader")}</h2>
            <p>
              <p>{t("introduction_text")}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
