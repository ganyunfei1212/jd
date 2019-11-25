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
//标签导航数据
biaoqianNav();
function biaoqianNav(){
	var data = dataOne["data"];
	var i;
	var ulS = document.querySelector("#biaoqian");
	var dataS = document.querySelector(".data");
	data.forEach(function(el,index){
		var li = document.createElement("li");
		li.onmouseenter = function(){
			var dataleft = document.querySelectorAll(".data-left");
			dataS.style.display = 'block';
			 for(var i = 0; i<dataleft.length; i++){
				 dataleft[i].style.display = "none";
			 }
			dataleft[index].style.display = "block";
		}
		li.onmouseleave = function(){
			var dataleft = document.querySelectorAll(".data-left");
			dataS.style.display = 'none';
		}
		dataS.onmouseleave = function(){
			var dataleft = document.querySelectorAll(".data-left");
			dataS.style.display = 'none';
		}
		dataS.onmouseenter = function(){
			var dataleft = document.querySelectorAll(".data-left");
			dataS.style.display = 'block';
		}
		el["s"].forEach(function(elx,index){
			var arr = elx['n'].split("|");
			if(el["s"].length==index+1){
				li.innerHTML += '<a href="">'+arr[1]+'</a>';
			}else{
				li.innerHTML += '<a href="">'+arr[1]+'</a><span>/</span>';
			}
		})
		ulS.appendChild(li);
	})
}
//京东数据标签页部分
biaoqian();
function biaoqian(){
	var data = dataOne["data"];
	var dataS = document.querySelector(".data");
	var dataRight = document.querySelector(".data-right");
	data.forEach(function(el,index){
		var str = '';
		var arrS = [];
		var divs = document.createElement("div");
		divs.setAttribute("class","data-left");
		var changeTitle = document.createElement("div");
		changeTitle.setAttribute("class","change-title");
		var itemBox = document.createElement("div");
		itemBox.setAttribute("class","item-box");
		el["t"].forEach(function(el,index){
			var arr = el.split("|");
			arrS.push(arr[1]);
		})
		arrS.forEach(function(el,index){
			str += '<div class="item"><a href="">'+el+'</a></div>';
		})
		
		
		itemBox.innerHTML = str;
		var change = document.createElement("div")
		change.setAttribute("class","change");
		for(var i = 0 ; i < el["s"][0]["s"].length; i++){
			var dl = document.createElement("dl");
			var dt = document.createElement("dt");
			var dd = document.createElement("dd");
			var ar = el["s"][0]["s"][i]["n"].split("|");
			dt.innerHTML = '<a href="">'+ar[1]+'<i class="iconfont">&#xe6ec;</i></a>';
			 for(var j = 0 ; j < el["s"][0]["s"][i]["s"].length; j++){
				var arr = el["s"][0]["s"][i]["s"][j]["n"].split("|");
					dd.innerHTML += '<a href="">'+arr[1]+'</a>';
			 }
			 dl.appendChild(dt);
			 dl.appendChild(dd);
			 change.appendChild(dl);
		 }
		changeTitle.appendChild(itemBox);
		divs.appendChild(changeTitle);
		divs.appendChild(change);
		dataS.insertBefore(divs,dataRight);
	})
}
// 标签页的鼠标移入移出事件
banner();
function banner(){
	var bannerUls = document.querySelector(".banner-box>ul");
	var circle = document.querySelector(".circle");
	var btn = document.querySelectorAll(".banner-box>button");
	imgS.forEach(function(el,index){
		var li = document.createElement("li");
		var span = document.createElement("span");
		span.innerHTML = "<i></i>";
		li.innerHTML = '<a href="#"><img src='+el+' ></a>'
		bannerUls.appendChild(li);
		circle.appendChild(span);
	});
	bannerUls.firstElementChild.className = 'active';
	circle.firstElementChild.className = "activeThere";
	 bannerDrDc(bannerUls,btn[0],btn[1],true,3000,"active",circle,"activeThere");
	
}
// 小banner图
bannerTwo();
function bannerTwo(){
	var listd = document.querySelector(".list");
	var btn = document.querySelectorAll(".banner-right>button")
	bannerDrDc(listd,btn[0],btn[1],true,3000,"activeT",null,null);
}

