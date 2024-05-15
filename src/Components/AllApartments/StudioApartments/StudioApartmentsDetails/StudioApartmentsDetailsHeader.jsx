import { useTranslation } from "react-i18next";
import Boxes from "../Data";
import { useParams } from "react-router-dom";

const StudioApartmentsDetailsHeader = () => {
  const { i18n } = useTranslation();

  const modifiedData = Boxes.map((item) => {
    if (i18n.language == "en") {
      return {
        id: item.id,
        title: item.title_en,
        day: item.day_en,
        price: item.price,
      };
    }

    if (i18n.language == "ar") {
      return {
        id: item.id,
        title: item.title_ar,
        day: item.day_ar,
        price: item.price,
      };
    }

    return item;
  });

  const { StudiosApartmentsId } = useParams();

  const Data = modifiedData.find((item) => item.id == StudiosApartmentsId);

  return (
    <div>
      <div className="w-full bg-white text-backgroundColor">
        <div className="container">
          <div className="py-20">
            <div className="flex justify-between">
              <h1>{Data.title}</h1>
              <h6>
                {Data.price} / {Data.day}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioApartmentsDetailsHeader;
