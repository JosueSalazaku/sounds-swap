import React from "react";
import SearchBar from "@/Components/SearchBar";
import OptionsButtons from "@/Components/OptionsButtons";
import ProductDisplay from "@/Components/ProductDisplay";
import { usePage } from '@inertiajs/react'

function Products() {

    return (
        <main
            main
            className="h-screen w-screen flex flex-col justify-start items-center"
        >
            <SearchBar />
            <OptionsButtons />
            <ProductDisplay />
        </main>
    );
}

export default Products;

