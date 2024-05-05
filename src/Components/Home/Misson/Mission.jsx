import { useTranslation } from "react-i18next";

const Mission = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div>
          <div className="mt-24 textCenter">
            <div>
              <div className="w-3/4">
                <h2 className="mb-2">{t("mission_subheader")}</h2>
                <h1>{t("mission_header")}</h1>
              </div>
            </div>
          </div>
          <div className="mt-28">
            <div>
              <div>
                <h2>What We Offer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
