define(["jquery"], function($) {
	$(function() {
		$(".content").each(function(){
			
			$(this).click( function(e) {
				e.preventDefault();
				$( this ).css( 'width', '640px' );
				$( this ).css( 'height', '500px' );
				$( this ).css( 'margin', '0' );
				$( this ).css( 'padding', '0' );
				$( this ).css( 'background-color', '#000' );
				$( this ).css( 'top', '320px' );
				$( this ).css( 'left', '240px' );
				$( this ).css( 'zoom', '1' );
				$( '#' + this.id + "b" ).css( 'display', 'block' );
				
				$( '.container' ).css( 'background', ' #000000' );
				$( '.container' ).css( 'position', 'absolute' );
				$( '.container' ).css( 'left', '50%' );
				$( '.container' ).css( 'width', ' 880px' );
				$( '.container' ).css( 'height', ' 1200px' );
				$( '.container' ).css( 'margin', '0 0 0 -440px' );  

				return false;
			});
			
			
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
				$image.click( function(e) {
					e.preventDefault();
					var _id =  $( '#' + this.id ).closest("div").attr("id");
					_id = _id.substring( 0, _id.length - 1 );
					_id = '#' + _id;
//					$( _id ).css( 'width', '100%' );
//					$( _id ).css( 'height', '100%' );
//					$( _id ).css( 'margin', '0' );
//					$( _id ).css( 'padding', '0' );
//					$( _id ).css( 'background-color', '#000' );
					$( _id ).css( 'top', '0' );
					$( _id ).css( 'left', '0' );
					$( _id ).css( 'zoom', '2' );
					$( _id ).css( 'margin', 'auto' );
					$( _id ).css( 'height', 'auto' );
					$( _id ).css( 'max-height', '100%' );
					$( _id ).css( 'width', 'auto' );
					$( _id ).css( 'max-width', '100%' );
					$( _id + "b" ).css( 'display', 'none' );
					
					$( '.container' ).css( 'background', ' #000000' );
					$( '.container' ).css( 'position', 'absolute' );
					$( '.container' ).css( 'left', '0px' );
					$( '.container' ).css( 'width', ' 100%' );
					$( '.container' ).css( 'height', ' 100%' );
					$( '.container' ).css( 'margin', '0 0 0 0' );  
				
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