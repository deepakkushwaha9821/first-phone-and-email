import React from "react";
import "./index.css"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneVerification from "./PhoneVerification";
import EmailVerification from "./EmailVerification";
import "./App.css";
// import "./EmailVerification.css";
// import "./PhoneVerification.css";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PhoneVerification />} />
        <Route path="/emailverification" element={<EmailVerification />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
