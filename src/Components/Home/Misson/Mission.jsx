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
                <h1 className="mb-4">{t("mission_header")}</h1>
                <div className="flex justify-center md:mt-2">
                  <div className="w-8 h-1 md:w-12 bg-secondColor"></div>
                  <div className="flex ml-1">
                    <div className="w-[3px] h1 bg-secondColor"></div>
                    <div className="w-[3px] mx-1 bg-secondColor"></div>
                    <div className="w-[3px] h1 bg-secondColor"></div>
                  </div>
                  <div className="w-8 h-1 md:w-12 bg-secondColor"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-28">
            <div>
              <div>
                <h2>{t("what_we_offer")}</h2>
                <h1>{t("what_we_offer_header")}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
