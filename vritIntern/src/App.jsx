import React from "react";
import { useState } from "react";
import "./App.css";
import Page1 from "./pages/Page1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";

function App() {
  const [open, setOpen] = useState(false);
  const modelopenhandler = () => {
    // alert("model is opened");
    setOpen(true);
  };
  const modelclosehandler = () => {
    // alert("model is opened");

    setOpen(false);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/page1" element={<Page1 />} />
          <Route exact path="/page2" element={<Page2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
