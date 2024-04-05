import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Import the shopping cart icon from react-icons library

const AddToCartButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center bg-primary text-white rounded-full w-10 h-10 focus:outline-none hover:border-accent hover:border-4 border"
        >
            <FaShoppingCart /> {/* Render the shopping cart icon */}
        </button>
    );
};

export default AddToCartButton;
