// Leaflet demo map used by map/leaflet-map.html
// Loads an optional GeoJSON layer and fails visibly rather than silently.

var map = L.map('map').setView([34.0556, -117.1825], 11); // Redlands, CA

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Point this at a GeoJSON file that exists in the repo before enabling.
var GEOJSON_URL = null;

if (GEOJSON_URL) {
  fetch(GEOJSON_URL)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('GeoJSON request failed with status ' + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      var layer = L.geoJSON(data).addTo(map);
      map.fitBounds(layer.getBounds());
    })
    .catch(function (error) {
      console.error('Could not load GeoJSON layer:', error.message);
    });
}
