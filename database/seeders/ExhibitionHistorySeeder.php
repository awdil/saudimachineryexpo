<?php

namespace Database\Seeders;

use App\Models\Exhibition;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExhibitionHistorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'year' => 2017,
                'title' => '1st Pakistan Industrial Expo',
                'description' => 'Everest International Expo organizes 76 enterprises from 5 provinces of China, including Shandong, Fujian, Guangzhou and Hebei, and 108 standard booths, with an exhibition area of more than 2000 square meters in Pakistan Industrial Expo 2017. The expo received over 20,000 professional audiences from all over the world in 2017 and made potential order amounts to 700 million RMB. Ministers of Commerce and Ministers of Textiles attended the opening ceremony and cut the ribbon; the president of Punjab Parliament attended the closing ceremony and witnessed the bilateral signing ceremony. The Expo has already been the vital bridge for Sino Pakistan economics, trading and friendship.',
            ],
            [
                'year' => 2018,
                'title' => '2nd Pakistan Industrial Expo; 6th Pak-China Business Forum-Industrial Expo',
                'description' => '6th Pak-China Business Forum-Industrial Expo 2018 was successfully held in Lahore on Sept. 14-16th, 2018. Governor of Punjab and Consul General of China in Lahore attend opening ceremony, the Forum, and visit the exhibition hall. More than 100 B2B Meetings, 398 standard booths had been organized during the event with more than 80,000 square feet exhibiting area. Through a huge amount of advertisements of newspaper, TV, radio, road streamers, social media and so on. The event has been the most influential one in all over Pakistan.',
            ],
            [
                'year' => 2019,
                'title' => '3rd Pakistan Industrial Expo; 7th Pak-China Business Forum - Industrial expo',
                'description' => '7th Pak-China Business Forum - Industrial expo 2019 was successfully held on September 2-4, 2019 by Everest International Expo Pvt. Ltd. Everest International Expo organizes enterprises from 5 provinces of China, including Shandong, Fujian, Guangzhou and Hebei. According to statistics, more than 30000 visitors attended the exhibition, including more than 12000 professional purchasers. Minister of science and technology of Pakistan and Consul General of China in Lahore, Pakistan attended the opening ceremony of the exhibition and inspected the exhibition hall.',
            ],
            [
                'year' => 2020,
                'title' => '4th Pakistan Industrial Expo',
                'description' => 'Pakistan Industrial Expo 2020, a unique Exhibition of showcasing the Chinese products was held in Lahore from November 13 to 15, 2020, at Royal Palm Golf & Country Club in which more than 100 top industries related Chinese manufacture will participate. During these three days, more than 2000 professional Pakistani Businessman participated and 448 Match meeting were arranged on the spot and Pakistan and China Signed Agreements worth $ 14 Million. The Exhibition used “Online & Offline” method. Products were physically present at booths set up on this while B2B meeting will be arranged through special installed gadgets at every booth. The main Sector at Exhibition includes CNC Machine, Construction Machine, New Energy , Building Material ,agriculture machine, Plastic Machine, Hardware, Chemical and Auto parts.',
            ],
            [
                'year' => 2021,
                'title' => '5th Pakistan Industrial Expo',
                'description' => 'The 5th Pakistan Industrial Expo 2021 was successfully held in Lahore on October 29th-31st, which continued its "online + offline" mode. A total of 108 Chinese enterprises participated in the exhibition, covering an area of 2,000 square meters, with exhibits covering power equipment, new energy, hardware, building materials, construction machinery, agricultural machinery, chemicals and other industries. Mr. Khashih-ur-Rehman, Executive Director General of BOI gave highly appreciation on the inauguration of the exhibition. It has become a famous industrial expo in South Asia area.',
            ],
            [
                'year' => 2022,
                'title' => '6th Pakistan Industrial Expo',
                'description' => '6th Pakistan Industrial Expo received 5256 professional businessmen during 15-17 October 2022. Totally 134 enterprises attended with exhibiting area of 4600 square meters. It was still using "Online + Offline" method. 2381 match meetings were organized and reached 39.8 million US Dollars intention turnover. 21 business delegation came to visit the expo including TDAP, SMEDA, Sahiwal Chamber, Sarhad Chamber, Korangi Chamber, Peshawar Chamber, Swabi Chamber, Sargodha Chamber, Constructors Association of Pakistan, Pakistan Hardware Merchants Association, etc.',
            ],
            [
                'year' => 2023,
                'title' => '7th Pakistan Industrial Expo',
                'description' => 'The 7th Pakistan Industrial Expo which was participated by over 240 Pakistani and Chinese companies was visited by people from different strata of life, and inaugurated by the Punjab Minister for Housing, Transport and Livestock Hassan Ibrahim Murad,who termed it an appreciable step by the organizers Everest International Expo Pvt. Ltd to bring together Pakistani and Chinese businessmen. The expo drew over 13,000 professional visitors over the course of its run. This significant turnout not only attests to the event`s reputation as a pivotal platform for global collaborations but also underscores its crucial role in fostering economic growth and intercontinental partnerships.',
            ],
        ];

    }
}
