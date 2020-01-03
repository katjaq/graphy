define(["jquery", "misc"], function($, misc) {
	$('a[href="#fiwi"]').click(function(e) {
			e.preventDefault();
			misc.showContentDiv( 'contentDiv1' );
			$("#video3")[0].pause();
			$("#video4")[0].pause();
			var $ytdiv = $( '<div />' );
			$ytdiv.attr( 'id', 'ytplayer' );
			$( '#contentDiv1' ).append($ytdiv);
			misc.startYT( 'ytplayer', 'jtwKYvI8tVQ' );
			return false;
        }).mouseenter(function(e) {
			e.preventDefault();
            return false;
        }).mouseleave(function(e) {
			e.preventDefault();
            return false;
        });
	
	$('a[href="#brain"]').click(function(e) {
			e.preventDefault();
			misc.showContentDiv( 'contentDiv2' );
			$( '#contentDiv1' ).empty();
			$("#video3")[0].pause();
			return false;
        }).mouseenter(function(e) {
			e.preventDefault();
            return false;
        }).mouseleave(function(e) {
			e.preventDefault();
            return false;
        });	
	
	$('a[href="#brain2"]').click(function(e) {
			e.preventDefault();
			window.open( "http://openscience.cbs.mpg.de/brainnetworks/" );
			return false;
        });	
	
	$('a[href="#instal"]').click(function(e) {
			e.preventDefault();
			misc.showContentDiv( 'contentDiv3' );
			$( '#contentDiv1' ).empty();
			$("#video3")[0].play();
            return false;
        }).mouseenter(function(e) {
			e.preventDefault();
            return false;
        }).mouseleave(function(e) {
			e.preventDefault();
            return false;
	    });

	// 	$('a[href="#instal"]').click(function(e) {
	// 	e.preventDefault();
	// 	misc.showContentDiv( 'contentDiv3' );
	// 	$("#video3")[0].pause();
	// 	$("#video4")[0].pause();
	// 	var $ytdiv = $( '<div />' );
	// 	$ytdiv.attr( 'id', 'ytplayer' );
	// 	$( '#contentDiv3' ).append($ytdiv);
	// 	misc.startYT( 'ytplayer', 'LtsBZlw5nQI' );
	// 	return false;
	// }).mouseenter(function(e) {
	// 	e.preventDefault();
	// 	return false;
	// }).mouseleave(function(e) {
	// 	e.preventDefault();
	// 	return false;
	// });

	$('a[href="#arssub"]').click(function(e) {
			e.preventDefault();
			misc.showContentDiv( 'contentDiv4' );
			$( '#contentDiv1' ).empty();
			$("#video3")[0].pause();
			$("#video4")[0].play();
            return false;
        }).mouseenter(function(e) {
			e.preventDefault();
            return false;
        }).mouseleave(function(e) {
			e.preventDefault();
            return false;
        });

	$('a[href="#artofmr"]').click(function(e) {
			e.preventDefault();
			misc.showContentDiv( 'contentDiv4' );
			$("#video3")[0].pause();
			$("#video4")[0].pause();
			var $ytdiv = $( '<div />' );
			$ytdiv.attr( 'id', 'ytplayer2' );
			$( '#contentDiv1' ).append($ytdiv);
			misc.startYT( 'ytplayer2', 'LtsBZlw5nQI' );
			return false;
		}).mouseenter(function(e) {
			e.preventDefault();
			return false;
		}).mouseleave(function(e) {
			e.preventDefault();
			return false;
		});

		
	$('a[href="#inter"]').click(function(e) {
			e.preventDefault();
			misc.showContentDiv( 'viewer-div' );
			$( '#contentDiv1' ).empty();
			$("#video3")[0].pause();
			$("#video4")[0].pause();
            return false;
        }).mouseenter(function(e) {
			e.preventDefault();
            return false;
        }).mouseleave(function(e) {
			e.preventDefault();
            return false;
        });
		
});