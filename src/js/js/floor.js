function Rander(){
    this.el = $("#classify");
    this.length = 0;
    this.str1 = '';
    this.str2 = '';
    this.str3 ='';
    this.num = 0;
    this.getData();
}

$.extend(Rander.prototype,{
    init:function(){
        this.getFloor();
    },
    getData:function(){
        var _this = this;
        $.ajax({
            type:"get",
            url:"http://list.mogujie.com/search",
            dataType:"jsonp",
            success:function(data){
                _this.getFloor(data.result.wall.list);
            }
        })
    },
    getFloor:function(data){
        if (data) {
            this.length = data.length;
            var str="";
            var d = data;
            for(var i=0;i<5;i++){
                str+=this.merge(d);   
            }
            $("#classify").html(str);
            this.getLink()
        }
    },
    top:function(){
        this.str1 = `<div class="series_title">
                        <strong><a href="##">化妆水</a></strong>
                        <a href="##">爽肤水</a>
                        <a href="##">紧肤水</a>
                        <a href="##">美容液</a>
                        <a href="##">精华水</a>
                        <a href="##">喷雾</a>
                    </div>`;
        return this.str1;
    },
    getUl:function(d){
        var len = 0;
        this.str2 = `<ul class="floor1" id="floor${this.num}">`;
        if (this.num == Math.floor(this.length / 8)) {
            len = 8*Math.floor(this.length / 8) + this.length%8;
        } else {
            len = 8*(this.num + 1)
        }
        for(var i=8*this.num;i<len;i++){
            this.str3 += `<li>
                            <a href="##">
                                <div class="floor_img">
                                    <img src="${d[i].show.img}" />
                                </div>
                                <div class="floor_bottom">
                                    <p class="title">${d[i].title}</p>
                                    <p class="floor_price left">￥<i class="price">${d[i].price.slice(1)}</i></p>
                                    <p class="sales right"><i class="salesIcon"></i><i class="salesvolume">${d[i].cfav}</i></p>
                                </div>
                            </a>
                        </li>`;
        }
        str = this.str2 + this.str3 + `</ul>`;
        return str;
    },
    merge:function(d){
        var str4 = this.top() + this.getUl(d);
        this.str2 = this.str3 = "";
        this.num++;
        return str4;
    },
    getLink:function(){
        //获取所有li下的img,给其添加自定义属性id
        this.imgs = $(".floor1>li").find("img");
        for(var i=0;i<this.imgs.length;i++){
            $(".floor1>li").find("img").eq(i).attr("data-id",i);
            console.log($(".floor1>li").find("img").eq(i).attr("data-id"));
        
            $(".floor1>li").find("img").eq(i).click($.proxy(this.transfer,this));
        }
    },
    transfer:function(event){
        var goodsId;
        if(event.target.tagName == "IMG"){
            goodsId = $(event.target).attr("data-id");
            console.log(goodsId)
            location.href = "details.html?id="+goodsId;
        }
    }

})

new Rander().init();