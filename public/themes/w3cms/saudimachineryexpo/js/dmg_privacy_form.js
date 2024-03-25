function is_privacy_form_submitted() {

    var privacy_agreement = jQuery('.privacy_agreement').find("input").val();

    if (privacy_agreement == "No") {
        jQuery('#privacyFormModal').show();
        return false;
    }
}

jQuery(document).on('gform_post_render', function (event, form_id, current_page) {

    jQuery('#privacyFormBtn'+form_id).on('click', function () {
        var privacy_agreement_field = jQuery('#gform_'+form_id).find('.privacy_agreement');
        if(privacy_agreement_field.length !== 0)
        {
            jQuery('#privacyFormModal'+form_id).find('.privacy_option_value:checked').each(function (i) {
                var checked_option_no = jQuery(this).attr('id');
                checked_option_no = checked_option_no.replace('choice'+form_id+'_', '');
                checked_option_no = checked_option_no.trim();
                jQuery('#gform_'+form_id).find('.privacy_form_option' + checked_option_no).find("input").val('true');
            });
            privacy_agreement_field.find("input").val('Yes');
            jQuery('#privacyFormModal'+form_id).hide();
            jQuery('#gform_'+form_id).find('.gform_button').trigger('click');
        }
    });

    jQuery('.close_dmg_privacy_form').on('click', function () {
        jQuery(this).closest('.privacyformmodal').hide();
    });

});