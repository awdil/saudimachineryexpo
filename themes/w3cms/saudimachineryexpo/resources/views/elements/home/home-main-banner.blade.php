<!-- home banner section html start  asset('storage/configuration-images/'.$image)  -->
<?php
//dd(DzHelper::getConfigDataByName('Site.banner_background')->id);
//$result = DzHelper::getConfigDataByName('Site.banner_background');
$url= route('configuration.publicImagePreview', ['id' => DzHelper::getConfigDataByName('Site.banner_background')->id]);
?>
<section class="banner_wrapper " style="min-height: 55.031px; padding-top: 126.969px;">
            <div class="banner_container">
                <div class="container">
                    <div class="event-time-here">
                        <div class="event-time-inner">
                            <h6>2 - 4 SEPTEMBER 2024</h6>
                            <div class="with-tool-p">
                                <p>4:00 pm - 10:00 pm Daily</p>
                            </div>
                            <p>Riyadh International Convention &amp; Exhibition Center, Riyadh </p>
                        </div>
                        <div class="mobile-search">
                            <ul>
                                <li>
                                    <a class="search-icon">
                                        <i class="fas fa-search"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gulfsaudiexpo.com/eventical" class="calender-icon" aria-label="ical">
                                        <i class="fas fa-calendar-alt"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="banner_content from-bottom">
                        <h1>Together, Growing Industries Build a real and effective business cooperation platform</h1>
                        <p>From 21st to 23rd October 2024, Endless business opportunities</p>
                        <div class="banner_btn">
                            <div class="banner_btn_primary">
                                <a href="https://forms.gulfsaudiexpo.com/Default.aspx?id=3085" target="_blank" class="primary-btn cta-primary-with-white">
                                    DOWNLOAD SALES BROCHURE </a>
                            </div>
                            <div class="banner_btn_primary">
                                <a href="https://forms.gulfsaudiexpo.com/Default.aspx?id=3084" target="_blank" class="primary-btn cta-white-outline">
                                    BOOK YOUR STAND </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner_image">
                <div class="banner_image_slide slick-initialized slick-slider">
                    <div class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 1520px;">
                            <div class="banner_image_slide_item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 1520px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;" tabindex="0">
                                <img class="no-lazy-load" src="{{ theme_asset('img/smexpo-banner-40.jpg') }}" alt="banner-image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner_overlay ">
                <img data-src="{{ theme_asset('img/overlay-blank.png') }}" alt="overlay-image" width="550" height="550" src="{{ theme_asset('img/overlay-blank.png') }}" class=" lazyloaded">
            </div>
        </section>