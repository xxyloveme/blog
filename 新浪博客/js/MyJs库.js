	function animate(obj,json,fn){
		//1.清空定时器
		clearInterval(obj.timer);
		//定义定时器
		
		obj.timer = setInterval(function(){
			var flag = true;
			//求出了步长
			for(var key in json){
				var current = 0;
//				console.log(key);
				if(key=="opacity"){
					current = Math.round(getStyle(obj,key)*100);
//					console.log(current);
				}
				else if(key=="zIndex"){
					current = parseInt(getStyle(obj,key));
				}
				else{
					current = parseInt(getStyle(obj,key));
				}
				
				var step =  (json[key]-current)/10;  
			
				step = step>0?Math.ceil(step):Math.floor(step);
			
				//当前的位置+步长+“px”
				if(key=="opacity"){
					obj.style[key] = (current + step)/100 ;
					obj.style.filter = "alpha(opacity="+(current+step)+")";
				}
				else if(key=="zIndex"){
					obj.style[key] = json[key];
				}
				else{
					obj.style[key] = current + step + "px";
				}
				
//				if(temp[key]<= current){
////					console.log("111");
//					clearInterval(obj.timer);
//					
//				}
				//如果去停定时器，有多个值，只有等多个值都执行完了，才最后清空定时器
				if(json[key]!=current){
					flag = false;
//					console.log("111");
				}
			
			}
			if(flag){
				clearInterval(obj.timer);
				if(fn!=null){
					fn();
				}
			}
			
			
		},30);
	}
	
	function getStyle(obj,attr){
		//current  当前
		if(obj.currentStyle!=null){
			return obj.currentStyle[attr];
		}
		else{
			return window.getComputedStyle(obj,null)[attr];
		}
	}