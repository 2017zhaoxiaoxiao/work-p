var $dlgGoto = (function() {
  var $dlg = $(''
    +'<div>'
    +'<div class="slider" id="slider">'
      +'<div class="slide"><img src="img/b5.png" alt=""></div>'
      +'<div class="slide"><img src="img/b1.png" alt=""></div>'
      +'<div class="slide"><img src="img/b2.png" alt=""></div>'
      +'<div class="slide"><img src="img/b3.png" alt=""></div>'
      +'<div class="slide"><img src="img/b4.png" alt=""></div>'
      +'<div class="slide"><img src="img/b5.png" alt=""></div>'
      +'<div class="slide"><img src="img/b1.png" alt=""></div>'
  +'</div>'
  +'<span id="left"><</span>'
  +'<span id="right">></span>'
  +'<ul class="nav" id="navs">'
    +'<li class="active">1</li>'
    +'<li>2</li>'
    +'<li>3</li>'
    +'<li>4</li>'
    +'<li>5</li>'
  +'</ul>'
  +'</div>'
  );
        

  var left = $dlg.find('#left')[0],
      right = $dlg.find('#right')[0],
      box=$('#box')[0],
      slider=$dlg.find('#slider'),
      
      nav = $dlg.find('.nav').children();
      console.log(slider);
  var index=1;
  var cfg = {
    container:'#box'
    
  };
  var time;
  var timer;
  right.onclick=next;
  left.onclick=prev;
  for(var i=0;i<nav.length;i++){
    nav[i].idx=i;
    nav[i].onclick=function(){
      index=this.idx+1;
      animate(slider,{left:index*-1200})
      navChange();
    }
  }
  function show(conf) {
    $(cfg.container).append($dlg);
    $.extend(cfg, conf);
    time=cfg.time;
    console.log(time);
    timer=setInterval(next,time);
  }
	function next(){
    index++;
    
			if(index>=6){
        index=1;
        slider.animate({left: -7200},'slow',()=>{
          console.log(slider.css('left'));
          slider.css('left',-1200);
        })
      }
      else{
        slider.animate({left:-1200*index},'slow');
      }
      navChange();
        
       
     
	}
		function prev(){
				index--;
				if(index==0){
          index=5;
          slider.animate({left:-1200*0},'slow',()=>{
            slider.css('left',-6000);
          })
          
        }
        else{
          slider.animate({left:-1200*index},'slow');
          
        }
			
				navChange();
			}
			//鼠标划上时停止轮播，左右箭头淡入
			box.onmouseover=function(){
        left.style.opacity=0.5;
        right.style.opacity=0.5;
       
				clearInterval(timer);
        
		
			}
			//鼠标划离时开始轮播，左右箭头淡出
			box.onmouseout=function(){
        left.style.opacity=0;
        right.style.opacity=0;
       
			
				timer=setInterval(next,3000);
			}
		
			function navChange(){
       
				for(var i=0;i<nav.length;i++){
          nav[i].className="";
        }
       
				if(index==6){
         
          nav[0].className='active';
         
				}
				else if(index==0){
         
					nav[4].className='active';
				}
				else{
          
          nav[index-1].className="active";
          
        }
			}
	
      // function getStyle(obj,style){
			
      //   if(window.getComputedStyle(obj,null)){
      //     return window.getComputedStyle(obj,null)[style];
      //   }
      //   else{
      //     return obj.currentStyle[style];	
      //   }
      // }
    // function animate(obj,json,callback){
    //     clearInterval(obj.timer);
    //     obj.timer=setInterval(
    //       function(){
    //       var isStop=true;	
    //       for(var attr in json){
    //         if(attr=='opacity'){
    //           var now=parseInt(getStyle(obj,attr)*100);
    //         }
    //         else{
    //           var now=parseInt(getStyle(obj,attr));
    //         }
    //         var speed=(json[attr]-now)/30;
    //         speed=speed>0?Math.ceil(speed):Math.floor(speed);
    //         if(attr=='opacity'){
    //           obj.style[attr]=(now+speed)/100;
    //         }
    //         else{
    //           obj.style[attr]=now+speed+'px';
    //         }
    //         var current=now+speed;
    //         if(json[attr]!=current){
    //           isStop=false
    //         }
    //       }
    //       if(isStop){
    //         clearInterval(obj.timer);
    //         callback&&callback();
    //       }			
    //     },10);
    // }
  
    
 
  return {show: show};
})();