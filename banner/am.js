
	function getStyle(obj,style){
			
			if(window.getComputedStyle(obj,null)){
				return window.getComputedStyle(obj,null)[style];
			}
			else{
				return obj.currentStyle[style];	
			}
		}
	function animate(obj,json,callback){
			clearInterval(obj.timer);
			obj.timer=setInterval(
				function(){
				var isStop=true;	
				for(var attr in json){
					if(attr=='opacity'){
						var now=parseInt(getStyle(obj,attr)*100);
					}
					else{
						var now=parseInt(getStyle(obj,attr));
					}
					var speed=(json[attr]-now)/30;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					if(attr=='opacity'){
						obj.style[attr]=(now+speed)/100;
					}
					else{
						obj.style[attr]=now+speed+'px';
					}
					var current=now+speed;
					if(json[attr]!=current){
						isStop=false
					}
				}
				if(isStop){
					clearInterval(obj.timer);
					callback&&callback();
				}			
			},10);
	}

	