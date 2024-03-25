@extends('layout.default')

@section('content')
<!-- Content -->

        <!-- Banner  -->
        <section class="inner-banner-wrap">
            <div class="inner-baner-container" style="background-image: url({{ theme_asset('img/eventum-img1.jpg')}});">
                <div class="container">
                    <div class="inner-banner-content">
                        <h1 class="inner-title">{{ __('Contact Us') }}</h1>
                        <div class="entry-meta">
                            <span class="byline">
                                <a href="{{ url('/') }}">{{ __('Home') }}</a>
                            </span>
                            <span class="posted-on">
                              
                            </span>
                            <span class="comments-link">
                                <a href="#commentArea">{{ __('Contact Us') }}</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Banner End -->

        <!-- Contact form sectio starts from here -->
        <section class="contact-page-section">
                <div class="container">
                    <div class="row align-items-lg-end align-items-center">
                        <div class="col-lg-12">
                            <div class="section-head text-center">
                                <span class="section-sub-title">GET IN TOUCH</span>
                                <h3 class="section-title">
                                    CONTACT US FOR FURTHER INFORMATION!
                                </h3>
                            </div>
                        </div>
                        <!-- <div class="col-lg-6">
                            <div class="section-head">
                                <p class="section-paragraph">
                                    Magnam corporis rem commodi dolore possimus varius justo litora ipsum suspendisse dignissimos. Odit, dolor, minima. Diam facilisis dignissimos metus, id delectus fuga doloribus qui, explicabo.
                                </p>
                            </div>
                        </div> -->
                    </div>
                    <div class="contact-deatil-list">
                        <div class="connection-detail-wrapper">
                            <figure class="contact-icon">
                                <i aria-hidden="true" class="icon icon-home"></i>
                            </figure>
                            <div class="contact-info-list">
                                <h5 class="contact-list-title">Address</h5>
                                <ul>
                                    <li>
                                        {{ config('Site.location') }}
                                    </li>
                                    <!-- <li>
                                        Lahore
                                    </li> -->
                                </ul>
                            </div>
                        </div>
                        <div class="connection-detail-wrapper">
                            <figure class="contact-icon">
                                <i aria-hidden="true" class="icon icon-phone"></i>
                            </figure>
                            <div class="contact-info-list">
                                <h5 class="contact-list-title">Phone</h5>
                                <ul>
                                    <li>
                                        <a href="tel:{{ config('Site.contact') }}">Phone No: {{ config('Site.contact') }} </a>
                                    <br>
                                    <br>
                                    <br>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div class="connection-detail-wrapper item-3">
                            <figure class="contact-icon">
                                <i aria-hidden="true" class="icon icon-email"></i>
                            </figure>
                            <div class="contact-info-list">
                                <h5 class="contact-list-title">Email</h5>
                                <ul>
                                    <li>
                                    {{ config('Site.email') }}
                                    <br>
                                    <br>
                                    <br>
                                    </li>
                                    <!-- <li>
                                        Starts 09:00 AM to 06:00 PM
                                    </li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="contact-form-inner">
                        <div class="col-md-10 offset-md-1">
                            <div class="contact-from-wrap">
                                <form class="contact-from row">
                                    <div class="col-sm-6">
                                        <input type="text" name="name" placeholder="Your Name..">
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="email" name="email" placeholder="Your Email..">
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="number" name="number" placeholder="Your Number..">
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" name="subject" placeholder="Your Subject..">
                                    </div>
                                    <div class="col-sm-12">
                                        <textarea rows="8" placeholder="Enter Message.."></textarea>
                                    </div>
                                    <div class="col-sm-12">
                                        <input type="submit" name="submit" class="submit-btn" value="SUBMIT MESSAGE">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> -->
                </div>
            </section>
        <section class="content-inner contact-form-wraper style-1">
            <div class="container">
                <div class="row align-items-center">
                    
                    <div class="col-xl-5 col-lg-5 m-b30">
                        <div class="info-box">
                            <div class="info">
                                <h2>{{ __('Contact Information') }}</h2>
                                <p class="font-18">{{ __('Fill up the form and our team will get back to you within 24 hours.') }}</p>
                            </div>
                            
                            <div class="widget widget_about">
                                <div class="widget widget_getintuch">
                                    <ul>
                                        <li>
                                            <i class="fa fa-phone"></i>
                                            <span>{{ config('Site.contact') }}</span> 
                                        </li>
                                        <li>
                                            <i class="fa fa-envelope"></i> 
                                            <span>{{ config('Site.email') }}</span>
                                        </li>
                                        <li>
                                            <i class="fas fa-map-marker-alt"></i>
                                            <span>{{ config('Site.location') }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="social-box dz-social-icon style-3">
                                <h6>{{ __('Our Socials') }}</h6>
                                <ul class="social-icon" style="list-style: none;">
                                    <li><a class="social-btn" target="_blank" href="{{ config('Social.facebook') }}"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a class="social-btn" target="_blank" href="{{ config('Social.twitter') }}"><i class="fab fa-twitter"></i></a></li>
                                    <li><a class="social-btn" target="_blank" href="{{ config('Social.linkedin') }}"><i class="fab fa-linkedin"></i></a></li>
                                    <li><a class="social-btn" target="_blank" href="{{ config('Social.instagram') }}"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        
                    <div class="col-xl-7 col-lg-7">
                        <div class="contact-box">
                            <div class="card">
                                <div class="card-body">
        							<a href="https://forms.gle/rW47SVZ9bVgxVBEb9" class="button-round-primary d-block text-center">REGISTER</a>
                                </div>
                                <!-- <div class="card-body">
                                    <div class="mb-4">
                                        <h2 class="mb-0">{{ __('Get In touch') }}</h2>
                                        <p class="mb-0 font-18 text-primary">{{ __('We are here for you. How we can help?') }}</p>
                                    </div>
                                    <form method="POST" action="{{ route('front.contact') }}">
                                        @csrf
                                        <div class="row">
                                            @if($errors->any())
                                                <div class="col-12 m-b30">
                                                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                        {{ implode(', ', $errors->all(':message')) }}
                                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                    </div>
                                                </div>
                                            @endif
                                            @if( Session::get('success') )
                                                <div class="col-12 m-b30">
                                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                        {{ Session::get('success') }}
                                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                    </div>
                                                </div>
                                            @endif
                                            <div class="col-xl-6 mb-3 mb-md-4">
                                                <input name="first_name" required type="text" class="form-control" placeholder="{{ __('First Name') }}">
                                            </div>
                                            <div class="col-xl-6 mb-3 mb-md-4">
                                                <input name="last_name" type="text" class="form-control" placeholder="{{ __('Last Name') }}">
                                            </div>
                                            <div class="col-xl-6 mb-3 mb-md-4">
                                                <input name="email" required type="text" class="form-control" placeholder="{{ __('Email Address') }}">
                                            </div>
                                            <div class="col-xl-6 mb-3 mb-md-4">
                                                <input name="phone_number" required type="text" class="form-control" placeholder="{{ __('Phone No.') }}">
                                            </div>
                                            <div class="col-xl-12 mb-3 mb-md-4">
                                                <textarea name="message" required class="form-control" placeholder="{{ __('Message') }}"></textarea>
                                            </div>
                                            <div class="col-xl-12">
                                                <input type="submit" name="submit" class="submit-btn" value="SUBMIT MESSAGE">
                                            </div>
                                        </div>
                                    </form>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact form section ends from here -->
        
<!-- Content end -->
@endsection