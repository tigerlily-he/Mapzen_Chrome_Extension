
window.onload = function () {
  geocoder.focus();
}

  var map = L.Mapzen.map('map', {
  center: [40.74429, -73.99035],
  zoom: 15,
  scene: L.Mapzen.HouseStyles.Refill
  })

  map.zoomControl.setPosition('bottomright');
  // Set default view on New York at zoom level 13
  map.setView([40.758, -73.984], 15);
  // geocoder.addTo(map);
  var geocoder = L.Mapzen.geocoder('search-68DPJxM', {
    focus: true,
    placeholder: 'Search',
    fullWidth: 100,
  }).addTo(map);

  // var selectedText = window.getSelection().toString();
  // if (selectedText != "") {
    chrome.tabs.executeScript( {
        code: "window.getSelection().toString();"
    }, function(selection) {
        geocoder._input.value = selection[0];
        geocoder.focus();
        var search_icon = document.getElementsByClassName("leaflet-pelias-search-icon")[0];
        search_icon.click();
        geocoder.search(selection[0]);
    });

  // }
