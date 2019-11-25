
//封装一个轮播图淡入淡出的
//借助了css属性，对ie低版本不兼容
//注意元素必须使用定位
//元素必须要有宽度
//btn,按钮元素 2个btn元素
//el元素必须参数
//是否自动播放
//time间隔多久执行一次
//小圆点父级circle
//cn1，2 class名字
// list = document.querySelector("#list");
// btn = document.querySelectorAll("button");
// cir = document.querySelector('.circle');
// bannerDrDc(list,btn[0],btn[1],true,2000,"active",cir,"circle_active");
function bannerDrDc(el,Obtn,Tbtn,Boolean,time,cn1,circle,cn2){
	var elW;
	if(getComputedStyle){
		elW = getComputedStyle(el).width;
	}else{
		elW = el.currentStyle.width;
	}
	var lists = el.children;
	var num = 0;
	var onoff = true; //用于防止用户多次点击
	var timer = null;//用于存定时器序号
	if(circle){
		var circleList = circle.children;
	}
	if(circleList){
		for(var i = 0 ; i < circleList.length ; i++){
				circleList[i].index = i;
				circleList[i].addEventListener('click',function(){
					num = this.index;
					clearInterval(timer);
					clearStyle(lists);
					clearStyle(circleList);
					this.className = cn2;
					lists[num].className = cn1;
				})
		}
	}
	Obtn.onclick = function(){
		if(onoff){
			onoff = !onoff;
			clearStyle(lists);
			num++;
			if(num >= lists.length){
				num = 0;
			}
			lists[num].className = cn1;
			if(circle){
				clearStyle(circleList);
				circleList[num].className = cn2;
			}
			setTimeout(function() {
				onoff = !onoff;
			}, 1000);
			//点击后停止自动轮播
			clearInterval(timer);
			setTimeout(function() {
				timer = setInterval(function(){
								clearStyle(lists);
								num++;
								if(num >= lists.length){
									num = 0;
								}
								lists[num].className = cn1;
								if(circleList){
									clearStyle(circleList);
									circleList[num].className = cn2;
									console.log(12)
								}
							},time)
			}, timer);
		}
	}
	Tbtn.onclick = function(){
		if(onoff){
			onoff = !onoff;
			clearStyle(lists);
			num--;
			if(num < 0){
				num =  lists.length-1;
			}
			lists[num].className = cn1;
			if(circle){
				clearStyle(circleList);
				circleList[num].className = cn2;
			}
			setTimeout(function() {
				onoff = !onoff;
			}, 1000);
			//点击后停止自动轮播
			clearInterval(timer);
			setTimeout(function() {
				timer = setInterval(function(){
								clearStyle(lists);
								num++;
								if(num >= lists.length){
									num = 0;
								}
								lists[num].className = cn1;
								if(circleList){
									clearStyle(circleList);
									circleList[num].className = cn2;
									console.log(12)
								}
							},time)
			}, timer);
			}
		}
		//自动播放
		if(Boolean){
		 timer = setInterval(function(){
				clearStyle(lists);
				num++;
				if(num >= lists.length){
					num = 0;
				}
				lists[num].className = cn1;
				if(circleList){
					clearStyle(circleList);
					circleList[num].className = cn2;
				}
			},time)
			//进入停止
			for(var i = 0 ; i < lists.length ; i++){
				lists[i].addEventListener("mouseenter",function(){
					clearInterval(timer);
				})
				lists[i].addEventListener("mouseleave",function(){
					timer = setInterval(function(){
									clearStyle(lists);
									num++;
									if(num >= lists.length){
										num = 0;
									}
									lists[num].className = cn1;
									if(circleList){
										clearStyle(circleList);
										circleList[num].className = cn2;
									}
								},time)
				})
			}
		}
	
	//辅助函数，清除所有的class
	function clearStyle(lists){
		for(var i = 0; i < lists.length ; i ++){
			lists[i].className = "";
		}
	}
}