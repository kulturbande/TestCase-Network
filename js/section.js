jQuery(document).ready(function() {
	var commentGroup = $('.list-group');
	var commentGroupPosition = commentGroup.offset();
	var height = $(window).height();
	var lazy_load = false;

	var addListItem = function(data) {
		var listItem = $('<li><h4>'+data.email+'</h4><p>'+data.message+'</p></li>');
		commentGroup.append(listItem);
	}

	$("#comments form").on('submit', function(event) {
		event.preventDefault();
		var form = $(this);
		$.ajax({
			url: form.attr('action'),
			type: form.attr('method'),
			data: form.find('input[type="email"], textarea').serialize(),
			success: function(item) {
				addListItem(item.data.comment);
			}
		});
	});

	$(document).on('scroll', function() {
		if (!lazy_load && ($(window).scrollTop() + height > commentGroupPosition.top)) {
			lazy_load = true;
			$.ajax({
				url: 'network/branch_data',
				success: function(items) {
					$.each(items.data, function(index, value) {
						addListItem(value.comment);
					});
				}
			});
		}
	});
});