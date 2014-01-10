jQuery(document).ready(function() {

	$("#comments form").on('submit', function(event) {
		event.preventDefault();
		var form = $(this);
		$.ajax({
			url: form.attr('action'),
			type: form.attr('method'),
			data: form.find('input[type="email"], textarea').serialize(),
			success: function(item) {
				var listItem = $('<li><h4>'+item.data.comment.email+'</h4><p>'+item.data.comment.message+'</p></li>')
				$('.list-group').append(listItem);
			}
		});
	});
});