import { useTranslation } from "react-i18next";

const OurRooms = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="md:mt-56">
        <div>
          <div>
            {" "}
            <div className="mt-8 md:mt-64 md:textCenter">
              <div>
                <div className="md:w-3/4 md:mx-auto textCenter">
                  <h2 className="mb-2">
                    {t("f3_high_standing_space_our_rooms_subheader")}
                  </h2>
                  <h1 className="mb-4">
                    {t("f3_high_standing_space_our_rooms_header")}
                  </h1>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRooms;
