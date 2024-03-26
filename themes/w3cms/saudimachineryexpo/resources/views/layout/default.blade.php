<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="author" content="">
	<meta name="robots" content="">
    
    <!-- Dynamic Title, Keywords, and Description -->
    @php
        $metaTitle = '';
        $metaKeywords = '';
        $metaDescription = '';
        
        if(isset($blog) && !empty($blog)) {
            $metaTitle = $blog->title;
            $metaKeywords = $blog->keywords;
            $metaDescription = $blog->meta_description;
        } elseif(isset($page) && !empty($page)) {
            $metaTitle = $page->title;
            if(isset($page->page_seo) && !empty($page->page_seo)) {
                $metaKeywords = $page->page_seo->meta_keywords;
                $metaDescription = $page->page_seo->meta_descriptions;
            }
        }elseif(isset($exhibitorscatalogues) && !empty($exhibitorscatalogues)){
            
        }else {
            $metaTitle = config('Site.title');
            $metaKeywords = config('Site.keywords');
            $metaDescription = config('Site.description');
        }
    @endphp
	
    <!-- Dynamic Title, Keywords, and Description -->
    <title>{{ $metaTitle }}</title>
    <meta name="keywords" content="{{ $metaKeywords }}">
    <meta name="description" content="{{ $metaDescription }}">
    <meta property="og:title" content="{{ $metaTitle }}">
	<meta property="og:description" content="{{ $metaDescription }}">

    <!-- ... other head elements ... -->
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
	
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style>
        img.lazy {
            min-height: 1px
        }
    </style>
    <link rel="preload" href="{{ theme_asset('css/lazyload.min.js') }}" as="script">

    <!-- Google Tag Manager -->
    <script id="scarab-js-api" src="{{ theme_asset('js/scarab-v2.js') }}"></script>
    <script src="{{ theme_asset('js/288639047244338') }}" async=""></script>
    <script async="" src="{{ theme_asset('js/fbevents.js') }}"></script>
    <script type="text/javascript" async="" src="{{ theme_asset('js/insight.min.js') }}"></script>
    <script type="text/javascript" async="" src="{{ theme_asset('js/js') }}"></script>
    <script async="" src="{{ theme_asset('js/gtm.js') }}"></script>
    <script>
        var gtm_id = 'GTM-TR46N2H';
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })
            (window, document, 'script', 'dataLayer', gtm_id);
    </script>
    <!-- End Google Tag Manager -->


    <script>
        var gform; gform || (document.addEventListener("gform_main_scripts_loaded", function () { gform.scriptsLoaded = !0 }), window.addEventListener("DOMContentLoaded", function () { gform.domLoaded = !0 }), gform = { domLoaded: !1, scriptsLoaded: !1, initializeOnLoaded: function (o) { gform.domLoaded && gform.scriptsLoaded ? o() : !gform.domLoaded && gform.scriptsLoaded ? window.addEventListener("DOMContentLoaded", o) : document.addEventListener("gform_main_scripts_loaded", o) }, hooks: { action: {}, filter: {} }, addAction: function (o, n, r, t) { gform.addHook("action", o, n, r, t) }, addFilter: function (o, n, r, t) { gform.addHook("filter", o, n, r, t) }, doAction: function (o) { gform.doHook("action", o, arguments) }, applyFilters: function (o) { return gform.doHook("filter", o, arguments) }, removeAction: function (o, n) { gform.removeHook("action", o, n) }, removeFilter: function (o, n, r) { gform.removeHook("filter", o, n, r) }, addHook: function (o, n, r, t, i) { null == gform.hooks[o][n] && (gform.hooks[o][n] = []); var e = gform.hooks[o][n]; null == i && (i = n + "_" + e.length), gform.hooks[o][n].push({ tag: i, callable: r, priority: t = null == t ? 10 : t }) }, doHook: function (n, o, r) { var t; if (r = Array.prototype.slice.call(r, 1), null != gform.hooks[n][o] && ((o = gform.hooks[n][o]).sort(function (o, n) { return o.priority - n.priority }), o.forEach(function (o) { "function" != typeof (t = o.callable) && (t = window[t]), "action" == n ? t.apply(null, r) : r[0] = t.apply(null, r) })), "filter" == n) return r[0] }, removeHook: function (o, n, t, i) { var r; null != gform.hooks[o][n] && (r = (r = gform.hooks[o][n]).filter(function (o, n, r) { return !!(null != i && i != o.tag || null != t && t != o.priority) }), gform.hooks[o][n] = r) } });
    </script>

    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <!-- Meta:site specific-->
    <link href="{{ theme_asset('css/css2') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ theme_asset('css/fpy0fva.css') }}">
    <!-- favicons -->
    <link rel="apple-touch-icon" sizes="57x57"
        href="https://www.gulfsaudiexpo.com/wp-content/themes/big5-global-2023/assets/images/favicons/25/apple-icon-57x57.png">
    <link rel="icon" type="image/png" sizes="60x60"
        href="https://www.gulfsaudiexpo.com/wp-content/themes/big5-global-2023/assets/images/favicons/25/apple-icon-60x60.png">
    <link rel="icon" type="image/png" sizes="96x96"
        href="https://www.gulfsaudiexpo.com/wp-content/themes/big5-global-2023/assets/images/favicons/25/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16"
        href="https://www.gulfsaudiexpo.com/wp-content/themes/big5-global-2023/assets/images/favicons/25/favicon-16x16.png">

    <link rel="mask-icon" href="https://www.gulfsaudiexpo.com/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <link rel="manifest"
        href="https://www.gulfsaudiexpo.com/wp-content/themes/big5-global-2023/assets/images/favicons/25/manifest.json">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" id="saudimachineryexpo-css" href="{{ theme_asset('css/saudimachineryexpo-style.css') }}" media="all">
    <link rel="stylesheet" href="{{ theme_asset('css/all.min.css') }}" media="all">
    <link rel="stylesheet" id="base-style-css" href="{{ theme_asset('css/base.css') }}" media="all">
    <link rel="stylesheet" href="{{ theme_asset('css/style.css') }}" media="all">
   
    <style>
        .no-js img.lazyload {
            display: none;
        }

        figure.wp-block-image img.lazyloading {
            min-width: 150px;
        }

        .lazyload,
        .lazyloading {
            opacity: 0;
        }

        .lazyloaded {
            opacity: 1;
            transition: opacity 400ms;
            transition-delay: 0ms;
        }
    </style>
    <style type="text/css">
        .broken_link,
        a.broken_link {
            text-decoration: line-through;
        }
    </style>
    <link rel="stylesheet" id="main-style-css" href="{{ theme_asset('css/main.css')}}" media="all">
    <link rel="stylesheet" id="vendor-style-css" href="{{ theme_asset('css/vendor.css')}}" media="all">
    <link rel="stylesheet" id="additional_style-css" href="{{ theme_asset('css/additional_style.css')}}" media="all">
    <script src="{{ theme_asset('js/front-scripts.js')}}" id="wpso-front-scripts-js"></script>
    <link rel="stylesheet" href="{{ theme_asset('js/plyr.css')}}">
    <script src="{{ theme_asset('js/wp-emoji-release.min.js')}}" defer=""></script>
