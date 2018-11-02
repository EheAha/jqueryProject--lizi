function Banner(){
    this.aLi = $("#banner>ul>li");
    this.dir = $("#dir>span");
    this.aBtn = $("#btn>a");
    this.iNow = 0;
    this.Next = 0;
    this.banner = $("#banner");
    this.timer = null;
}
$.extend(Banner.prototype,{
    init:function(){
        this.autoPlay();
        this.event();
        this.toggle();
    },
    event:function(){
        /*
            $.proxy  
                第一个参数 函数
                第二个参数 this的指向
                
                返回值：一个新的函数 这个新的函数里面this的指向会指向第二个参数这个对象
        */
        this.banner.on("mouseover",$.proxy(this.over,this));
        this.banner.mouseout($.proxy(this.out,this));
        this.dir.eq(0).click($.proxy(this.prev,this));
        this.dir.eq(1).click($.proxy(this.next,this))
    },
    prev:function(){
        if(this.Next == 0){
            this.Next = this.aLi.length-1;
        }else{
            this.Next--;
        }
        this.toImg();
    },
    next:function(){
        if(this.Next == this.aLi.length-1){
            this.Next = 0;
        }else{
            this.Next++;
        }
        this.toImg();
    },
    out:function(){
        this.autoPlay();
    },
    over:function(){
        clearInterval(this.timer);
    },
    autoPlay:function(){
        this.timer = setInterval($.proxy(this.handlePlay,this),3000)
    },
    handlePlay:function(){
        if(this.Next == this.aLi.length-1){
            this.Next = 0;
        }else{
            this.Next++;
        }
        this.toImg();
    },
    toImg:function(){
        this.aLi.eq(this.iNow).fadeTo(1000,0);
        this.aLi.eq(this.Next).fadeTo(1000,1);
        this.iNow = this.Next;
        this.aBtn.eq(this.Next).addClass("active1").siblings().removeClass("active1");
    },
    toggleA:function(){
        $(this).addClass("active1").siblings().removeClass("active1");
        $("#banner>ul>li").eq($(this).index()).stop().fadeTo(1,1).siblings().stop().fadeTo(1,0);
    },
    toggle(){
        this.aBtn.mouseover($.proxy(this.toggleA,this.aBtn.index()));
        this.toImg();
    }
})
new Banner().init();