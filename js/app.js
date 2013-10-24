
jQuery(document).ready(function() {
    jQuery('a[href="#imageModel"]').click(function(event) {
        var image = jQuery(this).find('img');
        var modal = jQuery('#imageModel');
        modal.find('h4').text(image.attr('alt'));
        modal.find('.modal-body').html('<img src="'+image.attr('src')+'" alt="Modal Image" class="img-responsive">');
    });
});