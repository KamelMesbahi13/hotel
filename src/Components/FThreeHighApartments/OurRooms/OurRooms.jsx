import { useTranslation } from "react-i18next";
import RoomOne from "../../../assets/fThreeHighStandingOne.jpg";
import RoomTwo from "../../../assets/fThreeHighStandingTwo.jpg";
import RoomThree from "../../../assets/fThreeHighStandingThree.jpg";
import RoomFour from "../../../assets/fThreeHighStandingFour.jpg";
import RoomFive from "../../../assets/fThreeHighStandingFive.jpg";
import RoomSix from "../../../assets/fThreeHighStandingSix.jpg";

const OurRooms = () => {
  const Boxes = [
    {
      id: 1,
      img: RoomOne,
      stats: "5000da / 100m²",
      link: "fTroisAppartements",
      button: "Plus de détails",
      button_en: "More details",
      button_ar: "المزيد من التفاصيل",
      title: "F3: Haut standing: Maisons de luxe extraordinaires.",
      title_en: "F3: High Standing: Extraordinary Luxury Homes.",
      title_ar: "F3 شقق راقية : منازل فاخرة غير عادية.",
    },

    {
      id: 2,
      img: RoomTwo,
      stats: "5000da / 100m²",
      button: "Plus de détails",
      button_en: "More details",
      button_ar: "المزيد من التفاصيل",
      title: "F3: Appartements de luxe modernes.",
      title_en: "F3: Modern Luxury Apartments.",
      title_ar: "شقق F3 :  الحديثة الفاخرة. ",
    },

    {
      id: 3,
      img: RoomThree,
      stats: "5000da / 100m²",
      button: "Plus de détails",
      button_en: "More details",
      button_ar: "المزيد من التفاصيل",
      title: "F2: Appartements de confort moderne.",
      title_en: "F2: Modern Comfort Apartments",
      title_ar: "F2: شقق عصرية مريحة.",
    },

    {
      id: 4,
      img: RoomFour,
      stats: "5000da / 100m²",
      button: "Plus de détails",
      button_en: "More details",
      button_ar: "المزيد من التفاصيل",
      title: "Studios: Chambres douillettes et pratiques.",
      title_en: "Studios: Cozy & Convenient Rooms.",
      title_ar: "استوديوهات: غرف مريحة وملائمة.",
    },

    {
      id: 5,
      img: RoomFive,
      stats: "5000da / 100m²",
      link: "fTroisAppartements",
      button: "Plus de détails",
      button_en: "More details",
      button_ar: "المزيد من التفاصيل",
      title: "F3: Haut standing: Maisons de luxe extraordinaires.",
      title_en: "F3: High Standing: Extraordinary Luxury Homes.",
      title_ar: "F3 شقق راقية : منازل فاخرة غير عادية.",
    },

    {
      id: 6,
      img: RoomSix,
      stats: "5000da / 100m²",
      link: "fTroisAppartements",
      button: "Plus de détails",
      button_en: "More details",
      button_ar: "المزيد من التفاصيل",
      title: "F3: Haut standing: Maisons de luxe extraordinaires.",
      title_en: "F3: High Standing: Extraordinary Luxury Homes.",
      title_ar: "F3 شقق راقية : منازل فاخرة غير عادية.",
    },
  ];

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
        <div>
          <div className="grid grid-cols-3 gap-8 mt-20">
            {Boxes.map((item) => {
              return (
                <div key={item.id}>
                  <div>
                    <div className="p-8 ">
                      <div className="overflow-hidden bg-white rounded-lg shadow-2xl">
                        <img
                          className="object-cover object-end"
                          src={item.img}
                          alt="Home in Countryside"
                        />
                        <div className="p-6 text-backgroundColor">
                          <div className="flex items-baseline">
                            <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wide text-teal-800 uppercase bg-teal-200 rounded-full">
                              New
                            </span>
                            <div className="ml-2 text-xs font-semibold tracking-wide uppercase">
                              3 beds &bull; 2 baths
                            </div>
                          </div>
                          <h4 className="mt-2 text-lg font-semibold leading-tight truncate">
                            Beautiful Home in the Countryside
                          </h4>
                          <div className="mt-1">
                            <span>$1,900.00</span>
                            <span className="text-sm text-gray-600">/ wk</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div>
            <div className="flex items-center justify-center min-h-screen p-8 bg-gray-200">
              <div className="overflow-hidden bg-white rounded-lg shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                <img
                  className="object-cover w-full h-48 object-end"
                  src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
                  alt="Home in Countryside"
                />
                <div className="p-6 text-backgroundColor">
                  <div className="flex items-baseline">
                    <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wide text-teal-800 uppercase bg-teal-200 rounded-full">
                      New
                    </span>
                    <div className="ml-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                      3 beds &bull; 2 baths
                    </div>
                  </div>
                  <h4 className="mt-2 text-lg font-semibold leading-tight truncate">
                    Beautiful Home in the Countryside
                  </h4>
                  <div className="mt-1">
                    <span>$1,900.00</span>
                    <span className="text-sm text-gray-600">/ wk</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurRooms;
