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
		var user = window.localStorage.getItem("user");
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

// 三级联动
sanjiliandong();
function sanjiliandong(){
	var sheng = ChineseDistricts[86]; //获取省的信息
	var ul = document.querySelectorAll(".shangping_sanjiliandong>ul")
	var shengS = document.querySelector(".sheng"); 
	var shangping_sanjiliandong = document.querySelector(".shangping_sanjiliandong");
	var shi = document.querySelector(".shi"); 
	var qu = document.querySelector(".qu"); 
	var shangping_address = document.querySelector('.shangping_address');
	shangping_address.addEventListener("mouseenter",function(){
		shangping_sanjiliandong.style.display ="block";
	})
	shangping_address.onmouseleave = function(){
		shangping_sanjiliandong.style.display ="none";
	}
	shangping_sanjiliandong.addEventListener('mouseleave',function(){
		this.style.display = "none";
	})
	shangping_sanjiliandong.addEventListener('mouseenter',function(){
		this.style.display = "block";
	})
	shengS.addEventListener("click",function(){
		for(var k = 0 ; k <ul.length ; k++){
			ul[k].style.display = 'none';
		}
		ul[0].style.display = "block";
	})
	for(var key in sheng){
		for(var i = 0 ; i < sheng[key].length ; i ++){
			var li = document.createElement("li");
			var a = document.createElement("a");
			a.index = sheng[key][i]["code"];
			a.href = "javascript:;";
			a.innerHTML = sheng[key][i]["address"].substr(0,4);
			li.appendChild(a);
			a.addEventListener('click',function(){
				shi.addEventListener('click',function(){
					for(var k = 0 ; k <ul.length ; k++){
						ul[k].style.display = 'none';
					}
					ul[1].style.display = "block";
				})
					shi.innerHTML ="请选择"+
					'<i class="iconfont">&#xe6eb;</i>';	
					qu.innerHTML ="请选择"+
					'<i class="iconfont">&#xe6eb;</i>';	
				shengS.innerHTML = this.innerText+'<i class="iconfont">&#xe6eb;</i>';
				if(ChineseDistricts[this.index]){
					ul[1].innerHTML= '';
					for(var key in ChineseDistricts[this.index]){
						var li = document.createElement("li");
						var a = document.createElement("a");
						a.index = key;
						a.addEventListener('click',function(){
							qu.addEventListener('click',function(){
								for(var k = 0 ; k <ul.length ; k++){
									ul[k].style.display = 'none';
								}
								ul[3].style.display = "block";
							})
							qu.innerHTML ="请选择"+
							'<i class="iconfont">&#xe6eb;</i>';	
							shi.innerHTML = this.innerText+'<i class="iconfont">&#xe6eb;</i>';
							if(ChineseDistricts[this.index]){
								ul[3].innerHTML = '';
								for(var key in ChineseDistricts[this.index]){
									var li = document.createElement("li");
									var a = document.createElement("a");
									a.href = 'javascript:;';
									a.innerText = ChineseDistricts[this.index][key].substr(0,4);
									a.addEventListener('click',function(){
										qu.innerHTML = this.innerText+'<i class="iconfont">&#xe6eb;</i>';
										if(shengS.innerText.substr(0,shengS.innerText.length-1) == shi.innerText.substr(0,shi.innerText.length-1)){
											shangping_address.innerHTML = shi.innerText.substr(0,shi.innerText.length-1)+qu.innerText.substr(0,qu.innerText.length-1)+'<i class="iconfont">&#xe6eb;</i>';
										}else{
											shangping_address.innerHTML = shengS.innerText.substr(0,shengS.innerText.length-1)+shi.innerText.substr(0,shi.innerText.length-1)+qu.innerText.substr(0,qu.innerText.length-1)+'<i class="iconfont">&#xe6eb;</i>';
										}
										shangping_sanjiliandong.style.display = "none";
									})
									li.appendChild(a);
									ul[3].appendChild(li);
								}
								
							}
							for(var k = 0 ; k <ul.length ; k++){
								ul[k].style.display = 'none';
							}
							ul[3].style.display="block";
						})
						a.index = key;
						a.href = "javascript:;";
						a.innerHTML = ChineseDistricts[this.index][key].substr(0,4);
						li.appendChild(a);
						for(var k = 0 ; k <ul.length ; k++){
							ul[k].style.display = 'none';
						}
						ul[1].style.display = "block";
						ul[1].appendChild(li);

					}
				}
			})
			ul[0].appendChild(li);
		}
	}
}

