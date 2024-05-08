import Data from "../../../Data/Data.json";
import { useState } from "react";
import Down from "../../../assets/DownArrow.png";
import Up from "../../../assets/UpArrow.png";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
        <h2 id={id}>
          <button
            type="button"
            className="flex items-center justify-between gap-3 py-5"
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls={id}
            onClick={onClick}
          >
            <p className="text-xl text-start">{title}</p>

            {isOpen ? (
              <LazyLoadImage
                className="w-10 h-10"
                src={Down}
                alt="Down Arrow"
              />
            ) : (
              <LazyLoadImage className="w-10 h-10" src={Up} alt="Up Arrow" />
            )}
          </button>
        </h2>
        <div id={`${id}-body`} className={`${isOpen ? "" : "hidden"} p-5`}>
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

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      id="accordion-collapse"
      className="py-8 mb-20 text-white divide-y"
    >
      <div className="flex flex-col mt-28 md:flex-row">
        <div>
          <div className="md:ltr:mr-12 md:rtl:ml-12">
            <h2>Frequently Asked Questions</h2>
            <h1 className="my-4">
              Explore answers to common queries about our hotel apartments.
            </h1>
            <p>
              Welcome to our FAQ section, where we address some of the most
              commonly asked questions about our hotel apartments. If you have
              any other queries, feel free to reach out to us directly.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div>{Questions}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Faq;
