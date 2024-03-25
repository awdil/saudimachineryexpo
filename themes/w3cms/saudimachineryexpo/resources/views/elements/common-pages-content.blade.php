@if($page->slug=='about-everest')

<section class="about-section m-0">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="section-head">
                    <span class="section-sub-title ">INTRODUCTION</span>
                    <h3 class="section-title">
                        KNOW MORE ABOUT EVEREST
                    </h3>
                </div>
            </div>
            <div class="col-lg-6">
                <section class="home-aboutus">
                    <div class="section-head">
                        <div class="about-detail-inner">
                            <h4 class="section-title">
                            FAST FACT
                            </h4>
                            <?php
                            $data = [
                                [
                                    'Multiple International Offices in China, Pakistan, UAE, Kenya, South Africa.',
                                ],
                                [
                                    'Pioneer in online plus offline international events.',
                                ],
                                [
                                    'More than 20 Online and Offline Exhibitions on different sectors.',
                                ],  
                                [
                                    'Over 50 media partners, locally and internationally to cover our events.',
                                ],
                                [
                                    'Receive over than 50,000 visitors and potential clients since first opening.',
                                ],
                                [
                                    'Over 20 different industrial sectors cover in past events.',
                                ],
                                
                            ];
                            //dd($data);
                            ?>
                            <div class="about-list">
                                <ul style=" list-style: none; " class="p-0 m-0">
                                    @foreach($data as $key=>$check)
                                    <li>
                                        <i aria-hidden="true" class="icon icon-checkmark-circle"></i>
                                        <span>{{$check[0]}}</span>
                                    </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="about-img">
            <figure class="about-left-img">
                <div class="video-button">
                    <a id="video-container" data-video-id="IUN664s7N-c">
                        <i class="fas fa-play"></i>
                    </a>
                </div>
            </figure>
            <figure class="about-right-img">
                <img src="{{ theme_asset('img/about-everest-img.jpg') }}" alt="About Everest International Expo">
            </figure>
        </div>
       
        <section class="home-schedule-section p-3">
            <div class="container">
                <div class="row align-items-start">
                    <div class="col-lg-12">
                        <div class="section-head">
                            <h3 class="section-title">Who We Are</h3>
                            {!! config('About.whoWeAreSection') !!}
                        </div>
                            
                    </div>
                    <div class="col-lg-12">
                        <div class="iconbox-container-bg m-0">
                            <div class="iconbox-item-bg p-3">
                                <div class="iconbox-content-bg">
                                    <i aria-hidden="true" class="icon icon-idea_generate"></i>
                                    <h5>Mission</h5>
                                    <p>Establish quality international platform for economic and trading communication</p>
                                </div>
                            </div>
                            <div class="iconbox-item-bg">
                                <div class="iconbox-content-bg p-3">
                                    <i aria-hidden="true" class="icon icon-users"></i>
                                    <h5>Value</h5>
                                    <p>Unity, Happy, Working-Hard, Improving & Creative.</p>
                                </div>
                            </div>
                            <div class="iconbox-item-bg item-3">
                                <div class="iconbox-content-bg p-3">
                                    <i aria-hidden="true" class="icon icon-rocket"></i>
                                    <h5>Vision</h5>
                                    <p>Be an enterprise which can be respected by our clients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="product-outer-wrap product-wrap pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                    <h3 class="section-title">What We Do</h3>
                        <p>Everest International Expo is organizing exhibitions on both national and international levels. 
                            We are changing our strategies with changing business environment. 
                            We are moving towards smart exhibitions as well. 
                        </p>
                        <h5 class="sub-title">Following services are provided by Everest International Expo:</h5>
                        <div class="product-item-wrapper">
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="product-item text-center">
                                        <figure class="product-image">
                                            <a href="">
                                                <img src="{{ theme_asset('img/everest-international-3xhibitions.jpg') }}" alt="">
                                            </a>
                                        </figure>
                                        <div class="product-content">
                                            <h5>International Exhibitions</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="product-item text-center">
                                        <figure class="product-image">
                                            <a href="">
                                                <img src="{{ theme_asset('img/everest-match-making.jpg') }}" alt="">
                                            </a>
                                        </figure>
                                        <div class="product-content">
                                            <h5>Match Making</h5>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="product-item text-center">
                                        <figure class="product-image">
                                            <a href="">
                                                <img src="{{ theme_asset('img/everest-display-center-and-warehouse.jpg') }}" alt="">
                                            </a>
                                        </figure>
                                        <div class="product-content">
                                            <h5> Display Center and Warehouse</h5>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="product-item text-center">
                                        <figure class="product-image">
                                            <a href="">
                                                <img src="{{ theme_asset('img/everest-business-to-business-meeting.jpg') }}" alt="">
                                            </a>
                                        </figure>
                                        <div class="product-content">
                                            <h5>Business-to-Business Meeting</h5>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="product-item text-center">
                                        <figure class="product-image">
                                            <a href="">
                                                <img src="{{ theme_asset('img/everest-market-research.jpg') }}" alt="">
                                            </a>
                                        </figure>
                                        <div class="product-content">
                                            <h5>Market Research</h5>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="product-item text-center">
                                        <figure class="product-image">
                                            <a href="">
                                                <img src="{{ theme_asset('img/everest-factory-visiting-in-china.jpg') }}" alt="">
                                            </a>
                                            
                                        </figure>
                                        <div class="product-content">
                                            <h5>Factory Visiting in China</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 class="section-title">Why Everest?</h3>
                        <p>The largest gathering of engineers and investors at the Everest International Expo Platform!</p>
                        <!-- <h3 class="section-title">Official Partner</h3>
                        <p>The largest gathering of engineers and investors at the Everest International Expo Platform!</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="home-partner">
    <div class="overlay"></div>
    <div class="container">
        <div class="section-head-white text-center col-lg-8 offset-lg-2">
            <h3 class="section-title">Official Partner</h3>
           
        </div>
        <div class="inner-partner-wrapper">
            <figure class="partner-logo">
                <img src="{{ theme_asset('images/bussines-recorder.jpg') }}" alt="">
            </figure>
            <figure class="partner-logo">
                <img src="{{ theme_asset('images/city-42.jpg') }}" alt="">
            </figure>
            <figure class="partner-logo">
                <img src="{{ theme_asset('images/daily-times.jpg') }}" alt="">
            </figure>
            <figure class="partner-logo">
                <img src="{{ theme_asset('images/dawn-media.jpg') }}" alt="">
            </figure>
            <figure class="partner-logo grid-middle">
                <img src="{{ theme_asset('images/expo-news.jpg') }}" alt="">
            </figure>
            <figure class="partner-logo">
                <img src="{{ theme_asset('images/jahaan-pakistan.jpg') }}" alt="">
            </figure>
            <figure class="partner-logo">
                <img src="{{ theme_asset('images/jhang-media.jpg') }}" alt="">
            </figure>
            <figure class="partner-logo">
                <img src="{{ theme_asset('images/jurraat-news.jpg') }}" alt="">
            </figure>
            <figure class="partner-logo">
                <img src="{{ theme_asset('images/rooznama-pakistan.jpg') }}" alt="">
            </figure>
            <figure class="partner-logo grid-middle">
                <img src="{{ theme_asset('images/the-nation.jpg') }}" alt="">
            </figure>
        </div>
        <div class="sponser-btn">
           
        </div>
    </div>
