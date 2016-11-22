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
    , $1st = $b.firstChild
    , node = _d.createElement('div')
    , label = _d.createElement('label')
    , tog = _d.createElement('span')
    , statusOn = _d.createElement('span')
    , statusOff = _d.createElement('span')
    , switchWrapper = _d.createElement('span')
    , input = _d.createElement('input');

    if(!$b.classList.contains(options.animationClass)){
      $b.classList.add(options.animationClass);
    };

    $b.insertBefore(node, $1st);
    node.classList.add('animation-switch');
    node.appendChild(label).setAttribute('for','animationToggle');
    label.textContent= options.animationLabel;
    label.appendChild(switchWrapper).classList.add('switch-wrapper');
    switchWrapper.appendChild(statusOn).classList.add('on','status');
    statusOn.textContent = "On";
    switchWrapper.appendChild(statusOff).classList.add('off','status')
    statusOff.textContent = 'Off';
    label.insertBefore(input, label.firstChild).setAttribute('type','checkbox');
    input.setAttribute('id','animationToggle');
    input.classList.add('visuallyHidden');
    input.classList.add('toggle');
    if(options.defaultState === true){
      input.setAttribute('checked', 'checked');
    };
    // function isChecked(){
    //look to see if the toggle is checked
    //if toggle:checked, remove active class from on
    //add active class to off
  //}
};
