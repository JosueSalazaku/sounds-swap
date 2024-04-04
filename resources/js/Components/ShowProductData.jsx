import React from "react";
import dummyProductData from "../DummyData/ProductData.js";
import AddToCartButton from "@/Components/AddToCartButton";

export const ShowProductData = () => {
    return (
        <main className="mt-20 flex flex-col justify-start item-center">
            {dummyProductData.map(
                (product, index) =>
                    // Check if the current index is divisible by 4 to start a new row
                    index % 4 === 0 ? (
                        // Start a new row container
                        <div key={index} className="flex flex-row gap-10">
                            {dummyProductData
                                .slice(index, index + 4)
                                .map((item, innerIndex) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col justify-center w-80 my-4 p-6  bg-secondary rounded-md relative"
                                    >
                                        <div className="flex flex-row-reverse">
                                            <img
                                                src="/images/favorite-bookmark-svgrepo-com.svg"
                                                alt=""
                                                className="h-8 w-9 active: fill-primary"
                                            />
                                        </div>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-44 w-48 self-center mt-4"
                                        />
                                        <h3 className="font-bold m-2 pl-7">
                                            {item.name}
                                        </h3>
                                        {/* <p>{item.description}</p> */}
                                        <p className="font-extrabold pl-8">
                                            €{item.price}
                                        </p>
                                        {/* AddToCartButton positioned at bottom right */}
                                        <div className="absolute bottom-0 right-0 mb-2 mr-2">
                                            <AddToCartButton product={item} className="p-4" />
                                        </div>
                                    </div>
                                    
                                ))}
                        </div>
                    ) : null // If the current index is not divisible by 4, don't render anything
            )}
        </main>
    );
};

export default ShowProductData;