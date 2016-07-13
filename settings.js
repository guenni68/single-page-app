function getInfo() {
	return "settings";
}
 
function onLoad() {
	$.get( "settings.txt", function( data ) {
		$('#mainSection').html(data);
	});
}