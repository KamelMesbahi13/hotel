import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const ContactUsSection = () => {
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
    <div className="mt-36 contactUsBack">
      <div>
        <div>
          <div className="container">
            <div className="relative w-1/2 p-4 bg-white top-36 text-backgroundColor">
              <div>
                <div>
                  <h1>Connect with Us</h1>
                  <p>
                    Got a question, comment, or just want to say hello? Drop us
                    a line! We re here to assist you with anything you need,
                    from booking inquiries to special requests. Your
                    satisfaction is our priority.
                  </p>
                </div>
                <form
                  target="_blank"
                  className="mb-8 text-center md:mb-0"
                  onSubmit={onSubmit}
                  action="#"
                  method="POST"
                >
                  <input
                    type="text"
                    placeholder="Name"
                    className={inputStyles}
                    {...register("name", {
                      required: true,
                      minLength: 3,
                      maxLength: 100,
                    })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-mainColor">
                      {errors.name.type === "required" && `${t("required")}`}
                      {errors.name.type === "maxLength" &&
                        `${t("maxLengthOne")}`}
                      {errors.name &&
                        errors.name.type === "minLength" &&
                        `${t("minLengthOne")}`}
                    </p>
                  )}
                  <input
                    type="text"
                    placeholder="Email"
                    className={inputStyles}
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-mainColor">
                      {errors.email.type === "required" && `${t("required")}`}
                      {errors.email.type === "pattern" && `${t("email")}`}
                    </p>
                  )}
                  <textarea
                    placeholder="Message"
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
                      {errors.message.type === "required" && `${t("required")}`}
                    </p>
                  )}
                  <button className="buttonContactUs">Submit</button>
                </form>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;