//购物车数据渲染
gwc();
function gwc(){
	var ul = document.querySelector("#shopxx");
	var user = window.localStorage.getItem("user");
	var Gwcuser = JSON.parse(window.sessionStorage.getItem(user));
	var data = [];
	shangpingxx.forEach(function(el,index){
		for(var key in Gwcuser){
			if(el["id"] == Gwcuser[key]){
				data.push(el);
			}
		}
	})
	console.log(data);
	var shangping_bg = document.querySelector(".shangping_bg");
	if(data.length<1){
		shangping_bg.style.display = 'block';
	}else{
		shangping_bg.style.display = 'none';
	}
	data.forEach(function(el,index){
		var gwcStr = '';
		var li = document.createElement("li");
		li.setAttribute("shangpingID",el["id"])
		gwcStr += `
				<input type="checkbox">
				<!-- //具体商品 -->
				<div class="juti_content">
				<img src="${el["shangpingImg"]}" alt=""> 
					<span>
						<a href="">
								${el["title"]}
						</a>
						<b class="iconfont">&#xe7a5;</b><i>选服务</i>
						<b class="iconfont">&#xe744;</b><i>礼品包装</i>
					</span>
					<div class="shangping_jianjie">
						<p>流沙金</p>
						<p>3GB + 32GB</p>
					</div>
					<div class="juti_jiage">
						<p class="danjia">${el.price}</p>
					</div>
					<div class="juti_shuliang">
						<a href="javascript:;">-</a>
							<input type="text" class="shuliang" value="1">
						<a href="javascript:;">+</a>
						<p>有货</p>
					</div>
					<div class="juti_xiaoji">
						<b class="xiaoji">${el.price}</b>
					</div>
					<div class="juti_caozuo">
						<p><a href="javascript:;" class="delete" >删除</a></p>
						<p><a href="">移到我的关注</a></p>
					</div>
				</div>
		`;
		li.innerHTML = gwcStr;
		ul.appendChild(li);
	})
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
//购物车商品信息 
gwcspxx();
function gwcspxx(){
	var shopxx = document.querySelector("#shopxx");
	var input = shopxx.querySelectorAll("li>input");
	var list = shopxx.querySelectorAll("li");
	var quanxuan = document.querySelector("#quanxuan");
	var quanxuanT = document.querySelector("#quanxuanT");
	//单机全选按钮全选
	var onoff = false;
	quanxuan.addEventListener("click",function(){
		if(quanxuan.checked){
			quanxuanT.checked = true;
			forEach(input,function(el,index){
				el.checked = true;
				el.parentNode.style.background = "#fff4e8";
			})
		}else{
			quanxuanT.checked = false;
			forEach(input,function(el,index){
				el.checked = false;
				el.parentNode.style.background = "white";
			})
		}
	})
	quanxuanT.addEventListener("click",function(){
		if(quanxuanT.checked){
			quanxuan.checked = true;
			forEach(input,function(el,index){
				el.checked = true;
				el.parentNode.style.background = "#fff4e8";
			})
		}else{
			quanxuan.checked = false;
			forEach(input,function(el,index){
				el.checked = false;
				el.parentNode.style.background = "white";

			})
		}
	})
	// input判断
	forEach(input,function(el,index){
		el.onclick = function(){
			if(this.checked){
				this.parentNode.style.background = "#fff4e8";
			}else{
				this.parentNode.style.background = "white";
			}
			for(var i = 0 ; i < input.length ; i++){
				if(input[i].checked){
					onoff = true;
				}else{
					onoff = false;
					quanxuan.checked = false;
					quanxuanT.checked = false;
					return;
				}
			}
			if(onoff){
				quanxuanT.checked = true;
				quanxuan.checked = true;
			}
		}
	})
	//购物车数量
	shuliang();
	function shuliang(){
		var sl = document.querySelectorAll(".shuliang");
		var max = 100;
		var xiaoji = document.querySelectorAll(".xiaoji");
		var danjia = document.querySelectorAll(".danjia");
		//辅助函数添加数量
		forEach(sl,function(el,index){
			slFN(el);
			el.previousElementSibling.onclick = function(){
				this.nextElementSibling.value--;
				if(this.nextElementSibling.value < 1){
					alert("商品数量不能少于1");
					this.nextElementSibling.value = 1;
				}
				xiaoji[index].innerHTML = "￥"+danjia[index].innerText.split("￥")[1]*this.nextElementSibling.value+".00";
				zj();
			}
			el.nextElementSibling.onclick = function(){
				this.previousElementSibling.value++;
				if(this.previousElementSibling.value > max){
					alert("没有更多了");
					this.previousElementSibling.value = max;
				}
				xiaoji[index].innerHTML = "￥"+danjia[index].innerText.split("￥")[1]*this.previousElementSibling.value+".00";
				zj();
			}
		})

		function slFN(el){
			el.oninput = function(){
				var val = this.value.trim();
				if(val==""){
					alert("商品数量不能少于1");
					this.value = 1;
				}else if(val<1){
					alert("商品数量不能少于1");
					this.value = 1;
				}else if(parseInt(val)!=val){
					alert("商品数量有误");
					this.value = 1;
				}else if(this.value>max){
					alert("没有更多了");
					this.value = max;
				}

			}
				
		}
		
	}
	// 删除商品
	deletes();
	function deletes(){
		var btn = document.querySelectorAll(".delete");
		for(var i = 0 ; i < btn.length ; i++){
			btn[i].onclick = function(){
				var bianhao = this.parentNode.parentNode.parentNode.parentNode.getAttribute("shangpingID");
				var user = window.localStorage.getItem("user");
				var session = JSON.parse(window.sessionStorage.getItem(user));
				var NewSession = {};
				for(var key in session){
					// console.log(session[key])
					if(session[key] == bianhao){

					}else{
						NewSession[key] = session[key];
					}
				}
				window.sessionStorage.setItem(user,JSON.stringify(NewSession));
				this.parentNode.parentNode.parentNode.parentNode.remove();
				zj();
				shuliangS();
				var li = document.querySelectorAll("#shopxx>li");
				if(li.length<1){
					var shangping_bg = document.querySelector(".shangping_bg");
					shangping_bg.style.display = 'block';
				}
			}
		}
	}
	// 总价
	zj();
	function zj(){
		var zongjia = document.querySelector("#zongjia");
		var xiaoji = document.querySelectorAll(".xiaoji");
		// 价格
		var pr=0;
		for(var i = 0 ; i < xiaoji.length ; i++){
			pr += parseFloat(xiaoji[i].innerText.substr(1,xiaoji[i].innerText.length-1));
			// console.log( parseFloat(xiaoji[0].innerText.substr(1,xiaoji[0].innerText.length-1)));
		}
		zongjia.innerHTML = "￥"+pr;
	}
}

//购物车数量
shuliangS();
function shuliangS(){
	var li = document.querySelectorAll("#shopxx>li");
	var shuliang = document.querySelector("#shuliang");
	shuliang.innerText = li.length
	window.localStorage.setItem("shuliang",li.length);
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

