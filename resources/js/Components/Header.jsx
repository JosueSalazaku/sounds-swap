import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex flex-row justify-around space-x-20 font-semibold text-xl items-center bg-secondary py-4 border-b-2 border-primary font-sans">
            <Link to="/">
                <img
                    src="/images/SoundSwap_logo_3.png"
                    alt="logo"
                    className="h-15 w-12 ml-10"
                />
            </Link>

                <ul className="flex flex-row- space-x-7">
                    <li>
                        <Link to="/AboutUs">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Products">Products</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/Community">Community</Link>
                    </li>
                </ul>
                <ul className="flex flex-row space-x-7">
                    <li className="border border-primary p-2.5 rounded-lg">
                        <Link to="/SignIn">Sign In</Link>
                    </li>
                    <li className=" bg-primary text-white p-2.5 rounded-lg">
                        <Link to="/SignUp">Sign Up</Link>
                    </li>
                </ul>
        </header>
    );
}

export default Header;
