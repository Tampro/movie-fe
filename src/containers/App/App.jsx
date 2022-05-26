import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../scss/app.scss";
import Layout from "../Layout";

function App() {
  return (
    <div className="App">
      <Layout />
      <main className="container">
        <div className="bg-light p-5 rounded">
          <h1>Navbar example</h1>
          <p className="lead">
            This example is a quick exercise to illustrate how fixed to top
            navbar works. As you scroll, it will remain fixed to the top of your
            browser’s viewport.
          </p>
          <a
            className="btn btn-lg btn-primary"
            href="../components/navbar/"
            role="button"
          >
            View navbar docs &raquo;
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
