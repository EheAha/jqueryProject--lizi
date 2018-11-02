function Login(){
    this.userName = $(".userLogin>input");
    this.userPwd = $(".pwdLogin>input");
    this.subBtn = $(".sub");
    this.arr=[];
}

$.extend(Login.prototype,{
    init:function(){
       this.login();
    },
    login:function(){
        var obj = JSON.parse(localStorage.getItem("info"));
        var _this = this;
        $(".sub").click(function(){
            var user = $(".userLogin>input").val();
            var pwd = $(".pwdLogin>input").val();
            var data = JSON.parse(localStorage.getItem("info"));
            var bStop = true;
            for(var i=0;i<data.length;i++){
                if (user == data[i].userVal && pwd == data[i].pwdVal) {
                    alert('登录成功')
                    bStop = false;
                    break;
                }
                if (user == data[i].userVal) {
                    if (pwd != data[i].pwdVal) {
                        alert('密码错误');
                        bStop = false;
                        break;
                    } 
                }
            }
            if(bStop){
                alert("用户名未注册");
            }
        })
    }
})

new Login().init();