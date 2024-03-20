import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from React Router

function Footer() {
  return (
    <footer className = "flex flex-row justify-around space-x-20 font-semibold text-xl items-center bg-secondary py-4 border-t-2 border-primary font-sans">
     <Link to="/">
                <img
                    src="/images/SoundSwap_logo_3.png"
                    alt="logo"
                    className="h-15 w-12 ml-10"
                />
            </Link>
    <ul className ="flex flex-row- space-x-7">
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/SignIn">Sign In</Link></li>
            <li><Link to="/SignUp">Sign Up</Link></li>
    </ul>
    <p>&copy; {new Date().getFullYear()} BeCode</p>
  </footer>
);
};


export default Footer