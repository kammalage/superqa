$(document).ready(function() {

	
	$('form').submit(function(){

		var colorid = $('#colorid').val();

		$('#color_box').css("background-color",colorid);

	});

});