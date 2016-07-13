function getInfo() {
	return "reports";
}
 
function onLoad() {
	$.get( "reports.txt", function( data ) {
		$('#mainSection').html(data);
	});
}