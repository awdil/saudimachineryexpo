jQuery(document).ready(function () {
    jQuery("#custom-special-menu li").click(function(){
    jQuery("#custom-special-menu li").removeClass('current-menu-item');
    jQuery(this).addClass('current-menu-item');
  });
});
  // jQuery(document).ready(function () {
//     var pageURL = window.location.href;
//     var segments = pageURL.split('/');

    // if (segments[3] == 'agenda')
    //     agendaLAnding(0);
    // else
    //     agendaHome(0);


    // jQuery('#agenda-day-category-filter li.date-filter').on('click', function (e) {
    //     e.preventDefault();
    //     if (segments[3] == 'agenda')
    //         agendaLAnding(jQuery(this));
    //     else
    //         agendaHome(jQuery(this));
    // });


    // function agendaHome(first = '0') {
    //     var agendaData = {};
    //     if (first != 0) {
    //         jQuery('.load-wrpa').show();

    //         jQuery('#agenda-day-category-filter li.active').removeClass('active');

    //         jQuery(first).addClass('active');
    //     }
    //     agendaData['cat'] = jQuery('#agenda-category-filter li span.active').attr('id');
    //     agendaData['day_cat'] = jQuery(first).attr('id');
    //     agendaData['agenda_per_section'] = jQuery('.post-per-page').val();

    //     if (first == 0)
    //         agendaData['day_cat'] = jQuery('#agenda-day-category-filter li.active').attr("id");

    //     loadAgendaData(agendaData);

    //     function loadAgendaData(agendaData) {
    //         //agendaData['agenda_per_section'] = 3;
    //         agendaData['button_need'] = true;
    //         jQuery.ajax({
    //             type: 'post',
    //             url: ajax_params.ajaxurl,
    //             data: {
    //                 query: agendaData,
    //                 action: 'load_agenda_data',
    //                 security_var: ajax_params.security
    //             },
    //             success: function (response, data) {
    //                 jQuery(".agenda-content").replaceWith(response);
    //                 // bb_agenda_accordion();
    //                 jQuery('.load-wrpa').hide();
    //             }
    //         });
    //     }
    // }

    // function agendaLAnding(first = '0') {

    //     var agendaData = {};
    //     if (first != 0) {
    //         jQuery('#agenda-day-category-filter li.active').removeClass('active');

    //         jQuery(first).addClass('active');

    //     }
    //     //agendaData['cat'] = jQuery('#agenda-category-filter li span.active').attr('id');
    //     agendaData['day_cat'] = jQuery(first).attr('id');
    //     agendaData['agenda_per_section'] = -1;

    //     if (first == 0) {
    //         agendaData['day_cat'] = jQuery('#agenda-day-category-filter li.active').attr("id");
    //     }

    //     loadAgendaLandingData(agendaData);

    //     function loadAgendaLandingData(agendaData) {
    //         agendaData['button_need'] = true;
    //         jQuery.ajax({
    //             type: 'post',
    //             url: ajax_params.ajaxurl,
    //             data: {
    //                 query: agendaData,
    //                 action: 'load_agenda_landing_data',
    //                 security_var: ajax_params.security
    //             },
    //             success: function (response, data) {
    //                 jQuery(".main-agenda-content").replaceWith(response);
    //             }
    //         });
    //     }
    // }

// });


