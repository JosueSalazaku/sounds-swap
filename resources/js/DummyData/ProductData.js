const dummyProductData = [
    // Lighting
    {
        id: 1,
        category: "Lighting",
        name: "LED Stage Light",
        description:
            "Illuminate your stage with this powerful LED stage light. Perfect for concerts, performances, and events.",
        price: 99.99,
        image: "https://res.cloudinary.com/cash-crusaders/image/upload/f_auto,fl_lossy,h_1000,q_auto,w_1000/v1642057859/NewGoods/nkyjsfbaopoixjnbkvnk",
    },
    {
        id: 2,
        category: "Lighting",
        name: "Par Can Light",
        description:
            "Create stunning lighting effects with this versatile par can light. Ideal for DJs, bands, and clubs.",
        price: 79.99,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/american_dj_parz1003k_3200k_100_watt_led_1498649044_1346539.jpg",
    },
    // Mixing Board
    {
        id: 3,
        category: "Mixing Board",
        name: "Digital Mixer",
        description:
            "Take control of your audio with this advanced digital mixer. Perfect for studio recordings and live performances.",
        price: 499.99,
        image: "https://images.musicstore.de/images/1280/behringer-x32-digitale-mixer-_1_REC0008523-000.jpg",
    },
    {
        id: 4,
        category: "Mixing Board",
        name: "Analog Mixer",
        description:
            "Achieve a classic sound with this reliable analog mixer. Great for small venues and home studios.",
        price: 299.99,
        image: "https://d1aeri3ty3izns.cloudfront.net/media/6/6876/600/preview_1.jpg",
    },
    // Microphones
    {
        id: 5,
        category: "Microphones",
        name: "Dynamic Microphone",
        description:
            "Capture crisp vocals and instruments with this dynamic microphone. Ideal for stage performances and recordings.",
        price: 69.99,
        image: "https://www.bhphotovideo.com/images/images2500x2500/Sennheiser_E935_E935_Handheld_Microphone_291872.jpg",
    },
    {
        id: 6,
        category: "Microphones",
        name: "Condenser Microphone",
        description:
            "Experience studio-quality recordings with this sensitive condenser microphone. Perfect for vocals and acoustic instruments.",
        price: 149.99,
        image: "https://www.vandemoer.be/media/catalog/product/cache/d78a52a21d7590c375334cc513d10ca9/s/e/se-electronics-qrx1a-condenser-microphone-31933_b3swamifg91hfdnq.jpg",
    },
    // Monitors
    {
        id: 7,
        category: "Monitors",
        name: "Studio Monitor Speakers",
        description:
            "Hear every detail of your audio with these high-fidelity studio monitor speakers. Essential for mixing and mastering.",
        price: 249.99,
        image: "https://m.media-amazon.com/images/I/A1pdVoueIkL.jpg",
    },
    {
        id: 8,
        category: "Monitors",
        name: "Stage Monitor Speaker",
        description:
            "Get clear and powerful sound on stage with this rugged stage monitor speaker. Perfect for bands and performers.",
        price: 199.99,
        image: "https://eventstarts.com/cdn/shop/products/eventstarts_jbl_vrx915m_stage_monitor_speaker_4_grande.jpg?v=1640237561",
    },
    // Sound Systems
    {
        id: 9,
        category: "Sound Systems",
        name: "Portable PA System",
        description:
            "Take your sound anywhere with this portable PA system. Great for outdoor events, parties, and presentations.",
        price: 599.99,
        image: "https://m.media-amazon.com/images/I/914BTR8wOsL._AC_SL1500_.jpg",
    },
    {
        id: 10,
        category: "Sound Systems",
        name: "Home Theater System",
        description:
            "Transform your living room into a cinematic experience with this high-quality home theater system. Enjoy movies, music, and games in surround sound.",
        price: 999.99,
        image: "https://www.harmankardon.be/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw4b31988b/HK-Surround-Group1_Hero_1605x1605px.png",
    },
    // Additional products...
    {
        id: 11,
        category: "Lighting",
        name: "Strobe Light",
        description:
            "Create dynamic visual effects with this powerful strobe light. Ideal for DJs, clubs, and parties.",
        price: 129.99,
        image: "https://m.media-amazon.com/images/I/613qjlaziJL._AC_UF894,1000_QL80_.jpg",
    },
    {
        id: 12,
        category: "Lighting",
        name: "Fog Machine",
        description:
            "Enhance your lighting effects with this professional-grade fog machine. Perfect for creating atmosphere at events and performances.",
        price: 199.99,
        image: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_40/403498/11733600_800.jpg",
    },
    {
        id: 13,
        category: "Mixing Board",
        name: "Portable Mixer",
        description:
            "Take your mixing skills on the go with this compact portable mixer. Great for small gigs and rehearsals.",
        price: 149.99,
        image: "https://m.media-amazon.com/images/I/815-aoG4GZL._AC_UF894,1000_QL80_.jpg",
    },
    {
        id: 14,
        category: "Mixing Board",
        name: "Live Sound Mixer",
        description:
            "Achieve professional live sound with this versatile live sound mixer. Ideal for bands, theaters, and houses of worship.",
        price: 799.99,
        image: "https://www.beta3pro.com/uploads/products/md18/MD1%208.jpg",
    },
    {
        id: 15,
        category: "Microphones",
        name: "Wireless Microphone System",
        description:
            "Enjoy freedom of movement with this wireless microphone system. Perfect for presentations, speeches, and performances.",
        price: 249.99,
        image: "https://m.media-amazon.com/images/I/71MgQ+ZeqKL.jpg",
    },
    {
        id: 16,
        category: "Microphones",
        name: "Lavalier Microphone",
        description:
            "Capture clear audio with this discreet lavalier microphone. Great for interviews, presentations, and video shoots.",
        price: 79.99,
        image: "https://www.kamera-express.be/media/debe0167-490c-4ff7-b2ed-fd193cf02a11/12366557.jpg",
    },
    {
        id: 17,
        category: "Monitors",
        name: "In-Ear Monitor System",
        description:
            "Hear yourself clearly on stage with this in-ear monitor system. Customizable fit for maximum comfort and sound isolation.",
        price: 349.99,
        image: "https://i.ebayimg.com/images/g/vuoAAOSwZmZhYO1W/s-l1200.jpg",
    },
    {
        id: 18,
        category: "Monitors",
        name: "Portable Studio Monitors",
        description:
            "Bring studio-quality sound wherever you go with these portable studio monitors. Perfect for music production on the go.",
        price: 299.99,
        image: "https://www.storedj.com.au/images/ProductImages/500/AIA-UNIT4.jpg",
    },
    {
        id: 19,
        category: "Sound Systems",
        name: "DJ Controller",
        description:
            "Take control of your mixes with this versatile DJ controller. Integrated pads, knobs, and faders for seamless performance.",
        price: 399.99,
        image: "https://d1aeri3ty3izns.cloudfront.net/media/34/340814/600/preview.jpg",
    },
    {
        id: 20,
        category: "Sound Systems",
        name: "Wireless Speaker System",
        description:
            "Stream music wirelessly with this powerful wireless speaker system. Great for parties, events, and outdoor gatherings.",
        price: 149.99,
        image: "https://www.kbaudio.co.uk/cdn/shop/products/hamilton-wsa50-wifi-ceiling-speaker-system-with-polk-audio-atrium-4-outdoor-speakers-pair-outdoor-speaker-systems-hamilton-audio-one-pair-665737.jpg?v=1688391582&width=1214",
    },
];

export default dummyProductData;
