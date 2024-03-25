<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="keywords" content="">
	<meta name="author" content="">
	<meta name="robots" content="">
	<meta name="description" content="{{ __('Pak Industrial - Crypto Trading HTML Template') }}">
	<meta property="og:title" content="{{ __('Pak Industrial - Crypto Trading HTML Template') }}">
	<meta property="og:description" content="{{ __('Pak Industrial - Crypto Trading HTML Template') }}">
	<meta property="og:image" content="">
	<meta name="format-detection" content="telephone=no">
	
	<!-- FAVICONS ICON -->
	@if(config('Site.favicon'))
        <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('storage/configuration-images/'.config('Site.favicon')) }}">
    @else 
        <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/favicon.png') }}">
    @endif
	
	<!-- PAGE TITLE HERE -->
	<title>{{ config('Site.title') ? config('Site.title') : __('PAKCMS Laravel') }}</title>
	
	<!-- MOBILE SPECIFIC -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="{{ theme_asset('vendors/bootstrap/css/bootstrap.min.css') }}" media="all">

	<!-- Fonts Awesome CSS -->
	<link rel="stylesheet" type="text/css" href="{{ theme_asset('vendors/fontawesome/css/all.min.css') }}">

	<!-- Elmentkit Icon CSS -->
	<link rel="stylesheet" type="text/css" href="{{ theme_asset('vendors/elementskit-icon-pack/assets/css/ekiticons.css') }}">

	<!-- progress bar CSS -->
	<link rel="stylesheet" type="text/css" href="{{ theme_asset('vendors/progressbar-fill-visible/css/progressBar.css') }}">

	<!-- jquery-ui css -->
	<link rel="stylesheet" type="text/css" href="{{ theme_asset('vendors/jquery-ui/jquery-ui.min.css') }}">

	<!-- modal video css -->
	<link rel="stylesheet" type="text/css" href="{{ theme_asset('vendors/modal-video/modal-video.min.css') }}">

	<!-- light box css -->
	<link rel="stylesheet" type="text/css" href="{{ theme_asset('vendors/fancybox/dist/jquery.fancybox.min.css') }}">

	<!-- slick slider css -->
	<link rel="stylesheet" type="text/css" href="{{ theme_asset('vendors/slick/slick.css') }}">
	<link rel="stylesheet" type="text/css" href="{{ theme_asset('vendors/slick/slick-theme.css') }}">
    	<!-- Custom Stylesheet -->
	<link rel="stylesheet" href="{{ theme_asset('css/style.css') }}">


	<!-- Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap">

    <style>
        :root {
            --base-url: '{{ theme_asset('') }}';
        }
    </style>
</head>

<body class="vh-100">
    <!-- <div class="authincation h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-7">
                    <div class="form-input-content text-center error-page">
                        <h1 class="error-text fw-bold">404</h1>
                        <h4><i class="fa fa-exclamation-triangle text-warning"></i> The page you were looking for is not found!</h4>
                        <p>You may have mistyped the address or the page may have moved.</p>
                        <div>
                            <a class="btn btn-primary" href="{{ url('/') }}">Back to Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <div class="">

		<!-- header -->
		@include('elements.header')
		<!-- header END -->
		
		<main id="content" class="site-main">
            <div class="inner-banner-wrap mb-0 inner404">
                <div class="inner-baner-container" style="background-image: url({{ asset('img/eventum-img1.jpg')}}"></div>
            </div>
            <!--  400page html start -->
            <div class="no-content-section error404-container">
                <div class="container">
                    <div class="no-content-wrap">
                        <div class="title-wrap">
                            <span>404</span>
                            <h1>Oops! That page can't be found</h1>
                        </div>
                        <div class="search-form-wrap">
                            <p>It looks like nothing was found at this location. Maybe try one of the links below or a search?</p>
                            <form class="search-form">
                                <input type="text" name="search" placeholder="Search...">
                                <button class="search-btn"><i class="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!--  400page html end -->
        </main>

		<!-- Footer -->
		@include('elements.footer')
		<!-- Footer END-->

		

	</div>

<!--**********************************
    Scripts
***********************************-->
<!-- Required vendors -->
<script src="{{ theme_asset('vendor/global/global.min.js') }}"></script>
<script src="{{ theme_asset('js/custom.js') }}"></script>
<script src="{{ theme_asset('js/deznav-init.js') }}"></script>
</body>
</html>