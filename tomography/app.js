requirejs.config({
    "baseUrl": "./static/javascripts/util",
    "paths": {
      "app": "../app",
	  "lib": "../lib",
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
	  "gfx": "../gfx"
    }
});

// Load the main app module to start the app
require(['jquery', 'misc', 'ui', 'io', 'gfx/viewer', 'gfx/mygl', 'html5slider'], 
		function($, misc, ui, io, viewer, mygl ) {
    $(function() {
    	// Sobald wir mit dem DOM arbeiten koennen,
        $(document).ready(function() {
		
			$('a[href="#fiwi"]').click(function(e) {
				e.preventDefault();
				misc.showContentDiv( 'contentDiv1' );
				$("#video3")[0].pause();
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
					$("#video4")[0].pause();
					$("#video3")[0].play();
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
					$( '#contentDiv1' ).empty();
					$("#video4")[0].play();
					$("#video3")[0].pause();
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
					return false;
				}).mouseenter(function(e) {
					e.preventDefault();
					return false;
				}).mouseleave(function(e) {
					e.preventDefault();
					return false;
				});
		
			$('a[href="#unfolding"]').click(function(e) {
				    e.preventDefault();
				    $( '#contentDiv1' ).empty();
				    $("#video3")[0].pause();
				    $("#video4")[0].pause();
				    misc.showImg( '#img001' );
				    misc.showContentDiv( 'contentDiv5' );
				    return false;
			    }).mouseenter(function(e) {
			     e.preventDefault();
			     return false;
			    }).mouseleave(function(e) {
			     e.preventDefault();
			     return false;
			    });
		
        	/**
        	 * Provides requestAnimationFrame in a cross browser way.
        	 */
        	window.requestAnimFrame = (function() {
        	  return window.requestAnimationFrame ||
        	         window.webkitRequestAnimationFrame ||
        	         window.mozRequestAnimationFrame ||
        	         window.oRequestAnimationFrame ||
        	         window.msRequestAnimationFrame ||
        	         function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
        	           window.setTimeout(callback, 1000/60);
        	         };
        	})();
        	
            if (!window.WebGLRenderingContext) {
                $('html').addClass('no-webgl');
            }
            
            // INIT VIEWER
            window.setTimeout(function() {
                var $vc = $('#viewer-canvas');
                $vc.attr({
                    'width': $vc.width(),
                    'height': $vc.height()
                });
                
                if (!$('#viewer-div').is('.deactivated')) {
                	// hier wird der eigentliche WebGL-Viewer initialisiert 
                	try {
                		mygl.initGL( $vc.get(0) );
                		mygl.initPeel();
                	} catch (e) {
                		console.error('webglNotSupported', e);
                		return;
                	}
                	                	
                	viewer.init({
                	    'backgroundColor': [0.99,0.99,0.98,1]
                	}, loadElements);
                	$(window).trigger('resize');
                };
            }, 200);
        });
        
        function loadElements() {
        	io.loadElements( ui.loadElementStart, ui.elementLoaded, ui.allElementsLoaded );
        }        
        
        
        // method for synchronous loading of json files
        // $.getJSON works asynchronous.
        $.getSyncJSON = function(url, callback) {
            return $.parseJSON(jQuery.ajax({
                'type': 'GET',
                'url': url,
                'success': callback,
                'dataType': 'json',
                'async': false
            }).responseText);
        };
    });
});