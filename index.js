function loadScript( scriptName ){
	$.getScript( scriptName )
		.done(function( script, textStatus ) {
			console.log( getInfo() );
			onLoad();
		}).fail(function( jqxhr, settings, exception ) {
			console.log( "Triggered ajaxError handler." );
		});
}

function displayHash(hash){
	if(hash){
		console.log(hash );
		// assumes that the anchor tag and li tag 
		//remove the current anchor tag
		$( ".active" ).removeClass("active");
		$('a[href="'+ hash +'"]').parent().addClass("active");
		
		loadScript(hash.replace("#", "") + ".js" );
		
	}
}


$( document ).ready(function() {
    console.log( "ready!" );
	if(window.location.hash){
		displayHash(window.location.hash );
	}
	else{
		loadScript('overview.js');
	}
	$(window).on('hashchange', function(){
		// On every hash change the render function is called with the new hash.
		displayHash(window.location.hash );
	});
});