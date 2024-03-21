const MicrophoneDumyData = [
    // Dynamic Microphones
    {
        id: 1,
        category: "Dynamic Microphone",
        name: "Shure SM58",
        description:
            "The industry standard handheld microphone for vocals and instruments. Renowned for its durability and clear sound.",
        price: 109.99,
        image: "https://shure.com/media/product/xl/sm58-stage-microphone_xl.png",
    },
    {
        id: 2,
        category: "Dynamic Microphone",
        name: "Audio-Technica ATR2100x-USB",
        description:
            "Versatile dynamic microphone with USB connectivity, ideal for podcasting, recording vocals, and instruments at home.",
        price: 69.99,
        image: "https://images.sweetwater.com/images/items/699/AT2100X-USB_thumb.jpg",
    },
    // Condenser Microphones
    {
        id: 3,
        category: "Condenser Microphone",
        name: "Rode NT1",
        description:
            "Professional-grade studio condenser microphone known for its pristine audio capture and wide frequency response.",
        price: 229.99,
        image: "https://www.rode.com/images/products/nt1_3qtr.png",
    },
    {
        id: 4,
        category: "Condenser Microphone",
        name: "Audio-Technica AT2020",
        description:
            "Affordable condenser microphone delivering detailed sound, perfect for home studios and recording vocals and instruments.",
        price: 149.99,
        image: "https://images.sweetwater.com/images/items/699/AT2020_thumb.jpg",
    },
    // Ribbon Microphones
    {
        id: 5,
        category: "Ribbon Microphone",
        name: "Royer R-121",
        description:
            "Legendary ribbon microphone prized for its smooth, warm sound, ideal for vocals, instruments, and broadcast applications.",
        price: 2499.99,
        image: "https://www.royerlabs.com/content/dam/royer/products/ribbon/r-121/royer-r-121-ribbon-microphone-front.png",
    },
    {
        id: 6,
        category: "Ribbon Microphone",
        name: "AEA Ribbon Mic AEA R88",
        description:
            "High-quality ribbon microphone offering exceptional warmth and detail, suitable for vocals, instruments, and recording studios.",
        price: 1999.99,
        image: "https://www.bhphotovideo.com/is/image/SKU/825817_aer88_thumb.jpg",
    },
    // Lavalier Microphones
    {
        id: 7,
        category: "Lavalier Microphone",
        name: "Sennheiser MKE 2 (ME 2)",
        description:
            "Discreet lavalier microphone for clear speech capture, perfect for presentations, video productions, and broadcasting.",
        price: 99.99,
        image: "https://en-de.sennheiser.com/image/mke-2-me-2-black-1024x768.png",
    },
    {
        id: 8,
        category: "Lavalier Microphone",
        name: "Rode Lavalier II",
        description:
            "Compact and versatile lavalier microphone with omnidirectional pickup pattern, ideal for capturing audio in various applications.",
        price: 79.99,
        image: "https://www.rode.com/images/products/lavalier_ii_front.png",
    },
    // Headset Microphones
    {
        id: 9,
        category: "Headset Microphone",
        name: "Audio-Technica ATH-M20x Headset",
        description:
            "Studio monitor headphones with a comfortable over-ear design and a built-in microphone, suitable for content creation and gaming.",
        price: 129.99,
        image: "https://images.sweetwater.com/images/items/699/ATH_M20x_thumb.jpg",
    },
    {
        id: 10,
        category: "Condenser Microphone",
        name: "AKG C414 XLS",
        description:
            "Versatile studio condenser microphone known for its detailed sound and wide range of applications, including vocals, instruments, and overheads.",
        price: 649.99,
        image: "https://www.akg.com/sites/default/files/2020-06/C414_XLS_Hero_1600x800.png",
    },
    {
        id: 11,
        category: "Condenser Microphone",
        name: "Blue Yeti",
        description:
            "USB condenser microphone popular for podcasting, streaming, and home recording, offering multiple pickup patterns and on-board controls.",
        price: 129.99,
        image: "https://bluemic.com/wp-content/uploads/2020/01/Yeti-Black_Product-Hero.png",
    },

    // Large Diaphragm Condenser Microphones
    {
        id: 12,
        category: "Large Diaphragm Condenser Microphone",
        name: "Neumann U 87 Ai",
        description:
            "Legendary large diaphragm condenser microphone prized for its exceptional sound quality and versatility in professional studios.",
        price: 6499.99,
        image: "https://www.neumann.com/fileadmin/user_upload/ produktów/Mikrofone/Studiomikrofone/U_87_Ai/U_87_Ai_front.png",
    },
    {
        id: 13,
        category: "Large Diaphragm Condenser Microphone",
        name: "Audio-Technica AT4040",
        description:
            "High-fidelity large diaphragm condenser microphone delivering clear and detailed audio, suitable for vocals, instruments, and orchestral recordings.",
        price: 999.99,
        image: "https://images.sweetwater.com/images/items/699/AT4040_thumb.jpg",
    },

    // USB Microphones
    {
        id: 14,
        category: "USB Microphone",
        name: "Samson Meteor Mic",
        description:
            "Affordable and easy-to-use USB microphone ideal for podcasting, video conferencing, and basic home recording applications.",
        price: 69.99,
        image: "https://www.samsontech.com/sites/default/files/styles/product_detail/public/products/MeteorMic_ProductImage.png",
    },
    {
        id: 15,
        category: "USB Microphone",
        name: "Rode NT-USB Mini",
        description:
            "Compact and portable USB condenser microphone offering high-quality audio for recording vocals, instruments, and voiceovers.",
        price: 99.99,
        image: "https://www.rode.com/images/products/nt-usb_mini_front.png",
    },

    // Shotgun Microphones
    {
        id: 16,
        category: "Shotgun Microphone",
        name: "Sennheiser MKH 416",
        description:
            "Supercardioid shotgun microphone prized for its tight pickup pattern and exceptional audio quality in film, television, and video production.",
        price: 1299.99,
        image: "https://en-de.sennheiser.com/image/mkh-416_thumb.png",
    },
    {
        id: 17,
        category: "Shotgun Microphone",
        name: "Rode NTG-2",
        description:
            "Lightweight and versatile shotgun microphone ideal for capturing crisp audio in film, video, and broadcast applications.",
        price: 299.99,
        image: "https://www.rode.com/images/products/ntg2_front.png",
    },
    // Instrument Microphones (continued)
    // Instrument Microphones
    {
        id: 18,
        category: "Instrument Microphone",
        name: "Audio-Technica ATM6100",
        description:
            "Dynamic instrument microphone known for its warm and natural sound, ideal for miking instruments like guitars, brass, and vocals on stage.",
        price: 199.99,
        image: "https://images.sweetwater.com/images/items/699/ATM6100_thumb.jpg",
    },

    {
        id: 19,
        category: "Instrument Microphone",
        name: "Sennheiser e 905",
        description:
            "Dynamic instrument microphone designed for capturing the bright sound of snare drums and toms, with a tight pickup pattern for focused audio.",
        price: 149.99,
        image: "https://en-de.sennheiser.com/image/e-905_thumb.png",
    },

    // Boundary Microphones
    {
        id: 20,
        category: "Boundary Microphone",
        name: "Shure MX418SE",
        description:
            "Low-profile boundary microphone ideal for capturing clear audio in conference rooms, houses of worship, and other fixed-installation applications.",
        price: 199.99,
        image: "https://shure.com/media/product/xl/mx418se_xl.png",
    },
];

export { MicrophoneDumyData };
