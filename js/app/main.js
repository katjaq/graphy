define(["jquery"], function($) {
    $(function() {

    });
	
	$(window).bind('resize', function() {

	});
	
	function clearPreview( e ) {
		//$("#title").text("*graphy");
		//$('#previewDiv').css('display', 'none');
        e.preventDefault();
		return false;
	};
	
	$('a[href="#calli"]').click(function(e) {
	        e.preventDefault();
			//window.location = "http://calli.graphy.eu";
			window.location = "calligraphy";
            return false;
        }).mouseenter(function(e) {
			$("#title").text("calligraphy");
			$('#previewImg').attr( 'src', 'calligraphy/preview.jpg' );
			$('#previewDiv').css('display', 'block');
            e.preventDefault();
            return false;
        }).mouseleave( function( e ) { clearPreview( e ) });
            
        
	
	$('a[href="#bio"]').click(function(e) {
			//window.location = "http://bio.graphy.eu";
			window.location = "biography";
            e.preventDefault();
            return false;
        }).mouseenter(function(e) {
			$("#title").text("biography");
			$('#previewImg').attr( 'src', 'biography/preview.jpg' );
			$('#previewDiv').css('display', 'block');
            e.preventDefault();
            return false;
        }).mouseleave( function( e ) { clearPreview( e ) });
	
	$('a[href="#choreo"]').click(function(e) {
			//window.location = "http://choreo.graphy.eu";
			window.location = "choreography";
            e.preventDefault();
            return false;
        }).mouseenter(function(e) {
			$("#title").text("choreography");
			$('#previewImg').attr( 'src', 'choreography/preview.jpg' );
			$('#previewDiv').css('display', 'block');
            e.preventDefault();
            return false;
        }).mouseleave( function( e ) { clearPreview( e ) });
	
	$('a[href="#litho"]').click(function(e) {
			//window.location = "http://litho.graphy.eu";
			window.location = "lithography";
			e.preventDefault();
            return false;
        }).mouseenter(function(e) {
			$("#title").text("lithography");
			$('#previewImg').attr( 'src', 'lithography/preview.jpg' );
			$('#previewDiv').css('display', 'block');
            e.preventDefault();
            return false;
        }).mouseleave( function( e ) { clearPreview( e ) });
		
	$('a[href="#photo"]').click(function(e) {
			//window.location = "http://photo.graphy.eu";
			window.location = "photography";
            e.preventDefault();
            return false;
        }).mouseenter(function(e) {
			$("#title").text("photography");
			$('#previewImg').attr( 'src', 'photography/preview.jpg' );
			$('#previewDiv').css('display', 'block');
            e.preventDefault();
            return false;
        }).mouseleave( function( e ) { clearPreview( e ) });
		
	$('a[href="#seri"]').click(function(e) {
			//window.location = "http://seri.graphy.eu";
			window.location = "serigraphy";
            e.preventDefault();
            return false;
        }).mouseenter(function(e) {
			$("#title").text("serigraphy");
			$('#previewImg').attr( 'src', 'serigraphy/preview.jpg' );
			$('#previewDiv').css('display', 'block');
            e.preventDefault();
            return false;
        }).mouseleave( function( e ) { clearPreview( e ) });

	$('a[href="#tomo"]').click(function(e) {
			//window.location = "http://tomo.graphy.eu";
			window.location = "tomography";
            e.preventDefault();
            return false;
        }).mouseenter(function(e) {
			$("#title").text("tomography");
			$('#previewImg').attr( 'src', 'tomography/preview.jpg' );
			$('#previewDiv').css('display', 'block');
            e.preventDefault();
            return false;
        }).mouseleave( function( e ) { clearPreview( e ) });
		
	$('a[href="#typo"]').click(function(e) {
			//window.location = "http://typo.graphy.eu";
			window.location = "typography";
            e.preventDefault();
            return false;
        }).mouseenter(function(e) {
			$("#title").text("typography");
			$('#previewImg').attr( 'src', 'typography/preview.jpg' );
			$('#previewDiv').css('display', 'block');
            e.preventDefault();
            return false;
        }).mouseleave( function( e ) { clearPreview( e ) });
		
});