import { Link, Head } from "@inertiajs/react";
import HeroSectionCrowd from "/Users/alecv/OneDrive/Bureaublad/Becode/SoundSwapProject/sounds-swap/public/images/HeroSectionCrowd.png"

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
            <div className="h-screen w-screen flex flex-col justify-start items-center">
                <h1 className="font-extrabold text-primary mt-12 font-sans text-7xl text-center">SoundSwap <br /> The Place To Buy Or Sell <br /> Audio Equipement </h1>
                <div className="mt-28 space-x-28">
                <button className="h-12 w-40 text-white bg-primary">BUY</button>
                <button className="h-12 w-40 text-white bg-primary">SELL</button>
                </div>
            </div>
            <div className="h-screen w-screen" >
                <h2 className="text-4xl font-bold">Why SoundSwap?</h2>
            </div>
        </main>
    );
}
