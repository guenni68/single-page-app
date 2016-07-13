function getInfo() {
	return "profile";
}
 
function onLoad() {
	$.get( "profile.txt", function( data ) {
		$('#mainSection').html(data);
	});
}