jQuery(document).ready(function () {
    load_more_gallery_button();
    load_more_sponsor_button();
    // Exhibitor ajax actions start
    var selectors = {
        'stand-no': 'Please Select a Stand Number',
        'product-category': 'Please Select Product Category',
        'country': 'Please Select a Country'
    };

    if (!Object.entries)
        Object.entries = function (obj) {
            var ownProps = Object.keys(obj),
                i = ownProps.length,
                resArray = new Array(i); // preallocate the Array
            while (i--)
                resArray[i] = [ownProps[i], obj[ownProps[i]]];

            return resArray;
        };

    Object.entries(selectors).forEach(function (value) {
        //jQuery('#' + value[0]).select2({placeholder: value[1]});
    });


    jQuery('.exhibitor-image').click(function () {

        var spanId = jQuery(this).next('span').attr('id');
        //console.log('#' + spanId);
        jQuery('#' + spanId).show();
        jQuery('#' + spanId).trigger('click');
        setTimeout(function () {
            jQuery('#' + spanId + '-drop').trigger('click');
        }, 300)

    });

    jQuery('.search_exhibitor').on('click', function () {
        jQuery('.load-wrpa').show();
        var exhibitorData = {};
        exhibitorData['cat'] = jQuery('#exhibitor-cat li span.selected').attr('id');
        exhibitorData['alphabet'] = jQuery('#alphabet-filter li span.selected').attr('id');
        exhibitorData['country'] = jQuery('#country').val();
        exhibitorData['product-category'] = jQuery('#product-category').val();
        exhibitorData['stand-no'] = jQuery('#stand-no').val();
        exhibitorData['company-name'] = jQuery('#company-name').val();
        loadexhibitorData(exhibitorData);
    });

    jQuery('.rest_exhibitor').on('click', function () {
        var selectors = {
            'stand-no': 'Please Select a Stand Number',
            'product-category': 'Please Select Product Category',
            'country': 'Please Select a Country'
        };

        jQuery('.load-wrpa').show();
        ['exhibitor-cat', 'alphabet-filter'].forEach(function (item, index) {
            jQuery('#' + item + ' li span.selected').removeClass('selected');

            if (item == 'exhibitor-cat') {
                jQuery('#' + item + ' .all span.exhibitor-category').addClass('selected');
            }

            if (item == 'alphabet-filter') {
                jQuery('#' + item + ' .all span.alphabet-selector').addClass('selected');
            }

        });

        ['country', 'product-category', 'stand-no'].forEach(function (item, index) {
            jQuery('#' + item + ' option:selected').prop('selected', false);
            // /jQuery('#' + item).select2({placeholder: selectors[item]});
        });

        jQuery('#company-name').val('');
        var exhibitorData = {};
        exhibitorData['cat'] = '';
        exhibitorData['alphabet'] = '';
        exhibitorData['country'] = '';
        exhibitorData['product-category'] = '';
        exhibitorData['stand-no'] = '';
        exhibitorData['company-name'] = '';
        loadexhibitorData(exhibitorData);
    });

    jQuery('#exhibitor-cat li span.exhibitor-category').click(function () {
        jQuery('.load-wrpa').show();
        var exhibitorData = {};
        jQuery('#exhibitor-cat li span.selected').removeClass('selected');
        jQuery(this).addClass('selected');
        exhibitorData['cat'] = jQuery(this).attr('id');
        exhibitorData['alphabet'] = jQuery('#alphabet-filter li span.selected').attr('id');
        loadexhibitorData(exhibitorData);
    });


    jQuery('#alphabet-filter li span.alphabet-selector').click(function () {
        jQuery('.load-wrpa').show();
        var exhibitorData = {};
        jQuery('#alphabet-filter li span.selected').removeClass('selected');
        jQuery(this).addClass('selected');
        exhibitorData['cat'] = jQuery('#exhibitor-cat li span.selected').attr('id');
        exhibitorData['alphabet'] = jQuery(this).attr('id');
        exhibitorData['country'] = jQuery('#country').val();
        exhibitorData['product-category'] = jQuery('#product-category').val();
        exhibitorData['stand-no'] = jQuery('#stand-no').val();
        exhibitorData['company-name'] = jQuery('#company-name').val();
        loadexhibitorData(exhibitorData);
    });


    function loadexhibitorData(exhibitorData) {
        jQuery.ajax({
            type: 'post',
            url: ajax_params.ajaxurl,
            data: {
                query: exhibitorData,
                action: 'load_exhibitor_data',
                security_var: ajax_params.security
            },
            success: function (response, data) {
                jQuery(".accordion-container-exhibitor").replaceWith(response);
                jQuery('.load-wrpa').hide();
                jQuery('.exhibitor-image').click(function () {

                    var spanId = jQuery(this).next('span').attr('id');
                    console.log('#' + spanId);
                    jQuery('#' + spanId).show();
                    jQuery('#' + spanId).trigger('click');
                    setTimeout(function () {
                        jQuery('#' + spanId + '-drop').trigger('click');
                    }, 300);
                });
            }
        });
    }
});
function trigger_gallery_popup()
{

    var gallery_lightbox = GLightbox({
        loop: true,
        keyboardNavigation: false,
        touchNavigation: true,
        selector: '.gallery-pop',
    
    });
    gallery_lightbox.on('slide_after_load',function(el) {
        jQuery("#glightbox-body").addClass("glightboxhidecontrol");
    });
}
//GALLERY POPUP

