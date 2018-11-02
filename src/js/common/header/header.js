function Header(container){
    this.el = container;
}

Header.Template = `<div class="top_gray_wrap">
                        <div class="top_gray">
                            <ul class="topList right">
                                <li><a href="./login.html">登录</a> |</li>
                                <li><a href="./regist.html">免费注册</a></li>
                                <li class="about">
                                    <a href="#">关于我们<i class=""> </i></a>
                                    <div class="qr_code">
                                        <div class="qr_top">
                                            <a href="##">
                                                <span class="weibo"></span>
                                                <span class="weibo_r"></span>
                                            </a>
                                        </div>
                                        <div class="qr_bottom">
                                            <img src="../img/header-img/guanzhu-bg.jpg">
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#">帮助中心<i class=""> </i></a></li>
                                <li><a href="#">收藏丽子</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="top_center_wrap">
                        <div class="top_center">
                            <div class="logo left">
                                <a href="./index.html" target="_blank"><img src="../img/header-img/logo-08.png" /></a>
                            </div>
                            <div class="search">
                                <input class="search_in" type="text" placeholder="请输入商品或品牌""/><span class="search_out"></span>
                                <div class="hot_search">
                                    热搜榜:
                                    <a href="##">悦诗风吟</a>
                                    <a href="##">面霜</a>
                                    <a href="##">兰芝</a>
                                    <a href="##">面膜</a>
                                    <a href="##">化妆水</a>
                                    <a href="##">唇膏/口红</a>
                                    <a href="##">bb霜</a>
                                </div>
                            </div>
                           
                            <div class="top_car right">
                                <a href="#"><i class=""></i>购物车<span>&gt;</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="top_bottom_wrap">
                        <div class="top_bottom">
                            <ul class="nav">
                                <li class="first">
                                    <p><i class=""> </i>全部商品分类</p>
                                    <div class="secondNav">
                                        <div class="navDetail left">
                                            <div class="two left">
                                                <dl>
                                                    <dt>护肤</dt>
                                                    <dd>
                                                        <a href="##">洗面</a>
                                                        <a href="##">爽肤水</a>
                                                        <a href="##">防晒</a>
                                                        <a href="##">卸妆</a>
                                                        <a href="##">眼部护理</a>
                                                        <a href="##">面部精华</a>
                                                        <a href="##">乳液/面霜</a>
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>彩妆</dt>
                                                    <dd>
                                                        <a href="##">BB霜</a>
                                                        <a href="##">隔离/打底</a>
                                                        <a href="##">粉底液/膏</a>
                                                        <a href="##">眼影</a>
                                                        <a href="##">眼线</a>
                                                        <a href="##">睫毛膏</a>
                                                        <a href="##">口红</a>
                                                        <a href="##">香水</a>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div class="three left">
                                                <dl>
                                                    <dt>日化清洁</dt>
                                                    <dd>
                                                        <a href="##">洗发护发</a>
                                                        <a href="##">身体洗护</a>
                                                        <a href="##">口腔护理</a>
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>健康保养</dt>
                                                    <dd>
                                                        <a href="##">纤体瘦身</a>
                                                        <a href="##">美容丰胸</a>
                                                        <a href="##">成人用品</a>
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>化妆工具</dt>
                                                    <dd>
                                                        <a href="##">化妆刷</a>
                                                        <a href="##">化妆棉</a>
                                                        <a href="##">粉扑/洁面扑</a>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                        <ul class="navBrand left">
                                            <li><a href="##"><img src="../img/header-img/cata-cz-1.jpg"></a></li>
                                            <li><a href="##"><img src="../img/header-img/cata-cz-2.jpg"></a></li>
                                            <li><a href="##"><img src="../img/header-img/cata-hf-1.jpg"></a></li>
                                            <li><a href="##"><img src="../img/header-img/cata-hf-2.jpg"></a></li>
                                            <li><a href="##"><img src="../img/header-img/cata-hf-3.jpg"></a></li>
                                            <li><a href="##"><img src="../img/header-img/cata-gj-1.jpg"></a></li>
                                        </ul>  
                                    </div>
                                </li>
                                <li class="i60"><a href="##">60秒闪购</a></li>
                                <li class="iphon"><a href="##">手机丽子</a></li>
                            </ul>
                        </div>
                    </div>`;

$.extend(Header.prototype,{
    init:function(){
        this.createHeader();
    },
    createHeader:function(){
        this.content = $("<div></div>");
        this.content.html(Header.Template);
        this.content.appendTo(this.el);
    }
})