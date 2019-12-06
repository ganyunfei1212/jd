login();
function login(){
    var btn = document.querySelectorAll(".login_btn>button")
    var login = document.querySelector(".login_container_one")
    var loginT = document.querySelector(".login_container_two")
    btn[0].addEventListener('click',function(){
        loginT.style.display = 'none';
        login.style.display = 'block';
    },true);
    btn[1].addEventListener('click',function(){
        login.style.display = 'none';
        loginT.style.display = 'block';
    },true);
}
//匹配本地内存数据判断是否有账号
loginData();
function loginData(){
    var login = JSON.parse(window.localStorage.getItem("data"));
    var user = document.querySelector("#userName")
    var pass = document.querySelector("#pass")
    var denglu = document.querySelector("#denglu");
    // console.log(login,user.value,pass.value)
    denglu.addEventListener("click",function(){
        if(login){
            for(var i = 0 ; i < login.length; i++){
                if(login[i].userName == user.value && login[i].pass == pass.value){
                    alert("登陆成功");
                    window.localStorage.setItem("user",login[i].userName);
                    window.open("../html/gouwuche.html","_self")
                    return ;
                }else if(i == login.length-1){
                    alert("登陆失败");
                }
            }
        }else{
            alert("登陆失败")
        }
        
    })
    
}

