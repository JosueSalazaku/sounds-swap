import React, { useState } from "react";
import SoundSystemsDummyData from "@/DummyData/SoundsSystemDummyData";
import OptionsButtons from "@/Components/OptionsButtons";
import SearchBar from "@/Components/SearchBar";

function Ligthing() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <main className="my-12 w-screen  flex flex-col justify-center items-center">
            <SearchBar />
            <OptionsButtons />
            {SoundSystemsDummyData.map((Sounds, index) =>
                index % 4 === 0 ? (
                    <div key={index} className="flex flex-row gap-10">
                        {SoundSystemsDummyData.slice(index, index + 4).map(
                            (item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col justify-center w-80 my-4 p-6 bg-secondary rounded-md"
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
                                        onClick={() => handleItemClick(item)}
                                    />
                                    <h3 className="font-bold m-2 pl-7">
                                        {item.name}
                                    </h3>
                                    <p className="font-extrabold pl-8">
                                        €{item.price}
                                    </p>
                                    <button className="bg-primary text-white font-bold rounded-lg h-10 w-20 my-3 self-end hover:bg-accent active:bg-primary">
                                        Buy
                                    </button>
                                </div>
                            )
                        )}
                    </div>
                ) : null
            )}
            {selectedItem && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-light-bg p-4 rounded-lg shadow-lg">
                    <img
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        className="w-full h-full mx-auto"
                    />
                    <div className="text-center">
                        <p className="font-bold text-xl">{selectedItem.name}</p>
                        <p className="font-bold text-2xl font-large py-5">
                            {selectedItem.description}
                        </p>
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="bg-primary text-white font-bold rounded-lg h-10 w-20 mt-4 hover:bg-accent active:bg-primary"
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Ligthing;
