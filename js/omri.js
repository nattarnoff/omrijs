function omri(options){
  var options = options || {};
  options = {
    animationLabel : options.animationLabel ||  'Animation is',
    statusLabel : options.statusLabel || 'off',
    defaultState : options.defaultState || false,
    positionFixed : options.positionFixed || false,
    positionAbsolute : options.positionAbsolute || false,
    animationClass: options.animationClass || 'animate-on'
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
    ,$1st = $b.firstChild
    , node = _d.createElement('div')
    , label = _d.createElement('label')
    , tog = _d.createElement('span')
    , input = _d.createElement('input');
    if(!$b.classList.contains(options.animationClass)){
      $b.classList.add(options.animationClass);
    };
    //if(document.body != null){ document.body.appendChild(template); }
    $b.insertBefore(node, $1st);
    node.appendChild(label);
    node.appendChild(input);
    label.appendChild(tog).classList.add('switch-wrapper');
    node.classList.add('animation-switch');
};

omri({
  //animationLabel : 'Animate',
  //statusLabel : 'play'
});


/*<div class="animation-switch">
  <label for="checkbox">Animation is <span class="status">on</span>
  <span class='switch-wrapper'>
  </span></label>
  <input type="checkbox" id="checkbox" class="visuallyHidden"/>
</div>*/
