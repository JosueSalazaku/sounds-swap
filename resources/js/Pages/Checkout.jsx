import CartSummary from "@/Components/CartSummary";

function Checkout() {

    return (
        <div className="flex flex-col justify-start items-center">
            This is the checkout page
            <CartSummary />
    </div> 
    );
}

export default Checkout;