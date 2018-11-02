function Foot(){
    this.el = "#foot";
}

Foot.Template = `<div class="foot_left left">
                    <div class="foot_about">
                        <a href="##">关于丽子</a>
                        <a href="##">/商家入驻</a>
                        <a href="##">/加入我们</a>
                        <a href="##">/配送政策</a>
                        <a href="##">/售后保障</a>
                        <a href="##">/帮助中心</a>
                        <a href="##">/联系我们</a>
                        <a href="##">/平台公告</a>
                        <a href="##">/友情链接</a>
                    </div>
                    <div class="detail">
                        <p>© 2018 杭州徐娜拉电子商务有限公司 LIZI.COM 增值电信业务经营许可证：浙B2-20110315 备案号：浙ICP备11012845号-5</p>
                        <p>
                            <span>服务时间：09:00-23:00</span>
                            <span>客服热线: 0527-80200135</span>
                            <span><i></i>浙公网安备33010402001635号</span>
                        </p>
                        <p>
                            <a href="##">米折网</a>
                            <a href="##">一号店</a>
                            <a href="##">国美在线</a>
                            <a href="##">韩都衣舍</a>
                            <a href="##">优购物</a>
                            <a href="##">寺库网</a>
                            <a href="##">海尔商城</a>
                            <a href="##">比价网</a>
                            <a href="##">挖东西</a>
                            <a href="##">卷皮网</a>
                            <a href="##">视客眼镜网</a>
                            <a href="##">尚品网</a>
                            <a href="##">飞牛网</a>
                            <a href="##">悦美整形网</a>
                        </p>
                        <p class="foot_icon1">
                            <a href="##"><img src="../img/header-img/foot1.jpg"></a>
                            <a href="##"><img src="../img/header-img/foot2.jpg"></a>
                        </p>
                    </div>
                    </div>
                    <div class="foot_right right">
                    <div class="weixin">
                        <img src="../img/header-img/foot3.jpg">
                        <i></i>
                        <p>扫描关注微信公众号</p>
                    </div>
                    <div class="cilent">
                        <img src="../img/header-img/foot4.jpg">
                        <i>APP</i>
                        <p>手机客户端下载</p>
                    </div>
                    </div>`;

$.extend(Foot.prototype,{
    init:function(){
        this.createFoot();
    },
    createFoot:function(){
        this.content = $("<div></div>");
        this.content.html(Foot.Template);
        this.content.appendTo(this.el);
    }
})

new Foot().init();