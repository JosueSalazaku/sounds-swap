import React from "react";

function OptionsButton() {
    const buttonData = [
        { id: 1, label: "Lighting", link: "/link1" },
        { id: 2, label: "Mixing Board", link: "/link2" },
        { id: 3, label: "Microphones", link: "/link3" },
        { id: 4, label: "Monitors", link: "/link4" },
        { id: 5, label: "Sound Systems", link: "/link5" },
        { id: 6, label: "Products", link: "/link6" },

        // Add the links to all the options pages and changes the button names/ labels
    ];

    return (
        <div>
            <ul className="flex space-x-10">
                {buttonData.map((button) => (
                    <li key={button.id}>
                        <a href={button.link}>
                            <button className="bg-secondary py-1 px-6 text-primary rounded-lg font-semibold active:text-white active:bg-primary hover:bg-primary hover:text-white">
                                {button.label}
                            </button>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OptionsButton;
