<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HomeConfigurationEventService extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Insert or update data in the 'configurations' table
        DB::table('configurations')->updateOrInsert([
            'id' => 55
        ], [
            'name' => 'Home.eventServices',
            'value' => $this->defaultEventData(),
            'title' => 'Home Services Section',
            'description' => 'All Services Of home Section',
            'input_type' => 'text',
            'editable' => 1,
            'weight' => NULL,
            'params' => '',
            'order' => 0,
        ]);
        

    }

    function defaultEventData()
    {

        $eventData = [
            1 => [
                'icon' => 'icon-globe',
                'heading' => 'International Exhibitions',
                'description' => 'Everest is organizing international exhibitions in Pakistan, Kenya, United Arab Emirates, South Africa, and Saudi Arabia.',
            ],
            2 => [
                'icon' => 'icon-communication',
                'heading' => 'Match Making',
                'description' => 'Everest provides accurate match-making services for both visitors and exhibitors.',
            ],
            3 => [
                'icon' => 'icon-building',
                'heading' => 'Display Center and Warehouse',
                'description' => 'Everest has set up long-term display center and warehouse in Lahore, Pakistan, which does provide local business people with convenience in trade links such as sample check and transportation.',
            ],
            4 => [
                'icon' => 'icon-team2',
                'heading' => 'Business-to-Business Meetings',
                'description' => 'Everest is holding B2B meetings all year round in Pakistan and China, building an efficient platform for business partner communication.',
            ],
            5 => [
                'icon' => 'icon-search',
                'heading' => 'Market Research',
                'description' => 'Everest provides in-depth on-site understanding of the development of each industry in Pakistan and China, providing reference and support for business development.',
            ],
            6 => [
                'icon' => 'icon-factory',
                'heading' => 'Factory Visiting in China',
                'description' => 'Everest assists business travelers to China in visiting factories and customizing routes to facilitate and efficiently utilize the business trips, exploring the market and selecting business partners.',
            ],
        ];
        
        
        $serializedData = serialize($eventData);
        return $serializedData;
    }
}
