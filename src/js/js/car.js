function Car(){
     this.str = "";
     this.arr;
}

$.extend(Car.prototype,{
    init:function(){

        if(localStorage.getItem("info")){
            this.arr = JSON.parse(localStorage.getItem("info"));
        }else{
            this.arr = [];
        }
        this.getData();
    },
    getData:function(){
        var _this=this;
        //请求json数据与本地localstorage对比
        $.ajax({
            type:"get",
            url:"http://list.mogujie.com/search",
            dataType:"jsonp",
            success:function(data){
                _this.randerCar(data.result.wall.list);
            }
        })
    },
    //渲染购物车
    randerCar:function(data){
        for(var i=0;i<this.arr.length;i++){
            for(var j in data){
                if(this.arr[i].id == j){
                    this.str += `<tr class="trs" data-id="${this.arr[i].id}" style="background:#ccc">
                                <td><input class="choose" type="checkbox"></td>
                                <td><img src="${data[j].show.img}" class="smallPic"></td>
                                <td class="price">￥${data[j].price.slice(1)}</td>
                                <td>
                                    <button class="reduce">-</button>
                                    <input type="text" value="${this.arr[i].num}" class="num">
                                    <button class="add">+</button>
                                </td>
                                <td class="subtotal">￥${data[j].price.slice(1)*this.arr[i].num}</td>
                                <td class="del">删除</td>
                            </tr>`;
                }
            }
        }
        $("#list").append(this.str);
        this.event();
    },
    event:function(){
        $(".carwrap").click($.proxy(this.features,this));
    },
    features:function(event){
        var target = $(event.target);
        var option = $("#option");
        var allDel = $("#alldel");

        //全选
        if(event.target.id == "option"){
            if(target.prop("checked")){
                $(".choose").each(function(){
                    $(this).prop("checked",true);
                })
                allDel.prop('checked',true)
            }else{
                $(".choose").each(function(){
                    $(this).prop("checked",false);
                })
                allDel.prop('checked',false);
            }
           
         }
        else if(event.target.id == "alldel"){
            if(target.prop("checked")){
                $(".choose").each(function(){
                    $(this).prop("checked",true);
                })
                option.prop("checked",true);
            }else{
                $(".choose").each(function(){
                    $(this).prop("checked",false);
                })
                option.prop("checked",false);
            }
        }
        var bstop = true;
        $(".choose").each(function(i){
            if(!$(".choose").eq(i).prop("checked")){
                bstop = false;
                return bstop;
            }
        })

        if(bstop){
            option.prop("checked",true);
            allDel.prop("checked",true);
        }else{
            option.prop("checked",false);
            allDel.prop("checked",false);
        }
        
        //加
        if(event.target.className == "add"){
            var num = target.prev().val();
            num++;
            target.prev().val(num);
            //小计
            target.parent().next().text("￥"+target.parent().prev().text().slice(1)*num);
            //改变本地localstorage
            console.log(this.arr)
            for(var i in this.arr){
                if(this.arr[i].id == target.parent().parent().attr("data-id")){
                    this.arr[i].num = num;
                }
            }
            localStorage.setItem("info",JSON.stringify(this.arr));
        }

        //减
        else if(event.target.className == "reduce"){
            var num = target.next().val();
            num--;
           /*  console.log(num) */
            if(num <= 1){
                num = 1;
                target.next().val(1);
            }else{
                target.next().val(num);
            }
            for(var i in this.arr){
                if(this.arr[i].id == target.parent().parent().attr("data-id")){
                    this.arr[i].num = num;
                }
            }
            localStorage.setItem("info",JSON.stringify(this.arr));
            target.parent().next().text("￥"+target.parent().prev().text().slice(1)*num);
        }

        //总计
        if(event.target.id == "allCount"){
            var total = 0;
            $(".choose").each(function(i){
                if($(".choose").eq(i).prop("checked")){
                    total += parseInt($(".subtotal").eq(i).text().slice(1));
                    console.log(total)
                }
            })
            $("#span").text("￥"+total);
        }

        //删除
        if(event.target.className == "del"){
            target.parent().remove();
            var numId = target.parent().attr("data-id")
            for(var i in this.arr){
                if(this.arr[i]){
                    if(numId == this.arr[i].id){
                        this.arr.splice(i,1)
                    }
                }
            }
        localStorage.setItem("info",JSON.stringify(this.arr));
        }

        //全选删除
        if(event.target.className == "delgoods"){
            if(allDel.prop("checked")){
                localStorage.clear(this.arr);
                $(".trs").remove("");
                option.prop("checked",false);
                allDel.prop("checked",false);
            }
        }
    }
})

new Car().init();