</section>
<section class="home-sponser">
    <div class="overlay"></div>
    <div class="container">
        <div class="section-head text-center col-lg-8 offset-lg-2">
            <h3 class="section-title">Official Enterprises</h3>
           
        </div>
        <?php 
        $file_names = [
            "A10 ZHENGZHOU DUOYUAN VEHICLE EQUIPMENT CO., LTD..jpg",
            "A5 ZHENGZHOU SAINUO BUILDING MATERIALS CO.,LTD..png",
            "A6 HENAN LUNYEE INDUSTRIES DEVELOPMENT CO.,LIMITED.jpg",
            "A8 A9 SHANDONG HENGBANG GLASS CO., LTD..jpg",
            "B1 NYI BLUE HORSE INTERNATIONAL TRADE CO., LTD..png",
            "B11 SHANDONG QUANQIU AUTO PARTS CO., LTD.jpg",
            "B14 LINYI LANOU PLANT PROTECTION MACHINERY CO.,LTD.jpg",
            "B4 SHANDONG RONGHONG BIOTECHNOLOGY CO., LTD..png",
            "B5  SHANDONGTANGUOINTERNATIONALTRADECO.,LTD..png",
            "B9 B10 SHANDONG LIMECA MACHINERY CO.LTD.png",
            "C1  LINYI CHANNA IMPORT AND EXPORT CO., ltd.jpg",
            "C11 STRONG POWER ELECTRIC CO.,LTD..png",
            "C12 ZHENGZHOU JINGHUA INDUSTRY CO.,LTD..jpg",
            "C13 HENAN KEMEI ABRASIVES. CO.,LTD.jpg",
            "C14 SUIXIAN YAXIN INTELLIGENT TECHNOLOGY ENVIRONMENTAL PROTECTION CO., LTD..jpg",
            "C4 Shandong Sunite Machinery Co., Ltd..jpg",
            "C5  LINYI HAOYI TRADING CO.,LTD.jpg",
            "C6 Linyi Demei Jucheng International Trade Co., Ltd..jpg",
            "C8 LIAOCHENG SUPER NEW MATERIAL CO,.LTD.jpg",
            "C9 C10 LUOYANG RUIDE TRACTOR CO., LTD..png",
            "chemical industry.png",
            "D1 ZHANGGUO INDUSTRY CO., LTD..jpg",
            "D11 HENAN LUOSHEN TECHNOLOGY EQUIPMENT CO., LTD.jpg",
            "D12  XINXIANG XIN RUN ZHUO WOOD INDUSTRY CO.,LTD.jpg",
            "D13 QINGDAO CHANGYUE PLASTIC MACHINERY CO.,LTD.png",
            "D2 PUYANG SHENGTONG JUYUAN NEW MATERIAL CO., LTD.jpg",
            "D3 DEZHOU YINGHUI NON-WOVEN FABRIC COMPANY.jpg",
            "D4 SHANDONG TENGZHOU HUAMAO TEXTILE CO., LTD.jpg",
            "D5 LUOYANG INNO BEARING CO., LTD.png",
            "D6 XINXIANG CHENWEI MACHINERY CO., LTD.png",
            "D7 HENAN YINWANG INDUSTRIAL CO., LTD.jpg",
            "D8 LINQING NUOER BEARING CO. LTD.png",
            "D9 D10QINGDAO KIAOCHOW INDUSTRY CO.,LTD.jpg",
            "E1 E2 D14 D15 JINAN XINTIAN TECHNOLOGY CO., LTD.png",
            "E10 ZIBO JIZHOU TRADING CO.,LTD.jpg",
            "E11 HAIHER(SHANDONG) SUPPLY CHAIN MANAGEMENT CO., LTD.jpg",
            "E12 E13 SHANDONG WOLEI CNC MACHINERY CO., LTD..png",
            "E3  LIAOCHENG DADI NUMERICAL CONTROL ENGINEERING CO., LTD..jpg",
            "E4,E5 DONGYING HISPEED CHEMICAL CO., LTD.png",
            "E6 LIAOCHENG YONGNAITE BEARING CO., LTD.png",
            "E7E8 FULI MACHINERYú¿SHANDONGú⌐LIMITED COMPANY.jpg",
            "E9 SHANDONG HUILIN LASER TECHNOLOGY CO., LTD.jpg",
            "F1 F2 F3 E14 E15 E16 JINAN HONGNIU MACHINERY EQUIPMENT CO., LTD┴╜╨╨.png",
            "F11 QINGDAO SHENGSHI GUANGNUO INTERNTATIONAL TRADE CO.,LTD.png",
            "F12 F13 Jinan Zhuo Lei Mechanical Equipment Co. , Ltd..png",
            "F14 JAYA INTERNATIONAL CO.,LTD.png",
            "F4 F5 JINAN DOWELL PHOTOELECTRICITY EQUIPMENT CO., LTD..png",
            "F6 SHANDONG XINHONG CNC TECHNOLOGY CO., LTD..jpg",
            "F7 F8QINGDAO HAOMAITONG MOLD CO., LTD.png",
            "G1 G2 LIAOCHENG FOUNDER LASER TECHNOLOGY CO.,LTD..png",
            "G11 Weifang Subtor Rotating Precision Machinery Co.,Ltd..jpg",
            "G12  Nuclear Industry Yantai Toncin Group Co.,Ltd..png",
            "G13│╡┼Σlogo.jpg",
            "G13┤≤║╙logo.jpg",
            "G16 SHANDONG ENERGY CHEMICAL CO., LTD..jpg",
            "G3 Snail Truck Network.png",
            "H10 H11 LINQING XINGHE BEARING CO.LTD.png",
            "H12 I05  SHANDONG DELUKE CRANE GROUP CO,.LTD..jpg",
            "H13 H14 H15 H16 I1 I2 I3 I4 JINAN BODOR INTELLIGENT TECHNOLOGY CO., LTD.png",
            "H2 H3 QINGDAO LONGYUAN BAIHONG MACHINERY EQUIPMENT CO., LTD.jpg",
            "H4 YANTAI MAXDAWN INTERNATIONAL TRADING CO., LTD.jpg",
            "H5 SHANDONG JINTAI ROLLS CO., LTD.jpg",
            "H6 Zaozhuang Feng Run Gifts Co. , Ltd..jpg",
            "H9 I8 SHANDONG LAN BAO MACHINERY CO.,LTD.png",
            "HALL1 A7 QINGDAO YONGHE INTERNATIONAL TRADE CO.,LTD.jpg",
            "Hall1 D11QINGDAO AUGU AUTOMATION EQUIPMENT CO.,LTD.png",
            "I10 I11LIAOCHENG VOIERN LASER TECHNOLOGY CO., LTD..png",
            "I12 I13 SHANDONG BINZHOU ANHUI ROPE NET GROUP CO., LTD.png",
            "I14 SHANDONG SUNRISE CNC MACHINE CO.,LTD.png",
            "I15,I16,LIAOCHENG TONGXIN BEARING CO., LTD.png",
            "I6 I7 SHANDONG ZHONGXIN ENVIRONMENTAL ENGINEERING CO.,LTD..jpg",
            "I9 TAIAN CITY UP INTERNATIONAL TRADE CO.,LTD.jpg",
            "J1 J2 SHANDONG HANZHENG RUBBER INDUSTRY CO., LTD.png",
            "J10 J11 JINAN DIFENGSHENG INTERNATIONAL TRADE CO.,LTD..png",
            "J12 J13 SHANDONG YIXIN BEARING CO.,LTD.jpg",
            "J3 J4 QINGDAO FOREMASTER RUBBER CO.,LTD.jpg",
            "J5 SHENHAI NEW ENERGY TECHNOLOGY(SHANDONG)CO., LTD...png",
            "J6 J7 HONGAN GROUP CO.,LTD.png",
            "L1 L2 HENAN SUPERPOWER TECHNOLOGY CO.,LTD.png",
            "L3  LINYI FENGRUI PLANT PROTECTION ELECTRONIC EQUIPMENT CO.,LTD.png",
            "L4  LINYI XINYI INTERNATIONAL TRADE CO.,LTD..jpg",
            "╕─C2 Linyi guanding import and Export Co. , Ltd..png",
            "╨┬╘÷ G15 Jinan Jingjie Machinery Co. , Ltd..jpg",
            "╨┬╘÷B2-Shandong King Machinery Co., Ltd.png",
            "╨┬╘÷C3-Linyi Ruifeng New Material Co. LTD.png",
            "╨┬╘÷G04 G05Zibo Zhengji Pump Manufacturing co.,Ltd.jpg",
            "╨┬╘÷G06-Ningjin Xuguang Auto Parts Co . ,Ltd.jpg",
            "╨┬╘÷G10-Linqing Tai Kun Import & Export Co., Ltd..jpg"
        ]
        
        ?>
        <div class="inner-partner-wrapper">
        @foreach($file_names as $file)
            <figure class="partner-logo">
                <img src="{{ theme_asset('images/sponser-logo/' . $file) }}" alt="">
            </figure>
        @endforeach
        </div>
        <div class="sponser-btn">
           
        </div>
    </div>
</section>     
<section class="about-section m-2">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-8">
                <div class="section-head">
                    <h3 class="section-title">
                    Where Are We
                    </h3>
                </div>
                <div class="widget widget_about">
                    <div class="widget widget_getintuch">
                        <ul>
                            <li>
                                <i class="fas fa-map-marker-alt"></i>
                                <span><b>Service Area:</b></span>
                            </li>
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
            </div>
            <div class="col-lg-4">
                <div class="map-section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4514.303142198056!2d74.27578086228115!3d31.456467098865406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190164c8ee6dd5%3A0x81750d34c13f3612!2s16%20Samsani%20Rd%2C%20Block%20A%20Revenue%20Employees%20Cooperative%20Housing%20Society%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1706558921703!5m2!1sen!2s" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </div>
</section>   
  
@else
<div class="container">
    {!! $page->content !!}
</div>
@endif
