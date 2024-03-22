import React from "react";
import SearchBar from "@/Components/SearchBar";
import OptionsButtons from "@/Components/OptionsButtons";
import ShowProductData from "@/Components/ShowProductData";

function Products() {
    return (
        <main
            main
            className="h-screen w-screen flex flex-col justify-start items-center"
        >
            <SearchBar />
            <OptionsButtons />
            <ShowProductData />
        </main>
    );
}

export default Products;
