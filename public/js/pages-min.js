!function(e){"use strict";var r=jQuery("#customFieldContainer .Newfild").length,t=r=parseInt(r,10);function n(){jQuery(document).on("click",".CustomFieldRemoveButton",(function(){var r=jQuery(this).attr("rel");void 0!==r&&""!=r?(url=baseUrl+"admin/content/contents/ajax_delete/"+r,e.ajax({url:url,type:"POST",dataType:"json",success:function(e){jQuery(".swaprow_"+r).css("background-color","red").fadeOut("slow",(function(){jQuery(this).remove()}))}})):jQuery(this).closest(".xrow").css("background-color","red").fadeOut("slow",(function(){jQuery(this).remove()})),0==jQuery("#AppendContainer .row").length&&jQuery("#customFieldContainer").hide("slow").remove()}))}jQuery(document).ready((function(){var e;n(),jQuery("#AddCustomField").on("click",(function(){t+=1;var e=parseInt(jQuery("#last_cf_num").val()),a=jQuery("#PageMetaName").val(),o=jQuery("#PageMetaValue").val();if(""===jQuery.trim(a)&&jQuery.trim(""===o))alert("Please fill these fields.");else{r+=1,t=e>0?e+1:t;var l='<div id="customFieldContainer"></div>';jQuery("#AppendContainer").append(l);var u='<div class="row xrow pt-3 mb-2 bg-light"> <div class="col-md-6 form-group"> <label for="PageMetaName_'+t+'">Title</label> <input type="text" name="data[PageMeta]['+t+'][title]" class="form-control" id="PageMetaName_'+t+'" value="'+a+'"> </div> <div class="col-md-6 form-group"> <label for="">Value</label> <textarea name="data[PageMeta]['+t+'][value]"" id="PageMetaValue_'+t+'" class="form-control" rows="5">'+o+'</textarea> </div> <div class="col-md-12 form-group"> <button  class="btn btn-danger btn-sm CustomFieldRemoveButton" type="button">Delete</button> </div> </div>';jQuery("#customFieldContainer").css("background-color","green").fadeIn("slow",(function(){jQuery("#customFieldContainer").append(u),jQuery("#customFieldContainer").delay(800).fadeIn(400).removeAttr("style")})),jQuery("#PageMetaName").val(""),jQuery("#PageMetaValue").val(""),jQuery("#last_cf_num").val(t)}n()})),jQuery(".allowField").on("click",(function(){var e=jQuery(this).attr("rel");if(1==jQuery(this).prop("checked")){var r=1;jQuery(".X"+e).removeClass("d-none")}else r=0,jQuery(".X"+e).addClass("d-none");var t=new Date;t.setDate(t.getDate()+30),document.cookie="isCheck_"+e+"="+r+"; expires="+t.toGMTString()+"path=/"})),e=JSON.parse(screenOptionArray),jQuery.each(e,(function(e,r){jQuery.each(r,(function(r,t){var n=function(e){for(var r=e+"=",t=decodeURIComponent(document.cookie).split(";"),n=0;n<t.length;n++){for(var a=t[n];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(r))return a.substring(r.length,a.length)}return""}("isCheck_"+e);1==(n=parseInt(n,10))?(jQuery(".X"+e).removeClass("d-none"),jQuery(".Allow"+e).prop("checked",!0)):0==n&&(jQuery(".X"+e).addClass("d-none"),jQuery(".Allow"+e).prop("checked",!1))}))})),jQuery(".editPermalinkContainer").hide(),jQuery(".editPermalink").on("click",(function(){var e=jQuery(".permalinkSlugSpan").text();jQuery(".permalinkSlugSpan").hide("slow"),jQuery(".editPermalink").hide("slow"),jQuery("#PageEditSlug").val(e),jQuery(".editPermalinkContainer").show("slow")})),jQuery(".editPermalinkOkButton").on("click",(function(){var e=jQuery("#PageEditSlug").val();jQuery(".permalinkSlugSpan").text(e),jQuery("#slug").val(e),jQuery(".editPermalinkContainer").hide("slow"),jQuery(".permalinkSlugSpan").show("slow"),jQuery(".editPermalink").show("slow")})),jQuery(".editPermalinkCancelButton").on("click",(function(){jQuery(".editPermalinkContainer").hide("slow"),jQuery(".permalinkSlugSpan").show("slow"),jQuery(".editPermalink").show("slow")})),jQuery("#ContentTitle").slug({hide:!1})})),jQuery(document).on("change","#ContentVisibility",(function(){"PP"==jQuery(this).val()?(jQuery("#PublicPasswordTextbox").slideDown("slow").removeClass("d-none"),jQuery("#ContentPassword").focus()):(jQuery("#PublicPasswordTextbox").slideUp("slow",(function(){jQuery(this).addClass("d-none")})),jQuery("#PublicPasswordTextbox").val(" "))}))}(jQuery);