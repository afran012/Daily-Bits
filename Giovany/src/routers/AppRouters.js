import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PreguntasCss } from "../components/PreguntasCss";
import { PreguntasHTML } from "../components/PreguntasHtml";
import { PreguntasJs } from "../components/PreguntasJs";
import { Home } from "../containers/Home";

export const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<PreguntasHTML />} />
        <Route path="/css" element={<PreguntasCss />} />
        <Route path="/js" element={<PreguntasJs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
