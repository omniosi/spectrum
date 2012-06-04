$(document).ready(function(){
	$('#slideshow').cycle({
		fx: 'fade',
		speed: 2000,
		timeout: 2000,
		pager: '#nav'
	}).after('<div id="nav">');
});