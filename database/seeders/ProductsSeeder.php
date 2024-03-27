<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Products;
use Illuminate\Support\Str;

class ProductsSeeder extends Seeder
{
    public function run()
    {
        Products::create([
            'category_id' => 1, // Assuming the category ID for "Lighting"
            'name' => 'LED Stage Light',
            'description' => 'Illuminate your stage with this powerful LED stage light. Perfect for concerts, performances, and events.',
            'price' => 99.99,
            'slug' => Str::slug('LED Stage Light'),
            'imgURL' => 'https://res.cloudinary.com/cash-crusaders/image/upload/f_auto,fl_lossy,h_1000,q_auto,w_1000/v1642057859/NewGoods/nkyjsfbaopoixjnbkvnk',
            'brand' => 'Chauvet DJ',
        ]);

        Products::create([
            'category_id' => 2, // Assuming the category ID for "Mixing Board"
            'name' => 'Digital Mixing Console',
            'description' => 'Professional digital mixing console for live sound reinforcement and recording applications.',
            'price' => 999.99,
            'slug' => Str::slug('Digital Mixing Console'),
            'imgURL' => 'https://example.com/mixing-board.jpg',
            'brand' => 'Behringer',
        ]);

        Products::create([
            'category_id' => 1,
            'name' => 'LED Stage Light',
            'description' => 'Illuminate your stage with this powerful LED stage light. Perfect for concerts, performances, and events.',
            'price' => 99.99,
            'slug' => Str::slug('LED Stage Light'),
            'imgURL' => 'https://res.cloudinary.com/cash-crusaders/image/upload/f_auto,fl_lossy,h_1000,q_auto,w_1000/v1642057859/NewGoods/nkyjsfbaopoixjnbkvnk',
            'brand' => 'Chauvet DJ',
        ]);
      
        Products::create([        
            'category_id' => 1,
            'name' => 'Par Can Light',
            'description' => 'Create stunning lighting effects with this versatile par can light. Ideal for DJs, bands, and clubs.',
            'price' => 79.99,
            'slug' => Str::slug('Par Can Light'),
            'imgURL' => 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/american_dj_parz1003k_3200k_100_watt_led_1498649044_1346539.jpg',
            'brand' => 'Chauvet DJ',
        ]);
        
        Products::create([
            'category_id' => 1,
            'name' => 'Moving Head Light',
            'description' => 'Add dynamic movement to your lighting setup with this moving head light. Perfect for creating immersive visual effects.',
            'price' => 249.99,
            'slug' => Str::slug('Moving Head Light'),
            'imgURL' => 'https://www.bhphotovideo.com/images/images500x500/chauvet_dj_mh4_led_4_in1_moving_1450239.jpg',
            'brand' => 'Chauvet DJ',
        ]);
        
        Products::create([
            'category_id' => 1,
            'name' => 'UV Black Light',
            'description' => 'Create a vibrant atmosphere with this UV black light. Ideal for glow parties, clubs, and special events.',
            'price' => 59.99,
            'slug' => Str::slug('UV Black Light'),
            'imgURL' => 'https://www.gosupps.com/media/catalog/product/7/1/71dBxtOW-WL.jpg',
            'brand' => 'Chauvet DJ',
        ]);
        
        Products::create([
            'category_id' => 1,
            'name' => 'Laser Stage Light',
            'description' => 'Enhance your stage presence with this laser stage light. Create mesmerizing patterns and effects with ease.',
            'price' => 139.99,
            'slug' => Str::slug('Laser Stage Light'),
            'imgURL' => 'https://www.syntronics.co.za/cdn/shop/products/ministagelightprojector_1200x1200.jpg?v=1612909542',
            'brand' => 'Chauvet DJ',
        ]);
        
        Products::create([
            'category_id' => 1,
            'name' => 'Flood Light',
            'description' => 'Illuminate large areas with this powerful flood light. Perfect for outdoor events, festivals, and architectural lighting.',
            'price' => 199.99,
            'slug' => Str::slug('Flood Light'),
            'imgURL' => 'https://img.fruugo.com/product/3/42/348899423_max.jpg',
            'brand' => 'Chauvet DJ',
        ]);
        
        Products::create([
            'category_id' => 1,
            'name' => 'Wireless LED Uplight',
            'description' => 'Add color and ambiance to any space with these wireless LED uplights. Control brightness and colors wirelessly.',
            'price' => 89.99,
            'slug' => Str::slug('Wireless LED Uplight'),
            'imgURL' => 'https://www.fabulousevents.com/wp-content/uploads/2015/08/black-uplight.jpg',
            'brand' => 'Chauvet DJ',
        ]);
        
        Products::create([
            'category_id' => 1,
            'name' => 'Effect Light Panels',
            'description' => 'Create unique visual effects with this versatile effect light. Ideal for DJs, theaters, and special events.',
            'price' => 109.99,
            'slug' => Str::slug('Effect Light Panels'),
            'imgURL' => 'https://m.media-amazon.com/images/I/51w15vGFTnL._AC_UF894,1000_QL80_.jpg',
            'brand' => 'Chauvet DJ',
        ]);

        Products::create([
            'category_id' => 1,
            'name' => 'Disco Ball',
            'description' => 'Bring the disco vibe to your party with this classic disco ball. Reflective mirrors create dazzling light patterns.',
            'price' => 49.99,
            'slug' => Str::slug('Disco Ball'),
            'imgURL' => 'https://media-www.canadiantire.ca/product/seasonal-gardening/party-city-seasonal/party-city-micro-season-decor/8551297/10-new-year-s-eve-silver-disco-ball-b5045f3b-8d38-4a83-8fe7-a60820491104-jpgrendition.jpg?imdensity=1&imwidth=640&impolicy=mZoom',
            'brand' => 'Chauvet DJ',
        ]);

        Products::create([
            'category_id' => 1,
            'name' => 'Pixel LED Panel',
            'description' => 'Create stunning visual displays with this pixel LED panel. Each pixel can be individually controlled for endless possibilities.',
            'price' => 399.99,
            'slug' => Str::slug('Pixel LED Panel'),
            'imgURL' => 'https://m.media-amazon.com/images/I/61jvjNlnIdL._AC_UF894,1000',
            'brand' => 'Chauvet DJ',
        ]);

        // Add the remaining products here...

        Products::create([
            'category_id' => 1,
            'name' => 'Strobe Light',
            'description' => 'Create dynamic visual effects with this powerful strobe light. Ideal for DJs, clubs, and parties.',
            'price' => 129.99,
            'slug' => Str::slug('Strobe Light'),
            'imgURL' => 'https://m.media-amazon.com/images/I/613qjlaziJL._AC_UF894,1000',
            'brand' => 'Chauvet DJ',
        ]);

        Products::create([
            'category_id' => 1,
            'name' => 'Fog Machine',
            'description' => 'Enhance your lighting effects with this professional-grade fog machine. Perfect for creating atmosphere at events and performances.',
            'price' => 199.99,
            'slug' => Str::slug('Fog Machine'),
            'imgURL' => 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_40/403498/11733600_800.jpg',
            'brand' => 'Chauvet DJ',
        ]);

        Products::create([
            'category_id' => 1,
            'name' => 'LED Effect Light',
            'description' => 'Add excitement to your events with this LED effect light. Features various patterns and colors for stunning visuals.',
            'price' => 79.99,
            'slug' => Str::slug('LED Effect Light'),
            'imgURL' => 'https://d1aeri3ty3izns.cloudfront.net/media/27/279043/1200/preview.jpg',
            'brand' => 'Chauvet DJ',
        ]);

        Products::create([
            'category_id' => 1,
            'name' => 'Laser Light Show',
            'description' => 'Create mesmerizing light shows with this versatile laser light. Perfect for concerts, clubs, and special events.',
            'price' => 299.99,
            'slug' => Str::slug('Laser Light Show'),
            'imgURL' => 'https://www.proxdirect.com/images/originals/X-RAW10-01.jpg',
            'brand' => 'Chauvet DJ',
        ]);

        Products::create([
            'category_id' => 1,
            'name' => 'Outdoor LED Floodlight',
            'description' => 'Illuminate outdoor spaces with this powerful LED floodlight. Weatherproof and energy-efficient design.',
            'price' => 149.99,
            'slug' => Str::slug('Outdoor LED Floodlight'),
            'imgURL' => 'https://onforuleds.com/cdn/shop/files/ON-D100-BD24-DW-US-HSA_100W_D_-1_28757761-84f7-4423-a705-d43ec9b79f32_1024x1024.jpg?v=1692700291',
            'brand' => 'Chauvet DJ',
        ]);

        Products::create([
            'category_id' => 1,
            'name' => 'DMX Controller',
            'description' => 'Take full control of your lighting setup with this DMX controller. Supports multiple channels and presets.',
            'price' => 349.99,
            'slug' => Str::slug('DMX Controller'),
            'imgURL' => 'https://static.bax-shop.es/image/product/808041/3001130/217b9017/1627459235ADJ_Link_Controller_Photos_30.jpg',
            'brand' => 'Chauvet DJ',
        ]);

        Products::create([
            'category_id' => 1,
            'name' => 'Wireless LED Par Light',
            'description' => 'Achieve wireless lighting control with this LED par light. Compact and easy to set up for versatile applications.',
            'price' => 89.99,
            'slug' => Str::slug('Wireless LED Par Light'),
            'imgURL' => 'https://d.yixunpan.top/mjledlighting.com/wp-content/uploads/2020/04/1588129715-2j.jpg',
            'brand' => 'Chauvet DJ',
        ]);

        Products::create([
            'category_id' => 1,
            'name' => 'UV LED Bar',
            'description' => 'Add an ultraviolet glow to your events with this UV LED bar. Great for blacklight parties and stage performances.',
            'price' => 59.99,
            'slug' => Str::slug('UV LED Bar'),
            'imgURL' => 'https://static.bax-shop.es/image/product/136764/267934/7081a78e/american_dj_uv_led_bar_20_blacklight_1_2.jpg',
            'brand' => 'Chauvet DJ',
        ]);

        Products::create([
            'category_id' => 1,
            'name' => 'Gobo Projector',
            'description' => 'Project custom images and patterns with this versatile gobo projector. Ideal for branding, events, and theatrical productions.',
            'price' => 349.99,
            'slug' => Str::slug('Gobo Projector'),
            'imgURL' => 'https://www.omega.be/images/ashx/adj-gobo-projector-ir-bin1.jpeg?s_id=ADJG46E681&imgfield=s_imagebin1&imgwidth=1200&imgheight=1200',
            'brand' => 'Chauvet DJ',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => 'Digital Mixing Console',
            'description' => 'Take your audio mixing to the next level with this digital mixing console. Intuitive interface and advanced features.',
            'price' => 899.99,
            'slug' => Str::slug('Digital Mixing Console'),
            'imgURL' => 'https://www.omega.be/images/ashx/yamaha-dm7-digital-mixing-console-bin1.jpeg?s_id=YAMAQGVTZM&imgfield=s_imagebin1&imgwidth=1200&imgheight=1200',
            'brand' => 'Yamaha',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => 'Analog Mixing Desk',
            'description' => 'Experience the warmth of analog sound with this classic mixing desk. Perfect for vintage recordings and live performances.',
            'price' => 599.99,
            'slug' => Str::slug('Analog Mixing Desk'),
            'imgURL' => 'https://d1aeri3ty3izns.cloudfront.net/media/2/25307/1200/preview_2.jpg',
            'brand' => 'Behringer',
        ]);

        // Add the remaining products here...

        Products::create([
            'category_id' => 2,
            'name' => '16-Channel Digital Mixer 2',
            'description' => 'Another 16-channel digital mixer for experiencing professional-grade mixing. Extensive connectivity and studio-quality effects.',
            'price' => 1999.99,
            'slug' => Str::slug('16-Channel Digital Mixer 2'),
            'imgURL' => 'https://www.omega.be/images/ashx/presonus-studiolive-16.0.2-usb-digital-mixer-bin1.jpeg?s_id=PRES0EF3DF&imgfield=s_imagebin1&imgwidth=1200&imgheight=1200',
            'brand' => 'PreSonus',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => 'Portable DJ Controller',
            'description' => 'Take control of your mixes on the go with this portable DJ controller. Compact size and versatile functionality.',
            'price' => 299.99,
            'slug' => Str::slug('Portable DJ Controller'),
            'imgURL' => 'https://d1aeri3ty3izns.cloudfront.net/media/93/935569/600/preview.jpg',
            'brand' => 'Pioneer DJ',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => 'Live Sound Mixer',
            'description' => 'Achieve professional live sound with this versatile live sound mixer. Ideal for bands, theaters, and houses of worship.',
            'price' => 799.99,
            'slug' => Str::slug('Live Sound Mixer'),
            'imgURL' => 'https://images.musicstore.de/images/0960/soundcraft-lx7ii-16-live-sound-mixer-_1_PAH0002944-000.jpg',
            'brand' => 'Soundcraft',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => 'USB Audio Interface',
            'description' => 'Connect your instruments and microphones to your computer with this USB audio interface. High-quality sound and low latency.',
            'price' => 199.99,
            'slug' => Str::slug('USB Audio Interface'),
            'imgURL' => 'https://static.bax-shop.es/image/product/534263/2320406/8c57443f/1595844507Scarlett2i2-4.jpg',
            'brand' => 'Focusrite',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => '16-Channel Digital Mixer',
            'description' => 'Experience professional-grade mixing with this 16-channel digital mixer. Extensive connectivity and studio-quality effects.',
            'price' => 1799.99,
            'slug' => Str::slug('16-Channel Digital Mixer'),
            'imgURL' => 'https://d1aeri3ty3izns.cloudfront.net/media/68/688873/600/preview.jpg',
            'brand' => 'Mackie',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => 'Portable DJ Controller',
            'description' => 'Take control of your mixes on the go with this portable DJ controller. Compact size and versatile functionality.',
            'price' => 299.99,
            'slug' => Str::slug('Portable DJ Controller'),
            'imgURL' => 'https://d1aeri3ty3izns.cloudfront.net/media/93/935569/600/preview.jpg',
            'brand' => 'Pioneer DJ',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => 'Live Sound Mixer',
            'description' => 'Achieve professional live sound with this versatile live sound mixer. Ideal for bands, theaters, and houses of worship.',
            'price' => 799.99,
            'slug' => Str::slug('Live Sound Mixer'),
            'imgURL' => 'https://images.musicstore.de/images/0960/soundcraft-lx7ii-16-live-sound-mixer-_1_PAH0002944-000.jpg',
            'brand' => 'Soundcraft',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => 'USB Audio Interface',
            'description' => 'Connect your instruments and microphones to your computer with this USB audio interface. High-quality sound and low latency.',
            'price' => 199.99,
            'slug' => Str::slug('USB Audio Interface'),
            'imgURL' => 'https://static.bax-shop.es/image/product/534263/2320406/8c57443f/1595844507Scarlett2i2-4.jpg',
            'brand' => 'Focusrite',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => 'USB Audio Interface',
            'description' => 'Connect your instruments and microphones to your computer with this USB audio interface. High-quality sound and low latency.',
            'price' => 199.99,
            'slug' => Str::slug('USB Audio Interface'),
            'imgURL' => 'https://static.bax-shop.es/image/product/534263/2320406/8c57443f/1595844507Scarlett2i2-4.jpg',
            'brand' => 'Focusrite',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => '4-Channel Mixer',
            'description' => 'Mix multiple audio sources with this 4-channel mixer. Compact design with essential features for small setups.',
            'price' => 149.99,
            'slug' => Str::slug('4-Channel Mixer'),
            'imgURL' => 'https://res.cloudinary.com/cash-crusaders/image/upload/f_auto,fl_lossy,h_1000,q_auto,w_1000/v1596783475/NewGoods/hsvchzfwjkhlpqnhhvj8',
            'brand' => 'Mackie',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => '8-Channel Mixing Console',
            'description' => 'Expand your mixing capabilities with this 8-channel mixing console. Suitable for small bands, studios, and venues.',
            'price' => 349.99,
            'slug' => Str::slug('8-Channel Mixing Console'),
            'imgURL' => 'https://m.media-amazon.com/images/I/816JF+AdFsL._AC_UF894,1000_QL80_.jpg',
            'brand' => 'Behringer',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => 'Live Sound Mixer 2',
            'description' => 'Another versatile live sound mixer for achieving professional live sound. Ideal for bands, theaters, and houses of worship.',
            'price' => 899.99,
            'slug' => Str::slug('Live Sound Mixer 2'),
            'imgURL' => 'https://i.ebayimg.com/images/g/4BYAAOSwWdhjYd47/s-l1200.jpg',
            'brand' => 'Mackie',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => 'USB Audio Interface 2',
            'description' => 'Another USB audio interface for connecting your instruments and microphones to your computer. High-quality sound and low latency.',
            'price' => 249.99,
            'slug' => Str::slug('USB Audio Interface 2'),
            'imgURL' => 'https://m.media-amazon.com/images/I/61WZrBOhYNL.jpg',
            'brand' => 'Focusrite',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => '4-Channel Mixer 2',
            'description' => 'Another 4-channel mixer for mixing multiple audio sources. Compact design with essential features for small setups.',
            'price' => 179.99,
            'slug' => Str::slug('4-Channel Mixer 2'),
            'imgURL' => 'https://img.fruugo.com/product/1/22/703857221_max.jpg',
            'brand' => 'Behringer',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => '8-Channel Mixing Console 2',
            'description' => 'Another 8-channel mixing console for expanding your mixing capabilities. Suitable for small bands, studios, and venues.',
            'price' => 449.99,
            'slug' => Str::slug('8-Channel Mixing Console 2'),
            'imgURL' => 'https://m.media-amazon.com/images/I/81VixxKgcyL.jpg',
            'brand' => 'Yamaha',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => 'Digital Audio Mixer 2',
            'description' => 'Another digital audio mixer for creating professional-grade mixes. Touchscreen interface and customizable presets.',
            'price' => 1399.99,
            'slug' => Str::slug('Digital Audio Mixer 2'),
            'imgURL' => 'https://m.media-amazon.com/images/I/61ChUZkoisL.jpg',
            'brand' => 'Behringer',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => '12-Channel Mixing Desk 2',
            'description' => 'Another 12-channel mixing desk for handling larger projects. Versatile routing options and built-in effects.',
            'price' => 799.99,
            'slug' => Str::slug('12-Channel Mixing Desk 2'),
            'imgURL' => 'https://m.media-amazon.com/images/I/81zw63FwnnL.jpg',
            'brand' => 'Yamaha',
        ]);

        Products::create([
            'category_id' => 2,
            'name' => '16-Channel Digital Mixer 2',
            'description' => 'Another 16-channel digital mixer for experiencing professional-grade mixing. Extensive connectivity and studio-quality effects.',
            'price' => 1999.99,
            'slug' => Str::slug('16-Channel Digital Mixer 2'),
            'imgURL' => 'https://www.omega.be/images/ashx/presonus-studiolive-16.0.2-usb-digital-mixer-bin1.jpeg?s_id=PRES0EF3DF&imgfield=s_imagebin1&imgwidth=1200&imgheight=1200',
            'brand' => 'PreSonus',
        ]);

    }
}