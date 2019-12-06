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
		var user = window.localStorage.getItem("user");
		if(!user){
			user = "你好，请登录";		
		}
		var headerRight = $('.header-right')[0];
		var navS = '<li><a href="../html/login.html">'+user+'</a></li>';
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


//购物车侧边栏
gouwuche_chebianlan();
function gouwuche_chebianlan(){
	var gouwuche_cebianlan_top = document.querySelector('.gouwuche_cebianlan_top');
	var gouwuche_cebianlan_bottom = document.querySelector('.gouwuche_cebianlan_bottom');
	// 顶部
	var timer;
	var listO = gouwuche_cebianlan_bottom.querySelectorAll("ul>li");
	// 回到顶部
	listO[0].addEventListener('click',function(ev){
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	})
}


//通过数据渲染商品信息页面
function Xuanran(){
	this.fn = function(){
		var shangping_neirong = document.querySelector("#shangping_neirong");
		var searchValue = window.location.search.split("?")[1]; 
		var data = shangpingxx;
		var newDate = ''
		var str = "";
		data.forEach(function(el,index){
			for(var key in el){
				if(el[key] == searchValue){
					newDate = el;
				}
			}
		})
		if(newDate){
				str += `
				<div class="neirong-left">
				<div class="shangping_img">
					<img src="${newDate["shangpingImg"]}" alt="">
					<i class="iconfont">&#xe7b1;</i>
				</div>
				<div class="fangdajingImg">
					<img src="${newDate["shangpingImg"]}" alt="">
				</div>
				<div class="shangping_list">
				<i class="iconfont">&#xe6ed;</i>
				<ul id="fdj_img">`;
				newDate["liImg"].forEach(function(el,index){
					str += `
						<li><a href=""><img src="${el}" alt=""></a></li>
					`
				})
					// <li><a href=""><img src="../img/indexImg/fdj.jpg" alt=""></a></li>
					// <li><a href=""><img src="../img/indexImg/fdj1.jpg" alt=""></a></li>
					// <li><a href=""><img src="../img/indexImg/fdj1.jpg" alt=""></a></li>
					// <li><a href=""><img src="../img/indexImg/fdj1.jpg" alt=""></a></li>
					// <li><a href=""><img src="../img/indexImg/fdj1.jpg" alt=""></a></li>
					// <li><a href=""><img src="../img/indexImg/fdj1.jpg" alt=""></a></li>
				str += `</ul>
						<i class="iconfont">&#xe6ec;</i>
						</div>
						</div>
						<div class="neirong-right">
							<h2>
								<b><img src="../img/indexImg/xp.png" alt=""></b> 
								${newDate["title"]}
							</h2>
						<p>
							<a href=""> ${newDate["jj"]} </a>
						</p>
						<div class="shangping_shuang"></div>
						<div class="shangping_jiage"><b>京东价：</b>
							<i>${newDate["price"]}</i>
							<a href="">降价通知</a>
							<span>累计评价12万+</span>
						</div>
						<div class="shangping_yewu">
							<i>增值业务：</i><a href="">高价回收极速到账</a>
							<a href="">3元1G</a>
						</div>
						<div class="shangping_peisong">
							<i>配送：</i>
							<a href="">${newDate["ps"]}</a>
						</div>
						<p><i>重量：${newDate["zl"]}</i></p>
					<ul>
						<li><a href=""><img src="${newDate["minimg"]}" alt=""></a><b>亮黑色</b></li>
						<li><a href=""><img src="${newDate["minimg"]}" alt=""></a><b>亮黑色</b></li>
						<li><a href=""><img src="${newDate["minimg"]}" alt=""></a><b>亮黑色</b></li>
						<li><a href=""><img src="${newDate["minimg"]}" alt=""></a><b>亮黑色</b></li>
						<li><a href=""><img src="${newDate["minimg"]}" alt=""></a><b>亮黑色</b></li>
						<li><a href=""><img src="${newDate["minimg"]}" alt=""></a><b>亮黑色</b></li>
					</ul>
					<div class="shangping_pub">
						<i>选择版本</i>
						<span>8G+256G</span>
						<span>8G+256G</span>
					</div>
					<div class="shangping_pub">
						<i>选择版本</i>
						<span>5G SA/NSA 双模</span>
						<span>预售版</span>
					</div>
					<div class="shangping_pub">
						<i>套&nbsp;&nbsp;&nbsp;&nbsp;装</i>
						<span>优惠套装</span>
					</div>
					 <div class="shangping_pub">
						<i>增值保障</i>
						<span>全保修3年 ￥499 </span>
						<span>全保修3年 ￥499 </span>
						<span>全保修3年 ￥499 </span>
						<span>全保修3年 ￥499 </span>
					</div>
					<div class="shangping_pub">
						<i>白条分期</i>
						<span>不分期</span>
						<span>￥1666.34起×3期</span>
						<span>￥1666.34起×3期</span>
						<span>￥1666.34起×3期</span>
						<span>￥1666.34起×3期</span>
					</div>
					<div class="shangping_jiarugouwuche">
						<b>加入购物车</b>
					</div>
					<div class="shangping_jiarugouwucheT">
						<b>打白条</b>
					</div>
					<div class="shangping_tishi">
						<i>
							温馨提示·支持7天无理由退货·此商品不可使用京券东券
						</i>
					</div>
				</div>	

						`

		}
		
		shangping_neirong.innerHTML = str;
		var gwc = document.querySelector(".shangping_jiarugouwuche>b");
		gwc.onclick = function(){
			var user = window.localStorage.getItem("user");
			var sear = window.location.search.split("?")[1];	
			if(!user){
				alert("请先登陆");
				return;
			}
			if(window.sessionStorage.getItem(user)){
				var session = JSON.parse(window.sessionStorage.getItem(user));
				// console.log(session)
				for(var key in session){
					if(session[key] == sear){
						alert("商品已存在购物车");
						return;
					}
				}
			}else{
				var session = {};
			}
			
			session["user"] = user;
			session["user"+sear] = sear;
			window.sessionStorage.setItem(user,JSON.stringify(session));
			alert("已加入到购物车");
		
		}
	}
}
var obj = new Xuanran();
obj.fn();



































