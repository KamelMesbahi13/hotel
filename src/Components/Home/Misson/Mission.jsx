import { useTranslation } from "react-i18next";

const Mission = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-24 textCenter">
        <div>
          <div>
            <h6>{t("mission_subheader")}</h6>
            <h1>{t("mission_header")}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
