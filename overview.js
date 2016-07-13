function getInfo() {
	return "overview";
}
 
function onLoad() {
	$.get( "overview.txt", function( data ) {
		$('#mainSection').html(data);
	});
}