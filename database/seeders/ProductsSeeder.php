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
            'category_id' => 4,
            'name' => 'Behringer EUROLIVE B205D',
            'description' => 'Compact and versatile stage monitor with 150-Watt amplifier, 5.25-inch driver, and built-in mixer.',
            'price' => 199.99,
            'slug' => Str::slug('Behringer EUROLIVE B205D'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-576ee3774c5ef4ff__hmac-028b70d7e119212a126f26cf4c33d978dd0a97e9/images/items/750/B205D-xlarge.jpg',
            'brand' => 'Behringer',
        ]);
        
        Products::create([
            'category_id' => 4,
            'name' => 'Yamaha DBR10',
            'description' => 'High-powered stage monitor with 700 Watts of class D power, 10-inch woofer, and 1.4-inch compression driver.',
            'price' => 399.99,
            'slug' => Str::slug('Yamaha DBR10'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-26db3d3c54b1016f__hmac-35b29f8b8c6231fcda89f305b58d41be35619d02/images/items/750/DBR10-large.jpg',
            'brand' => 'Yamaha',
        ]);
        
        Products::create([
            'category_id' => 4,
            'name' => 'JBL EON610',
            'description' => 'Powered stage monitor with 1000 Watts of peak power, 10-inch woofer, and Bluetooth integration.',
            'price' => 299.00,
            'slug' => Str::slug('JBL EON610'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-3b4a2f88ec119dd2__hmac-97861a0e3b67a005447cb84f0413d7f56cf1d054/images/items/750/EON610-large.jpg',
            'brand' => 'JBL',
        ]);
        
        Products::create([
            'category_id' => 4,
            'name' => 'Mackie Thump12A',
            'description' => 'Portable stage monitor with 1300 Watts of power, 12-inch woofer, and integrated mixer.',
            'price' => 349.99,
            'slug' => Str::slug('Mackie Thump12A'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-3b4a2f88ec119dd2__hmac-97861a0e3b67a005447cb84f0413d7f56cf1d054/images/items/750/EON610-large.jpg',
            'brand' => 'Mackie',
        ]);
        
        Products::create([
            'category_id' => 4,
            'name' => 'QSC K10.2',
            'description' => 'Professional-grade stage monitor with 2000 Watts of power, 10-inch woofer, and advanced DSP for precise sound shaping.',
            'price' => 699.99,
            'slug' => Str::slug('QSC K10.2'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-76b7b5e1d5ae8f6d__hmac-cd7f46c1aabbf126d47aa1f5b3d61909e8c8c5d3/images/items/750/K10.2-large.jpg',
            'brand' => 'QSC',
        ]);
        
        Products::create([
            'category_id' => 4,
            'name' => 'Electro-Voice ZLX-12P',
            'description' => 'Active stage monitor with 1000 Watts of power, 12-inch woofer, and DSP presets for optimal performance.',
            'price' => 399.00,
            'slug' => Str::slug('Electro-Voice ZLX-12P'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-3b4a2f88ec119dd2__hmac-97861a0e3b67a005447cb84f0413d7f56cf1d054/images/items/750/EON610-large.jpg',
            'brand' => 'Electro-Voice',
        ]);
        
        Products::create([
            'category_id' => 4,
            'name' => 'RCF ART 712-A MK4',
            'description' => 'Bi-amplified stage monitor with 1400 Watts of peak power, 12-inch woofer, and advanced DSP processing.',
            'price' => 699.00,
            'slug' => Str::slug('RCF ART 712-A MK4'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-3b4a2f88ec119dd2__hmac-97861a0e3b67a005447cb84f0413d7f56cf1d054/images/items/750/EON610-large.jpg',
            'brand' => 'RCF',
        ]);
        
        Products::create([
            'category_id' => 4,
            'name' => 'Mackie SRM350v3',
            'description' => 'Compact stage monitor with 1000 Watts of power, 10-inch woofer, and built-in feedback destroyer.',
            'price' => 399.99,
            'slug' => Str::slug('Mackie SRM350v3'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-3b4a2f88ec119dd2__hmac-97861a0e3b67a005447cb84f0413d7f56cf1d054/images/items/750/EON610-large.jpg',
            'brand' => 'Mackie',
        ]);
        
        Products::create([
            'category_id' => 4,
            'name' => 'Alto Professional TS310',
            'description' => 'Powered stage monitor with 2000 Watts of peak power, 10-inch woofer, and integrated mixer.',
            'price' => 349.00,
            'slug' => Str::slug('Alto Professional TS310'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-3b4a2f88ec119dd2__hmac-97861a0e3b67a005447cb84f0413d7f56cf1d054/images/items/750/EON610-large.jpg',
            'brand' => 'Al',
        ]);

    }
 

}