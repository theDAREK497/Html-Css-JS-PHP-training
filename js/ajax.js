$(document).ready(function () {
	$('button').click(function () {
		$.get("../html/ajax/ajax" + $(this).attr('data-ajax') + ".html", success);
 	});

	function success(data) {
		$('#content').html(data);
 	}
}); 