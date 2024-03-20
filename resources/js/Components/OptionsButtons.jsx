import React from "react";
import { Link, Routes, Route } from "react-router-dom";


function OptionsButtons() {
    const buttonData = [
        { id: 1, label: "Lighting", link: "/Lighting" },
        { id: 2, label: "Mixing Board", link: "/MixingBoard" },
        { id: 3, label: "Microphones", link: "/Microphones" },
        { id: 4, label: "Monitors", link: "/Monitors" },
        { id: 5, label: "Sound Systems", link: "/SoundSystems" },
        { id: 6, label: "Products", link: "/Prod" },
    ];

    return (
        <div>
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
        </div>
    );
}

export default OptionsButtons;
