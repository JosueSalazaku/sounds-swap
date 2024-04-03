import { usePage } from '@inertiajs/inertia-react';

const ProductDisplay = () => {
    // Access the products data using the usePage hook
    const { products } = usePage().props;

    return (
        <main className="my-12 w-screen  flex flex-col justify-center items-center">
            {products.map((product, index) =>
                index % 4 === 0 ? (
                    <div key={index} className="flex flex-row gap-10">
                        {products.slice(index, index + 4).map((item) => (
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
                                    src={item.imgURL}
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
                        ))}
                    </div>
                ) : null
            )}
        </main>
    );
};

export default ProductDisplay;
