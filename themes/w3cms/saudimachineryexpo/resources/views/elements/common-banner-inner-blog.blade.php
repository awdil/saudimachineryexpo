@php
// Get the current theme name from the configuration or use a default fallback
$themeName = config('Theme.select_theme', 'default');

// Build the image path based on the theme name
$imagePath = public_path('themes/' . $themeName . '/img/blog.jpg');

// Check if the image exists and determine the correct URL to use
$imageUrl = file_exists($imagePath) ? theme_asset('img/img/blog.jpg') : theme_asset('img/header.jpg');
@endphp

<section class="innerpage-banner"> 
    <div class="container"> 
        <div class="event-time-here"> 
            <div class="event-time-inner"> 
                 
                <div class="with-tool-p"> 
                </div> 
            </div> 
            <div class="mobile-search"> 
                <ul> 
                    <li> <a class="search-icon"> <i class="fas fa-search"></i> </a> </li> 
                    <li> <a href="https://www.saudimachineryexpo.com/eventical" class="calender-icon"> <i class="fas fa-calendar-alt"></i> </a> </li> 
                </ul> 
            </div> 
        </div> 
        {{ __('All Blogs') }}
    </div> 
    <img class="no-lazy-load" src="{{ $imageUrl }}" alt="banner">
</section>
