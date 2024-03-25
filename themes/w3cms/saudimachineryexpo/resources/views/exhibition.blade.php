@extends('layout.default')

@section('content')

<!-- Content -->

    <!-- Blog Post -->
    
    <!-- Banner  -->
    @include('elements.common-banner-inner-exhibition')
    <!-- Banner End -->

    <div class="blog-archive-section">
        <div class="blog-archive-inner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 primary">
                        <div class="inner-blog-wrapper">
                            @forelse($exhibitions as $exhibition)
                                <?php //dd($exhibition); ?>
                                <article class="post">
                                    <figure class="feature-image">
                                    <img src="{{ theme_asset('/img/eventum-img42.jpg')}}" alt="">
                                    <span class="yearexhibition">{{ $exhibition->year }}</span>
                                    </figure>
                                    <div class="entry-content">
                                         @php
                                            if($exhibition->visibility != 'Pu'){
                                                $exhibition_visibility = $exhibition->visibility == 'Pr' ? __('Private: ') : __('Protected: ') ;
                                            }else {
                                                $exhibition_visibility = '';
                                            }
                                        @endphp
                                        <h5 class="text-center">
                                           <a href="{{ url('exhibitions/' . $exhibition->year) }}">{{ $exhibition->title }}</a>
                                        </h5>
                                        
                                        <!-- <p class="blog-info">
                                            {{ Str::limit($exhibition->excerpt, 60, ' ...') }}
                                        </p> -->
                                        <!-- <span class="blog-link">
                                            <a href=""></a>
                                        </span> -->
                                    </div>
                                </article>
                            @empty
                                <div class="col-md-12">{{ __('Records Not found.') }}</div>
                            @endforelse
                        </div>
                        <div class="post-navigation-wrap">
                            <nav>
                                {!! $exhibitions->links('elements.pagination') !!}
                            </nav>
                        </div>
                    </div>
                    <!-- <div class="col-lg-4 secondary">
                        <div class="sidebar">
                            @include('widgets.sidebar')
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>

    <!-- Blog Post End -->

<!-- End Content -->

@endsection