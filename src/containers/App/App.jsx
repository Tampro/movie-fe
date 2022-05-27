import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../scss/app.scss";
import Layout from "../Layout";
import Home from "../Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Share from "../Share";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/share" element={<Share />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
