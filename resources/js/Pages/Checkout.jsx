import CartSummary from "@/Components/CartSummary";
import dummyProductData from '@/DummyData/ProductData';

function Checkout() {

    return (
        <div className="flex flex-col justify-start items-center">
            <CartSummary ProductData={dummyProductData} />
    </div> 
    );
}

export default Checkout;