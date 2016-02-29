(function(){

  'use strict';

  var background = document.getElementById('js-background-box');

  background.addEventListener('click', function(event) {
    background.textContent = 'click';

    setTimeout(function() {
      background.textContent = '';
    }, 500);
  }, false);

}());
