import React from "react";
import { Link } from 'react-router-dom'; // Import Link from React Router

function Header() {
    return (
        <header className="flex flex-row justify-start space-x-20 font-semibold text-xl items-center bg-secondary py-4 border-b-2 border-primary font-sans">

            <Link to="/">
                <img
                    src="/images/SoundSwap_logo_3.png"
                    alt="logo"
                    className="h-15 w-12 ml-10"
                />
            </Link>
            <ul className="flex flex-row- space-x-7">
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/SignIn">Sign In</Link></li>
                <li><Link to="/SignUp">Sign Up</Link></li>
            </ul>
            <ul className="flex flex-row space-x-7">
                <li>Sign In</li>
                <li>Sing Up</li>
            </ul>
        </header>
    );
}

export default Header;