//gallery landing page popup
var lightboxVideo = GLightbox({
    loop: true,
    selector: 'isotope-pop',
});

// Gallery load more items
function load_more_gallery_button() {
	jQuery('div #load-more-gallery a').click(function () {
		var post_per_page = jQuery(this).data('post-per-page');
    var post_id = jQuery('.g-list li.active').attr('id');
    var max_page = jQuery(this).data('max-page');
    var page = jQuery(this).data('page');
    var last_row_count = jQuery(this).data('last-row-count');
    var offset = post_per_page * page;
	page = page + 1;
    if (page >= max_page) {
        jQuery("div #load-more-gallery").hide();
    }

    var galleryLoadMoreData = {};
    galleryLoadMoreData['post_id'] = post_id;
    galleryLoadMoreData['max_page'] = max_page;
    galleryLoadMoreData['page'] = page;
    galleryLoadMoreData['offset'] = offset;
    galleryLoadMoreData['post_per_page'] = post_per_page;
    galleryLoadMoreData['last_row_count'] = last_row_count;
    galleryLoadMore(galleryLoadMoreData);
	});
}

function galleryLoadMore(galleryLoadMoreData) {
	var page = galleryLoadMoreData['page'];
    var last_row_count = galleryLoadMoreData['last_row_count'];
    var post_per_page = galleryLoadMoreData['post_per_page'];
    jQuery.ajax({
        type: 'post',
        url: ajax_params.ajaxurl,
        data: {
            query: galleryLoadMoreData,
            action: 'load_more_gallery_items',
            // security_var: ajax_params.security
        },
        success: function (response, data) {

            last_row_count = page * post_per_page;
            var loadMoreGalleryBtn =  jQuery('div #load-more-gallery a');
            loadMoreGalleryBtn.data('page', page);
            loadMoreGalleryBtn.data('last-row-count', last_row_count);
            jQuery(".g-wrap").append(response);
            trigger_gallery_popup();
        }
    });
}

// Gallery filter items
jQuery('.g-list li').click(function () {

    jQuery("div #load-more-gallery").show();
    var page = jQuery('div #load-more-gallery a').data('page');
    // page = page + 1;
    // jQuery('div #load-more-gallery a').data('page', page);
    var galleryItems = {};
    jQuery('.g-list li.active').removeClass('active');
    jQuery(this).addClass('active');
    galleryItems['id'] = jQuery(this).attr('id');
    loadGalleryItems(galleryItems);
});

function loadGalleryItems(galleryItems) {
    jQuery.ajax({
        type: 'post',
        url: ajax_params.ajaxurl,
        data: {
            query: galleryItems,
            action: 'load_gallery_items',
            //security_var: ajax_params.security
        },
        success: function (response, data) {
            jQuery(".filtered-data").replaceWith(response);
            load_more_gallery_button();
            trigger_gallery_popup();
        }
    });
}
// Sponsor load more items
function load_more_sponsor_button() {
	jQuery('div #load-more-sponsor a').click(function () {
		var post_per_page = jQuery(this).data('post-per-page');
    var post_id = jQuery('.platinum-sponsors-outer li.active').attr('id');
    var max_page = jQuery(this).data('max-page');
    var page = jQuery(this).data('page');
    var last_row_count = jQuery(this).data('last-row-count');
    var offset = post_per_page * page;
	page = page + 1;
    if (page >= max_page) {
        jQuery("div #load-more-sponsor").hide();
    }

    var sponsorLoadMoreData = {};
    sponsorLoadMoreData['post_id'] = post_id;
    sponsorLoadMoreData['max_page'] = max_page;
    sponsorLoadMoreData['page'] = page;
    sponsorLoadMoreData['offset'] = offset;
    sponsorLoadMoreData['post_per_page'] = post_per_page;
    sponsorLoadMoreData['last_row_count'] = last_row_count;
    sponsorLoadMore(sponsorLoadMoreData);
	});
}

