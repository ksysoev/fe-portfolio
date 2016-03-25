function init() {
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
};

ymaps.ready(init);
var myMap;

(function() {
  'use strict';
  if ('querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {
    var smoothScroll = function(anchor, duration) {
      var startLocation = window.pageYOffset;
      var endLocation = anchor.offsetTop + 30;
      var distance = endLocation - startLocation;
      var increments = distance / (duration / 10);
      var stopAnimation;
      var pageElement = document.querySelector('.page');
      var animateScroll = function() {
        pageElement.scrollTop += pageElement.scrollTop/10 + increments;
        if ( pageElement.scrollTop > endLocation ) {
          pageElement.scrollTop = endLocation;
        }
        stopAnimation();
      };
      stopAnimation = function() {
          var travelled = pageElement.scrollTop;
          if ((travelled >= (endLocation - increments))) {
            clearInterval(runAnimation);
          }
        };
      var runAnimation = setInterval(animateScroll, 10);
    };

    var scrollToggle = document.querySelectorAll('a[href^="#"]');
    [].forEach.call(scrollToggle, function(toggle) {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        var dataID = toggle.getAttribute('href');
        var dataTarget = document.querySelector(dataID);
        if (dataTarget) {
          smoothScroll(dataTarget, 3000);
        }

      }, false);

    });

  }

})();