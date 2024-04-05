export default function Component() {
    return (
        <div className="bg-background py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 md:gap-12 lg:gap-16 items-center md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_600px]">
                    <div className="grid gap-2">
                        <h1
                            className="text-3xl lg:text-4xl font-bold tracking-tight"
                            style={{
                                color: "#59D45F",
                            }}
                        >
                            Choose the Perfect Plan for Your Audio Experience
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Unlock the full potential of Sounds Swap with our
                            premium subscriptions, offering a seamless and
                            feature-rich audio experience for all users.
                        </p>
                    </div>

                    <div>
                        <div className="p-6 md:p-8 bg-white rounded-md shadow-lg">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6" />
                                    <h2 className="text-2xl font-bold">Free</h2>
                                </div>
                                <p className="text-sm leading-loose">
                                    Enjoy the essential features of Sounds Swap
                                    for free. Listen to your favorite tracks,
                                    discover new music, and create your own
                                    playlists without any cost.
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                                <div className="flex flex-col">
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
                            <div className="p-6 md:p-8">
                                <button className="bg-primary text-white font-bold rounded-lg h-10 w-32 hover:bg-accent active:bg-primary">
                                    Upgrade to Pro
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <section className="p-6 md:p-8 bg-white rounded-md shadow-lg">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6" />
                                    <h2 className="text-2xl font-bold">Pro</h2>
                                </div>
                                <p className="text-sm leading-loose">
                                    Take your audio experience to the next level
                                    with additional features. Enjoy ad-free
                                    listening, high-quality audio, and exclusive
                                    content with the Pro subscription.
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                                <div className="flex flex-col">
                                    <h3 className="font-bold">Features</h3>
                                    <p className="text-sm leading-loose">
                                        • Ad-free listening
                                        <br />
                                        • High-quality audio streaming
                                        <br />• Access to exclusive content
                                    </p>
                                </div>
                                <div className="text-3xl font-bold">$9.99</div>
                                <div className="p-6 md:p-8">
                                    <button className="bg-primary text-white font-bold rounded-lg h-10 w-32 hover:bg-accent active:bg-primary">
                                        Upgrade to Pro
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div>
                        <section className="p-6 md:p-8 bg-white rounded-md shadow-lg">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6" />
                                    <h2 className="text-2xl font-bold">
                                        Enterprise
                                    </h2>
                                </div>
                                <p className="text-sm leading-loose">
                                    For businesses and organizations looking to
                                    integrate Sounds Swap's audio streaming
                                    services. Contact us for custom pricing and
                                    enterprise solutions.
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                                <div className="flex flex-col">
                                    <h3 className="font-bold">Features</h3>
                                    <p className="text-sm leading-loose">
                                        • Custom pricing
                                        <br />
                                        • Enterprise solutions
                                        <br />• Dedicated support
                                    </p>
                                </div>
                                <div className="text-3xl font-bold">
                                    Contact us
                                </div>
                            </div>

                            <div className="p-6 md:p-8">
                                <button className="bg-primary text-white font-bold rounded-lg h-10 w-32 hover:bg-accent active:bg-primary">
                                    Contact us
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