function sponsorLoadMore(sponsorLoadMoreData) {
	var page = sponsorLoadMoreData['page'];
    var last_row_count = sponsorLoadMoreData['last_row_count'];
    var post_per_page = sponsorLoadMoreData['post_per_page'];
    jQuery.ajax({
        type: 'post',
        url: ajax_params.ajaxurl,
        data: {
            query: sponsorLoadMoreData,
            action: 'load_more_sponsor_items',
            // security_var: ajax_params.security
        },
        success: function (response, data) {

            last_row_count = page * post_per_page;
            var loadMoreSponsorBtn =  jQuery('div #load-more-sponsor a');
            loadMoreSponsorBtn.data('page', page);
            loadMoreSponsorBtn.data('last-row-count', last_row_count);
            jQuery(".platinum-sponsors-outer").append(response);
            
        }
    });
}
// Sponsor filter items
jQuery('.innerpage-sponsors-outer-list  li').click(function () {
    
    var page = jQuery('div #load-more-sponsor a').data('page');
    // page = page + 1;
    // jQuery('div #load-more-gallery a').data('page', page);
    var sponsorItems = {};
    jQuery('.innerpage-sponsors-outer-list  li.active').removeClass('active');
    jQuery(this).addClass('active');
    var item_id = jQuery(this).attr('id');
    sponsorItems['id'] = jQuery(this).attr('id');
    if (item_id == 'all') {
    jQuery("div #load-more-sponsor").show();
    }
    loadSponsorItems(sponsorItems);
});

function loadSponsorItems(sponsorItems) {
    jQuery.ajax({
        type: 'post',
        url: ajax_params.ajaxurl,
        data: {
            query: sponsorItems,
            action: 'load_sponsor_items',
            //security_var: ajax_params.security
        },
        success: function (response, data) {
            jQuery(".sponsor-filter-data").replaceWith(response);
            load_more_sponsor_button();
            //trigger_gallery_popup();
        }
    });
}
// News Loadmore Ajax
//press release popup
var lightboxVideo = GLightbox({
    loop: true,
    selector: 'pr-pop',
});

jQuery("#load-more-post").on("click", function () {

    var postData = {};
    var post_per_page = jQuery("#load-more-post").data('post-num');
    var page = jQuery("#load-more-post").data('page');
    var maxPage = jQuery("#load-more-post").data('max-num');

    if (page == maxPage) {
        jQuery(".load-more").hide();
    }
    var offset = post_per_page * page;
    postData['page'] = page;
    postData['offset'] = offset;
    loadMorePosts(postData);

});

function loadMorePosts(postData) {
    console.log(JSON.stringify(postData));
    var page = postData['page'];
    jQuery.ajax({
        type: 'post',
        url: ajax_params.ajaxurl,
        data: {
            query: postData,
            action: 'load_more_posts'
        },
        success: function (response) {
            page = page + 1;
            jQuery('#load-more-post').data('page', page);
            jQuery('.load_more_posts').append(response);
        }
    });
}

