import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from React Router

function Footer() {
  return (
    <footer className = "flex flex-row justify-start space-x-20 font-semibold text-xl items-center bg-secondary py-4 border-b-2 border-primary font-sans">
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