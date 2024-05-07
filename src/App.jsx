import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Home = lazy(() => import("./Components/Home/Home"));
// const Footer = lazy(() => import("./Ui/Footer/Footer"));
import Loader from "./Ui/Loader/Loader";
import Up from "./Ui/Up/Up";
import AboutUsPage from "./Components/AboutUsPage/Home";

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
            <Route path="/about-us" element={<AboutUsPage />} />
          </Routes>
          <Up />
          {/* <Footer /> */}
        </div>
      </Suspense>
    </>
  );
};

export default App;
