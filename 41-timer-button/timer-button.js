
var timerButton=(function() {
  var html='<input type="button" class="timer-button" id="btn" value="同意(6s)" disabled>';
  var $btn=$('<input type="button" class="timer-button"  disabled>');
  var cfg={
    container:'body',
    num:6,
    title:'同意'
  },
  timer;
     
//第一种外部引用css样式     
//第二种在js中添加样式
  // $btn.css({
  //   height:'50px',
  //   width:'100px'
  // });
  function show(conf){
    //Dom绘制、事件绑定
    // $(a).html(html)
    $(cfg.container).append($btn);
    $.extend(cfg,conf);
    $btn.val(cfg.title+'('+cfg.num+'s)')
    timer =setInterval(function(){
      cfg.num--;
      if(cfg.num===0){
        clearInterval(timer);
        $btn.val(cfg.title);
        $btn.removeAttr('disabled');
      }
      else{
        $btn.val(cfg.title+'('+cfg.num+"s)")
      }
    },1000);
    $btn.click(function(){
      alert('谢谢');
  
    });

  }
  
  return {
    show:show
  }
//封装后的几种形态
// 1、全局对象
// var timerBtn{
//   show:function={

//   }
// }
// 2、工厂函数，函数返回值是一个简单对象字面量，
// var timerBtn=(function(){
//   return {
//     show:function(){}
//   }
// }())
// 3、构造方法
// function TimerBtn(){

// }
// var tb=new TimerBtn();


}());
