mapboxgl.accessToken = 'pk.eyJ1IjoicmtndXptYW4iLCJhIjoiY2tvMWw0cGNyMG10ODJucnQ3eGUybjE1bSJ9.Enep2UHty3TdsDtDp7rNUg';

var lat = 19.3687829;
var lon = -99.0810536;


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lon, lat],
    zoom: 15
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

map.on('mousemove', function (e) {
    document.getElementById('coordenadas').innerHTML =
        JSON.stringify(e.lngLat);
});


var geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [lon, lat]
        },
        'properties': {
            'image': '../assets/user.svg',
          'title': 'Usuario',
          'description': 'Última conexión'
        }
      },
    ]
  };



  geojson.features.forEach(function (marker) {
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

   new mapboxgl.Marker(el)
   .setLngLat(marker.geometry.coordinates)
   .setPopup(
     new mapboxgl.Popup({ offset: 25 }) 
       .setHTML(
         '<h3>' +
           marker.properties.title +
           '</h3><p>' +
           marker.properties.description +
           '</p>'
       )
   )
   .addTo(map);
});


const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});