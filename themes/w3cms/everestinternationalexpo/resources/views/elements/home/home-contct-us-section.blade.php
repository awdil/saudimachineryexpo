<!-- home contct us section html start -->
<section class="home-contact-section">
    <div class="container">
        <div class="contact-inner-content">
            <div class="row">
                <div class="col-md-6">
                    <form class="contact-form row">
                        <p class="col-sm-6">
                            <input type="text" name="name" placeholder="Your Name..">
                        </p>
                        <p class="col-sm-6">
                            <input type="email" name="email" placeholder="Your Email..">
                        </p>
                        <p class="width-full">
                            <textarea rows="9" placeholder="Enter Message.."></textarea>
                        </p>
                        <p class="width-full">
                            <input type="submit" name="submit" value="SEND MESSAGE">
                        </p>
                    </form>
                </div>
                <div class="col-md-6">
                    <div class="contact-detail">
                        <div class="section-head">
                            <span class="section-sub-title ">GET IN TOUCH</span>
                            <h3 class="section-title">
                                CONTACT US FOR FURTHER INFORMATION
                            </h3>
                            <p class="section-paragraph">
                            Connect with us to explore exciting opportunities and collaborations. Whether you have inquiries, feedback, or you simply want to say hello, our team is ready to assist you. Reach out to us and be part of the conversation!
                            </p>
                        </div>
                        <div class="contact-location-inner">
                            <div class="contact-location-item">
                                <figure class="contact-icon">
                                    <i aria-hidden="true" class="icon icon-apartment1"></i>
                                </figure>
                                <div class="contact-place-content">
                                    <h5>EVENT VENUE :</h5>
                                    <span>
                                    {{config('Home.eventLocation')}}
                                    </span>
                                </div>
                            </div>
                            <div class="contact-location-item">
                                <figure class="contact-icon">
                                    <i aria-hidden="true" class="icon icon-map-marker1"></i>
                                </figure>
                                <div class="contact-place-content">
                                    <h5>LOCATION ADDRESS :</h5>
                                    <span>
                                    {{ config('Site.location') }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-image-content">
            <figure class="contact-img">
                <img src="{{ theme_asset('img/eventum-img4.jpg') }}" alt="">
                <div class="facility-wrapper">
                    <div class="facility-content">
                        <h5 class="facility-title">
                            Everest public overseas warehouse
                        </h5>
                        <p class="facility-info">
                        Experience the grandeur of Hall Expo Center in Lahore, where magnificence meets the allure of unforgettable events.
                        </p>
                        <a href="contact.html" class="button-round-primary">GET DIRECTION</a>
                    </div>
                </div>
            </figure>
            <figure class="contact-img">
                <img src="{{ theme_asset('img/eventum-img5.jpg') }}" alt="">
                <div class="facility-wrapper">
                    <div class="facility-content">
                        <h5 class="facility-title">
                            Hall No. 1 & 2
                        </h5>
                        <p class="facility-info">
                        {{ config('Site.location') }}
                        </p>
                        <a href="contact.html" class="button-round-primary">GET DIRECTION</a>
                    </div>
                </div>
            </figure>
            <div class="map-section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4514.303142198056!2d74.27578086228115!3d31.456467098865406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190164c8ee6dd5%3A0x81750d34c13f3612!2s16%20Samsani%20Rd%2C%20Block%20A%20Revenue%20Employees%20Cooperative%20Housing%20Society%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1706558921703!5m2!1sen!2s" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
</section>