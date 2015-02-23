$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'margin-left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('margin-left', '550px');
			})
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	
	$('body').keydown(function(e) {
		if(e.keyCode == 88) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	$('body').keyup(function(e) {
		if(e.keyCode == 88) {
			$('.ryu-still').show();
			$('.ryu-cool').hide();
		}
	})
	})
});

function playHadouken () {
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
