<?php //dd($page); ?>
<!-- Banner  -->
<!-- Inner Banner html start-->
<section class="inner-banner-wrap">
    <div class="inner-baner-container" style="background-image: url({{ theme_asset('img/eventum-img1.jpg')}});">
        <div class="container">
            <div class="inner-banner-content">
                <h1 class="inner-title">{{$blog->title}}</h1>
                <div class="entry-meta">
                    <span class="byline">
                        <a href="">By Demoteam</a>
                    </span>
                    <span class="posted-on">
                        <a href="">{{$blog->publish_on}}</a>
                    </span>
                    <span class="comments-link">
                        <a href="#commentArea">No Comments</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Banner End -->