function motionDetector(options){
  var options = options || {};
  options = {
    animationLabel : options.animationLabel ||  'Animation is',
    statusLabel : options.statusLabel || 'off',
    defaultState : options.defaultState || false,
    positionFixed : options.positionFixed || false,
    positionAbsolute : options.positionAbsolute || false,
    /*color : {
      text : options.color.text || '#ffffff',
      bar : options.color.bar || '#333333',
      toggle : options.color.toggle || '#00ff00',
      input : options.color.input || '#cccccc'
    }*/
  };


  
  var  _d = document,
    _w = window,
    $b = _d.querySelector('body')
    ,template = '<div class="animation-switch"><label for="checkbox" aria-live="aggressive">'+options.animationLabel;
    template += ' <span class="status">'+options.statusLabel+'</span>';
    template += '<span class="switch-wrapper"></span></label>';
    template += '<input type="checkbox" id="checkbox" class="visuallyHidden"/></div>';
    //if(document.body != null){ document.body.appendChild(template); }
    _d.write(template);
};

motionDetector({
  //animationLabel : 'Animate',
  //statusLabel : 'play'
});
