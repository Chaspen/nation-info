

var map = L.map('map', {
    zoomSnap: 0.1,
    center: [54.5260, 15.2551],
    zoom: 3.5,
    animation: true,
    duration: 5
});





L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token',
}).addTo(map);

