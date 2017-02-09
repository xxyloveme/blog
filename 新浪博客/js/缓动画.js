function moveLeft(obj,target){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
		if(target>obj.offsetLeft){
			var speed = Math.ceil((target-obj.offsetLeft)/10);
		}
		else{
			var speed = Math.floor((target-obj.offsetLeft)/10);
		}
//		var speed =	target>obj.offsetLeft?Math.ceil((400-obj.offsetLeft)/10):Math.floor((400-obj.offsetLeft)/10);
//			console.log(obj.offsetLeft);
		obj.style.left = obj.offsetLeft + speed +"px";
			if(target == obj.offsetLeft){
				clearInterval(obj.timer);
			}
		},30);
	}
function move(obj,target){
	//清除定时器。防止多次触发
	clearInterval(obj.timer);
	//判断目标位置是大于还是小于当前位置，如果是大于就加，反之则减
	var step = obj.offsetLeft<target?+10:-10;
	obj.timer = setInterval(function(){
		//改变对象的left值，实现动画效果
		obj.style.left = obj.offsetLeft + step +"px";
		//判断对象是否移动到目标位置
		if(Math.abs(target-obj.offsetLeft)<=10){
			//若移动到目标位置就把对象的left值等于target的值，并且清除定时器
			obj.style.left = target+"px";
			clearInterval(obj.timer);
		}
	},30)
}
function moveTop(obj,target){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
		if(target>obj.offsetTop){
			var speed = Math.ceil((target-obj.offsetTop)/10);
		}
		else{
			var speed = Math.floor((target-obj.offsetTop)/10);
		}
//		var speed =	target>obj.offsetLeft?Math.ceil((400-obj.offsetLeft)/10):Math.floor((400-obj.offsetLeft)/10);
			
		obj.style.top = obj.offsetTop + speed +"px";
			if(target == obj.offsetTop){
				clearInterval(obj.timer);
			}
		},40)
	}
function moveScroll(obj,target){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
		if(target>obj.scrollY){
			var speed = Math.ceil((target-obj.scrollY)/10);
		}
		else{
			var speed = Math.floor((target-obj.scrollY)/10);
		}
//		var speed =	target>obj.offsetLeft?Math.ceil((400-obj.offsetLeft)/10):Math.floor((400-obj.offsetLeft)/10);
			
		window.scrollTo( 0,obj.scrollY + speed);
			if(target == obj.scrollY){
				clearInterval(obj.timer);
			}
		},40)
	}