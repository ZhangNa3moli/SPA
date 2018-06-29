var timerButton = (function(config){
  var $btn = $('<input type="button" id="btn-timer-button" >'),
  timer,
  t=config.tLength;
  $(config.container).append($btn);
  
  $btn.click(function(){
      $btn.trigger('timer-button-click');
  });

  if(config.enable){
    enableBtn();
  }else{
    disableBtn();
  }

  function enableBtn(){
    $btn.val(config.title);
    $btn.removeAttr('disabled');
  }
  function disableBtn(){
    $btn.attr('disabled',"disabled");
    timer = window.setInterval(function(){
      $btn.val(config.title + '(' + t-- + 's)');
      if(t<0){
        enableBtn();
        window.clearInterval(timer);
      }
    },1000)
  }
  return $btn;
})();
