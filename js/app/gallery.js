define(["jquery", "misc"], function($, misc) {
	
	$('a[href="#link1"]').click(function(e) {
			e.preventDefault();
			misc.showImg( '#img001' );
			misc.showContentDiv( 'contentDiv1' );
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
			misc.showImg( '#img001b' );
			misc.showContentDiv( 'contentDiv2' );
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
			misc.showImg( '#img001c' );
			misc.showContentDiv( 'contentDiv3' );
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
			misc.showImg( '#img001d' );
			misc.showContentDiv( 'contentDiv4' );
			return false;
    }).mouseenter(function(e) {
		e.preventDefault();
        return false;
    }).mouseleave(function(e) {
		e.preventDefault();
        return false;
    });

	$('a[href="#link5"]').click(function(e) {
			e.preventDefault();
			misc.showImg( '#img001e' );
			misc.showContentDiv( 'contentDiv5' );
	        return false;
	    }).mouseenter(function(e) {
			e.preventDefault();
	        return false;
	    }).mouseleave(function(e) {
			e.preventDefault();
	        return false;
	    });	
	
	$('a[href="#link6"]').click(function(e) {
			e.preventDefault();
			misc.showImg( '#img001f' );
			misc.showContentDiv( 'contentDiv6' );
	        return false;
	    }).mouseenter(function(e) {
			e.preventDefault();
	        return false;
	    }).mouseleave(function(e) {
			e.preventDefault();
	        return false;
	    });		
	});