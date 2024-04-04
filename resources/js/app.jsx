// App.jsx
import React from "react";
import "./bootstrap";
import "../css/app.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { createRoot } from "react-dom/client";
import { createInertiaApp, InertiaProvider } from "@inertiajs/inertia-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/SignUp";
import Pricing from "./Pages/Pricing";
import Community from "./Pages/Community";
import AboutUs from "./Pages/AboutUs";
import Lighting from "./Pages/Lighting";
import MixingBoard from "./Pages/MixingBoard";
import Microphones from "./Pages/Microphones";
import Monitors from "./Pages/Monitors";
import SoundSystems from "./Pages/SoundSystems";
import CordCables from "./Pages/CordCables";
import Checkout from "./Pages/Checkout";
import ProductDisplay from "./Components/ProductDisplay";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        const AppRoutes = () => (
            <Routes>
                <Route exact path="/" element={<App {...props}/>} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/products" element={<Products />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/Community" element={<Community />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/CordCables" element={<CordCables />} />
                <Route path="/SoundSystems" element={<SoundSystems />} />

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
    render: ({ Page, props }) => (
        <InertiaProvider initialPage={props}>
            <Page {...props} />
        </InertiaProvider>
    ),


});
