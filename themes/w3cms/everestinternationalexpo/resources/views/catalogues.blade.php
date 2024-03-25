@extends('layout.default')

@section('content')

<!-- Content -->
    <!-- Banner  -->
    @include('elements.common-banner-inner-exhibition')
    <!-- Banner End -->

    <section class="gallery-section">
        <div class="container">
            <div class="gallery-inner">
                <div class="gallery-container">
                    @foreach($catalogues as $catalogue)
                        <div class="single-gallery">
                            <figure class="custom-gallery-img">
                                <a href="{{ theme_asset('/img//eventum-img40.jpg') }}" data-fancybox="gallery">
                                    <img src="{{ theme_asset('/img//eventum-img040.jpg') }}" alt="">
                                    <div class="custom-facility-wrapper">
                                        <div class="custom-permanent-text">
                                            <h5 class="custom-facility-title pt-3">
                                                <a href="{{ url('exhibitions/' . $catalogue->year).'/'.$catalogue->slug }}">{{$catalogue->title}}</a>
                                            </h5>
                                        </div>
                                    </div>
                                </a>
                            </figure>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
    
<!-- End Content -->

@endsection