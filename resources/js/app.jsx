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

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Welcome />} />
                    <Route path="/Products" element={<App {...props} />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/SignIn" element={<SignIn />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/Pricing" element={<Pricing />} />
                    <Route path="/Community" element={<Community />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/Lighting" element={<App {...props} />} />
                    <Route path="/MixingBoard" element={<App {...props} />} />
                    <Route path="/Microphones" element={<App {...props} />} />
                    <Route path="/Monitors" element={<App {...props} />} />
                    <Route path="/SoundSystems" element={<App {...props} />} />
                    <Route path="/CordCables" element={<App {...props} />} />
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
