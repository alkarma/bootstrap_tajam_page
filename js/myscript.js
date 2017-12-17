 $(document).ready(function(){
   	$('.play_video').click(function () {
           $('.no_display').toggleClass('no_display_off');
           $(this).removeClass('play_video');
   		$(this).toggleClass('no_display');
           $('.play_video_text').removeClass('play_video_text');
   		});
   	});