<!-- home gallery section html start -->
<?php
$data=DzHelper::getConfigDataByName('Home.eventGallery');
$unserializeData=unserialize($data->params);
$galleryCount = ($unserializeData['galleryCount'])?$unserializeData['galleryCount']:8;
?>
<section class="home-gallery">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="section-head">
                    <span class="section-sub-title ">{{ config('Home.eventGallery') }}</span>
                    <h3 class="section-title">
                    {{$unserializeData['sectionTitle']}}
                    </h3>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="section-head">
                    <p class="section-paragraph">
                    {{$unserializeData['sectionParagraph']}}
                    </p>
                </div>
            </div>
        </div>
        <div id="container" class="gallery-data"><div class="loadedcontent"></div>
            
        </div>
    </div>
</section>
