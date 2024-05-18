import { lazy } from "react";
const FThreeApartmentsDetailsHeader = lazy(() =>
  import("./FThreeApartmentDetailsHeader")
);

const FThreeApartmentDetailsSwiper = lazy(() =>
  import("./FThreeApartmentsDetailsSwiper")
);
import Boxes from "../Data";
import Videos from "../VideosData";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import VideoPlayer from "./FThreeApartmentsDetailsVideo";
import { useTranslation } from "react-i18next";
import Title from "../../../../GeneralFunctions/Title";

const FThreeApartmentsDetails = () => {
  const { t } = useTranslation();
  Title(`H.A.Z  | ${t("fThree_details_title")}`);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const inputStyles = `w-full mt-5 rounded-md text-backgroundColor focus:outline-none bg-grey px-5 py-3`;
  const { i18n } = useTranslation();

  const modifiedData = Boxes.map((item) => {
    if (i18n.language == "en") {
      return {
        id: item.id,
        title: item.title_en,
        price: item.price,
        descriptionHeader: item.descriptionHeader_en,
        descriptionParagraph: item.descriptionParagraph_en,
      };
    }

    if (i18n.language == "ar") {
      return {
        id: item.id,
        title: item.title_ar,
        price: item.price,
        descriptionHeader: item.descriptionHeader_ar,
        descriptionParagraph: item.descriptionParagraph_ar,
      };
    }

    return item;
  });

  const { FTroisAppartementsId } = useParams();

  const Data = modifiedData.find((item) => item.id == FTroisAppartementsId);

  const videoData = Videos.find((video) => video.id == FTroisAppartementsId);
  const videoUrl = videoData ? videoData.video : null;

  return (
    <div>
      <div>
        <FThreeApartmentsDetailsHeader />
      </div>
      <div className="container">
        <div className="mt-20">
          <div className="flex flex-col md:flex-row">
            <div className="w-full">
              <div>
                <FThreeApartmentDetailsSwiper id={Data.id} />
              </div>
              <div className="w-full">
                <div className="mt-8">
                  <div className="mb-4">
                    <h1>{Data.descriptionHeader}</h1>
                  </div>
                  <div>
                    <p>{Data.descriptionParagraph}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="xl:w-[60%] hidden lg:block p-8 md:ltr:ml-20 xl:ltr:ml-48 md:rtl:mr-20 xl:rtl:mr-48 bg-white text-mainColor">
                  <div>
                    <div>
                      <h6 className="text-xl">
                        {" "}
                        {t("contact_form_apartment_details_header")}
                      </h6>
                      <h1 className="text-2xl">
                        {" "}
                        {t("contact_form_apartment_details_subheader")}
                      </h1>
                    </div>
                    <div>
                      <form
                        target="_blank"
                        className="mb-8 md:mb-0"
                        onSubmit={onSubmit}
                        action="#"
                        method="POST"
                      >
                        <input
                          type="text"
                          placeholder={t("form_name")}
                          className={inputStyles}
                          {...register("name", {
                            required: true,
                            minLength: 3,
                            maxLength: 100,
                          })}
                        />
                        {errors.name && (
                          <p className="mt-1 text-mainColor">
                            {errors.name.type === "required" &&
                              `${t("required")}`}
                            {errors.name.type === "maxLength" &&
                              `${t("maxLengthOne")}`}
                            {errors.name &&
                              errors.name.type === "minLength" &&
                              `${t("minLengthOne")}`}
                          </p>
                        )}
                        <input
                          type="text"
                          placeholder={t("form_email")}
                          className={inputStyles}
                          {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          })}
                        />
                        {errors.email && (
                          <p className="mt-1 text-mainColor">
                            {errors.email.type === "required" &&
                              `${t("required")}`}
                            {errors.email.type === "pattern" && `${t("email")}`}
                          </p>
                        )}
                        <textarea
                          placeholder={t("form_message")}
                          className={inputStyles}
                          rows={4}
                          cols={20}
                          {...register("message", {
                            required: true,
                            minLength: 5,
                            maxLength: 2000,
                          })}
                        />
                        {errors.message && (
                          <p className="mt-1 text-mainColor">
                            {errors.message.type === "required" &&
                              `${t("required")}`}
                          </p>
                        )}
                        <div className="mt-8">
                          <button className="w-full buttonContactUs">
                            {t("button_three")}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <VideoPlayer videoUrl={videoUrl} />
        </div>
      </div>
    </div>
  );
};

export default FThreeApartmentsDetails;
