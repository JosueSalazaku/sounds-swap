import React from "react";
import SearchBar from "@/Components/SearchBar";
import OptionsButtons from "@/Components/OptionsButtons";
import ShowProductData from "@/Components/ShowProductData";

function Products() {
    return (
        <main className="flex flex-col justify-start items-center">
            {/* Searchbar*/}
            <SearchBar />
            {/* options button components */}
            <OptionsButtons />
            <ShowProductData />
        </main>
    );
}

export default Products;
