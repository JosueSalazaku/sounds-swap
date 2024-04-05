import React from "react";

const AboutUsContent = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-extrabold text-primary my-12 font-sans text-4xl text-center">
                About Us
            </h1>
            <div className="w-2/3 mb-12 bg-secondary">
                <p className="mx-auto p-5">
                    At Sound Swap, we're passionate about delivering exceptional
                    audio experiences to every customer. Whether you're an
                    audiophile, a professional sound engineer, or a casual
                    listener, we're here to provide you with a seamless platform
                    to buy and sell top-quality audio equipment.
                </p>
            </div>

            <h1 className="font-extrabold text-primary my-12 font-sans text-4xl text-center">
                Our Mission
            </h1>
            <div className="w-2/3 mb-12 bg-secondary">
                <p className="mx-auto p-5">
                    Our mission at Sound Swap is simple: to connect audio
                    enthusiasts with the finest audio gear available on the
                    market. We believe that everyone deserves to experience the
                    pure joy of crystal-clear sound, and we're committed to
                    making that a reality for our customers.
                </p>
            </div>

            <h1 className="font-extrabold text-primary my-12 font-sans text-4xl text-center">
                What Sets Us Apart
            </h1>
            <div className="w-2/3 mb-12 bg-secondary">
                <h3 className="font-extrabold text-primary mt-4 mb-2 font-sans text-xl text-center">
                    Trusted Sellers:
                </h3>
                <p className="mx-auto p-5">
                    When you shop with Sound Swap, you can shop with confidence.
                    Our sellers are vetted for reliability and authenticity, so
                    you can trust that you're getting exactly what you pay for.
                </p>
                <h3 className="font-extrabold text-primary mt-4 mb-2 font-sans text-xl text-center">
                    Curated Selection:
                </h3>
                <p className="mx-auto p-5">
                    We understand that quality matters. That's why we handpick
                    every item listed on our platform to ensure that only the
                    best audio equipment makes its way to your doorstep.
                </p>
                <h3 className="font-extrabold text-primary mt-4 mb-2 font-sans text-xl text-center">
                    Secure Transactions:
                </h3>
                <p className="mx-auto p-5">
                    Your security is our top priority. With secure payment
                    options and encrypted transactions, you can rest easy
                    knowing that your personal information is safe with us.
                </p>
                <h3 className="font-extrabold text-primary mt-4 mb-2 font-sans text-xl text-center">
                    Expert Support:
                </h3>
                <p className="mx-auto p-5">
                    Have a question about a product? Need advice on choosing the
                    right equipment for your needs? Our team of audio experts is
                    here to help. We're passionate about audio, and we're
                    dedicated to helping you find the perfect gear for your
                    setup.
                </p>
            </div>
        </div>
    );
};

export default AboutUsContent;
