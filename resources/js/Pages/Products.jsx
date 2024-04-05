import React from "react";
import SearchBar from "@/Components/SearchBar";
import OptionsButtons from "@/Components/OptionsButtons";
import ProductDisplay from "@/Components/ProductDisplay";
//import AddToCartButton from "@/Components/AddToCartButton";

function Products() {
    const handleAddToCart = () => {
        // Implement the logic to add the product to the cart here
        console.log("Product added to cart!");
    };

    return (
        <main className="h-screen w-screen flex flex-col justify-start items-center">
            <SearchBar />
            <OptionsButtons />
            <ProductDisplay />
            {/*<AddToCartButton onClick={handleAddToCart} />*/}
        </main>
    );
}

export default Products;
