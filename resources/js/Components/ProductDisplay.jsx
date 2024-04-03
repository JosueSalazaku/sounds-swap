import React from "react";
import { usePage } from "@inertiajs/react";

function ProductDisplay() {
    const { products } = usePage().props;

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductDisplay;
