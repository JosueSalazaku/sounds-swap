const dummyProductData = [
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
    {
        id: 3,
        category: "Lighting",
        name: "Moving Head Light",
        description:
            "Add dynamic movement to your lighting setup with this moving head light. Perfect for creating immersive visual effects.",
        price: 249.99,
        image: "https://www.bhphotovideo.com/images/images500x500/chauvet_dj_mh4_led_4_in1_moving_1450239.jpg",
    },
    {
        id: 4,
        category: "Lighting",
        name: "UV Black Light",
        description:
            "Create a vibrant atmosphere with this UV black light. Ideal for glow parties, clubs, and special events.",
        price: 59.99,
        image: "https://m.media-amazon.com/images/I/71cX5Dzid5S._AC_SL1500_.jpg",
    },
    {
        id: 5,
        category: "Lighting",
        name: "Laser Stage Light",
        description:
            "Enhance your stage presence with this laser stage light. Create mesmerizing patterns and effects with ease.",
        price: 139.99,
        image: "https://m.media-amazon.com/images/I/61NE8Jpxe6L._AC_SL1500_.jpg",
    },
    {
        id: 6,
        category: "Lighting",
        name: "Flood Light",
        description:
            "Illuminate large areas with this powerful flood light. Perfect for outdoor events, festivals, and architectural lighting.",
        price: 199.99,
        image: "https://m.media-amazon.com/images/I/61vtMrcRiyL._AC_SL1500_.jpg",
    },
    {
        id: 7,
        category: "Lighting",
        name: "Wireless LED Uplight",
        description:
            "Add color and ambiance to any space with these wireless LED uplights. Control brightness and colors wirelessly.",
        price: 89.99,
        image: "https://m.media-amazon.com/images/I/61zlkq5ngpL._AC_SL1500_.jpg",
    },
    {
        id: 8,
        category: "Lighting",
        name: "Effect Light",
        description:
            "Create unique visual effects with this versatile effect light. Ideal for DJs, theaters, and special events.",
        price: 109.99,
        image: "https://m.media-amazon.com/images/I/81YgIE5WroL._AC_SL1500_.jpg",
    },
    {
        id: 9,
        category: "Lighting",
        name: "Disco Ball",
        description:
            "Bring the disco vibe to your party with this classic disco ball. Reflective mirrors create dazzling light patterns.",
        price: 49.99,
        image: "https://m.media-amazon.com/images/I/71dxOCiDwxL._AC_SL1500_.jpg",
    },
    {
        id: 10,
        category: "Lighting",
        name: "Pixel LED Panel",
        description:
            "Create stunning visual displays with this pixel LED panel. Each pixel can be individually controlled for endless possibilities.",
        price: 399.99,
        image: "https://m.media-amazon.com/images/I/61kSGHVtd1S._AC_SL1500_.jpg",
    },
    // Mixing Board
    {
        id: 11,
        category: "Mixing Board",
        name: "Digital Mixing Console",
        description:
            "Take your audio mixing to the next level with this digital mixing console. Intuitive interface and advanced features.",
        price: 899.99,
        image: "https://m.media-amazon.com/images/I/81n3w72gF3L._AC_SL1500_.jpg",
    },
    {
        id: 12,
        category: "Mixing Board",
        name: "Analog Mixing Desk",
        description:
            "Experience the warmth of analog sound with this classic mixing desk. Perfect for vintage recordings and live performances.",
        price: 599.99,
        image: "https://m.media-amazon.com/images/I/71bIkcpGcWL._AC_SL1500_.jpg",
    },
    {
        id: 13,
        category: "Mixing Board",
        name: "Portable DJ Controller",
        description:
            "Take control of your mixes on the go with this portable DJ controller. Compact size and versatile functionality.",
        price: 299.99,
        image: "https://m.media-amazon.com/images/I/81LR6pi2ZxL._AC_SL1500_.jpg",
    },
    {
        id: 14,
        category: "Mixing Board",
        name: "Live Sound Mixer",
        description:
            "Achieve professional live sound with this versatile live sound mixer. Ideal for bands, theaters, and houses of worship.",
        price: 799.99,
        image: "https://m.media-amazon.com/images/I/71zNcT3UVGL._AC_SL1500_.jpg",
    },
    {
        id: 15,
        category: "Mixing Board",
        name: "USB Audio Interface",
        description:
            "Connect your instruments and microphones to your computer with this USB audio interface. High-quality sound and low latency.",
        price: 199.99,
        image: "https://m.media-amazon.com/images/I/81yKpTYyoPL._AC_SL1500_.jpg",
    },
    // Microphones
    {
        id: 16,
        category: "Microphones",
        name: "Wireless Handheld Microphone",
        description:
            "Experience freedom of movement with this wireless handheld microphone. Ideal for presentations, speeches, and performances.",
        price: 129.99,
        image: "https://m.media-amazon.com/images/I/71CS+ajhTVL._AC_SL1500_.jpg",
    },
    {
        id: 17,
        category: "Microphones",
        name: "Shotgun Microphone",
        description:
            "Capture clear audio from a distance with this shotgun microphone. Ideal for video production, interviews, and field recording.",
        price: 179.99,
        image: "https://m.media-amazon.com/images/I/81dSH19H5SL._AC_SL1500_.jpg",
    },
    {
        id: 18,
        category: "Microphones",
        name: "Lavalier Microphone Set",
        description:
            "Record hands-free audio with this lavalier microphone set. Includes transmitter, receiver, and clip-on microphone.",
        price: 89.99,
        image: "https://m.media-amazon.com/images/I/61wkBsTZFIL._AC_SL1500_.jpg",
    },
    // Add more lights, mixing boards, and microphones here...
];

export default dummyProductData;
