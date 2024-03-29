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
            'category_id' => 6,
            'name' => 'Stage Snake',
            'description' => 'Multi-channel stage snake with XLR connectors for sending audio signals from the stage to the mixing console, available in various lengths.',
            'price' => 299.99,
            'slug' => Str::slug('Stage Snake'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-6d2e4e9569e3c686__hmac-9c90db',
            'brand' => 'Ugreen',
        ]);
        
        Products::create([
            'category_id' => 6,
            'name' => 'Speaker Cable',
            'description' => 'Heavy-duty speaker cable with SpeakON connectors for connecting amplifiers to passive speakers in professional sound reinforcement systems.',
            'price' => 24.99,
            'slug' => Str::slug('Speaker Cable'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-d431b292681e5090__hmac-1c7a3a',
            'brand' => 'Belkin',
        ]);
        
        Products::create([
            'category_id' => 6,
            'name' => 'Patch Bay',
            'description' => 'Rackmount patch bay for organizing and routing audio signals between various devices in a studio or live sound setup.',
            'price' => 149.99,
            'slug' => Str::slug('Patch Bay'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-c0e035fd64c1de58__hmac-2c20f3',
            'brand' =>  'Anker',
        ]);
        
        Products::create([
            'category_id' => 6,
            'name' => 'Coaxial Cable',
            'description' => 'High-quality coaxial cable for transmitting audio and video signals, suitable for connecting antennas, receivers, and distribution systems.',
            'price' => 18.99,
            'slug' => Str::slug('Coaxial Cable'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-0f6a8120b3e28e0b__hmac-2263d7',
            'brand' => 'Anker',
        ]);
        
        Products::create([
            'category_id' => 6,
            'name' => 'Stage Box',
            'description' => 'Durable stage box with multiple XLR inputs and outputs, designed for easy cable management and signal routing on stage.',
            'price' => 199.99,
            'slug' => Str::slug('Stage Box'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-191cb6b83d0d3a4a__hmac-59a866',
            'brand' => 'Belkin', 
        ]);    
        
        Products::create([
            'category_id' => 6,
            'name' => 'Multicore Cable',
            'description' => 'Heavy-duty multicore cable with multiple channels for sending audio signals from the stage to the front-of-house mixer, available in various configurations.',
            'price' => 499.99,
            'slug' => Str::slug('Multicore Cable'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-6425ff0a42a009d2__hmac-fbf4a4',
            'brand' => 'Belkin',
        ]);
        
        Products::create([
            'category_id' => 6,
            'name' => 'Instrument Patch Cable',
            'description' => 'High-quality patch cable with 1/4-inch connectors for connecting instruments to pedals, amplifiers, and other audio devices.',
            'price' => 8.99,
            'slug' => Str::slug('Instrument Patch Cable'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-2b0e7e07146f4788__hmac-58e2e2',
            'brand' =>  'Anker',
        ]);

        Products::create([
            'category_id' => 6,
            'name' => 'PowerCON Extension Cable',
            'description' => 'Heavy-duty PowerCON extension cable for reliable power distribution in professional audio and lighting setups.',
            'price' => 34.99,
            'slug' => Str::slug('PowerCON Extension Cable'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-1c7b1fe88315de3d__hmac-66bf',
            'brand' => 'Ugreen',
        ]);
        
        Products::create([
            'category_id' => 6,
            'name' => 'Ethernet Patch Cable',
            'description' => 'High-quality Ethernet patch cable for connecting network devices in live sound setups, ensuring stable network connections.',
            'price' => 11.99,
            'slug' => Str::slug('Ethernet Patch Cable'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-5226f5dd68a7dd39__hmac-ecf08b',
            'brand' => 'Ugreen',
        ]);
        
        Products::create([
            'category_id' => 6,
            'name' => 'USB Cable',
            'description' => 'High-quality USB cable for connecting audio interfaces, MIDI controllers, and other USB-compatible devices.',
            'price' => 8.99,
            'slug' => Str::slug('USB Cable'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-cd1d63729ac45b27__hmac-b18a20b5b236414c53574fb632b8b500ccfb8f8c/images/items/750/USBAB-6-large.jpg',
            'brand' => 'Belkin',
        ]);
        
        Products::create([
            'category_id' => 6,
            'name' => 'HDMI Cable',
            'description' => 'High-speed HDMI cable for connecting video sources, projectors, and displays for video playback and presentations.',
            'price' => 14.99,
            'slug' => Str::slug('HDMI Cable'),
            'imgURL' => 'https://media.sweetwater.com/api/i/q-82__ha-3c2cb9a59b2e28e0__hmac-01c24e6a4b2c70c7dfbc058002db90be2f2f3787/images/items/750/HDMI06-large.jpg',
            'brand' => 'Anker',
        ]);
        
        
    }
 

}