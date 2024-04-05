import CartSummary from "@/Components/CartSummary";
import dummyProductData from "../DummyData/ProductData.js";

function Checkout() {

    return (
        <div className="flex flex-col justify-start items-center">
            This is the checkout page
            <CartSummary />
    </div> 
    );
}

export default Checkout;