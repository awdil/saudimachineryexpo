<header class="site-header site-header-transparent">
            <!-- header html start -->
	<div class="top-header">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-7">
					<div class="header-contact-info">
						<ul>
							<li>
								<a href="tel:{{config('Site.contact')}}">
									<span class="icon">
										<i aria-hidden="true" class="icon icon-phone1"></i>
									</span>
									<div class="details-content">
										<span class="content-title">PHONE NUMBER :</span>
										<h6>{{config('Site.contact')}}</h6>
									</div>
								</a>
							</li>
							<li>
								<a href="">
									<span class="icon">
										<i aria-hidden="true" class="icon icon-envelope3"></i>
									</span>
									<div class="details-content">
										<span class="content-title">EMAIL ADDRESS :</span>
										<h6><span class="__cf_email__" data-cfemail="{{config('Site.email')}}">{{config('Site.email')}}</span></h6>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-5 d-flex justify-content-md-end justify-content-center">
					<div class="header-social social-links">
						<ul>
							<li>
								<a href="https://www.facebook.com/" target="_blank">
									<i class="fab fa-facebook" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="https://www.twitter.com/" target="_blank">
									<i class="fab fa-twitter" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/" target="_blank">
									<i class="fab fa-youtube" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/" target="_blank">
									<i class="fab fa-instagram" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/" target="_blank">
									<i class="fab fa-linkedin" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
					<div class="header-search-icon">
						<button class="search-icon">
							<i class="fas fa-search"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bottom-header" id="masthead">
		<div class="container">
			<div class="hb-group d-flex align-items-center justify-content-between">
				<div class="site-identity col-lg-3">
					<p class="site-title-new mb-0 mt-0">
						<a href="{{ url('/') }}" class="logo-light-tree"><img src="{{ theme_asset('images/logo-green.png') }}" alt="{{ __('light theme site logo') }}"></a>
					</p>
				</div>
				
				<div class="main-navigation col-lg-9 justify-content-between d-flex align-items-center">
					<nav id="navigation" class="navigation d-none d-lg-inline-block">
						<!-- Navbar nav -->
						{{ DzHelper::nav_menu(
							array(
								'theme_location'  => 'primary',
								'menu_class'      => '',
							)
						); }}
					</nav>
					<div class="header-btn d-inline-block">
						<a href="https://forms.gle/rW47SVZ9bVgxVBEb9" class="button-round-primary">REGISTER</a>
					</div>
				</div>
			</div>
		</div>
		<div class="mobile-menu-container"></div>
	</div>
</header>
