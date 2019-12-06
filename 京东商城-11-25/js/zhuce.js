//账号数据
// console.log(JSON.parse(window.localStorage.getItem("data")))
var login_data;
if(window.localStorage.getItem("data")){
    login_data = JSON.parse(window.localStorage.getItem("data"));
}else{
    login_data = [];
}
// 注册部分
// var gl = login_data;
zhuceHtml();
function zhuceHtml(){
    var zhuceFrom = document.querySelector(".zhuce_form");
    var inputS = zhuceFrom.querySelectorAll("input");
    var iS = zhuceFrom.querySelectorAll("i");
    var b = zhuceFrom.querySelectorAll("b");
    var check = new RegExp("^[A-Za-z0-9]{6,8}");
    var btn = zhuceFrom.querySelector(".zhuce_btn>button");
    var onoffpass = false;
    var onoffqrpas = false;
    var onoffusername = false;
    var onoffusernameS = false;
    var userStr = '';
    for(var i = 0 ; i < inputS.length ; i++){
        inputS[i].index = i;
        inputS[i].onfocus = function(){
        };
        inputS[i].onblur = function(){

            if(!this.value.trim() || !check.test(this.value)){
                b[this.index].innerHTML = "&#xe73f;";
                if(this.id == "pass"){
                    iS[this.index].innerHTML = "请输入你的密码";
                    onoffpass = false
                }else if(this.id == "username"){
                    iS[this.index].innerHTML = "请输入你的用户名";
                    onoffusername = false;
                }else if(this.id == "qrpass"){
                    iS[this.index].innerHTML = "请再次输入你的密码";
                    onoffqrpas = false;
                }
            }else{
                onoff = true;
                b[this.index].innerHTML = "";
                if(this.id == "pass"){
                    iS[this.index].innerHTML = "";
                    onoffpass = true;
                }else if(this.id == "username"){
                    iS[this.index].innerHTML = "";
                    onoffusername = true;
                }else if(this.id == "qrpass"){
                    iS[this.index].innerHTML = "";
                    onoffqrpas = true;
                }
            }
            if(inputS[1].value == inputS[2].value){
                onoffusernameS = true;
           }else{
                onoffusernameS = false;
           }
        }
    }
    btn.onclick = function(){
        if(onoffpass && onoffqrpas && onoffusername && onoffusernameS){
            for(var i = 0 ; i < login_data.length ; i++){
                if(login_data[i].userName == inputS[0].value){
                    return alert("账号已经注册");
                }
            }
            login_data.push({
                userName: inputS[0].value,
                pass: inputS[1].value,
            })
            userStr = JSON.stringify(login_data);
            window.localStorage.setItem("data",userStr);
            alert("注册成功");
        }else{
           alert("请输入正确信息");
        }
    }
}