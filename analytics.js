function getInfo() {
	return "analytics";
}
 
function onLoad() {
	$.get( "analytics.txt", function( data ) {
		$('#mainSection').html(data);
	});
}