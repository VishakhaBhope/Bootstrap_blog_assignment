
function initialize() {
  
  var mapProp = {
    center:new google.maps.LatLng(18.5514,73.9508),
    zoom:5,
	
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);