import React from "react";
import dummyProductData from "/Users/josuesalazaku/Developer/BeCode/Summerpastures/sounds-swap/resources/DummyData/ProductData.js";

export const ShowProductData = () => {
    return (
        <main className="mt-20">
            {dummyProductData.map((product, index) =>
                // Check if the current index is divisible by 4 to start a new row
                index % 4 === 0 ? (
                    // Start a new row container
                    <div key={index} className="flex flex-row flex-wrap">
                        {dummyProductData
                            .slice(index, index + 4)
                            .map((item) => (
                                // Render each product within the row
                                <div
                                    key={item.id}
                                    className="flex flex-col flex-grow w-64 mx-2 my-2"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-auto"
                                    />
                                    <h3 className="font-bold">{item.name}</h3>
                                    <p>{item.description}</p>
                                    <p>{item.price}</p>
                                </div>
                            ))}
                    </div>
                ) : null // If the current index is not divisible by 4, don't render anything
            )}
        </main>
    );
};

export default ShowProductData;
