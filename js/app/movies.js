define(["jquery", "misc"], function($, misc) {
	
	$('a[href="#link1"]').click(function(e) {
			e.preventDefault();
			misc.showContentDiv( 'contentDiv1' );
			$("#video1")[0].play();
			$("#video2")[0].pause();
			$("#video3")[0].pause();
			return false;
		
        }).mouseenter(function(e) {
			e.preventDefault();
            return false;
        }).mouseleave(function(e) {
			e.preventDefault();
            return false;
        });
	
	$('a[href="#link2"]').click(function(e) {
			e.preventDefault();
			misc.showContentDiv( 'contentDiv2' );
			$("#video2")[0].play();
			$("#video1")[0].pause();
			$("#video3")[0].pause();
            return false;
        }).mouseenter(function(e) {
			e.preventDefault();
            return false;
        }).mouseleave(function(e) {
			e.preventDefault();
            return false;
        });	
	
	$('a[href="#link3"]').click(function(e) {
			e.preventDefault();
			misc.showContentDiv( 'contentDiv3' );
			$("#video3")[0].play();
			$("#video1")[0].pause();
			$("#video2")[0].pause();
            return false;
        }).mouseenter(function(e) {
			e.preventDefault();
            return false;
        }).mouseleave(function(e) {
			e.preventDefault();
            return false;
        });	
		
	$('a[href="#link4"]').click(function(e) {
		e.preventDefault();
		misc.showImg( '#img001' );
		misc.showContentDiv( 'contentDiv4' );
		$("#video1")[0].pause();
		$("#video2")[0].pause();
		$("#video3")[0].pause();
		//$("#video4")[0].play();
		return false;
	}).mouseenter(function(e) {
		e.preventDefault();
		return false;
	}).mouseleave(function(e) {
		e.preventDefault();
		return false;
	});			
});