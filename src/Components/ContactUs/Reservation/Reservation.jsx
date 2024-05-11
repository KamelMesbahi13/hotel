import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Reservation = () => {
  return (
    <div className="mt-20">
      <div>
        <div className="flex flex-col md:flex-row">
          <div>
            <div className="textCenter md:initialDirection">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.669850087001!2d3.4540857746309466!3d36.75449497027669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e685e3bdd12a1%3A0x9b134c10fe59d691!2sR%C3%A9sidence%20Zidane%2C%20Lotissement%20A%C3%AFn%20Abdellah!5e0!3m2!1sen!2sdz!4v1715088631450!5m2!1sen!2sdz"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
                className="md:w-[600px] md:h-[450px] w-[300px] h-[250px] border-[10px] border-white"
              ></iframe>
            </div>
          </div>
          <div className="px-8 py-16 border textCenter md:ltr:ml-40 md:rtl:mr-40">
            <div className="mb-16">
              <div className="mb-4">
                <h2 className="text-sm text-secondColor">Reservation</h2>
                <h2>Direct reservation</h2>
              </div>
              <div>
                <p className="mb-2">Email: hotel@gmail.com</p>
                <p>Call: 0555 55 55 55</p>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <h2 className="text-sm text-secondColor">Hotel Address</h2>
                <h2>Hotel Apartment Zidane</h2>
              </div>
              <div>
                <p>Boumerdes, 35000 Boumerdes</p>
              </div>
              <div>
                <div className="flex justify-center w-1/2 mt-4">
                  <i>
                    <FaInstagram />
                  </i>
                  <i className="mx-4">
                    <FaFacebook />
                  </i>
                  <i>
                    <FaTiktok />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
