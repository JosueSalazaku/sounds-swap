import React from "react";

const AddToCartButton = ({ onClick }) => {
    return (
        <button
            className="bg-secondary py-1 px-6 text-primary rounded-lg font-bold active:text-white active:bg-primary hover:bg-primary transition ease-in-out delay-150 hover:text-white"
            onClick={onClick}
        >
            Add to Cart
        </button>
    );
};

export default AddToCartButton;