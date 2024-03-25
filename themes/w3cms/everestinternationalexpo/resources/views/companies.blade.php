@extends('layout.default')

@section('content')
<?php //dd($companies); ?>
<!-- Content -->
    <!-- Banner  -->
    @include('elements.common-banner-inner-company')
    <!-- Banner End -->

    <div class="blog-archive-section">
        <div class="blog-archive-inner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 primary">
                        <div class="inner-blog-wrapper">
                            @forelse($companies as $company)
                                <article class="post">
                                    <figure class="feature-image">
                                        <img src="{{ theme_asset('/img/eventum-img42.jpg') }}" alt="">
                                    </figure>
                                    <div class="entry-content">
                                        <h5>
                                            <!-- <a href="single-blog.html">{{$company->title}}</a> -->
                                            <a href="{{ route('exhibitor.details', ['year' => $company->year, 'exhibitorSlug' =>  $company->slug]) }}">{{$company->title}}</a>
                                        </h5>
                                       <div class="row">
                                        <div class="col-sm-6">
                                            <span class="posted-on">
                                                <!-- <a href="blog-archive.html">Year: {{$company->year}}</a> -->
                                                <a href="{{ route('exhibitor.details', ['year' =>  $company->year, 'exhibitorSlug' =>  $company->slug]) }}">{{$company->year}}</a>

                                            </span>
                                        </div>
                                        <div class="col-sm-6 text-right">
                                        <span class="blog-link">
                                            <a href="{{ route('exhibitor.details', ['year' =>  $company->year, 'exhibitorSlug' =>  $company->slug]) }}">READ MORE..</a>
                                        </span>
                                        </div>
                                        </div>
                                    </div>
                                </article>
                                
                            @empty
                                <div class="col-md-12">{{ __('Records Not found.') }}</div>
                            @endforelse
                        </div>
                        <!-- <div class="post-navigation-wrap">
                            <nav>
                                <ul class="pagination">
                                    <li>
                                        <a href="blog-archive.html">
                                            « Previous
                                        </a>
                                    </li>
                                    <li class="active"><a href="blog-archive.html">1</a></li>
                                    <li><a href="blog-archive.html">2</a></li>
                                    <li><a href="blog-archive.html">3</a></li>
                                    <li>
                                        <a href="blog-archive.html">
                                            Next »
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div> -->
                        <div class="post-navigation-wrap">
                            <nav>
                                {!! $companies->links('elements.pagination') !!}
                            </nav>
                        </div>
                       
                    </div>
                    @include('elements.company-right-side')
                </div>
            </div>
        </div>
    </div>
    
<!-- End Content -->

@endsection