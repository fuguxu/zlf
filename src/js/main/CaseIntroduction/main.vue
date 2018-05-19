<template>
    <div class="recommend_preview">
        <div class="recommend_content">
            <div class="title" >华日家居</div>
            <div class="title_sub" >廊坊华日家具股份有限公司</div>
            <p class="content">华日家具是中国驰名商标，华日家具股份有限公司旗下品牌。华日家具股份有限公司坐落于京津塘高速公路中段---廊坊经济技术开发区（距北京36公里），是中国家具的
                一颗明珠！经历四十多年的发展，现已拥有多种风格民用、沙发软体、床垫、家居饰品、木门、橱柜、儿童、办公、宾馆等系列产品；公司生产基地占地1300多亩，建筑
                    面积50多万平方米，员工5000多人，高等设计、管理。
            </p>
            <div class="equiment item">
                <div class="item_title">
                    <div class="line"></div>
                    <div>生产设备</div>
                </div>
                <div class="content_item">
                    <div class="desc">紧落实中。虽然获得一些其他城市同行的加盟意向，但罗森柏表示，每个区域对产品的需求不同。</div>
                    <div class="img_box">
                        <fadeIn></fadeIn>
                    </div>
                </div>
            </div>
            <div class="equiment item">
                <div class="item_title">
                    <div class="line"></div>
                    <div>产品介绍</div>
                </div>
                <div class="content_item">
                    <div class="desc">产品一：新中式整装</div>
                    <div class="desc">紧落实中。虽然获得一些其他城市同行的加盟意向，但罗森柏表示，每个区域对产品的需求不同。</div>
                    <div class="img_box">
                        <fadeIn></fadeIn>
                    </div>
                </div>
            </div>     
        </div>
    </div>
</template>
<script>
import fadeIn from './fadeIn';
export default {
    data(){
        return {

        }
    },
    components:{
        fadeIn
    }
}
</script>
<style lang="scss" scoped>
    .recommend_preview{
        padding-top:20px;
        padding-bottom: 53px;
    }
    .recommend_content{
        width:1200px;
        background: #fff;
        margin:0 auto;
        min-height: 400px;
        padding:0 52px;
        box-sizing: border-box;
        .title{
            font-size:24px;
            color:rgba(51,51,51,1);
            line-height:38px;
            text-align: center;
            padding:31px 0 0 16px;
        }
        .title_sub{
            font-size:18px;
            color:rgba(136,136,136,1);
            line-height:38px;
            text-align: center;
            padding-bottom: 54px;
        }
        .content{
            font-size:14px;
            color:rgba(51,51,51,1);
            line-height:38px;
        }
        .item{
            margin-top:60px;
        }
        .item_title{
            display: flex;
            align-items: center;
            font-size:18px;
            color:rgba(51,51,51,1);
            line-height: 38px;
            .line{
                width:6px;
                height:12px; 
                background:rgba(255,166,50,1);
                border-radius: 3px ;
                margin-right:14px;
            }
        }
        .content_item{
            padding:0 22px;
            .desc{
                font-size:14px;
                color:rgba(51,51,51,1);
                line-height:38px;
            }
            .img_box{
                margin-top:26px;
                height:477px;
            }
        }
    }
</style>
