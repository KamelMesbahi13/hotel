import Hotel from "../../../assets/HotelOne.jpg";
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex">
        <div>
          <div className="container w-3/4">
            <h1>{t("introduction_header")}</h1>
            <h2 className="my-4">{t("introduction_subheader")}</h2>
            <p>{t("introduction_text")}</p>
          </div>
        </div>
        <div>
          <img src={Hotel} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
