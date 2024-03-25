<style>
    .team-member-custom-shade{
        
    border-radius: 25px;
    border-bottom: 3px solid;
    background-color: #f8f8f8;
    padding: 25px;
    margin-bottom: 20px;

    }
</style>
<!-- home home-catalogues-section  -->
 <?php 
//dd($recentYearCatalogues[0]->feature_image_url); 
 $exhibitionCountOnHomePage = config('Site.exhibition_count_on_homepage');
 //dd($exhibitionCountOnHomePage);
 ?>
 <section class="speaker-event-section">
    <div class="container">
        <div class="section-head text-center col-lg-8 offset-lg-2">
            <h3 class="section-title">Exhibitors</h3>
            <p class="section-paragraph">
                {{config('Home.exhibition_expert')}}
            </p>
        </div>
        <div class="group-member">
            <div class="row justify-content-center">
                @foreach($recentYearCatalogues as $catalogue)
                    <?php //dd($catalogue); ?>
                    <div class="col-lg-3 col-md-4 col-sm-6 px-2 px-sm-3">
                        <div class="team-member">
                            <figure class="team-img figure-round-border">
                                <img src="{{ route('public-media.PublicMediaImagePreview', ['model' => 'catalogue', 'id' => $catalogue->id]) }}" alt="{{ $catalogue->title }}">
                            </figure>
                            <div class="team-member-info pt-2">
                                <div class="team-content p-0 m-0 pb-2 pt-2 team-member-custom-shade">
                                    <h5 class="author-name">
                                        <a href="{{ url('exhibitions/' . $catalogue->year).'/'.$catalogue->slug }}">{{ $catalogue->title }}</a>
                                    </h5>
                                    <span class="author-prof">{{ $catalogue->year }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
        <div class="event-speaker-btn">
            <a href="{{url('exhibitors')}}" class="button-round-primary">VIEW ALL EXHIBITORS</a>
        </div>
    </div>
</section>