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
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/SignUp";
import Pricing from "./Pages/Pricing";
import Community from "./Pages/Community";
import AboutUs from "./Pages/AboutUs";

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
                <Header />
                <Routes>
                    <Route exact path="/" element={<Welcome />} />
                    <Route path="/products" element={<App {...props} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dignUp" element={<SignUp />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/lighting" element={<App {...props} />} />
                    <Route path="/mixingBoard" element={<App {...props} />} />
                    <Route path="/microphones" element={<App {...props} />} />
                    <Route path="/monitors" element={<App {...props} />} />
                    <Route path="/soundSystems" element={<App {...props} />} />
                    <Route path="/cordCables" element={<App {...props} />} />
                </Routes>
                <Footer />
            </Router>
        );
    },
    render: ({ Page, props }) => (
        <InertiaProvider initialPage={props}>
            <Page {...props} />
        </InertiaProvider>
    ),


});
