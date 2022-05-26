import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../scss/app.scss";
import Layout from "../Layout";
import Home from "../Home";

function App() {
  return (
    <div className="App">
      <Layout />
      <main className="container">
        <Home />
      </main>
    </div>
  );
}

export default App;
