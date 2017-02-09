//点击登录按钮，出现登录界面
var login = document.getElementById("login");
var background = document.getElementById("background");
var loginShow = document.getElementById("login_show");
var close = document.getElementById("close");
login.onclick = function(){
	background.style.display = "block";
	loginShow.style.display = "block";
}
close.onclick = function(){
	background.style.display = "none";
	loginShow.style.display = "none";
}
loginShow.onmousedown = function(evt){
	var oEvent = evt || event;				
	var disX = oEvent.clientX - loginShow.offsetLeft-150;
	var disY = oEvent.clientY - loginShow.offsetTop-150;
	document.onmousemove = function(evt){
		var oEvent = evt || event;						
		loginShow.style.left = oEvent.clientX  - disX + "px";
		loginShow.style.top = oEvent.clientY - disY + "px";						
		}
		document.onmouseup = function(){
//		var oEvent = evt || event;
		document.onmousemove = null;
		document.onmouseup = null;
						
		}
	}

//点击注册按钮，出现注册页面
var oReg = document.getElementById("register");
var oRegPage = document.getElementById("regist");
var oRegBg = document.getElementById("reg_bg");
var oClose = document.getElementById("close2");
oReg.onclick = function(){
	oRegPage.style.display = "block";
	oRegBg.style.display = "block";
}
oClose.onclick = function(){
	oRegPage.style.display = "none";
	oRegBg.style.display = "none";
}
oRegPage.onmousedown = function(evt){
	var oEvent = evt || event;				
	var disX = oEvent.clientX - oRegPage.offsetLeft-300;
	var disY = oEvent.clientY - oRegPage.offsetTop-300;
	document.onmousemove = function(evt){
		var oEvent = evt || event;						
		oRegPage.style.left = oEvent.clientX  - disX + "px";
		oRegPage.style.top = oEvent.clientY - disY + "px";						
		}
		document.onmouseup = function(){
//		var oEvent = evt || event;
		document.onmousemove = null;
		document.onmouseup = null;
						
		}
	}

//注册页面的表单验证
var oUser = document.getElementById("user");
var oPwd = document.getElementById("pwd");
var oSurePwd = document.getElementById("sure_pwd");
var oHobby = document.getElementById("hobby");
var oAnswer = document.getElementById("answer");
var oMail = document.getElementById("mail");
var oBirthYear = document.getElementById("birth_year");
var oBirthMonth = document.getElementById("birth_month");
var oBirthDay = document.getElementById("birth_day");
var userSpan = document.getElementsByClassName("span")[0];
oUser.onfocus = function(){
	userSpan.style.display = "block";
}
oUser.onblur = function(){
	userSpan.style.display = "none";
}

//个人中心
var oPsCenter = document.getElementById("own-center");
var oListCenter = document.getElementById("list_center");
var aLis = oListCenter.getElementsByTagName("li");
var oImg = document.getElementById("change");
oListCenter.onmousemove = oPsCenter.onmouseover = function(){
	oListCenter.style.paddingTop = "10px";
	oListCenter.style.border = "1px solid #ccc";
	oListCenter.style.borderTop = "none";
	animate(oListCenter,{height:100,opacity:100},null)
	oImg.src = "img/arrow2.png";
}
oListCenter.onmouseout = oPsCenter.onmouseout = function(){
	oListCenter.style.paddingTop = "0";
	oListCenter.style.border = "none";
	animate(oListCenter,{height:0,opacity:0},null)
	oImg.src = "img/arrow.png";
	for(var j=0;j<aLis.length;j++){
			aLis[j].className = "";
		}
}
for(var i=0;i<aLis.length;i++){
	aLis[i].onmouseover = function(){
		for(var j=0;j<aLis.length;j++){
			aLis[j].className = "";
		}
		this.className = "bg";
	}
}

//导航栏
var oNav = document.getElementById("nav");
var aNavBottom = oNav.children[0].children;
var oNavTopMove = oNav.children[1].children[0];
var oNavTop = oNav.children[1];
for(var i=0;i<aNavBottom.length;i++){
	aNavBottom[i].index = i;
	aNavBottom[i].onmouseover = function(){
//		console.log(this.index);
		console.log(oNavTopMove);
		var temp = this.index;
		animate(oNavTop,{left:85*this.index+20},function(){
//			console.log(temp);
			animate(oNavTopMove,{left:-85*temp},null)
		});
	}
}

/*   主体部分  顶部  */
var oMainLeft = document.getElementById("main-top-left");
var oShow1 = oMainLeft.children[0];
var oShowInner1 = oMainLeft.children[1];
var oShow2 = oMainLeft.children[2];
var oShowInner2 = oMainLeft.children[3];
var oShow3 = oMainLeft.children[4];
var oShowInner3 = oMainLeft.children[5];
oShow1.onclick = function(){
	if(oShowInner1.offsetHeight==0){
		animate(oShowInner1,{height:150,opacity:100},null);
		oShowInner1.style.border = "1px solid #ccc";
		
	}
	else{
		animate(oShowInner1,{height:0,opacity:0},null);
		oShowInner1.style.border = "none";
	}
}
oShow2.onclick = function(){
	if(oShowInner2.offsetHeight==0){
		animate(oShowInner2,{height:150,opacity:100},null);
		oShowInner2.style.border = "1px solid #ccc";
		
	}
	else{
		animate(oShowInner2,{height:0,opacity:0},null);
		oShowInner2.style.border = "none";
	}
}
oShow3.onclick = function(){
	if(oShowInner3.offsetHeight==0){
		animate(oShowInner3,{height:150,opacity:100},null);
		oShowInner3.style.border = "1px solid #ccc";
		
	}
	else{
		animate(oShowInner3,{height:0,opacity:0},null);
		oShowInner3.style.border = "none";
	}
}

