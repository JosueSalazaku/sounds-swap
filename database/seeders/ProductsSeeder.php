<?php

namespace Database\Seeders;
use Database\Seeders\SlugGenerator;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Products;
use Illuminate\Support\Str;

class ProductsSeeder extends Seeder
{
    public function run()
    {

        Products::create([
            'category_id' => 5,
            'name' => 'S1 Pro',
            'description' => 'Portable PA system with Bluetooth streaming, battery-powered operation, and multiple mounting options.',
            'price' => 599.00,
            'slug' => Str::slug('S1 Pro'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-3702587700f4e6bb__hmac-84065a5dd2f9a7db5f97a5f472b00ff5d9137e68/images/items/750/S1Pro-large.jpg',
            'brand' => 'Bose',
        ]);

        Products::create([
            'category_id' => 5,
            'name' => 'QSC CP8',
            'description' => 'Compact powered loudspeaker with 1000 Watts of power, 8-inch woofer, and advanced DSP for consistent performance.',
            'price' => 399.99,
            'slug' => Str::slug('QSC CP8'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-d38c0167dd77df3b__hmac-2d6568691a03e2a2618cd8913c8d9469e601e23c/images/items/750/CP8-large.jpg',
            'brand' => 'QSC',
        ]);
        
        Products::create([
            'category_id' => 5,
            'name' => 'Electro-Voice ZLX-15BT',
            'description' => 'Powered loudspeaker with Bluetooth audio streaming, 1000 Watts of power, and EV\'s QuickSmartDSP for easy setup and control.',
            'price' => 499.00,
            'slug' => Str::slug('Electro-Voice ZLX-15BT'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-d38c0167dd77df3b__hmac-2d6568691a03e2a2618cd8913c8d9469e601e23c/images/items/750/ZLX15BT-large.jpg',
            'brand' => 'Electro-Voice',
        ]);
        
        Products::create([
            'category_id' => 5,
            'name' => 'JBL EON208P',
            'description' => 'Portable PA system with 300 Watts of power, 8-channel mixer, and two 8-inch speakers for versatile sound reinforcement.',
            'price' => 699.00,
            'slug' => Str::slug('JBL-EON208P'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-3a0d2d8927ee1729__hmac-59f5d9a04fcff9e7d8edc7b49d7bb935ccf6d21f/images/items/750/EON208P-large.jpg',
            'brand' => 'JBL',
        ]);
        
        Products::create([
            'category_id' => 5,
            'name' => 'Mackie Reach',
            'description' => 'All-in-one professional PA system with 720 Watts of power, built-in 6-channel digital mixer, and wireless streaming via Bluetooth.',
            'price' => 799.99,
            'slug' => Str::slug('Mackie Reach'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-317a8d1535cc62b4__hmac-6cfc8ed55a10aa77a56d86d8d1c41dc291f9eb5a/images/items/750/Reach-large.jpg',
            'brand' => 'Mackie',
        ]);
        
        Products::create([
            'category_id' => 5,
            'name' => 'S1 Pro Multi-Position PA System',
            'description' => 'Portable PA system with a built-in 3-channel mixer, Bluetooth streaming, and rechargeable battery, suitable for various applications.',
            'price' => 599.00,
            'slug' => Str::slug('S1 Pro Multi-Position PA System'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-17c84c9d495f1bf4__hmac-1a143b4ab5fb6e5cf2366edc68cc0458f9b2ed6b/images/items/750/S1ProLarge-large.jpg',
            'brand' => 'Bose',
        ]);
        
        Products::create([
            'category_id' => 5,
            'name' => 'QSC K8.2',
            'description' => 'Compact powered loudspeaker with 2000 Watts of power, 8-inch woofer, and advanced DSP for precise sound reproduction.',
            'price' => 699.99,
            'slug' => Str::slug('QSC K8.2'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-ba27951794cd39e2__hmac-2e8c7c3a8793dcbb91b31c80c52e067218476d2b/images/items/750/K8.2-large.jpg',
            'brand' => 'QSC',
        ]);
        
        Products::create([
            'category_id' => 5,
            'name' => 'Yamaha STAGEPAS-1K',
            'description' => 'Portable PA system with 1000 Watts of power, 12-channel mixer, and Bluetooth audio streaming for easy setup and flexible use.',
            'price' => 1199.99,
            'slug' => Str::slug('Yamaha STAGEPAS-1K'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-d6c58fd7f55a2455__hmac-4bc3d5eb1546a2fde54a90f2cbdbe6316e401c7b/images/items/750/STAGEPAS1K-large.jpg',
            'brand' => 'Yamaha',
        ]);
        
        Products::create([
            'category_id' => 5,
            'name' => 'RCF-EVOX JMIX8',
            'description' => 'Portable array system with an 8-channel digital mixer, Bluetooth audio streaming, and powerful sound performance.',
            'price' => 1299.00,
            'slug' => Str::slug('RCF-EVOX JMIX8'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-0fbbbe5f29f524a6__hmac-065a108ed946883e495ce2f7aa416ce36e26aa94/images/items/750/EVOXJMIX8-large.jpg',
            'brand' => 'RCF',
        ]);
        
        Products::create([
            'category_id' => 5,
            'name' => 'Behringer Europort MPA40BT-PROO',
            'description' => 'Portable PA system with built-in battery, Bluetooth streaming, and 40 Watts of power, ideal for small events and gatherings.',
            'price' => 219.99,
            'slug' => Str::slug('Behringer Europort MPA40BT-PROO'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-0de93b83a44cf179__hmac-73be20cb6bb43a94a9f47be76adde26830d9c335/images/items/750/MPA40BTPro-large.jpg',
            'brand' => 'Behringer',
        ]);    
        
    }
 

}