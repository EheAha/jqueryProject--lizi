function PopUpsLogin(container){
    this.el = $(container);
}

PopUpsLogin.Template = `<div id="pup_content">
                            <div class="content_top">
                                <span class="px20 left">登录</span>
                                <span class="account right">没有账号？<a href="#">点击注册</a></span>
                            </div>
                            <ul class="content_middle">
                                <li class="userLogin">
                                    <span class=""></span>
                                    <input type="text" placeholder="用户名/邮箱/手机号" />
                                </li>
                                <li class="pwdLogin">
                                    <span class=""></span>
                                    <input type="text" placeholder="密码" />
                                </li>
                                <li class="forget">
                                    <p>忘记密码？</p>
                                </li>
                                <li class="subLogin">
                                    <button type="submit">登录</button>
                                </li>
                            </ul>
                            <div class="content_bottom">
                                <p class="thirdLogin">使用第三方账号登录</p>
                                <span class="other"></span>
                            </div>
                        </div>`;

$.extend(PopUpsLogin.prototype,{
    init:function(){
        $(".top_car").on("click",$.proxy(this.pop,this));
        this.createPopUps();
    },
    createPopUps:function(){
        this.content = $('<div></div>');
        this.content.html(PopUpsLogin.Template);
        this.content.appendTo(this.el);
    },
    pop:function(){
        layer.open({
            type:1,
            title:"请登录",
            area:['382px','384px'],
            content:$('#pup_content')
        })
    }
})