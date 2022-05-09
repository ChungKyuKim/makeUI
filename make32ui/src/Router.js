import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accordion from "./accodion/Accordion";
import Carousel from "./carousel/Carousel";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accordion />} />
        <Route path="/carousel" element={<Carousel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
