import React from "react";
import MixingBoardDummyData from "@/DummyData/MixingBoardDummyData";
import OptionsButtons from "@/Components/OptionsButtons";
import SearchBar from "@/Components/SearchBar";

function Ligthing() {
    return (
      <main className="my-12 w-screen flex flex-col justify-center items-center">
        <SearchBar/>
            <OptionsButtons />
            {MixingBoardDummyData.map(
                (Mixing, index) =>
                    // Check if the current index is divisible by 4 to start a new row
                    index % 4 === 0 ? (
                        // Start a new row container
                        <div key={index} className="flex flex-row gap-10">
                            {MixingBoardDummyData.slice(index, index + 4).map(
                                (item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col justify-center w-80 my-4 p-6  bg-secondary rounded-md"
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
                                        <button className=" border-4 border-accent rounded-lg h-10 w-20 my-3 self-end hover:bg-accent active:bg-primary">
                                            Buy
                                        </button>
                                    </div>
                                )
                            )}
                        </div>
                    ) : null // If the current index is not divisible by 4, don't render anything
            )}
        </main>
    );
}

export default Ligthing;
