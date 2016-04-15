(function (){
  var classRegExp = /backToTop_state_visible/;
  window.addEventListener('scroll', function() {
    var backToTop = document.querySelector('.backToTop');
    if (document.body.scrollTop > 200  && !classRegExp.test(backToTop.className)) {
        backToTop.className += ' backToTop_state_visible';
    }
    else if (document.body.scrollTop <= 200  && classRegExp.test(backToTop.className)) {
      backToTop.className = 'backToTop';
    }
  });
})();