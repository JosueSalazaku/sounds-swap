import CartSummary from "@/Components/CartSummary";
import React from "react";

function Checkout() {
    return (
        <div className="flex flex-col justify-start items-center">
            <CartSummary />
    </div> 
    );
}

export default Checkout;