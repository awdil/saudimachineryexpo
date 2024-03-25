<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="{{ __('Saudi Machinery Expo - Coming Soon!') }}">
    <meta property="og:title" content="{{ __('Saudi Machinery Expo - Coming Soon!') }}">
    <meta property="og:description" content="{{ __('Stay tuned for the latest updates on Saudi Machinery Expo!') }}">

    <title>{{ __('Saudi Machinery Expo - Coming Soon!') }}</title>
    
    <!-- Google Fonts & Custom Styles -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap">
    <style>
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            font-family: 'Poppins', sans-serif;
        }

        .comming-soon-section {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            background-image: url({{ theme_asset('img/eventum-img1.jpg') }});
            background-size: cover;
            background-position: center;
            height: 100vh;
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }

        .comming-soon-wrap {
            position: relative;
            z-index: 10;
            color: #fff;
        }

        .comming-soon-content h4 {
            margin: 20px 0;
            font-size: 2rem;
        }

        .comming-soon-content p {
            font-size: 1.2rem;
        }
    </style>
</head>
<body class="home">
    <div id="page" class="full-page">
        <div class="comming-soon-section">
            <div class="overlay"></div>
            <div class="container">
                <div class="comming-soon-wrap">
                    <section class="site-identity">
                        <h1 class="site-title">
                            <a href="#">
                                <img class="white-logo" src="{{ theme_asset('img/saudi-logo.png')}}" alt="Saudi Machinery Expo logo">
                            </a>
                        </h1>
                    </section>
                    <article class="comming-soon-content">
                        <h4>We Are Coming <span class="text-primary">Soon!</span></h4>
                        <p>Stay tuned for the grand opening of the Saudi Machinery Expo.</p>
                    </article>
                    <!-- Update the data-date for your event -->
                    <div class="time-counter-wrap">
                        <div class="time-counter" data-date="2024-12-24 23:59:59">
                            <div class="counter-time">
                                <span class="counter-days">02</span>
                                <span class="label-text">Days</span>
                            </div>
                            <div class="counter-time">
                                <span class="counter-hours">00</span>
                                <span class="label-text">Hours</span>
                            </div>
                            <div class="counter-time">
                                <span class="counter-minutes">00</span>
                                <span class="label-text">Minutes</span>
                            </div>
                            <div class="counter-time">
                                <span class="counter-seconds">00</span>
                                <span class="label-text">Seconds</span>
                            </div>
                        </div>
                    </div>
                    <!-- Contact and Social Info -->
                    <div class="comming-soon-footer">
                        <!-- Your Contact Info Here -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
