function Detail(){
    this.urlId = location.href.split("?")[1].split("=")[1];
}

$.extend(Detail.prototype,{
    init:function(){
        this.getData();
        this. getA();
    },
    getData:function(){
        var _this = this;
        $.ajax({
            type:"get",
            url:"http://list.mogujie.com/search",
            dataType:"jsonp",
            success:function(data){
                _this.magnifier(data.result.wall.list);
            }
        })
    },
    magnifier:function(data){
        var str1 = str2 = str = '';
        for(var i in data){
            if(this.urlId == i){
                str = `<div class="box">
                            <div class="filter"></div>
                            <img src="${data[i].show.img}" class="middle" width="352px" height="234px"/>
                        </div>`;
                for(var j=0;j<5;j++){
                    str1 += `<div class="small"><img src="${data[i].show.img}" data-url="${data[i].img}" width="64px" height="42px"></div>`
                }
                str2 = `${str}<div class="minImg">${str1}</div>
                        <div class="max">
                            <img src="${data[i].show.img}" class="bigImg" width="704px" height="468px"/>
                        </div>`;
                str4 = `<p class="title">${data[i].title}</p>
                                <div class="market">
                                    <span class="span1">市场价</span>
                                    <span class="through">￥<span class="reduPrice">${data[i].orgPrice.slice(1)}</span></span>
                                </div>
                            
                                <div class="liziPrice">
                                    <span class="span1">丽子价</span>
                                    <span class="f1494e">￥<span class="price">${data[i].price.slice(1)}</span></span>
                                </div>
                                <div class="salesVolume">
                                    <span class="span1">销量</span>
                                    <span class="recent">最近售出<i class="sales">${data[i].sale}</i><span>件</span></span>
                                </div>`;
            }
        }
        $(".msgleft").html(str2);
        $(".dynamic").html(str4);
        this.event();
    },
    event:function(){
        $(".small").mouseover($.proxy(this.minOver,$(".small").index()));
        $(".box").mouseover($.proxy(this.boxOver,this));
        $(".box").mouseout($.proxy(this.boxOut,this));
        $(".filter").mousemove($.proxy(this.over,this));
        $(".msgright").click($.proxy(this.saveLocal,this));
    },
    minOver:function(){
        var url = $(".small").eq($(this).index()).children(0).attr("src");
        $('.middle').attr("src",url);
        $(".bigImg").attr("src",url);
    },
    boxOver:function(){
        $(".filter").css("display","block");
        $(".max").css("display","block");
    },
    boxOut:function(){
        $(".filter").css("display","none");
        $(".max").css("display","none");
    },
    over:function(event){
        var msgL = event.pageX - $(".box").offset().left;
        var msgT = event.pageY - $(".box").offset().top;

        var l = msgL - $(".filter").width()/2;
        var t = msgT - $(".filter").height()/2;

        l=((l>$(".box").width() - $(".filter").width())?$(".box").width() - $(".filter").width():(l<0?0:l));
        t=((t>$(".box").height() - $(".filter").height())?$(".box").height() - $(".filter").height():(t<0?0:t));

        $(".filter").css({
            left:l,
            top:t
        })
        $(".bigImg").css({
            left:-2*l,
            top:-2*t
        })
    },
    saveLocal:function(event){
        var target = $(event.target);
        var arr;
        var goods = {};
        if(localStorage.getItem("info")){
            arr = JSON.parse(localStorage.getItem("info"));
        }else{
            arr=[];
        }
        if(event.target.className == "add"){
            var num = target.prev().text();
            num++;
            target.prev().text(num);
            
            if(arr.length>0){
                var flag = false;
                for(var i=0;i<arr.length;i++){
                    if(this.urlId == arr[i].id){
                        arr[i].num++;
                        flag = true;
                        break;
                    }
                }
                if(!flag){
                    goods.id = this.urlId;
                    goods.num = 2;
                    arr.push(goods);
                }
            }else{
                goods.id = this.urlId;
                goods.num = 2;
                arr.push(goods);
            }
        }
        else if(event.target.className == "reduce"){
            var num = target.next().text();
            num--;
            target.next().text(num);
            
            if(arr.length>0){
                var flag = false;
                for(var i=0;i<arr.length;i++){
                    if(this.urlId == arr[i].id){
                        arr[i].num--;
                        flag = true;
                        break;
                    }
                }
                if(!flag){
                    goods.id = this.urlId;
                    goods.num = 2;
                    arr.push(goods);
                }
            }else{
                goods.id = this.urlId;
                goods.num = 2;
                arr.push(goods);
            }
        }
        localStorage.setItem("info",JSON.stringify(arr));
        if(event.target.className == "addcar"){
            /* localStorage.setItem("info",JSON.stringify(arr)); */
            alert("加入成功");
        }
    },
    getA:function(){
        $(".top_car").find("a").attr("href","./shoppingcar.html");
    }
    
})

new Detail().init();
