
<!-- home time counter section -->
<?php 
	$datetime = date('Y-m-d H:i:s', strtotime(config('Home.eventStart')));
?>
<div class="starts_wrapper bg-gradient">
	<div class="starts_row">
		<div class="container">
			<div class="starts_counter">
				<div class="starts_counter_slider arrow-common slick-initialized slick-slider">
					<div class="slick-list draggable">
						<div class="slick-track" style="opacity: 1; width: 990px; transform: translate3d(0px, 0px, 0px);">
							<div class="starts_block slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 198px;" tabindex="0">
								<div class="starts_inner">
									<div class="starts_counting-wrapper">
										<div class="starts_counting">
											3 </div>
									</div>
									<p>Exhibition</p>
								</div>
							</div>
							<div class="starts_block slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 198px;" tabindex="0">
								<div class="starts_inner">
									<div class="starts_counting-wrapper">
										<div class="starts_counting">
											300 </div>
									</div>
									<p>Exhibitors</p>
								</div>
							</div>
							<div class="starts_block slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 198px;" tabindex="0">
								<div class="starts_inner">
									<div class="starts_counting-wrapper">
										<div class="starts_counting">
											1200+ </div>
									</div>
									<p>Visitors</p>
								</div>
							</div>
							
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</div>