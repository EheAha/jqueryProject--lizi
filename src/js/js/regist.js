function Regist(){
    this.onkeys = [];
}

$.extend(Regist.prototype,{
    init:function(){
        this.judgment({
            el:$(".userRegist>input"),
            placeholder:"手机",
            reg:/^1[3,4,5,7,8][0-9]{9}$/,
            index:1
        }),
        this.judgment({
            el:$(".pwdRegist>input"),
            placeholder:"密码",
            reg:/^[\w\|\.]{6,16}$/,
            index:2
        }),
        this.pwdStrong();
        this.oncePwd();
        this.regist();
        this.clean();
    },
    judgment:function(obj){
        var _this = this;
        obj['el'].focus(function(){
            this.placeholder = "";
        })
        obj['el'].blur(function(){
            var val = obj['el'].val();
            if(!val){
                this.placeholder = obj['placeholder'];
                _this.onkeys[obj['index']] = 0;
            }else{
                if(!val.match(obj['reg'])){
                    _this.onkeys[obj['index']] = 0;
                }else{
                    _this.onkeys[obj['index']] = 1;
                }
            }
        })
    },
    pwdStrong:function(){
        $(".pwdRegist>input").on("input",function(){
            $(".pwdtips").css("display","none");
            var reg = {
                weak1:/^[a-zA-Z]{6,16}$/,
                weak2:/^\d{6,16}$/,
                in:/^[a-zA-Z0-9]{6,16}$/,
                strong:/^[\w\|\.]{6,16}$/
            }
            var val = $(".pwdRegist>input").val();
            if(reg.weak1.test(val)||reg.weak2.test(val)){
                $(".pwdtips").text("不能为纯数字或者纯字母");
                $(".pwdtips").css("display","block");
            }else if(reg.in.test(val)){
                $(".pwdtips").text("必须为数字、字母和字符组合");
                $(".pwdtips").css("display","block");
            }else if(reg.strong.test(val)){
                $(".pwdtips").text("填写成功");
                $(".pwdtips").css("display","block");
            }
        })
    },
    oncePwd:function(){
        var _this = this;
        $(".pwdtips").css("display","none");
        $(".aginPwd>input").blur(function(){
            var pwd = $(".pwdRegist>input").val();
            var val = $(".aginPwd>input").val();
            var bStop = true;
            if(pwd.length != val.length){
                $(".aginPwd").css("border","1px solid #f00");
            }else{
                for(var i=0;i<pwd.length;i++){
                    if(pwd[i]!=val[i]){
                        $(".aginPwd").css("border","1px solid green");
                        bStop = false;
                    }
                }
                if(bStop){
                    _this.onkeys[0] = 1;
                    $(".aginPwd").css("border","1px solid green");
                }else{
                    _this.onkeys[0] = 0;
                    $(".aginPwd").css("border","1px solid #f00");
                }
            }
        })
    },
    regist:function(){
        var _this = this;
        $(".subRegist>button").click(function(){
            var flag = true;
            for(var i=0;i<_this.onkeys.length;i++){
                if(_this.onkeys[i] == 0){
                    flag = false;
                    break;
                }
            }
            var arr;
            if(flag){
                var userval = $(".userRegist>input").val();
                var pwdval = $(".pwdRegist>input").val();
                
                if($("#ok").attr("checked")){
                    var obj = {};
                    console.log(localStorage.getItem("info"))
                    if(localStorage.getItem("info")){
                        arr = JSON.parse(localStorage.getItem("info"));
                        var flag = false;
                        for(var i in arr){
                            if(arr[i].userVal == userval){
                                alert("用户名已存在！");
                                flag = true;
                                break;
                            }
                        }
                        if(!flag){
                            obj.userVal = userval;
                            obj.pwdVal = pwdval;
                            arr.push(obj);
                            alert("注册成功！");
                            _this.clean();
                        }
                    }else{
                        arr = [];
                        obj.userVal = userval;
                        obj.pwdVal = pwdval;
                        console.log(arr);
                        arr.push(obj);
                        alert("注册成功！");
                        _this.clean();
                    }
                    localStorage.setItem("info",JSON.stringify(arr));
                }
            }else{
                alert("请按格式填写注册表！");
            }
        })
    },
    clean:function(){
        $(".userRegist>input").val("");
        $(".pwdRegist>input").val("");
        $(".aginPwd>input").val("");
        $(".aginPwd").css("border","1px solid #c9c9c9");
        $(".pwdtips").css("display","none");
        $("#ok").prop("checked",false);
    }
})

new Regist().init();