jQuery(".more_speakers").on("click", function () {
    var speakerData = {};
    var post_per_page = jQuery(".more_speakers").data('post-num');
    var page = jQuery(".more_speakers").data('page');
    var maxPage = jQuery(".more_speakers").data('max-num');
    var postid = jQuery(".more_speakers").data('postid');
    var category = jQuery(".more_speakers").data('category');
    var theme = jQuery(".more_speakers").data('theme');
    var event = jQuery(".more_speakers").data('event');
    var format = jQuery(".more_speakers").data('format');
    var read_more = jQuery(".more_speakers").data('read-more');
    
    // if (page == maxPage && read_more =="no") {
    //     jQuery(".load-more-speaker").hide();
    //     //jQuery("#speaker-all-btn").show();
    // }
    // else{
    //     jQuery(".load-more-speaker").hide();
    //     jQuery("#speaker-all-btn").show();
    // }
    var offset = post_per_page * page;
    speakerData['page'] = page;
    speakerData['max-num'] = maxPage;
    speakerData['offset'] = offset;
    speakerData['posts'] = post_per_page;
    speakerData['category'] = category;
    speakerData['postid'] = postid;
    speakerData['theme'] = theme;
    speakerData['event'] = event;
    speakerData['format'] = format;
    speakerData['read_more'] = read_more;
    loadMoreSpeakers(speakerData);

});
function loadMoreSpeakers(speakerData) {
    var page = speakerData['page'];
    var maxPage = speakerData['max-num'];
    
    //page++;
    jQuery.ajax({
        type: 'post',
        url: ajax_params.ajaxurl,
        data: {
            query: speakerData,
            action: 'load_more_speakers',
            paged: page,
        },
        success: function (response) {
            page = page + 1;
            var $data = $(response);
            
             if(page == maxPage) {
                 jQuery('.load_more_speakers').append(response);
                 jQuery(".load-more-speaker").hide();
              }
             else{
                 jQuery('.more_speakers').data('page', page);
                 jQuery('.load_more_speakers').append(response);
                 jQuery(".load-more-speaker").show();
             }
            
            
            const lightboxInlineIframe = GLightbox({
                selector: '.speaker-popup'
                });
                jQuery('.speaker-popup').click(function() {
                    jQuery("#glightbox-body").addClass("sp-popup-body");
            
                    jQuery('.close-sp-popup').on('click touch', function() {
            
                    lightboxInlineIframe.close();
                        jQuery(".gclose.gbtn").trigger('click');
                    });
                });
        }

    });


}

//add new speaker from front end script

