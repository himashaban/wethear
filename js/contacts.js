function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 50.8461241,
      lng: 4.3526449,
    },
    scrollwheel: false,
    zoom: 15,
  });

  $.getJSON("http://beta.json-generator.com/api/json/get/N1us4Mp-M")
    .done(function (data) {
      $.each(data, function () {
        // Create a marker and set its position.
        var poi = this;
        var marker = new google.maps.Marker({
          map: map,
          position: {
            lat: parseFloat(poi.latitude),
            lng: parseFloat(poi.longitude),
          },
          title: poi.title,
          icon: "https://mt.google.com/vt/icon?psize=20&font=fonts/Roboto-Regular.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-blue.png&ax=44&ay=48&scale=1&text=%E2%80%A2",
        });
      });
    })
    .fail(function () {
      alert("cannot get data");
    });
}

initMap();
