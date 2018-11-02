function PopLogin(){
    this.el = $("#pop");
}

$.extend(PopLogin.prototype,{
    init:function(){
        this.upsLogin = new PopUpsLogin(this.el).init();
    }
})

new PopLogin().init();