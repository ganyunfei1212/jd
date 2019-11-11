// 地区部分
adressFn();
function adressFn() {
	var chinaRegion = adress["中国地区"];
	var chinaRegionStr = ''//用于存储结构
	var region = $(".adress-container>ul:nth-of-type(1)")[0];
	forEach(chinaRegion,function(el,index){
		chinaRegionStr += '<li><a href="javascript:;">'+el+'</a></li>';
	})
	region.innerHTML = chinaRegionStr; //插入结构
	var otherAreas = $(".other-Areas>span");
	otherAreas[0].innerHTML = adress["地区专享版"][0];
	otherAreas[1].innerHTML = '<a href="">'+adress["中国港澳"][0]+'</a>';
	var AvailableSites = $(".Available-Sites>span:nth-of-type(1)")[0];
	 AvailableSites.innerHTML = "Available Sites";
	var AvailableSitesUl = $(".Available-Sites>ul:nth-of-type(1)")[0];
	var otherAdress = ''//其他地区存储结构
	forEach(adress["Available Sites"],function(el){
		otherAdress += '<li><span class="iconfont">&#xe74e;</span><a href="">'+el+'</a></li>';
	})
	AvailableSitesUl.innerHTML = otherAdress;
	//显示地区
	var adressBtn = $(".header-adress>adress")[0];
	var adressNone = $(".adress-container")[0];
	adressBtn.onmouseenter = function () {
		adressNone.style.display = 'block';
	}
	adressBtn.onmouseleave = function () {
		adressNone.style.display = 'none';
	}
	var regionLis = $("li",region);
	var activeAdress = $(".active-adress")[0];
	var regionAs = $("a",region);
	regionAs[chinaRegion.indexOf("四川")].style.background = "#f10215";
	regionAs[chinaRegion.indexOf("四川")].style.color = "#fff";
	forEach(regionLis,function(el,index){
		el.onclick = function () {
			forEach(regionAs,function(el,index){
				el.style.background = "";
				el.style.color = "#999"
			});
			regionAs[index].style.background = "#f10215";
			regionAs[index].style.color = "#fff";
			activeAdress.innerHTML = this.innerText;
		}
	});
}
//nav部分
navFn();
function navFn(){
		var headerRight = $('.header-right')[0];
		var navS = '<li><a href="">你好，请登录</a></li>';
		forEach(nav,function(el,index){
			if(el['content'] && el['href']){
				navS += 	'<li><a href="'+el['href']+'">'+el['title']+'<i class="iconfont">&#xe6eb;</i></a><span></span><div class="item-box"></div></li>';
			}else if(el['href']){
				navS += 	'<li><a href="'+el['href']+'">'+el['title']+'</a><span></span></li>';
			}else if(el['content']){
				navS += 	'<li>'+el['title']+'<i class="iconfont">&#xe6eb;</i><span></span><div class="item-box"></div></li>';
			}else{
				navS += 	'<li>'+el['title']+'<span></span></li>';
			}
		})
		headerRight.innerHTML = navS;
		//我的京东部分
		Myjd();
		function Myjd () {
			var divStr = '';
			var headerRightList = $("li",headerRight);
			var headerRightListDiv = $("div",headerRightList[3])[0];
			forEach(nav[2]["content"],function(el,index){
					divStr += '<div class="item"><a href="#">'+el+'</a></div>';
			})
			innerStr(headerRightListDiv,divStr);
			headerRightList[3].onmouseenter=function(){
				this.style.background = "white";
				headerRightListDiv.style.display = "block";
			}
			headerRightList[3].onmouseleave=function(){
				headerRightListDiv.style.display = "none";
				this.style.background = "#e3e4e5";
			}	
		}
		
		// 企业采购部分
		caigou();
		function caigou(){
			var divStr = '';
			var headerRightList = $("li",headerRight);
			var headerRightListDiv = $("div",headerRightList[5])[0];
			forEach(nav[4]["content"],function(el,index){
			divStr += '<div class="itemT"><a href="#">'+el+'</a></div>';
			innerStr(headerRightListDiv,divStr);
			})
			headerRightList[5].onmouseenter=function(){
				this.style.background = "white";
				headerRightListDiv.style.display = "block";
			}
			headerRightList[5].onmouseleave=function(){
				headerRightListDiv.style.display = "none";
				this.style.background = "#e3e4e5";
			}	
		}
		//客户服务部分
		kehu();
		function kehu(){
			var divStr = '';
			var headerRightList = $("li",headerRight);
			var headerRightListDiv = $("div",headerRightList[6])[0];
			forEach(nav[5]["content"],function(el,index){
			divStr += '<div class="itemT"><a href="#">'+el['title']+'</a></div>';
				forEach(el['content'],function(el,index){
					divStr += '<div class="itemT-next"><a href="#">'+el+'</a></div>';
				})
			innerStr(headerRightListDiv,divStr);
			})
			headerRightList[6].onmouseenter=function(){
				this.style.background = "white";
				headerRightListDiv.style.display = "block";
			}
			headerRightList[6].onmouseleave=function(){
				headerRightListDiv.style.display = "none";
				this.style.background = "#e3e4e5";
			}	
		}
		//网站导航部分
		webDaoHang();
		function webDaoHang(){
			var divStr = '<div>';
			var headerRightList = $("li",headerRight);
			var headerRightListDiv = $("div",headerRightList[7])[0];
			forEach(nav[6]['content'],function(el,index){
					divStr += '<dl><dt>'+el['title']+'</dt>';
					forEach(el['content'],function(el,index){
						divStr += '<dd><a href="">'+el+'</a></dd>';
					})
					divStr += '</dl>';
			});
			headerRightListDiv.innerHTML = divStr;
			headerRightList[7].onmouseenter=function(){
				this.style.background = "white";
				headerRightListDiv.style.display = "block";
			}
			headerRightList[7].onmouseleave=function(){
				headerRightListDiv.style.display = "none";
				this.style.background = "#e3e4e5";
			}	
		}
		
}
// 热点关键字自动切换
hotFn();
function hotFn(){
	var i=0;
	var hotWords = document.querySelector("#hotWords");
	var timer;
	var data = search[0].title;
	forEach(search,function(el,index){
		var li = document.createElement("li");
		li.innerHTML = '<a href="'+el.href+'">'+el.title[0]+'</a>';
		hotWords.appendChild(li);
	});
	var firstLi = hotWords.firstElementChild;
	timer = setInterval(function(){
		i++;
		if(i>=data.length){
			i = 0;
		}
		firstLi.innerHTML = '<a href="'+search[0]["href"]+'">'+data[i]+'</a>';
	},3000)
	firstLi.onmouseenter = function() {
		clearInterval(timer);
	}
	firstLi.onmouseleave = function() {
		timer = setInterval(function(){
			i++;
			if(i>=data.length){
				i = 0;
			}
			firstLi.innerHTML = '<a href="'+search[0]["href"]+'">'+data[i]+'</a>';
		},3000)
	}
}
//头部收索部分
searchFn();
function searchFn () {
	var searchInput = document.querySelector("#search");
	var i = 0;
	var timer;
	var timerTimeout;
	var ulS = document.querySelector("#historical");
	timer = setInterval(function(){
		i++;
		if(i>=hotWords.length){
			i = 0;
		}
		searchInput.placeholder = hotWords[i];
	},3000)
	// searchInput.onmouseenter = function(){
	// 	ulS.style.display = "block";
	// }
	// searchInput.onmouseleave = function(){
	// 	setTimeout(function() {
	// 		alert(12);
	// 		ulS.style.display = "none";
	// 	}, 2000);
	// }
	
	searchInput.onfocus = function(){
		clearInterval(timer);
		if(document.cookie.trim()){
			ulS.style.display = "block";
		}else{
		}
		if(searchInput.value){
			searchInput.style.opacity = 1;
		}else{
			searchInput.style.opacity = 0.5;
		}
	}
	searchInput.oninput = function(){
		clearTimeout(timerTimeout);
		ulS.style.display = "block";
		searchInput.style.opacity = 1;
	}
	searchInput.onblur = function(){
		searchInput.style.opacity = 1;
	}
	
		searchInput.onmouseleave = function(){
			clearTimeout(timerTimeout);
			timerTimeout=setTimeout(function() {
					ulS.style.display = "none";
			}, 2000);
			clearInterval(timer);
			timer = setInterval(function(){
				i++;
				if(i>=hotWords.length){
					i = 0;
				}
				searchInput.placeholder = hotWords[i];
			},3000)
			
	}
	
}
//历史记录
historicalRecord();
function historicalRecord(){
	var searchInput = document.querySelector("#search");
	var ulS = document.querySelector("#historical");
	var x = document.cookie;
	var i = 0;
	var arr = [];
	var btn = document.querySelector("#search-btn");
	btn.onclick = function() {
		arr[i] = searchInput.value;
		document.cookie = arr;
		i++;
		ulS.style.display = "none";
		historical();
	}
	//历史记录渲染部分
	function historical() {
		var ulS = document.querySelector("#historical");
		var hist = document.cookie;
		var str = hist.split(",");
		var newStr = [];
		var jiegou = '';
		for(var i = 0 ; i < str.length ; i++){
			str[i] = str[i].trim();
			if(newStr.indexOf(str[i]) == -1 && str[i] != ""){
				newStr.unshift(str[i]);
			}
		}
		newStr.forEach(function(el,index){
			jiegou += '<li><b>'+el+'</b><span><a href="">搜索历史</a></span></li>';
		})
		if(newStr.length<1){
			return ;
		}else{
			jiegou += '<li><span><a id="clearAllCookie" href="javascript:;">全部清除</a></span></li>';
			ulS.innerHTML = jiegou;
		}
		var clearAllCookie = document.querySelector("#clearAllCookie");//全部清除
		var listS = ulS.querySelectorAll("li");
		listS.forEach(function(el,index){
			el.onmouseenter = function(){
				ulS.style.display = "block";
			}
			
		})
		clearAllCookie.onclick = function(){
			ulS.innerHTML = '';
			arr = [];
		}
		
	}
	
}














//封装一个插入html结构的方法
function innerStr(el,str){
	el.innerHTML = str;
}
//封装一个获取元素的方法;
function $(el,parent){
	parent = parent?parent:document;  
	return parent.querySelectorAll(el);
}
//封装一个for循环
function forEach(el,fn){
	for(var i = 0 ; i < el.length ; i++){
		var index = i;
		fn(el[i],index);
	}
}

