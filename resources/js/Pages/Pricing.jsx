export default function Component() {
    return (
        <main className="h-screen w-screen flex justify-center items-center bg-background">
            <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 items-center">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: "#59D45F" }}>
                    Choose the Perfect Plan for Your Audio Experience
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                    Unlock the full potential of Sounds Swap with our premium subscriptions, offering a seamless and feature-rich audio experience for all users.
                </p>
                <div className="flex gap-8 md:gap-12 lg:gap-16">
                    <div className="w-96 bg-white rounded-md shadow-lg">
                        <div className="p-6 md:p-8">
                            <h2 className="text-2xl font-bold">Free</h2>
                            <p className="text-sm leading-loose">
                                Enjoy the essential features of Sounds Swap for free. Listen to your favorite tracks, discover new music, and create your own playlists without any cost.
                            </p>
                            <div className="mt-8 flex justify-between">
                                <div>
                                    <h3 className="font-bold">Features</h3>
                                    <p className="text-sm leading-loose">
                                        • Access to the entire music library
                                        <br />
                                        • Playlist creation
                                        <br />• Discover new music
                                    </p>
                                </div>
                                <div className="text-3xl font-bold">$0</div>
                            </div>
                            <div className="mt-6">
                                <button className="bg-primary text-white font-bold rounded-lg h-10 w-full hover:bg-accent active:bg-primary">
                                    Upgrade to Pro
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-96 bg-white rounded-md shadow-lg">
                        <div className="p-6 md:p-8">
                            <h2 className="text-2xl font-bold">Pro</h2>
                            <p className="text-sm leading-loose">
                                Take your audio experience to the next level with additional features. Enjoy ad-free listening, high-quality audio, and exclusive content with the Pro subscription.
                            </p>
                            <div className="mt-8 flex justify-between">
                                <div>
                                    <h3 className="font-bold">Features</h3>
                                    <p className="text-sm leading-loose">
                                        • Ad-free listening
                                        <br />
                                        • High-quality audio streaming
                                        <br />• Access to exclusive content
                                    </p>
                                </div>
                                <div className="text-3xl font-bold">$9.99</div>
                            </div>
                            <div className="mt-6">
                                <button className="bg-primary text-white font-bold rounded-lg h-10 w-full hover:bg-accent active:bg-primary">
                                    Upgrade to Pro
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-96 bg-white rounded-md shadow-lg">
                        <div className="p-6 md:p-8">
                            <h2 className="text-2xl font-bold">Enterprise</h2>
                            <p className="text-sm leading-loose">
                                For businesses and organizations looking to integrate Sounds Swap's audio streaming services. Contact us for custom pricing and enterprise solutions.
                            </p>
                            <div className="mt-8 flex justify-between">
                                <div>
                                    <h3 className="font-bold">Features</h3>
                                    <p className="text-sm leading-loose">
                                        • Custom pricing
                                        <br />
                                        • Enterprise solutions
                                        <br />• Dedicated support
                                    </p>
                                </div>
                                <div className="text-3xl font-bold">Contact us</div>
                            </div>
                            <div className="mt-6">
                                <button className="bg-primary text-white font-bold rounded-lg h-10 w-full hover:bg-accent active:bg-primary">
                                    Contact us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
