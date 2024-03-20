// App.jsx
import "./bootstrap";
import "../css/app.css";
import Header from "./Components/Header";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Pricing from "./Pages/Pricing";
import Community from "./Pages/Community";
import AboutUs from "./Pages/AboutUs";
import Lighting from "./Pages/Lighting";
import MixingBoard from "./Pages/MixingBoard";
import Microphones from "./Pages/Microphones";
import Monitors from "./Pages/Monitors";
import SoundSystems from "./Pages/SoundSystems";
import Prod from "./Pages/Prod";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        const AppRoutes = () => (
            <Routes>
                <Route exact path="/" element={<App {...props} />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Pricing" element={<Pricing />} />
                <Route path="/Community" element={<Community />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/Lighting" element={<Lighting />} />
                <Route path="/MixingBoard" element={<MixingBoard />} />
                <Route path="/Microphones" element={<Microphones />} />
                <Route path="/Monitors" element={<Monitors />} />
                <Route path="/SoundSystems" element={<SoundSystems />} />
                <Route path="/Prod" element={<Prod />} />
            </Routes>
        );

        createRoot(el).render(
            <Router>
                <div className="w-screen h-screen flex flex-col">
                    <Header />
                    <AppRoutes />
                    <Footer />
                </ div>

            </Router>
        );
    },
});
