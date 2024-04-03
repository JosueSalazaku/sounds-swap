import { Link, Head } from "@inertiajs/react";
import CrowdHeroPic from "/public/images/CrowdHeroPic.png";
import LightEquipmentImage from "/public/images/LightEquipmentImage.jpg";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <main className="flex flex-col justify-start items-center">
            <div
                className="bg-fixed pb-0 w-screen flex flex-col justify-start items-center"
                style={{
                    backgroundImage: `url(${CrowdHeroPic})`,
                    height: "500px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h1 className="font-extrabold text-primary mt-12 font-sans text-7xl text-center">
                    SoundSwap <br /> The Place To Buy Or Sell <br /> Audio
                    Equipement{" "}
                </h1>
                <div className="mt-28 space-x-28">
                    <button className="px-12 bg-primary text-white p-2.5 rounded-lg focus:shadow-outline hover:bg-slate-800 font-semibold ">
                        Brows Equipments
                    </button>
                    <button className="px-12 bg-primary text-white p-2.5 rounded-lg focus:shadow-outline hover:bg-slate-800 font-semibold">
                        List Your Items!
                    </button>
                </div>
            </div>
            <div className="h-screen text-center">
                <h2 className="m-10 text-4xl font-bold text-left">
                    Why SoundSwap?
                </h2>
                <p className="m-10 text-left">
                    Welcome to SOUNDSWAP, your premier online marketplace
                    dedicated exclusively to the world of audio equipment.
                    Whether you're a professional sound engineer, an
                    enthusiastic hobbyist, or someone stepping into the vibrant
                    universe of audio production, SOUNDSWAP offers a seamless
                    platform to buy and sell a wide range of high-quality audio
                    gear.
                </p>
                <p className="m-10 text-left">
                    From vintage amplifiers that carry the warmth of the past to
                    cutting-edge digital interfaces that define the future of
                    sound, our marketplace connects a passionate community of
                    audiophiles and music creators.
                </p>
                <p className="m-10 text-left">
                    With an unwavering commitment to quality, authenticity, and
                    an exceptional customer experience, SOUNDSWAP empowers you
                    to bring your audio visions to life, ensuring that every
                    transaction is not just a trade but a step towards achieving
                    sonic perfection.
                </p>
                <p className="m-10 text-left">
                    Join us in our mission to make great sound accessible to
                    all, fostering a world where the passion for audio thrives
                    and resonates.
                </p>
                <button className="ml-10 px-20 bg-primary text-white p-2.5 rounded-lg hover:bg-slate-700 font-semibold">
                    Learn More !
                </button>
            </div>
            <a
                href="#"
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                <img
                    className="object-cover w-full m-5 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-md md:rounded-s-lg"
                    src={LightEquipmentImage}
                    alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h3 className="mb-2 text-2-xl font-bold tracking-tight">
                        Light Equipment
                    </h3>
                    <p className="mb-3 font-normal">
                        Discover our "Light Equipment" section, where
                        portability meets performance, featuring a curated
                        selection of compact, easy-to-carry audio devices
                        designed for creators on the move, without compromising
                        on sound quality.
                    </p>
                    {/*<button className="mb-3 ml-10 text-right px-20 bg-primary text-white p-2.5 rounded-lg hover:bg-slate-700 font-semibold">
                        Go to Light Equipment
            </button>*/}
                </div>
            </a>
        </main>
    );
}
