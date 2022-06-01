let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 21.0288408, lng: 105.7812166 },
        zoom: 18,
    });
}

window.initMap = initMap;