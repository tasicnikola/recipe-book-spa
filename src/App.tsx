import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Admin from "./admin/components/Admin";
import Public from "./public/components/Public";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/*" element={<Public />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
