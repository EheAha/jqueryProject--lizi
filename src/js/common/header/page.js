function Page(){
    this.el =$("#top");
}

$.extend(Page.prototype,{
    init:function(){
        this.header = new Header(this.el).init();
    }
})

new Page().init();