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
        

  var left = $dlg.find('#left'),
      right = $dlg.find('#right'),
      box=$('#box'),
      slider=$dlg.find('#slider'),
      
      nav = $dlg.find('.nav').children();
     
  var index=1;
  var cfg = {
    container:'#box'
    
  };
  
  var time;
  var timer;
  left.click(prev); 
  right.click(next);
  for(var i=0;i<nav.length;i++){
    nav[i].idx=i;
    nav[i].onclick=function(){
      index=this.idx+1;
     slider.animate({left:-1200*index},'slow')
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
		
      box.mouseenter(function(){
        clearInterval(timer);
        left.animate({opacity:0.5},1000);
        right.animate({opacity:0.5},1000);
      })
      box.mouseleave(function(){
        timer=setInterval(next,time);
        left.animate({opacity:0},1000);
        right.animate({opacity:0},1000);
      })
     
		
		
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
	
   
 
  return {show: show};
})();