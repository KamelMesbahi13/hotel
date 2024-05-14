import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Home = lazy(() => import("./Components/Home/Home"));
const AboutUsPage = lazy(() => import("./Components/AboutUsPage/Home"));
const ContactUs = lazy(() => import("./Components/ContactUs/Home"));
// const Footer = lazy(() => import("./Ui/Footer/Footer"));
import Loader from "./Ui/Loader/Loader";
import Up from "./Ui/Up/Up";
import FThreeHighApartments from "./Components/AllApartments/FThreeHighApartments/Home";
import FThreeApartments from "./Components/AllApartments/FThreeApartments/Home";
import FTwoApartments from "./Components/AllApartments/FTwoApartments/Home";

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="mt-20 textCenter">
            <Loader />
          </div>
        }
      >
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/FTroisHighStandingAppartements"
              element={<FThreeHighApartments />}
            />

            <Route path="/FTroisAppartements" element={<FThreeApartments />} />
            <Route path="/FDeuxAppartements" element={<FTwoApartments />} />

            <Route path="/À-Propos-de-Nous" element={<AboutUsPage />} />
            <Route path="/Contactez-Nous" element={<ContactUs />} />
          </Routes>
          <Up />
          {/* <Footer /> */}
        </div>
      </Suspense>
    </>
  );
};

export default App;
