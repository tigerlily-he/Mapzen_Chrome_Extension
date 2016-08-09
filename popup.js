console.log("connection works");
var map = L.Mapzen.map('map', {
center: [40.74429, -73.99035],
zoom: 15,
scene: L.Mapzen.HouseStyles.Refill
})

/* var map = L.Mapzen.map('map', {
    scene: L.Mapzen.houseStyles.Refill
  }) */
  map.zoomControl.setPosition('bottomright');
  // Set default view on New York at zoom level 13
  map.setView([40.74, -73.98], 12);
  // geocoder.addTo(map);
  var geocoder = L.Mapzen.geocoder('search-68DPJxM');
  L.Mapzen.geocoder('search-68DPJxM', {
  focus: true,
  placeholder: 'Search',
  fullWidth: 100,
  expanded: true,
}).addTo(map);
  //Adds hash to change url according to the position
  L.Mapzen.hash({
    map: map
  })
  // var marker = L.Mapzen.marker();
  // marker([40.7, -74]).addTo(map);
  //Adds locator
  // var locator = L.Mapzen.locator();
  // locator.setPosition('bottomright');
  // locator.addTo(map);
  chrome.tabs.executeScript( {
      code: "window.getSelection().toString();"
  }, function(selection) {
      document.getElementById("selected-text").innerHTML = selection[0];
      console.log(document.getElementById("selected-text").innerHTML);
  });
