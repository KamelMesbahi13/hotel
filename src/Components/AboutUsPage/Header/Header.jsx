import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <div className="relative aboutUsBack">
          <div className="absolute -translate-y-1/2 top-1/2">
            <div className="px-16 md:w-3/4">
              <h1>{t("about_us_page_header")}</h1>
            </div>
          </div>
        </div>
        <div className="container mt-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:ltr:mr-8 lg:rtl:ml-8">
              <p className="tracking-wider">
                {t("about_us_page_header_paragraph_one")}
              </p>
            </div>
            <div className="mt-8 lg:ltr:ml-8 lg:rtl:mr-8 lg:mt-0">
              <p className="tracking-wider">
                {t("about_us_page_header_paragraph_two")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
