import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../scss/app.scss";
import Layout from "../Layout";
import Home from "../Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Share from "../Share";

function App() {
    return <BrowserRouter>
        <Layout />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/share" element={<Share/>} />
        </Routes>
    </BrowserRouter>
//   return (
//     <div className="App">
//       <Layout />
//       <main className="container">
//         <Home />
//       </main>
//     </div>
//   );
}

export default App;
