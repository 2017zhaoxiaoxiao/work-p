require.config({
  'paths':{
    'jquery':
  }
})

require(['jquery'],function($){
$(function(){
    var btnAdd=$("#add");
    btnAdd.click(function(){
        require(['timer-button'],function(TimerButton){
      var tb=new TimerButton();
      tb.show({
        num:Number($('#number').val()),
        title:"获取验证码",
        onclick:function(){
          alert('点击成功');
        }

    });
      });
    });
  });
})