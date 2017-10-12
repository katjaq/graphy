define(["jquery"], function($) {
	$(function() {
		$(".content").each(function(){
			var images = $(this).find( "img" );
			for( var i = 0; i < images.length; ++i )
			{
				var $image = $( '<img />' );
				$image.attr( 'id', images[i].id + 'Thumb' );
				$image.attr( 'src', images[i].src );
				$image.mouseenter( function(e) {
					e.preventDefault();
					
					var _id =  '#' + this.id;
					_id = _id.substring( 0, _id.length - 5 );
					showImg( _id );
					return false;
				});
				
				
				$( '#' + this.id + 'b' ).append($image);
			}
		});
    });

	function showImg( image ) {
		$( ".content img:visible" ).hide();	
		$( image ).show();
	};		
	
	function showContentDiv( id ) {
		$(".content").each(function(){
			$(this).css('display', 'none');
			$('#'+id).css('display', 'block');
		});
		$(".thumbDiv").each(function(){
			$(this).css('display', 'none');
			$('#'+id+'b').css('display', 'block');
		});
	};
	

	var currentPlayer;
	function startYT( container, videoId ) {
		var player = {
			playVideo: function( container, videoId ) {
				if ( typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined' ) 
				{
					window.onYouTubeIframeAPIReady = function() {
						player.loadPlayer( container, videoId );
					};

					$.getScript( '//www.youtube.com/iframe_api' );
				} 
				else 
				{
					player.loadPlayer( container, videoId );
				}
			},

			loadPlayer: function( container, videoId ) {
				new YT.Player( container, {
					videoId: videoId,
					width: 640,
					height: 360,
					playerVars: {
						autoplay: 1,
						controls: 1,
						modestbranding: 0,
						rel: 0,
						showInfo: 0,
						enablejsapi: 1
					}
				});
			}
		};
		currentPlayer = player;
		player.playVideo( container, videoId );
	};
	return {
		showImg: showImg,
		startYT: startYT,
		showContentDiv: showContentDiv
	};

});