</head>
<body class="home page-template page-template-page-templates page-template-home page-template-page-templateshome-php page page-id-325 normal-page layout3-body fl-builder fl-builder-breakpoint-default loaded">

	<!--*******************
        Preloader start
    ********************-->
    <!--*******************
        Preloader end
    ********************-->
	
	<div class="">
        <div class="top-wrap  layou3header float-panel">
            <!-- header -->
            @include('elements.header')
            <!-- header END -->
        </div>
	
		<main id="content" class="site-main">

			@yield('content')

        </main>

		<!-- Footer -->
		@include('elements.footer')
		<!-- Footer END-->

		

	</div>

	<link rel="stylesheet" id="DMG-Privacy-Form-Css-css" href="{{ theme_asset('css/dmg_privacy_form.css') }}" media="all">
    <link rel="stylesheet" id="gform_basic-css" href="{{ theme_asset('css/basic.min.css') }}" media="all">
    <link rel="stylesheet" id="gform_theme_components-css" href="{{ theme_asset('css/theme-components.min.css') }}" media="all">
    <link rel="stylesheet" id="gform_theme_ie11-css" href="{{ theme_asset('css/theme-ie11.min.css') }}" media="all">
    <link rel="stylesheet" id="gform_theme-css" href="{{ theme_asset('css/theme.min.css') }}" media="all">
    <script src="{{ theme_asset('js/core.js') }}" id="core-js-js"></script>
    <script src="{{ theme_asset('js/main.js') }}" id="main-js-js"></script>

    <script type="text/javascript">
        !function(b, e, f, g, a, c, d) {
            b.fbq || (a = b.fbq = function() {
                a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments);
            }, b._fbq || (b._fbq = a), a.push = a, a.loaded = !0, a.version = "2.0", a.queue = [], c = e.createElement(f), c.async = !0, c.src = g, d = e.getElementsByTagName(f)[0], d.parentNode.insertBefore(c, d))
        }(window, document, "script", "{{ theme_asset('js/fbevents.js') }}");

        fbq("init", "288639047244338");
        fbq("track", "PageView");
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=288639047244338&amp;ev=PageView&amp;noscript=1"></noscript>

    <script type="text/javascript">
        var ScarabQueue = ScarabQueue || [];
        (function(a) {
            if (!document.getElementById(a)) {
                var b = document.createElement("script");
                b.id = a;
                b.src = "//cdn.scarabresearch.com/js/104FFEF72C6F855E/scarab-v2.js";
                a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(b, a);
            }
        })("scarab-js-api");
        ScarabQueue.push(["go"]);
    </script>
    <script src="{{ theme_asset('js/utm_tracker.min.js') }}" id="utm-tracker-js-js"></script>
    <script src="{{ theme_asset('js/speaker_manual.js') }}" id="speaker-manual-js-js"></script>
    <script id="big5-ajax-scripts-js-extra">
        var ajax_params = {
            "ajaxurl": "https://www.gulfsaudiexpo.com/wp-admin/admin-ajax.php",
            "security": "9ca6bd4707",
            "homeUrl": "https://www.gulfsaudiexpo.com/"
        };
        var ajax_params = {
            "ajaxurl": "https://www.gulfsaudiexpo.com/wp-admin/admin-ajax.php",
            "product_category_placeholder": "Please Select Product Category",
            "stand_number_placeholder": "Please Select a Stand Number",
            "country_placeholder": "Please Select a Country",
            "security": "8d8a27d953"
        };
    </script>
    <script src="{{ theme_asset('js/ajax_scripts.js') }}" id="big5-ajax-scripts-js"></script>
    <script src="{{ theme_asset('js/smush-lazy-load.min.js') }}" id="smush-lazy-load-js"></script>
    <script src="{{ theme_asset('js/dmg_privacy_form.js') }}" id="DMG-Privacy-Form-Js-js"></script>
    <script src="{{ theme_asset('js/wp-polyfill-inert.min.js') }}" id="wp-polyfill-inert-js"></script>
    <script src="{{ theme_asset('js/regenerator-runtime.min.js') }}" id="regenerator-runtime-js"></script>
    <script src="{{ theme_asset('js/wp-polyfill.min.js') }}" id="wp-polyfill-js"></script>
    <script src="{{ theme_asset('js/dom-ready.min.js') }}" id="wp-dom-ready-js"></script>
    <script src="{{ theme_asset('js/hooks.min.js') }}" id="wp-hooks-js"></script>
    <script src="{{ theme_asset('js/i18n.min.js') }}" id="wp-i18n-js"></script>
    <script id="wp-i18n-js-after">
        wp.i18n.setLocaleData({ 'text direction\u0004ltr': ['ltr'] });
    </script>
    <script src="{{ theme_asset('js/a11y.min.js') }}" id="wp-a11y-js"></script>
    <script defer="defer" src="{{ theme_asset('js/jquery.json.min.js') }}" id="gform_json-js"></script>
    <script id="gform_gravityforms-js-extra">
        var gform_i18n = {
            "datepicker": {
                "days": {
                    "monday": "Mo",
                    "tuesday": "Tu",
                    "wednesday": "We",
                    "thursday": "Th",
                    "friday": "Fr",
                    "saturday": "Sa",
                    "sunday": "Su"
                },
                "months": {
                    "january": "January",
                    "february": "February",
                    "march": "March",
                    "april": "April",
                    "may": "May",
                    "june": "June",
                    "july": "July",
                    "august": "August",
                    "september": "September",
                    "october": "October",
                    "november": "November",
                    "december": "December"
                },
                "firstDay": 1,
                "iconText": "Select date"
            }
        };
        var gf_legacy_multi = [];
        var gform_gravityforms = {
            "strings": {
                "invalid_file_extension": "This type of file is not allowed. Must be one of the following:",
                "delete_file": "Delete this file",
                "in_progress": "in progress",
                "file_exceeds_limit": "File exceeds size limit",
                "illegal_extension": "This type of file is not allowed.",
                "max_reached": "Maximum number of files reached",
                "unknown_error": "There was a problem while saving the file on the server",
                "currently_uploading": "Please wait for the uploading to complete",
                "cancel": "Cancel",
                "cancel_upload": "Cancel this upload",
                "cancelled": "Cancelled"
            },
            "vars": {
                "images_url": "https://www.gulfsaudiexpo.com/wp-content/plugins/gravityforms/images"
            }
        };
    </script>
    <script defer="defer" src="{{ theme_asset('js/gravityforms.min.js') }}" id="gform_gravityforms-js"></script>
    <script defer="defer" src="{{ theme_asset('js/placeholders.jquery.min.js') }}" id="gform_placeholder-js"></script>
    <script defer="defer" src="{{ theme_asset('js/utils.min.js') }}" id="gform_gravityforms_utils-js"></script>
    <script defer="defer" src="{{ theme_asset('js/vendor-theme.min.js') }}" id="gform_gravityforms_theme_vendors-js"></script>
    <script id="gform_gravityforms_theme-js-extra">
        var gform_theme_config = { "common": { "form": { "honeypot": { "version_hash": "59ea1a340526b8b39a8d696b8a6fd386" } } }, "hmr_dev": "", "public_path": "https:\/\/www.gulfsaudiexpo.com\/wp-content\/plugins\/gravityforms\/assets\/js\/dist\/" };
    </script>
    <script defer="defer" src="{{ theme_asset('js/scripts-theme.min.js') }}" id="gform_gravityforms_theme-js"></script>   
</body>
</html>