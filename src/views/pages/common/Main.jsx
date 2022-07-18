import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../../views/pages/home/Home";

export const Main = () => {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
