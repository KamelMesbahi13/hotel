import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <div className="relative aboutUsBack">
          <div className="absolute -translate-y-1/2 top-1/2">
            <div className="px-16 md:w-3/4">
              <h1>{t("about_us_page_header_header")}</h1>
            </div>
          </div>
        </div>
        <div className="container mt-8">
          <div className="textCenter">
            <p className="tracking-wider">
              Welcome to our hotel apartments, set to open its doors in the
              summer of 2024! Our apartments are designed to be your home away
              from home, offering a cozy and welcoming environment for tourists
              looking for a comfortable place to stay. Located in a prime
              location, our apartments provide easy access to the city s
              attractions, making it convenient for guests to explore and
              experience everything the area has to offer. We take pride in
              offering a range of accommodation options to suit different needs
              and preferences. Our high-standing F3 apartments feature luxurious
              amenities and spacious layouts, perfect for guests seeking a
              premium experience. Additionally, we offer normal F3 apartments,
              F2 units, and studios, providing a variety of choices to
              accommodate solo travelers, couples, families, and groups. At our
              hotel apartments, we prioritize your comfort and satisfaction.
            </p>
            <p className="mt-8">
              Each apartment is equipped with modern amenities to ensure a
              pleasant stay, from comfortable beds and spacious living areas to
              fully-equipped kitchens and stylish bathrooms. Our friendly and
              attentive staff are dedicated to providing exceptional service,
              ensuring that your needs are met throughout your stay. Whether you
              re visiting for leisure or business, our hotel apartments offer a
              relaxing retreat where you can unwind and recharge. Take advantage
              of our amenities such as fitness facilities, business centers, and
              communal spaces, or simply enjoy a quiet evening in your own
              private sanctuary. We are excited to welcome you to our hotel
              apartments and to provide you with a memorable and enjoyable
              experience during your time with us. Your comfort and satisfaction
              are our top priorities, and we look forward to exceeding your
              expectations during your stay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
