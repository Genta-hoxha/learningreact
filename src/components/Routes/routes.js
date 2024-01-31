// routes/Routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Home";
import About from "../About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
