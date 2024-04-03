import { Link, Head } from "@inertiajs/react";
import CrowdHeroPic from "/public/images/CrowdHeroPic.png";

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
            <div className="bg-fixed pb-0 w-screen flex flex-col justify-start items-center" style={{ backgroundImage: `url(${CrowdHeroPic})`, height: '700px', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <h1 className="font-extrabold text-primary mt-12 font-sans text-7xl text-center">SoundSwap <br /> The Place To Buy Or Sell <br /> Audio Equipement </h1>
                <div className="mt-28 space-x-28">
                <button className="px-12 bg-primary text-white p-2.5 rounded-lg focus:shadow-outline hover:bg-slate-800 font-semibold ">Brows Equipments</button>
                <button className="px-12 bg-primary text-white p-2.5 rounded-lg focus:shadow-outline hover:bg-slate-800 font-semibold">List Your Items!</button>
                </div>
            </div>
            <div className="h-screen w-screen" >
                <h2 className="m-10 text-4xl font-bold ">Why SoundSwap?</h2>
                <p className="m-10">Welcome to SOUNDSWAP, your premier online marketplace dedicated exclusively to the world of audio equipment. Whether you're a professional sound engineer, an enthusiastic hobbyist, or someone stepping into the vibrant universe of audio production, SOUNDSWAP offers a seamless platform to buy and sell a wide range of high-quality audio gear.</p>
                <p className="m-10">From vintage amplifiers that carry the warmth of the past to cutting-edge digital interfaces that define the future of sound, our marketplace connects a passionate community of audiophiles and music creators.</p>
                <p className="m-10">With an unwavering commitment to quality, authenticity, and an exceptional customer experience, SOUNDSWAP empowers you to bring your audio visions to life, ensuring that every transaction is not just a trade but a step towards achieving sonic perfection.</p>
                <p className="m-10">Join us in our mission to make great sound accessible to all, fostering a world where the passion for audio thrives and resonates.</p>
                <button className="ml-10 px-20 bg-primary text-white p-2.5 rounded-lg hover:bg-slate-700 font-semibold">Learn More !</button>
            </div>
            <div>

            </div>
        </main>
    );
}
