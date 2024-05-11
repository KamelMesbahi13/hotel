import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Home = lazy(() => import("./Components/Home/Home"));
const AboutUsPage = lazy(() => import("./Components/AboutUsPage/Home"));
const ContactUs = lazy(() => import("./Components/ContactUs/Home"));
const Footer = lazy(() => import("./Ui/Footer/Footer"));
import Loader from "./Ui/Loader/Loader";
import Up from "./Ui/Up/Up";

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
            <Route path="/À-Propos-de-Nous" element={<AboutUsPage />} />
            <Route path="/Contactez-Nous" element={<ContactUs />} />
          </Routes>
          <Up />
          <Footer />
        </div>
      </Suspense>
    </>
  );
};

export default App;
