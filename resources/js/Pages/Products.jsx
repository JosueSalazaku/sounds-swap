import React from "react";
import SearchBar from "@/Components/SearchBar";
import OptionsButtons from "@/Components/OptionsButtons";
import dummyProductData from "/Users/josuesalazaku/Developer/BeCode/Summerpastures/sounds-swap/resources/DummyData/ProductData.js";
import ShowProductData from "@/Components/ShowProductData";

function Products() {
    return (
        <main className="h-screen flex flex-col justify-start items-center">
            {/* Searchbar*/}
            <SearchBar />
            {/* options button components */}
        <OptionsButtons />
        <ShowProductData/>
        </main>
    );
}

export default Products;
