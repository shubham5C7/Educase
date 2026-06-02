import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingScreen from "./Pages/LandingScreen";
import LoginScreen from "./Pages/LoginScreen";
import SignupScreen from "./Pages/SignupScreen";
import ProfileScreen from "./Pages/ProfileScreen";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
        <div className="w-[400px] h-[600px] bg-white rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] relative">
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
