
<div class="top_outer">
    <section class="portfolio_bar">
        <div class="container">
            <div class="portfolio_bar_row">
                <div class="portfolio_bar_popup">
                    <div class="portfolio-popup-inner">
                    </div>
                </div>
                <!-- Social links -->
                <div class="socil-icon-wrp">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/saudimachineryexpo" target="_blank" class="icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/saudi-machinery-expo/%7Chttps://www.linkedin.com/company/saudi-machinery-expo/"
                                target="_blank" class="icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@saudimachineryexpo" target="_blank" class="icon">
                                <i class="fab fa-youtube "></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.gulfsaudiexpo.com/eventical" class="no-utm icon">
                                <i class="fas fa-calendar-alt"></i>
                            </a>
                        </li>
                        <li>
                            <a class="icon search-icon" href="https://www.gulfsaudiexpo.com/#"><i
                                    class="fas fa-search"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="fixed-popup">
            <div class="port-folio-close">
                <a class="close-porfolio">
                    <img data-src="https://www.gulfsaudiexpo.com/wp-content/themes/big5-global-2023/assets/images/port-flio-close.png"
                        width="20" height="20" alt="close" src="assets/port-flio-close.png" class=" lazyloaded">
                </a>
            </div>
            
        </div>
    </section>


    <div class="main_header">
        <header>
            <div class="container">
                <div class="header_wrap"> <!-- Logo || events || co-located -->
                    <div class="header_logo_wrap">
                        <div class="header_main_logo">
                            <a href="{{ url('/') }}">
                                <img src="{{ theme_asset('images/logo-green.png') }}" width="197"
                                    height="120" alt="Site logo"
                                    class="sticky-logo-hide logo-desktop no-lazy-load" fetchpriority="high">
                                <img src="{{ theme_asset('images/logo-green.png') }}" width="197"
                                    height="120" alt="Site logo"
                                    class="sticky-logo-hide logo-mobile no-lazy-load" fetchpriority="high">
                                <img src="{{ theme_asset('images/logo-green.png') }}" width="115"
                                    height="70" alt="Site logo" class="sticky-logo logo-desktop no-lazy-load"
                                    fetchpriority="high">
                                <img src="{{ theme_asset('images/logo-green.png') }}" width="115"
                                    height="70" alt="Site logo" class="sticky-logo logo-mobile no-lazy-load"
                                    fetchpriority="hih"> </a>
                        </div>
                        <div class="event-time-here ">
                            <div class="event-time-inner">
                                <h6>21-23 October, 2024</h6>
                                <div class="with-tool-p">
                                    <p>4:00 pm - 10:00 pm Daily</p>
                                </div>
                                <p>The Arena Riyadh</p>
                            </div>
                            <div class="mobile-search">
                                <ul>
                                    <li> <a class="search-icon"> <i class="fas fa-search"></i> </a> </li>
                                    <li> <a class="calender-icon"> <i class="fas fa-calendar-alt"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> <!-- Sticky header -->
                    <div class="sticky-social-icon">
                        <div class="sticky-social-wrap">
                            <div class="sticky-header-btn"> 
                                <a href="https://forms.gulfsaudiexpo.com/Default.aspx?id=3085"
                                    target="_blank" class="primary-btn cta-special-white"> DOWNLOAD SALES
                                    BROCHURE </a> <a
                                    href="https://forms.gulfsaudiexpo.com/Default.aspx?id=3084"
                                    target="_blank" class="primary-btn cta-white-outline"> BOOK YOUR STAND </a>
                            </div>
                            <div class="socil-icon-wrp">
                                <ul> 
                                    <li> <a href="https://www.facebook.com/saudimachineryexpo" target="_blank" class="icon" aria-label="facebook"> <i class="fab fa-facebook-f"></i> </a> </li> 
                                    <li> <a href="https://www.linkedin.com/company/saudi-machinery-expo/%7Chttps://www.linkedin.com/company/saudi-machinery-expo/" target="_blank" class="icon" aria-label="Linkedin"> <i class="fab fa-linkedin-in"></i> </a> </li> 
                                    <li> <a href="https://www.youtube.com/@saudimachineryexpo" target="_blank" class="icon" aria-label="Youtube"> <i class="fab fa-youtube"></i> </a> </li> 
                                    <li> <a href="https://www.gulfsaudiexpo.com/eventical" class="no-utm icon" aria-label="ical"> <i class="fas fa-calendar-alt"></i> </a> </li> 
                                    <li> <a class="icon search-icon" href="https://www.gulfsaudiexpo.com/#" aria-label="search"><i class="fas fa-search"></i></a> </li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> <!-- header_wrap ends --> <!-- hamburger -->
                <div class="mob-btn menu-icon">
                    <div class="hamburger-ac"></div>
                </div>
                <div class="overlay-menu"></div>
            </div>
        </header>
       
        <!-- Navbar nav -->
                {{ DzHelper::nav_menu(
                    array(
                        'theme_location'  => 'primary',
                        'menu_class'      => '',
                    )
                ); }}
    </div>
</div>
