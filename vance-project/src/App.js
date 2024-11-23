import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import MainPage from "./components/Dashboard/MainPage";
import RateAlertDashboard from "./components/Dashboard/RateAlertGraph";
import Dashboard from "./components/Dashboard/Dashboard";
import AnimationWrapper from "./components/LandingPage/AnimationWrapper";
import Page1 from "./components/LandingPage/SepratePages/Page1";
import Page2 from "./components/LandingPage/SepratePages/Page2";
import Page3 from "./components/LandingPage/SepratePages/Page3";
import Page4 from "./components/LandingPage/SepratePages/Page4";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<AnimationWrapper />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/rate-alert-dashboard"
                element={<RateAlertDashboard />}
            />
            <Route path="/MainPage" element={<MainPage />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
        </Routes>
    );
}

export default App;
