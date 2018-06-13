<template>
    <div class="about_left">
        <div class="title">ABOUT US</div>
        <ul>
            <!-- <li class="item_link"> -->
                <router-link tag="li" class="link" to="/about/us">品牌精神</router-link>
            <!-- </li> -->
            <!-- <li class="item_link"> -->
                <router-link tag="li" class="link" to="/about/team">团队荣誉</router-link>
            <!-- </li> -->
            <!-- <li class="item_link"> -->
                <router-link tag="li" class="link qs" to="/about/qs">
                    <span>常见问题</span>
                    <i class="icon" :class="{'el-icon-caret-bottom':$route.path!='/about/qs','el-icon-caret-right':$route.path=='/about/qs'}"></i>
                </router-link>
            <!-- </li> -->
        </ul>
        <div class="contact_box">
            <div class="font16 header">联系我们</div>
            <div class="contact_item">
                <div class="img_box font0">
                    <img src="../../../img/location_icon.png" alt="">
                </div>
                <div>
                    <div class="font14">深圳总部</div>
                    <p class="font12 text">广东省深圳市南山区蛇口沿山路<br />22号火炬创业大厦3F</p>
                </div>
            </div>
            <div class="contact_item">
                <div class="img_box font0">
                    <img src="../../../img/contact_icon.png" alt="">
                </div>
                <div>
                    <div class="font14">联系方式</div>
                    <p class="font12 text">电话 400-880-4604<br />邮箱 service@zulifang.co</p>
                </div>
            </div>
            <div class="contact_item">
                <div class="img_box font0">
                    <img src="../../../img/time_icon_small.png" alt="">
                </div>
                <div>
                    <div class="font14">工作时间</div>
                    <p class="font12 text">工作日 9：00-18：30</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
    .about_left{
        width:272px;
        margin-right: 100px;
        box-sizing: border-box;
        .title{
            font-weight: bold;
            font-size:24px;
            padding:62px 0px 26px 28px;
        }
        .link{
            line-height: 46px;
            color:rgba(136,136,136,1);
            text-indent: 22px;
            border-left:6px solid transparent;
            cursor: pointer;
            font-size:16px;
            border-bottom: 1px solid rgba(231,231,231,1);
            &.router-link-active{
                background:rgba(255,166,50,1);
                color:#fff;
                border-left:6px solid rgba(41,43,44,1);
                border-bottom: none;
            }
            .icon{
                font-size:14px;
                float: right;
                margin:18px 5px 0px 0px;
            }
        }
        .contact_box{
            background:rgba(244,244,244,1);
            margin-top:82px;
            padding-bottom: 26px;
            .header{
                line-height: 60px;
                padding-left:28px;
                border-bottom: 1px solid rgba(231,231,231,1);
            }
            .contact_item{
                padding-left:26px;
                display: flex;
                padding-top:26px;
                .img_box{
                    margin-right: 15px;
                }
                .text{
                    line-height: 22px;
                    margin-top:6px;
                }
            }
        }
    }
</style>

