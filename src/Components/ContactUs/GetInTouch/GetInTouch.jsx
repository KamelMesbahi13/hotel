import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const GetInTouch = () => {
  const { t } = useTranslation();

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

  const inputStyles = `w-full mt-5 rounded-md focus:outline-none bg-grey px-5 py-3`;
  return (
    <div>
      <div>
        <div>
          <div className="w-full bg-white text-backgroundColor h-[120rem]">
            <div className="container">
              <div className="pt-20">
                <div>
                  <div>
                    <h2>Do you have any question?</h2>
                    <h1>Get in touch</h1>
                    <p>
                      Need help or have a question? Send us a message! We re
                      here to assist you.
                    </p>
                  </div>
                  <div>
                    <div className="md:w-1/2">
                      <form
                        target="_blank"
                        className="mb-8 text-center md:mb-0"
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
                          cols={50}
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
                          <button className="buttonContactUs">
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
      </div>
    </div>
  );
};

export default GetInTouch;