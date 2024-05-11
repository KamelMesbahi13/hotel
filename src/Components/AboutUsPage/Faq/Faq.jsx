import Data from "../../../Data/Data.json";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { i18n } = useTranslation();

  const [activeAccordion, setActiveAccordion] = useState("");

  const toggleAccordion = (accordionId) => {
    setActiveAccordion((prev) => (prev === accordionId ? "" : accordionId));
  };

  const AccordionItem = ({ id, title, isOpen, onClick, children }) => {
    return (
      <div>
        <h6 id={id}>
          <button
            type="button"
            className="flex justify-between gap-3 py-5"
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls={id}
            onClick={onClick}
          >
            <p className="text-xl text-start">{title}</p>

            {isOpen ? (
              <i className="text-4xl text-thirdColor">
                <IoIosArrowDown />
              </i>
            ) : (
              <i className="text-4xl text-thirdColor">
                <IoIosArrowUp />
              </i>
            )}
          </button>
        </h6>
        <div id={`${id}-body`} className={`${isOpen ? "" : "hidden"} py-5`}>
          {children}
        </div>
      </div>
    );
  };

  AccordionItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  const modifiedDataQuestion = Data.AboutUs_Question.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        title: data.title_ar,
        description: data.description_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        title: data.title_fr,
        description: data.description_fr,
      };
    }
    return data;
  });

  const Questions = modifiedDataQuestion.map(({ id, title, description }) => {
    return (
      <div key={id}>
        <div className="w-full">
          <AccordionItem
            id={`accordion-collapse-heading-${id}`}
            title={title}
            isOpen={activeAccordion === `accordion-collapse-body-${id}`}
            onClick={() => toggleAccordion(`accordion-collapse-body-${id}`)}
          >
            <div>
              <p>{description}</p>
            </div>
          </AccordionItem>
        </div>
      </div>
    );
  });
  const { t } = useTranslation();

  return (
    <div
      id="accordion-collapse"
      className="pb-8 mt-12 divide-y md:mt-24 faqBack"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="container flex flex-col md:pt-16 md:flex-row">
          <div>
            <div className="md:ltr:mr-12 md:rtl:ml-48">
              <h2>{t("faq_subheader")}</h2>
              <h1 className="my-4">{t("faq_header")}</h1>
              <p>{t("faq_paragraph")}</p>
            </div>
          </div>
          <div className="w-full">
            <div>{Questions}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Faq;
