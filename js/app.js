
jQuery(document).ready(function() {
    jQuery('a[href="#imageModel"]').click(function(event) {
        var image = jQuery(this).find('img');
        var modal = jQuery('#imageModel');
        modal.find('h4').text(image.attr('alt'));
        modal.find('.modal-body').html('<img src="'+image.parent().data('modal-src')+'" alt="Modal Image" class="img-responsive">');
    });

    jQuery('#carousel-example').on('slide.bs.carousel', jQuery.proxy(slider_images.changeDivsToEmptyImages, slider_images, true));
});

slider_images = new Imager('.carousel .delayed-image-load', { availableWidths: [240, 480, 640, 720, 940, 1140], forceSameSize: true, lazyload: true});
new Imager('article .delayed-image-load', { availableWidths: [117, 194, 236], className: 'img-thumbnail', lazyload: true });