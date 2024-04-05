import { Link, Head } from "@inertiajs/react";
import CrowdHeroPic from "/public/images/CrowdHeroPic.png";
import LightEquipmentImage from "/public/images/LightEquipmentImage.jpg";
import AudioEquipmentImage from "/public/images/AudioEquipmentImage.jpg";

function Welcome({ auth, laravelVersion, phpVersion }) {
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
            <div className="h-screen w-screen flex flex-col justify-start items-center">
                <h1 className="font-extrabold text-primary mt-12 font-sans text-7xl text-center">SoundSwap <br /> The Place To Buy Or Sell <br /> Audio Equipement </h1>
                <div className="mt-28 space-x-28">
                <button className="h-12 w-40 text-white bg-primary">BUY</button>
                <button className="h-12 w-40 text-white bg-primary">SELL</button>
                </div>
            </div>
            <div className="h-screen w-screen" >
                <h2 className="text-4xl font-bold">Why SoundSwap?</h2>
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
            <div className="flex flex-col items-center bg-white border border-lime-200 rounded-lg shadow mx-20 mb-10 md:flex-row md:max-w-full hover:bg-white dark:border-lime-200 dark:bg-lime-200 dark:hover:bg-lime-300">
                <img
                    className="object-cover m-5 rounded-t-lg  md:h-auto md:w-90 md:rounded-md md:rounded-s-lg"
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
                    <button className="mt-10 bg-primary text-white p-2.5 rounded-lg hover:bg-slate-700 font-semibold">
                        Go to Light Equipment
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center bg-white border border-lime-200 rounded-lg shadow mx-20 mb-10 md:flex-row md:max-w-full hover:bg-white dark:border-lime-200 dark:bg-lime-200 dark:hover:bg-lime-300">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h3 className="mb-2 text-2-xl font-bold tracking-tight">
                        Audio Equipment
                    </h3>
                    <p className="mb-3 font-normal">
                        Explore our "Audio Equipment" section, a comprehensive
                        hub of high-fidelity sound gear, encompassing everything
                        from professional studio microphones to audiophile-grade
                        speakers, curated to elevate your listening and
                        recording experiences to unparalleled heights.
                    </p>
                    <button className="mt-10 bg-primary text-white p-2.5 rounded-lg hover:bg-slate-700 font-semibold">
                        Go to Audio Equipment
                    </button>
                </div>
                <img
                    className="object-cover m-5 rounded-t-lg  md:h-auto md:w-90 md:rounded-md md:rounded-s-lg"
                    src={AudioEquipmentImage}
                    alt=""
                />
            </div>
        </main>
    );
}

export default Welcome;
