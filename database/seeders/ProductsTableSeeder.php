<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'catalogue_id' => 1,
            'title' => 'Premium Widget',
            'slug' => 'premium-widget',
            'content' => 'Experience the latest in widget technology with our Premium Widget. This state-of-the-art product is designed to meet all your widget needs.',
            'excerpt' => 'Discover the excellence of our Premium Widget.',
            'comment' => 'A top-notch widget for discerning customers.',
            'featured_id' => 0,
            'featured_image' => 0,
            'meta_title' => 'Premium Widget - Unleash Innovation',
            'meta_description' => 'Explore the features and benefits of our Premium Widget. Unleash innovation with the best widget in the market.',
            'meta_keywords' => 'premium, widget, innovation',
            'password' => null,
            'status' => 1,
            'visibility' => 'Public',
            'year' => '2024',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}