jQuery(document).ready(function() {
        var speakerFormSubmitted = false;
        var dtcmFormSubmitted = false;
    jQuery('#speaker-form').on('submit', function(event) {
        event.preventDefault(); 
        //form validation
        
        jQuery('.error-msg').remove();
        var error = false;
        var speaker_theme = jQuery('#speaker_theme').val().trim();
        // Validate full name
        var fullname = jQuery('#full-name').val().trim();
        if (fullname === '') {
            jQuery('#full-name').addClass('error');
            jQuery('#full-name').closest(".input-wrapp").addClass('input-wrapp-error');
            jQuery('#full-name').after('<div class="error-msg">Please enter your full name</div>');
        error = true;
        } else {
            jQuery('#full-name').removeClass('error');
            jQuery('#full-name').closest(".input-wrapp").removeClass('input-wrapp-error');
        }
    
         // validate email address
        var email = jQuery('#email').val().trim();
        if (email === '') {
        jQuery('#email').addClass('error');
        jQuery('#email').closest(".input-wrapp").addClass('input-wrapp-error');
        jQuery('#email').after('<div class="error-msg">Please enter your email address</div>');
        error = true;
        } else if (!isValidEmail(email)) {
        jQuery('#email').addClass('error');
        jQuery('#email').closest(".input-wrapp").addClass('input-wrapp-error');
        jQuery('#email').after('<div class="error-msg">Please enter a valid email address</div>');
        error = true;
        } else {
        jQuery('#email').removeClass('error');
        jQuery('#email').closest(".input-wrapp").removeClass('input-wrapp-error');
        }

        // validate designation
        var designation = jQuery('#designation').val().trim();
        if (designation === '') {
        jQuery('#designation').addClass('error');
        jQuery('#designation').closest(".input-wrapp").addClass('input-wrapp-error');
        jQuery('#designation').after('<div class="error-msg">Please enter your job title</div>');
        error = true;
        } else {
        jQuery('#designation').removeClass('error');
        jQuery('#designation').closest(".input-wrapp").removeClass('input-wrapp-error');
        }

        // validate company name
        var company = jQuery('#company').val().trim();
        if (company === '') {
        jQuery('#company').addClass('error');
        jQuery('#company').closest(".input-wrapp").addClass('input-wrapp-error');
        jQuery('#company').after('<div class="error-msg">Please enter your company name</div>');
        error = true;
        } else {
            jQuery('#company').removeClass('error');
            jQuery('#company').closest(".input-wrapp").removeClass('input-wrapp-error');
        }

        // validate description
        var description = jQuery('#description').val().trim();
        if (description === '') {
            jQuery('#description').addClass('error');
            jQuery('#description').closest(".input-wrapp").addClass('input-wrapp-error');
        jQuery('#description').after('<div class="error-msg">Please enter your bio</div>');
        error = true;
        }else if (description.length > 500) {
            jQuery('#description').addClass('error');
            jQuery('#description').closest(".input-wrapp").addClass('input-wrapp-error');
            jQuery('#description').after('<div class="error-msg">Please limit your bio to 500 words</div>');
            error = true;
        } else {
            jQuery('#description').removeClass('error');
            jQuery('#description').closest(".input-wrapp").removeClass('input-wrapp-error');
        }

        
        // validate profile picture
        var profilePic = jQuery('#profile-pic')[0].files[0];
        var hasImage = jQuery('#speaker_pro_hidden').val();
        if (!profilePic && hasImage == 'no') {
        jQuery('#profile-pic').addClass('error');
        jQuery('#profile-pic').closest(".input-wrapp").addClass('input-wrapp-error');
        jQuery('.custom-upload-label').after('<div class="error-msg">Please upload your profile picture</div>');
        error = true;
        } else {
        jQuery('#profile-pic').removeClass('error');
        jQuery('#profile-pic').closest(".input-wrapp").removeClass('input-wrapp-error');
        
        }

        // validate linkedin profile
        // var linkedin = jQuery('#linkedin').val().trim();
        // if (linkedin === '') {
        //     jQuery('#linkedin').addClass('error');
        //     jQuery('#linkedin').closest(".input-wrapp").addClass('input-wrapp-error');
        // jQuery('#linkedin').after('<div class="error-msg">Please enter your Linkedin profile URL</div>');
        // error = true;
        // } else if (!isValidUrl(linkedin)) {
        //     jQuery('#linkedin').addClass('error');
        //     jQuery('#linkedin').closest(".input-wrapp").addClass('input-wrapp-error');
        //     jQuery('#linkedin').after('<div class="error-msg">Please enter a valid LinkedIn URL</div>');
        //     error = true;
        // }
        // else {
        //     jQuery('#linkedin').removeClass('error');
        //     jQuery('#linkedin').closest(".input-wrapp").removeClass('input-wrapp-error');
        // }
    
        
        if (!error) {
            var profilePic = jQuery('#profile-pic')[0].files[0];
            if (profilePic) {
                var fileSize = profilePic.size / 1024 / 1024; // in MB
                var fileExtension = profilePic.name.split('.').pop().toLowerCase();
                if ($.inArray(fileExtension, ['png', 'jpg', 'jpeg']) === -1) {
                    // file format validation failed
                    jQuery('#profile-pic').addClass('error');
                    jQuery('#profile-pic').closest(".input-wrapp").addClass('input-wrapp-error');
                    jQuery('.custom-upload-label').after('<div class="error-msg">Please upload a PNG, JPG, or JPEG file</div>');
                } else if (fileSize > 1) {
                    // file size validation failed
                    jQuery('#profile-pic').addClass('error');
                    jQuery('#profile-pic').closest(".input-wrapp").addClass('input-wrapp-error');
                    jQuery('.custom-upload-label').after('<div class="error-msg">Please upload a file under 1MB</div>');
                } else {
                    
                    
                                // all checks passed, submit the form
                                // Submit the form if all inputs are valid
                                sendAjaxRequest(function(response) { 
                                    if (response.success) {
                                        jQuery('#speaker-form').hide();
                                        var successMsg = jQuery('<p class="speaker_confirmation_message">').text(response.data.message);
                                        
                                        jQuery('#speaker-form').after(successMsg);
                                        // if (response.data.redirect_url) {
                                        //     window.location.href = response.data.redirect_url;
                                        // } 
                                        // var homeUrl = document.getElementsByTagName('html')[0].getAttribute('data-home-url');
                                        // var customUrl = homeUrl + '/dtcm-form/?speaker_theme=' + speaker_theme;
                                        
                                        // window.location.href = customUrl;
                                        if(response.data.speaker_form_submitted== 'yes')
                                        {
                                            speakerFormSubmitted = true;
                                            checkFormsSubmitted();
                                            
                                        }
                                        
                                    } else {
                                        var errorMsg = jQuery('<p class="speaker_error_message">').text(response.error);
                                        jQuery('#speaker-form').after(errorMsg);
                                    }
                                }, function() {
                                    jQuery('#speaker-form').nextAll('p').remove();  
                                    var errorMsg = jQuery('<p class="speaker_error_message">').text(response.data.error);
                                    jQuery('#speaker-form').after(errorMsg);
                                });
                            
                        
                }
            }
             else {
                // profile pic not selected, submit the form without checking dimensions
                
                sendAjaxRequest(function(response) { 
                    if (response.success) {
                        jQuery('#speaker-form').hide();
                        var successMsg = jQuery('<p class="speaker_confirmation_message">').text(response.data.message);
                        
                        jQuery('#speaker-form').after(successMsg);
                        // if (response.data.redirect_url) {
                        //     window.location.href = response.data.redirect_url;
                        // } 
                        // var homeUrl = document.getElementsByTagName('html')[0].getAttribute('data-home-url');
                        // var customUrl = homeUrl + '/dtcm-form/?speaker_theme=' + speaker_theme;
                        // window.location.href = customUrl;
                        
                        if(response.data.speaker_form_submitted== 'yes')
                                        {
                                            speakerFormSubmitted = true;
                                            checkFormsSubmitted();
                                        }
                    } else {
                        var errorMsg = jQuery('<p class="speaker_error_message">').text(response.error);
                        jQuery('#speaker-form').after(errorMsg);
                    }
                }, function() {
                    jQuery('#speaker-form').nextAll('p').remove();  
                    var errorMsg = jQuery('<p class="speaker_error_message">').text(response.data.error);
                    jQuery('#speaker-form').after(errorMsg);
                });
             
            }
                    }
                });
    
      // Helper function to validate email address
      function isValidEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
      }
    
      // Helper function to validate URL
    //   function isValidUrl(url) {
    //     var regex = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub)\/[a-zA-Z0-9_-]+\/?$/;
    //     return regex.test(url);
    //   }

    function dataURItoBlob(dataURI) {
        const byteString = atob(dataURI.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: 'image/jpeg' });
      }

      function sendAjaxRequest(successFunction, errorFunction) {
        var form = document.getElementById('speaker-form');
        var formData = new FormData(form); 
        var profilePic = jQuery('#profile-pic')[0].files[0];
            if (profilePic) {
        var croppedUrl = document.getElementById("previewImage").src;
        const croppedFile = dataURItoBlob(croppedUrl);
        formData.append('croppedImage', croppedFile, 'cropped.jpg');
            }
        formData.append("action", "submit_speaker_form"); 
        console.log(formData);
        jQuery.ajax({
            url: ajax_params.ajaxurl, 
            type: 'POST',
            data: formData,
            dataType: 'json',
            cache: false,
            contentType: false,
            processData: false, 
            success: successFunction,
            error: errorFunction
        });
    }

    // Bind submit event to Gravity form
    $(document).bind('gform_confirmation_loaded', function(event, formId){
        if (formId === 7) { // Change 1 to the ID of your Gravity form
          // Perform Gravity form submission logic here
          dtcmFormSubmitted = true;
          checkFormsSubmitted();
        }
      });
      // Check if both forms have been submitted
      function checkFormsSubmitted() {
        if (speakerFormSubmitted || dtcmFormSubmitted) {
          // Display loading spinner
      
          $.ajax({
            type: 'POST',
            url: ajax_params.ajaxurl + '?_=' + new Date().getTime(),
            data: { action: 'check_speaker_user_meta' },
            dataType: 'json',
            //cache: false,
            async: false,
            success: function(response) {
              if (response.data.speaker_form_submitted === 'yes' && response.data.dtcm_form_submitted === 'yes') {
                   $('#my-three-col-img').css('display', 'block');
              }
                             
            },
            error: function(xhr, status, error) {
              console.log('Error checking user meta: ' + error);
            }
          });
          
          
        } else {
          $('#my-three-col-img').css('display', 'none');
        }
      }
    });


    