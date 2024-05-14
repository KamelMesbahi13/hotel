import FThreeHighApartmentsDetailsHeader from "../FThreeHighApartmentsDetailsHeader/FThreeHighApartmentsDetailsHeader";
import FThreeHighApartmentDetailsSwiper from "./FThreeHighApartmentDetailsSwiper";

import { useTranslation } from "react-i18next";

import Boxes from "../Data";
import { useParams } from "react-router-dom";

const FThreeHighApartmentsDetails = () => {
  const { i18n } = useTranslation();

  const modifiedData = Boxes.map((item) => {
    if (i18n.language == "en") {
      return {
        id: item.id,
        title: item.title_en,
        price: item.price,
      };
    }

    if (i18n.language == "ar") {
      return {
        id: item.id,
        title: item.title_ar,
        price: item.price,
      };
    }

    return item;
  });

  const { FTroisHighStandingId } = useParams();

  const Data = modifiedData.find((item) => item.id == FTroisHighStandingId);

  return (
    <div>
      <div>
        <FThreeHighApartmentsDetailsHeader />
      </div>
      <div className="container">
        <div>
          <FThreeHighApartmentDetailsSwiper />
        </div>
      </div>
    </div>
  );
};

export default FThreeHighApartmentsDetails;