//滚动时发生
gundongHeader();
gundong();
function gundong(){
	var xuanchuanContainer = document.querySelector('.xuanchuanContainer');
	var vh = xuanchuanContainer.getBoundingClientRect().top;
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	var twoNav = document.querySelector(".twoNav");
	var header = 752;
	if(vh <= 50 ){
		twoNav.style.top = 0;
		twoNav.style.opacity = 1;
	}else{
		twoNav.style.top = -50+"px";
		twoNav.style.opacity = 0;
	}
	cebianlan();
}
function gundongHeader(){
	document.onscroll = function(ev){
		ev = ev || window.event;
		var xuanchuanContainer = document.querySelector('.xuanchuanContainer');
		var vh = xuanchuanContainer.getBoundingClientRect().top;
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		var twoNav = document.querySelector(".twoNav");
		var header = 752;
		if(vh <= 50 ){
			twoNav.style.top = 0;
			twoNav.style.opacity = 1;
		}else if(vh>50){
			twoNav.style.top = -50+"px";
			twoNav.style.opacity = 0;
		}
		cebianlan();
	}	
}
//秒杀部分
miaosha();
function miaosha(){
	var data = xuanchuanData["indexMiaoSha"];
	var bannerFour = document.querySelector(".bannerFour");
	var str = '';
	data.forEach(function(el,index){
		str += '<a href="">'+
					'<div class="bannerFour-img">'+
						'<img src="https://'+el["imageurl"]+'" >'+
					'</div>'+
					'<h6>'+el["wname"]+'</h6>'+
					'<div class="price">'+
						'<span>'+
							'<i>¥</i>'+
							'<b>'+el["miaoShaPrice"]+'</b>'+
						'</span>'+
						'<span>'+
							'<i>¥</i>'+
							'<b>'+el["jdPrice"]+'</b>'+
						'</span>'+
					'</div>'+
				'</a><div class="xian"></div>'
	})
	bannerFour.innerHTML = str;
	
}

//懒加载
lanjiazhai();
function lanjiazhai(){
	
}
//侧边栏
cebianlan();
function cebianlan(){
	var cebianNav = document.querySelector(".cebianNav");
	var twoNav = document.querySelector(".twoNav");
	var uls = document.querySelector('.cebianNav-right>ul');
	if(twoNav.style.opacity == 1){
		cebianNav.style.position = "fixed";
		cebianNav.style.top = 50+"px";
		cebianNav.style.animation = "mymove .5s";
		cebianNav.style.top = 80+"px";
		uls.lastElementChild.className = 'active-lastli';
		// uls.lastElementChild.style.lineHeight = 60+"px";
		}else{
			cebianNav.style.position = "absolute";
			cebianNav.style.animation = "";
			cebianNav.style.top = 752+"px";
			uls.lastElementChild.className = '';
		}
}
//特色区域
function tese(){
	
}

// 相似部分数据循环
xiangshiData();
function xiangshiData(){
	var data = xiangshiDatas;
	var list= document.querySelector(".neirong>ul");
	data.forEach(function(el,index){
		var li = document.createElement("li");
		li.innerHTML = '<a href="">'+
					'<img  _src="'+el.imgsrc+'" alt="">'+
					'</a>'+
					'<p>'+
						'<span><a href="">'+el.fs+'</a></span>'+
						'<b><a href="">'+el.centents+'</a></b>'+
					'</p>'+
					'<mark>￥'+el.price+'</mark>'+
					'<div class="xiangshi">'+
						'<i class="iconfont">&#xe705;</i><a href = "javascript:;">找相似</a>'+
					'</div>';
		list.appendChild(li);
	})
	document.addEventListener('scroll',function(){
		var lists= document.querySelectorAll(".neirong>ul>li");
		var max_h = window.innerHeight; //浏览器高度
		for(var i = 0 ; i < lists.length ; i++){
			// var liH = lists[i].getBoundingClientRect().top;//获取每一个li距离浏览器顶部的高度
			// if(liH<max_h){
			// 	var imgSrc = 	lists[i].querySelector("img").getAttribute("_src");
			// 	lists[i].querySelector("img").src = imgSrc;
			// }
			jdljz(lists[i]);	
		}
	})
	}
//找相似效果
xiangshi();
function xiangshi(){
	var list= document.querySelectorAll(".neirong>ul>li");
	var xs = document.querySelectorAll(".xiangshi");
	for(var i = 0 ; i < list.length ; i++){
		list[i].addEventListener('mouseenter',function(ev){
			ev = ev || window.event;
			this.querySelector(".xiangshi").style.opacity = 1;
			this.querySelector("mark").style.opacity = 0;
			this.style.opacity = .7;
		})
		list[i].addEventListener('mouseleave',function(ev){
			ev = ev || window.event;
			this.querySelector(".xiangshi").style.opacity = 0;
			this.querySelector("mark").style.opacity = 1;
			this.style.opacity = 1;
		})
	}
	
}



//封装一个懒加载
//el你要传入的元素，根据哪个元素来判断距离你窗口顶部的宽度
function jdljz(el){
	var max_h = window.innerHeight;//获取浏览器的高度;
	var elH = el.getBoundingClientRect().top;//元素距离顶部的高度
	// 辅助函数用于判断距离
	window.addEventListener('scroll',function(){
		setTimeout(function() {
			max_h = window.innerHeight;
			elH = el.getBoundingClientRect().top;
			pdjl();
		}, 500);
	})
	window.onresize = function(){
		setTimeout(function() {
			max_h = window.innerHeight;
			elH = el.getBoundingClientRect().top;
			pdjl();
		}, 500);
	}
	function pdjl(){
		if(elH < max_h){
			var imgSrc = el.querySelector("img").getAttribute("_src");
				if(!el.querySelector("img").src){
					el.querySelector("img").src = imgSrc;
				}
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

