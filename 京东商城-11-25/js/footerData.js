

footer();
function footer(){
    var footerData = [{
        name:["购物指南","购物流程","会员介绍","生活旅行/团购","常见问题",
    "大家电","联系客服"],
    },{
        name:["购物指南","购物流程","会员介绍","生活旅行/团购","常见问题",
        "大家电","联系客服"],
    },{
        name:["购物指南","购物流程","会员介绍","生活旅行/团购","常见问题",
        "大家电","联系客服"],
    },{
        name:["购物指南","购物流程","会员介绍","生活旅行/团购","常见问题",
        "大家电","联系客服"],
    },{
        name:["购物指南","购物流程","会员介绍","生活旅行/团购","常见问题",
        "大家电","联系客服"],
    },]
    var footer_center = document.querySelector(".footer-center");
    for(var i = 0 ; i < footerData.length ; i ++){
        var ul = document.createElement('ul');
        for(var j = 0 ; j < footerData[i]["name"].length; j++){
            var li = document.createElement("li");
            li.innerHTML = '<a href="javascript:;">'+footerData[i]["name"][j]+'</a>';
            ul.appendChild(li);
        }
        footer_center.appendChild(ul);
    }
}
footer_bottom();
function footer_bottom(){
    var arr = ["关于我们","联系我们","联系客服","合作招商","商家帮助","营销中心","手机京东",
"友情链接","销售联盟","京东社区","风险监测",'隐私政策','京东公益','English Site','Media&IR']
    var ul = document.querySelector(".footer-bottom>ul");
    arr.forEach(function(el,index){
        var li = document.createElement("li");
        if(index == arr.length-1){
            li.innerHTML = '<a href="">'+ el +'</a>'
            ul.appendChild(li);
        }else{
            li.innerHTML = '<a href="">'+ el +'</a>'+
             '<span>|</span>'
              ul.appendChild(li);
        }
    })
}