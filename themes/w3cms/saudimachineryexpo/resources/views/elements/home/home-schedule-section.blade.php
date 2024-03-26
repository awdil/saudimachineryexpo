<?php 
$eventstartdate = config('Home.eventStart');
$eventstartenddate = config('Home.eventEnd'); 

// Check if config values are available
if (!$eventstartdate || !$eventstartenddate) {
    // Use dummy dates as placeholders
    $eventstartdate = '2024-02-23';
    $eventstartenddate = '2024-02-25';
}

// Convert string dates to DateTime objects
$startDate = new DateTime($eventstartdate);
$endDate = new DateTime($eventstartenddate);

// Adjust the end date to include the end of the day
$endDate->modify('+1 day');

// Generate date range between start and end dates
$dateRange = new DatePeriod($startDate, new DateInterval('P1D'), $endDate);

?>
<div class="fl-row fl-row-full-width fl-row-bg-none fl-node-4fn8bajdl63k fl-row-default-height fl-row-align-center" data-node="4fn8bajdl63k">
    <div class="fl-row-content-wrap">
        <div class="fl-row-content fl-row-full-width fl-node-content">

            <div class="fl-col-group fl-node-wr95ta6kdx1s" data-node="wr95ta6kdx1s">
                <div class="fl-col fl-node-a25ou8gk7ym1" data-node="a25ou8gk7ym1">
                    <div class="fl-col-content fl-node-content">
                        <div class="fl-module fl-module-sector-layout-1 fl-node-ge4m3rvxd18u" data-node="ge4m3rvxd18u">
                            <div class="fl-module-content fl-node-content">
                                <section class="product-buyers none bg-brand_color_2">
                                    <div class="container">
                                        <div class="divide-head no-head-img">
                                            <div class="divide-head-left from-bottom" data-scroll="in">
                                                <h2><span style="text-align: center !important; font-weight:900 !important;">Unlocking business connections, in various industries</span></h2>
                                            </div>
                                            <div class="head-text">
                                            </div>
                                        </div>
                                        <div class="product-buyers-row " style="display: flex; justify-content: center; flex-wrap: wrap;">
                                            <div class="product-buyers-col-box-block ">
                                                <div class="product-buyers-col-box">
                                                    <div class="overlay lazyloaded" style="background-image: url({{ theme_asset('img/electric-power-&-new-energy.jpg') }});" data-bg-image="url({{ theme_asset('img/electric-power-&-new-energy.jpg') }})">
                                                    </div>
                                                    <a>
                                                        <h3>Electric power & New energy</h3>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="product-buyers-col-box-block ">
                                                <div class="product-buyers-col-box">
                                                    <div class="overlay lazy" style="background-image: url({{ theme_asset('img/auto-&-auto-parts.jpg') }});" data-bg="url({{ theme_asset('img/auto-&-auto-parts.jpg') }})" data-was-processed="true"></div>
                                                    <a>
                                                        <h3>Auto & Auto parts</h3>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="product-buyers-col-box-block ">
                                                <div class="product-buyers-col-box">
                                                    <div class="overlay lazy" style="background-image: url({{ theme_asset('img/smart-manufacturing.jpg') }});" data-bg="url({{ theme_asset('img/smart-manufacturing.jpg') }})" data-was-processed="true"></div>
                                                    <a>
                                                        <h3>Smart Manufacturing</h3>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-buyers-row" style="display: flex; justify-content: center; flex-wrap: wrap;">
                                            <div class="product-buyers-col-box-block ">
                                                <div class="product-buyers-col-box">
                                                    <div class="overlay lazy" style="background-image: url({{ theme_asset('img/machine-tools-&-accessories.jpg') }});" data-bg="url({{ theme_asset('img/machine-tools-&-accessories.jpg') }})" data-was-processed="true"></div>
                                                    <a>
                                                        <h3>Machine tools & accessories</h3>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="product-buyers-col-box-block ">
                                                <div class="product-buyers-col-box">
                                                    <div class="overlay lazy" style="background-image: url({{ theme_asset('img/building-&-hardware.jpg') }});" data-bg="url({{ theme_asset('img/building-&-hardware.jpg') }})" data-was-processed="true"></div>
                                                    <a>
                                                        <h3>Building & Hardware</h3>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="product-buyers-col-box-block ">
                                                <div class="product-buyers-col-box">
                                                    <div class="overlay lazy" style="background-image: url({{ theme_asset('img/mechanical-Equipment-and-parts.jpg') }});" data-bg="{{ theme_asset('img/mechanical-Equipment-and-parts.jpg') }}" data-was-processed="true"></div>
                                                    <a>
                                                        <h3>Mechanical Equipment & Parts</h3>
                                                    </a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>