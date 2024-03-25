// function previewImage(event) {
//   var input = event.target;
//   var preview = document.getElementById('profile-preview');

//   if (input.files && input.files[0]) {
//     var reader = new FileReader();

//     reader.onload = function (e) {
//       preview.src = e.target.result;
//     }

//     reader.readAsDataURL(input.files[0]);
//   }
// }

$(document).ready(function () {
  $(".selectBox").each(function () {
    var $this = $(this),
      firstVal = $this.find(".selectOption:eq(0)").text();
    var selectedOption = getUrlParameter('speaker_theme');

    // Set the selected option based on the query parameter or current user's taxonomy term
    if (selectedOption) {
      setSelectBox(selectedOption);
    } else {
      // AJAX request to retrieve user posts
      $.ajax({
        url: ajax_params.ajaxurl,
        type: 'post',
        data: {
          action: 'get_user_posts'
        },
        success: function (response) {
          var userPosts = JSON.parse(response);
          if (userPosts.length > 0) {
            var userPost = userPosts[0];
            if (userPost.terms && userPost.terms.length > 0) {
              var userTerm = userPost.terms[0].name;
              if (userTerm) {
                setSelectBox(userTerm);
              } else {
                setSelectBox(firstVal);
              }
            } else {
              setSelectBox(firstVal);
            }
          } else {
            setSelectBox(firstVal);
          }
        },
        error: function (xhr, ajaxOptions, thrownError) {
          console.log(thrownError);
        }
      });
    }

    // Set the selected option and update the UI
    function setSelectBox(val) {
      // Remove the "selected" class from all options
      $this.find(".selectOption").removeClass("selected");

      // Set the "selected" class to the new selected option
      $this.find(".selectOption").each(function () {
        if ($(this).text() == val) {
          $(this).addClass("selected");
        }
      });

      // Update the selected option variable
      selectedOption = val;

      // Update the speaker tag links with the selected option
      $('.speaker-tag').each(function () {
        var href = $(this).attr('href');
        href = href.split('?')[0];
        href += (href.indexOf('?') === -1) ? '?' : '&';
        href += 'speaker_theme=' + val;
        $(this).attr('href', href);
      });

      // Update the UI
      $this.find(".selectBoxTop .selected").text(val);

      // Show/hide div based on user's selection
      if (val == 'Select event') {
        $('.three-col-img').hide();
      } else {
        $('.three-col-img').show();
      }
    }

    // Show/hide drop down
    $this.find(".selectBoxTop").bind("click", function () {
      if (!$(".selectOptions").is(":visible")) {
        $(".selectOptions").slideDown(100);
        $('html, body').animate({ scrollTop: '+=150px' }, 800);
      } else {
        $(".selectOptions").slideUp(100);
        $('html, body').animate({ scrollTop: '-=150px' }, 800);
      }
    });

    // Set selected value
    $this.find(".selectOption").bind("click", function () {
      var val = $(this).text();
      setSelectBox(val);
      $(".selectOptions").slideUp();
    });
  });

  function getUrlParameter(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

 



});
$(document).ready(function () {
  const inputElement = document.getElementById("profile-pic");
  const cropperModal = document.getElementById("cropModal");
  const croppedImageElement = document.getElementById("croppedImage");
  let cropper = null;

  if (inputElement) {
    inputElement.addEventListener("change", () => {
        const file = inputElement.files[0];
        const reader = new FileReader();
        const allowedExtensions = ['png', 'jpg', 'jpeg'];
        const fileExtension = file.name.split('.').pop().toLowerCase();

        $('.error-msg').remove();
        $('#profile-pic').removeClass('error');
        $('#profile-pic').closest(".input-wrapp").removeClass('input-wrapp-error');
        

        if (!allowedExtensions.includes(fileExtension)) {
          $('#profile-pic').addClass('error');
          $('#profile-pic').closest(".input-wrapp").addClass('input-wrapp-error');
          $('.custom-upload-label').after('<div class="error-msg">Please upload a PNG, JPG, or JPEG file</div>');
          inputElement.value = ''; // Reset the file input element
          return;
        }

        // Check if file size is less than 1MB
        if (file.size > 1000000) {
          $('#profile-pic').addClass('error');
          $('#profile-pic').closest(".input-wrapp").addClass('input-wrapp-error');
          $('.custom-upload-label').after('<div class="error-msg">Please upload a file under 1MB</div>');
          inputElement.value = '';
          return false;
        }

        reader.onload = () => {
            croppedImageElement.src = reader.result;
            croppedImageElement.onload = () => {
                const { width, height } = croppedImageElement;
                const aspectRatio = (width === 270 && height === 300) ? 1.0 : width / height;

                cropperModal.style.display = "block";
                if (cropper !== null) {
                    cropper.destroy();
                }
                cropper = new Cropper(croppedImageElement, {
                    aspectRatio,
                    viewMode: 2, // Set the default view mode to "crop"
                });
                document.getElementById("cropButton").addEventListener("click", (event) => {
                    event.preventDefault();
                    const canvas = cropper.getCroppedCanvas({
                        width: 270,
                        height: 300,
                        fillColor: '#fff',
                    });
                    const croppedUrl = canvas.toDataURL("image/jpeg");
                    document.getElementById("previewImage").src = croppedUrl;
                    cropperModal.style.display = "none";
                });
            }
        };
        reader.readAsDataURL(file);
    });
    // Close the cropper modal when the user clicks the close button
  document.getElementsByClassName("close")[0].addEventListener("click", () => {
    cropperModal.style.display = "none";
});
  }
});





// jQuery(document).ready(function($) {
//     $('input[type="radio"]').click(function() {
//       $('html, body').animate({scrollTop:0}, 'slow');
//     });
//   });


jQuery(document).on('gform_post_render', function (event, form_id, current_page) {
  //add gravity form jquery code here
  // Disable data-scroll-dir-y on radio buttons
  // jQuery('#choice_7_3_1').on('click', function (e) {
  //   //e.preventDefault();
  //   jQuery('html').attr('data-scroll-dir-y', '1');
  //   console.log('Clicked!');
  // });

  jQuery(document).ready(function ($) {

    // $('#gform_fileupload_7_25').on('change', function() {
    //   var files = $(this).prop('files');
    //   var validFiles = [];
    //   var invalidFiles = [];
    //   for (var i = 0; i < files.length; i++) {
    //     var filename = files[i].name;
    //     if (filename.indexOf('Emirates_ID') === 0) {
    //       validFiles.push(files[i]);
    //     } else {
    //       invalidFiles.push(files[i]);
    //     }
    //   }
    //   if (invalidFiles.length > 0) {
    //     var errorMessage = 'Please ensure all uploaded files have names starting with "Emirates_ID".';
    //     $('#gform_multifile_upload_7_25').append('<div class="error-message">' + errorMessage + '</div>');
    //     // remove invalid files from file preview
    //     $(this).val('');
    //     $('#gform_preview_7_25 .ginput_preview').empty();
    //     for (var j = 0; j < validFiles.length; j++) {
    //       var file = validFiles[j];
    //       var fileName = file.name;
    //       var fileExtension = fileName.split('.').pop().toLowerCase();
    //       $('#gform_preview_7_25 .ginput_preview').append('<div class="ginput_preview"><span class="ginput_file">' + fileName + '</span></div>');
    //     }
    //   } else {
    //     $('#gform_multifile_upload_7_25 .error-message').remove();
    //   }
    // });

    //  $('#gform_submit_button_7').on('click', function(event) {
    //    console.log('submit');
    //    var filename = $('#input_7_28').val().split('\\').pop(); // Replace "input_7_28" with the ID of your file upload field
    //    console.log('filename:', filename);
    //    console.log(filename.indexOf('Emirates_ID'));
    //    if (filename.indexOf('Emirates_ID') === 0) {
    //      $('.ginput_container_fileupload').find('.error-message').remove();
    //    } else {
    //      console.log('else');
    //      var errorMessage = 'Please ensure the uploaded file has a name starting with "Emirates_ID".';
    //      $('.ginput_container_fileupload').append('<div class="error-message">' + errorMessage + '</div>');
    //      event.preventDefault(); // prevent form submission
    //    }
    //  });
    // function readURL(input) {

    //     if (input.files && input.files[0]) {
    //         var reader = new FileReader();
    //         jQuery(".custom-file-input-wrap .gform-field-label").append('<div id="custom-upload-text"><img src=""></div>');
    //         reader.onload = function (e) {
    //             jQuery('#custom-upload-text>img').attr('src', e.target.result);
    //         }

    //         reader.readAsDataURL(input.files[0]);
    //     }
    // }
    // jQuery("input[type=file]").change(function () {

    //     readURL(this);
    // });

    // image upload 
    // $(".custom-file-input-wrap .gform-field-label").append('<span id="custom-upload-text"></span>');
    // $("input[type=file]").change(function (e) {
    //   $(this).parents(".speaker-gf-input").find("#custom-upload-text").text(e.target.files[0].name);
    // });
    $(".ginput_container_fileupload .gform_fileupload_rules").append('<span id="custom-upload-text"></span>');
    $("input[type=file]").change(function (e) {
      $(this).parents(".speaker-gf-input").find("#custom-upload-text").text(e.target.files[0].name);
    });

    //jQuery('#choice_7_3_0').prop('checked', true);
    // Get the selected value (if any) and set the first option as default only if no option is selected
    var selectedValue = $('input[name="input_3"]:checked').val();
    if (!selectedValue) {
      $('input[name="input_3"]:first').prop('checked', true);
    }



    // Update the selectedValue variable when the user selects a different option
    $('input[name="input_3"]').change(function () {
      selectedValue = $(this).val();
    });

    // Set the selected option as checked after the form is submitted, if there is a validation error
    if (selectedValue) {
      $('input[name="input_3"][value="' + selectedValue + '"]').prop('checked', true);
    }

  });

});

