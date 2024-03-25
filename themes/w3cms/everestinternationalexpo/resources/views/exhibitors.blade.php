@extends('layout.default')

@section('content')

<!-- Content -->

    <!-- Blog Post -->
    
    <!-- Banner  -->
    @include('elements.common-banner-inner-exhibitors')
    <!-- Banner End -->

    <div class="product-outer-wrap product-wrap p-0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                    <h3 class="section-title"></h3>
                        <p>Everest International Expo is organizing exhibitions on both national and international levels. 
                            We are changing our strategies with changing business environment. 
                            We are moving towards smart exhibitions as well. 
                        </p>
                        <div class="product-item-wrapper">
                            <div class="row">
                            @forelse($exhibitorscatalogues as $blog)
                                @php
                                    if($blog->visibility != 'Pu'){
                                        $blog_visibility = $blog->visibility == 'Pr' ? __('Private: ') : __('Protected: ') ;
                                    } else {
                                        $blog_visibility = '';
                                    }
                                @endphp
                                <div class="col-sm-3">
                                    <div class="product-item text-center">
                                        <div class="product-content">
                                            <h5>{{ $blog->title }}</h5>
                                        </div>
                                        <figure class="product-image">
                                            <a href="">
                                                <img src="{{ $blog->feature_image_url }}" alt="">
                                            </a>
                                        </figure>
                                    </div>
                                </div>
                            @empty
                                <div class="col-md-12">{{ __('Records Not found.') }}</div>
                            @endforelse
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    

    <!-- Blog Post End -->

<!-- End Content -->

@endsection