 ymaps.ready(init);
    var myMap;

    function init(){     
        var myMap = new ymaps.Map("map", {
            center: [59.938811, 30.315185],
            zoom: 13,
            controls: []
        });
       myMap.geoObjects.add(new ymaps.GeoObject({
          geometry: {
              type: "Point",
              coordinates: [59.938811, 30.315185]
          }
      }, {
          preset: "twirl#blueStretchyIcon",
          iconLayout: 'default#image',
          iconImageHref: 'images/map__marker.png',
          iconImageSize: [53, 60],
          iconImageOffset: [-26.5, -60]
      }))
    }

