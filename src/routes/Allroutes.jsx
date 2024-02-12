import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/register";
import Contact from "../pages/contact";
import PageNotFound from "../pages/pagenotfound";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Allroutes;