//  主体部分 中间轮播部分  
var oMainCenter = document.getElementById("main-center");
var oUl = oMainCenter.getElementsByTagName("ul")[0];
var oImg = oMainCenter.children[0];
var span = oMainCenter.getElementsByTagName("span")[0];
var aLi = oUl.children;
for(var i=0;i<aLi.length;i++){
	aLi[i].index = i;
	aLi[i].onmouseover = function(){
		oImg.src = "img/banner"+(this.index+1)+".jpg";
		for(var j=0;j<aLi.length;j++){
			aLi[j].className = "";
		}
		this.className = "bg3";
		if(this.index==0){
			span.innerHTML = "一";
		}else if(this.index==1){
			span.innerHTML = "二";
		}
		else{
			span.innerHTML = "三";
		}
		
	}
}
var temp = 0;
setInterval(function(){
	oImg.src = "img/banner"+(temp+1)+".jpg";
		for(var j=0;j<aLi.length;j++){
			aLi[j].className = "";
		}
		aLi[temp].className = "bg3";
		if(temp==0){
			span.innerHTML = "一";
		}else if(temp==1){
			span.innerHTML = "二";
		}
		else{
			span.innerHTML = "三";
		}
		temp++;
		if(temp==3){
			temp=0;
		}
},1500)
/*  分享到  */
var oShare = document.getElementById("share");
var oShareShow = document.getElementById("share-show");
oShare.onmouseover = oShareShow.onmouseover = function(){
	oShare.style.border = "1px solid #ccc;";
	animate(oShare,{left:0},null);
	animate(oShareShow,{left:211},null)
}
oShare.onmouseout = oShareShow.onmouseout = function(){
	oShare.style.border = "none";
	
	animate(oShare,{left:-211},null);
	animate(oShareShow,{left:0},null)
}


//延迟加载
var oMainBottom = document.getElementById("main-bottom");

var aTr1 = oMainBottom.children[0].children[0].children[0];
var aTr2 = oMainBottom.children[0].children[0].children[1];
var aTr3 = oMainBottom.children[0].children[0].children[2];
var param = oMainBottom.offsetTop;
var param1 = aTr1.offsetTop;
//console.log(param1);
var param2 = aTr2.offsetTop;
//console.log(param2);
var param3 = aTr3.offsetTop;
//console.log(param3);
window.onscroll = function(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	moveTop(oShare,scrollTop+210);
	moveTop(oShareShow,scrollTop+310);	
	var a = scrollTop+document.documentElement.clientHeight;
//	console.log(a);
//	console.log(param+param2);
//	console.log(aTr1.children.length)
	if(a>=(param+param1+150)){
		for(var i=0;i<aTr1.children.length;i++){
//			console.log(aTr1.children[i].children[0]);
			aTr1.children[i].children[0].src = "img/p"+(i+1)+".jpg";
		}
	}
	if(a>=(param+param2+350)){
		for(var j=0;j<aTr2.children.length;j++){
//			console.log(aTr2.children[j].children[0]);
			aTr2.children[j].children[0].src = "img/p"+(j+5)+".jpg";
		}
	}
	if(a>=(param+param3+450)){
		for(var j=0;j<aTr3.children.length;j++){
//			console.log(aTr3.children[j].children[0]);
			aTr3.children[j].children[0].src = "img/p"+(j+9)+".jpg";
		}
	}
	
}
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
var aTds = oMainBottom.getElementsByTagName("td");
	var oBigImgBg = document.getElementById("bigImg_bg");
	var oBigImg = document.getElementById("bigImg");
	var imgBg = document.getElementById("img_bg");
	var img = imgBg.children[0];
//	console.log(img);
//	console.log(oBigImg );
	var spanShow = imgBg.children[1].children[0];
	var left = document.getElementById("left");
	var right = document.getElementById("right");
//	console.log(aImgs[0]);
	for(var i=0;i<aTds.length;i++){
		aTds[i].index = i;
		aTds[i].onclick = function(){
			oBigImgBg.style.display = "block";
			oBigImg.style.display = "block";
			img.src = "img/p"+(this.index+1)+"big.jpg";
			spanShow.innerHTML = this.index+1;
			left.onmouseover = function(){
				animate(left,{opacity:50},null)
			}
			left.onmouseout = function(){
				animate(left,{opacity:0},null)
			}
			right.onmouseover = function(){
				animate(right,{opacity:50},null)
			}
			right.onmouseout = function(){
				animate(right,{opacity:0},null)
			}
			var b=this.index;
			left.onclick = function(){
				if(b==1){
					b=13;
				}
				img.src = "img/p"+(b-1)+"big.jpg";
				spanShow.innerHTML = b-1;
				b--;
				
			}
			right.onclick = function(){
				if(b==12){
					b=0
				}
				img.src = "img/p"+(b+1)+"big.jpg";
				spanShow.innerHTML = b+1;
				b++;
				
			}
			

		}
	}
	var oClose3 = document.getElementById("close3");
	oClose3.onclick = function(){
		oBigImgBg.style.display = "none";
		oBigImg.style.display = "none";
	}
oBigImg.onmousedown = function(evt){
	var oEvent = evt || event;				
	var disX = oEvent.clientX - oBigImg .offsetLeft-211;
	var disY = oEvent.clientY - oBigImg .offsetTop-250;
	document.onmousemove = function(evt){
		var oEvent = evt || event;						
		oBigImg .style.left = oEvent.clientX  - disX + "px";
		oBigImg .style.top = oEvent.clientY - disY + "px";						
		}
		document.onmouseup = function(){
//		var oEvent = evt || event;
		document.onmousemove = null;
		document.onmouseup = null;
						
		}
	}
	