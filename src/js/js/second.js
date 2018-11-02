function Seconds(){
    this.el = $("#countdown");
    this.tenDigit = $(".tenDigit");
    this.singleDigit = $(".singleDigit");
    this.second = 60;
    this.bg = $(".purchase_goods>li");
    this.num = 0;
}

Seconds.Template = `<div class="left">
                        <img src="../img/header-img/60s-hd2.png">
                        </div>
                        <div class="sixtySecond right">
                        <span>距离本轮结束还有</span>
                        <span class="tenDigit"></span>
                        <span class="singleDigit"></span>
                        <span>秒</span>
                    </div>`;

$.extend(Seconds.prototype,{
   init:function(){
        this.createSecond();
        this.change();
        this.bgMove();
        this.cutdir();

   },
   createSecond:function(){
        this.content = $("<div></div>");
        this.content.html(Seconds.Template);
        this.content.appendTo(this.el);
   },
   change:function(){
        setInterval($.proxy(this.countdown,this),1000);
    },
    countdown:function(){
        if(this.second <= 0){
            this.second = 61;
        }else{
            this.second--;
            this.i = parseInt(this.second % 10);
            this.j = parseInt(this.second/10);
            $(".singleDigit").css("backgroundPositionY",-36*this.i+"px");
            $(".tenDigit").css("backgroundPositionY",-36*this.j+"px");
            
        }
   },
   bgMove:function(){
       
       this.bg.mouseover(function(){
           $(this).children().eq(1).stop().animate({'height':'122px','top':'290px'},"fast");
        });
        this.bg.mouseout(function(){
            $(this).children().eq(1).stop().animate({'height':'0','top':'100%'},"fast");
        });
   },
   cutdir:function(){
       var _this = this;
       $(".pur_left").click(function(){
           _this.num++;
           if(_this.num % 2 == 0){
               $("#pur_1").css("opacity","0");
            }else{
                $("#pur_1").css("opacity","1");
            }
       })
   }
})

new Seconds().init();