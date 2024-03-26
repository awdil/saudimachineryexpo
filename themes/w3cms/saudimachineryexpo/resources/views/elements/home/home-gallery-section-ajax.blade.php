<!-- home gallery section html start -->
<?php
$data=DzHelper::getConfigDataByName('Home.eventGallery');
$unserializeData=unserialize($data->params);
$galleryCount = ($unserializeData['galleryCount'])?$unserializeData['galleryCount']:8;
?>
<div class="fl-row fl-row-full-width fl-row-bg-none fl-node-2o67vz3xn94e fl-row-default-height fl-row-align-center" data-node="2o67vz3xn94e">
    <div class="fl-row-content-wrap">
        <div class="fl-row-content fl-row-full-width fl-node-content">

            <div class="fl-col-group fl-node-jrc16nm7i50p" data-node="jrc16nm7i50p">
                <div class="fl-col fl-node-lqoumide145s" data-node="lqoumide145s">
                    <div class="fl-col-content fl-node-content">
                        <div class="fl-module fl-module-two-columns-full-width fl-node-51y84d7hkfoj" data-node="51y84d7hkfoj">
                            <div class="fl-module-content fl-node-content">
                                <section class="full_width_two_col_wrap full-width-media-spacing  no-space bg-bg_color_1 ">
                                    <div class="container">
                                        <div class="full_width_two_col_row">
                                            <div class="full_width_two_col_content">
                                                <div class="content ">
                                                    <h2>
                                                        <span class="pre-head inline"></span>
                                                    </h2>
                                                    <h2><strong>Connect with our team and know more about the event.</strong></h2>
                                                    <div class="two_col_btn">
                                                        <div class="two_col_btn_link">
                                                            <a href="https://www.gulfsaudiexpo.com/team/" target="_blank" class="primary-btn cta-primary-outline">
                                                                Meet our Team </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="full_width_two_col_media">
                                                <div class="two_col_media_inner" data-aos="fade-left">
                                                    <img decoding="async" data-src="" alt="" width="563" height="348" src="{{ theme_asset('img/contact-team.jpg') }}" class=" ls-is-cached lazyloaded">
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
