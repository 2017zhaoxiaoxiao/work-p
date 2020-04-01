
define(['jquery'],function($){
  function TimerButton(){
      var cfg={
        container:'body',
        num:6,
        title:'同意',
        onclick:null
      },
      timer,
      num;
      var $btn=$('<input type="button" class="timer-button"  disabled>');
    
    this.show=function(conf){
      $(cfg.container).append($btn);
      $.extend(cfg,conf);
      num = cfg.num;
      $btn.val(cfg.title+'('+num+'s)')
      timer =setInterval(function(){
        num--;
        if(num===0){
          clearInterval(timer);
          $btn.val(cfg.title);
          $btn.removeAttr('disabled');
        }
        else{
          $btn.val(cfg.title+'('+num+"s)")
        }
      },1000);
      
      $btn.click(cfg.onclick);
    }
  }
  
  
});


