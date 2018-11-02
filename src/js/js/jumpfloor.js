function JumpFloor(){
    this.iH = $(window).height();
    this.floor = $(".louceng");
    /* this.sixty = $(".second_purchase");
    this.hot = $('.hot');
    this.classify = $("#classify"); */
    this.arr = [];
    this.aLi = $(".louceng>ul>li");
}

$.extend(JumpFloor.prototype,{
    init:function(){
        $(document).scroll($.proxy(this.getTop,this));
    },
    getTop:function(){
        var t = $(document).scrollTop();

        $("#backTop").click(function(){
            $(document).scrollTop(0);
        })

        if(t>600){
            this.floor.fadeIn();
        }else{
            this.floor.fadeOut();
        }
        this.arr = [$(".second_purchase"),$('.hot'),$("#classify")];

        for(var i=0;i<this.arr.length-1;i++){
            var itemTop = this.arr[i].offset().top;
            var itemHeight = this.arr[i].height();
            if(itemTop - (itemHeight/2)<= t && (itemTop + itemHeight) >= t){
                $(".louceng>ul>li").eq(i).addClass("active4").siblings().removeClass("active4");
            }
        }

        this.jump();
    },
    jump:function(){
        this.aLi.click(function(){
            var index = $(this).index();
            var itmeTop =$(".louceng>ul>li").eq(index).offset().top;

            $("html").stop(true).animate({
                scrollTop:itmeTop
            })
        })
    }
})

new JumpFloor().init();