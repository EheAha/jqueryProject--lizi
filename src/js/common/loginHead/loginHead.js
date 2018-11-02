function LoginHead(){
    this.el = $(".top");
}

LoginHead.Template = `<div class="topImg"><img src="../img/header-img/login-logo.png"></div>
                      <ul class="top_ul">
                          <li class="left"><a href="./index.html">丽子首页</a></li>
                          <li class="right"><a href="##">在线咨询：0527-80203555</a></li>
                       </ul>`;

$.extend(LoginHead.prototype,{
    init:function(){
        this.createLogin();
    },
    createLogin:function(){
        this.content = $("<div></div>");
        this.content.html(LoginHead.Template);
        this.content.appendTo(this.el);
    }

})

new LoginHead().init();