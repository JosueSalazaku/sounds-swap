import React from "react";
import dummyProductData from "../DummyData/ProductData.js";

export const ShowProductData = () => {
    return (
        <main className="mt-20">
            {dummyProductData.map(
                (product, index) =>
                    // Check if the current index is divisible by 4 to start a new row
                    index % 4 === 0 ? (
                        // Start a new row container
                        <div key={index} className="flex flex-row space-x-12">
                            {dummyProductData
                                .slice(index, index + 4)
                                .map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col justify-center items-center w-80 mx-2 my-5 p-10  bg-secondary rounded-md"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-44 w-44 border border-primary"
                                        />
                                        <h3 className="font-bold m-2">
                                            {item.name}
                                        </h3>
                                        {/* <p>{item.description}</p> */}
                                        <p className="font-bold">
                                            €{item.price}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    ) : null // If the current index is not divisible by 4, don't render anything
            )}
        </main>
    );
};

export default ShowProductData;