//放大镜
fangdajing();
function fangdajing(){
	var fangdajingImg = document.querySelector(".fangdajingImg");
	var fangdajingImgS = fangdajingImg.querySelector("img");
	var shangping_img = document.querySelector(".shangping_img");
	shangping_img.addEventListener("mouseenter",function(ev){
			var div = document.createElement("div");
			div.className = "fangdajing";
			shangping_img.appendChild(div);
			fangdajingImg.style.display = "block";
		})
	shangping_img.addEventListener("mouseleave",function(){
			// console.log(1)
			var fangdajing = document.querySelector(".fangdajing");
			fangdajing.remove();
			fangdajingImg.style.display = "none";
		})
	shangping_img.addEventListener("mousemove",function(ev){
			var fangdajing = document.querySelector(".fangdajing");
			var leftS = this.getBoundingClientRect().left;
			var topS = this.getBoundingClientRect().top;
			var widthS = this.getBoundingClientRect().width; //容器的最大宽度
			var ev = ev || window.event;
			var wz = ev.clientX-leftS-99; //小框该移动的距离
			var wzY = ev.clientY-topS-99; //小框该移动的距离
			var maxwz = widthS-198; //小框移动的最大距离；
			var imgIW = fangdajingImgS.clientWidth-fangdajingImg.clientWidth;
			if(wz>=maxwz){
				wz = maxwz;
			}else if(wz<=0){
				wz = 0;
			}
			if(wzY>=maxwz){
				wzY = maxwz;
			}else if(wzY <= 0){
				wzY = 0;
			}
			var bili = wz/maxwz;
			fangdajingImgS.style.top = -bili*imgIW+'px';
			fangdajingImgS.style.left = -bili*imgIW+"px";
			fangdajing.style.left = wz+"px";
			fangdajing.style.top = wzY+"px";
		})
		var imgS = document.querySelector(".shangping_img>img") 
		var fdj_img = document.querySelector("#fdj_img");
		var list = fdj_img.querySelectorAll("li>a>img");
		// console.log(list)	
		forEach(list,function(el,index){
			el.addEventListener("mouseenter",function(){
				forEach(list,function(el,index){
					el.style.border = "1px solid white";
				})
				this.style.border = "1px solid red";
				imgS.src = this.src;
				fangdajingImgS.src = this.src;
			})
		})
		

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

