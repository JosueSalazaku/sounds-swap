import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Lighting from "@/Pages/Lighting";
import MixingBoard from "@/Pages/MixingBoard";
import Microphones from "@/Pages/Microphones";
import Monitors from "@/Pages/Monitors";
import SoundSystems from "@/Pages/SoundSystems";
import Prod from "@/Pages/Prod";

function OptionsButtons() {
    const buttonData = [
        { id: 1, label: "Lighting", link: "/Lighting", component: Lighting },
        { id: 2, label: "Mixing Board", link: "/MixingBoard", component: MixingBoard },
        { id: 3, label: "Microphones", link: "/Microphones", component: Microphones },
        { id: 4, label: "Monitors", link: "/Monitors", component: Monitors },
        { id: 5, label: "Sound Systems", link: "/SoundSystems", component: SoundSystems },
        { id: 6, label: "Prod", link: "/Prod", component: Prod },
    ];

    return (
        <>
            <ul className="flex space-x-10">
                {buttonData.map((button) => (
                    <li key={button.id}>
                        <Link to={button.link}>
                            <button className="bg-secondary py-1 px-6 text-primary rounded-lg font-bold active:text-white active:bg-primary hover:bg-primary transition ease-in-out delay-150 hover:text-white">
                                {button.label}
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
            <Routes>
                {buttonData.map((button) => (
                    <Route
                        key={button.id}
                        path={button.link}
                        element={<button.component />}
                    />
                ))}
            </Routes>
        </>
    );
}

export default OptionsButtons;
