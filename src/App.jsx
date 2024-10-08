import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Home = lazy(() => import("./Components/Home/Home"));
const AboutUsPage = lazy(() => import("./Components/AboutUsPage/Home"));
const ContactUs = lazy(() => import("./Components/ContactUs/Home"));
const Footer = lazy(() => import("./Ui/Footer/Footer"));
import Loader from "./Ui/Loader/Loader";
import Up from "./Ui/Up/Up";
import Error from "./Components/404Error/404Error";

const FThreeHighApartments = lazy(() =>
  import("./Components/AllApartments/FThreeHighApartments/Home")
);

const FThreeHighApartmentsDetails = lazy(() =>
  import(
    "./Components/AllApartments/FThreeHighApartments/FThreeHighApartmentsDetails/FThreeHighApartmentsDetails"
  )
);

const FThreeApartments = lazy(() =>
  import("./Components/AllApartments/FThreeApartments/Home")
);

const StudiosApartments = lazy(() =>
  import("./Components/AllApartments/StudioApartments/Home")
);

const FThreeApartmentsDetails = lazy(() =>
  import(
    "./Components/AllApartments/FThreeApartments/FThreeApartmentsDetails/FThreeApartmentsDetails"
  )
);

const StudioApartmentsDetails = lazy(() =>
  import(
    "./Components/AllApartments/StudioApartments/StudioApartmentsDetails/StudioApartmentsDetails"
  )
);

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
            <Route
              path="/FTroisHighStandingAppartements/:FTroisHighStandingId"
              element={<FThreeHighApartmentsDetails />}
            />
            <Route path="/FTroisAppartements" element={<FThreeApartments />} />
            <Route
              path="/FTroisAppartements/:FTroisAppartementsId"
              element={<FThreeApartmentsDetails />}
            />

            <Route
              path="/StudiosAppartements"
              element={<StudiosApartments />}
            />
            <Route
              path="/StudiosAppartements/:StudiosApartmentsId"
              element={<StudioApartmentsDetails />}
            />
            <Route path="/À-Propos-de-Nous" element={<AboutUsPage />} />
            <Route path="/Contactez-Nous" element={<ContactUs />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Up />
          <Footer />
        </div>
      </Suspense>
    </>
  );
};

export default App;
