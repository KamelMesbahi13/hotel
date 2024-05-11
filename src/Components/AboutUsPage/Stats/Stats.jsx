import { useState, useRef } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);
  const scrollTriggerRef = useRef(null);

  const setCounterOnEnter = () => {
    setCounterOn(true);
  };

  const setCounterOnExit = () => {
    setCounterOn(false);
  };

  const { t } = useTranslation();

  return (
    <>
      <ScrollTrigger
        ref={scrollTriggerRef}
        onEnter={setCounterOnEnter}
        onExit={setCounterOnExit}
      >
        <div className="bg-grey text-backgroundColor">
          <div className="container">
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
              <div className="flex flex-wrap justify-between gap-12 py-16 mt-12 text-center lg:gap-x-32 place-items-center">
                <div>
                  <h6>
                    {t("f3_apartments_high_standing")} <br />
                  </h6>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondColor">
                      +
                    </span>
                    <h1>
                      {counterOn && (
                        <CountUp start={0} end={10} duration={3} delay={0} />
                      )}
                    </h1>
                  </div>
                </div>
                <div>
                  <h6>
                    {t("f3_apartments")} <br />
                  </h6>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondColor">
                      +
                    </span>
                    <h1>
                      {counterOn && (
                        <CountUp start={0} end={19} duration={3} delay={0} />
                      )}
                    </h1>
                  </div>
                </div>
                <div>
                  <h6>
                    {t("f2_apartments")} <br />
                  </h6>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondColor">
                      +
                    </span>
                    <h1>
                      {counterOn && (
                        <CountUp start={0} end={8} duration={3} delay={0} />
                      )}
                    </h1>
                  </div>
                </div>
                <div>
                  <h6>
                    {t("studios")} <br />
                  </h6>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondColor">
                      +
                    </span>
                    <h1>
                      {counterOn && (
                        <CountUp start={0} end={9} duration={3} delay={0} />
                      )}
                    </h1>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Stats;
