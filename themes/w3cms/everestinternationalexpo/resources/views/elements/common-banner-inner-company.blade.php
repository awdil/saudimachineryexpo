<?php //dd($catalogue); ?>
<!-- Banner  -->
<!-- Inner Banner html start-->
<section class="inner-banner-wrap">
    <div class="inner-baner-container" style="background-image: url({{ theme_asset('img/eventum-img1.jpg')}});">
        <div class="container">
            <div class="inner-banner-content">
                @if(isset($catalogue))
                <h1 class="inner-title">{{$catalogue->title}} of Year {{$catalogue->year}}</h1>
                @elseif(isset($company))
                <h1 class="inner-title">{{$company->title}}</h1>
                @else
                <h1 class="inner-title"></h1>
                @endif
            </div>
        </div>
    </div>
</section>
<!-- Banner End -->