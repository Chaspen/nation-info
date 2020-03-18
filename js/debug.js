var lat;
var lng;

map.on('click', function(e) {
    alert(e.latlng);  //So you can see if it's working
    lat = e.latlng.lat;
    lng = e.latlng.lng;
});