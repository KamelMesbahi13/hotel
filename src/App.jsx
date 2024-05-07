import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Home = lazy(() => import("./Components/Home/Home"));

import Footer from "./Ui/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
