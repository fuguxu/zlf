<template>
    <div class="recommend_contaniner">
        <div class="recommend_content">
            <div class="recommend_left">
                <div class="recommend_icon">
                    <img class="icon" :src="user.userHeadimg" alt="">
                    <div class="title font18">{{user.userAbbr}}</div>
                </div>
                <div class="recommend_desc font16">
                    推荐值
                </div>
            </div>
            <div class="recommend_right">
                <div class="title font18">推荐值</div>
                <div class="content">
                    <div class="recommend_value">
                        <div class="value">
                            <p class="title_sub"><span class="line"></span><span>当前推荐值：</span><span class="time font14">更新于{{data.lastUpdateTime}}</span> </p>
                            <p class="number" v-if="data.recommValue">{{(+data.recommValue).toFixed(2)}}<span class="union">分</span></p>
                        </div>
                        <div class="rate">
                            <div class="circle">{{data.recommPercent}}</div>
                            <p class="text color6">超过平台{{data.recommPercent}}的同类供应商</p>
                        </div>
                    </div>
                    <div class="result">
                        <div class="title_sub"><span class="line"></span><span>推荐结果</span></div>
                        <div v-if="!switchValue" class="close_recommend font16">
                            <i class="icon colorYellow font18 el-icon-warning"></i>
                            <span class="color6 font16">当前推荐处于关闭状态，如您有足够的产能，请手动开启</span>
                        </div>
                        <div v-else class="open_recommend">
                            <div>

                            </div>
                            <div class="open_time color6"><span>开启推荐时间：</span><span class="time">{{data.startRecommTime}}</span></div>
                            <div class="circle_wrap colorYellow">
                                {{data.recommNum}}
                                <div class="circle_img"></div>
                            </div>
                            <div class="open_text color6">截至当前，租立方已将您推荐给<span class="number">{{data.recommNum}}</span>名客户。</div>
                        </div>
                    </div>
                    <div class="rise_up">
                        <div class="title_sub"><span class="line"></span><span>提高推荐值攻略</span></div>
                        <p class="desc sub color6">租立方根据每一个供应商的推荐值分数，优先向客户推荐更高分值的供应商；推荐值是您获取客源的基础和</br >
                            前提条件，推荐值越高，您获得客户数量将越多。可以通过以下途径提高推荐值：
                        </p>
                        <p class="desc">1.“公司信息”（基本信息与联系信息）填写越完善，推荐值越高；如发现填写与实际不符，根据失实程度扣取对应分值。</p>
                        <p class="desc">2.“推荐详情”填写越完善，推荐值越高；如发现填写与实际不符，酌情扣取分值。</p>
                        <p class="desc">3.在与客户沟通过程中，请保持积极的态度，若发现存在态度恶劣、沟通不积极等情况，酌情扣取分值。</p>
                        <p class="desc">4.您在租立方平台成功交易的累积金额越高，推荐越高。</p>
                        <p class="desc">5.复单数越多，推荐值越高。</p>
                        <p class="desc">6.请保持良好的企业信用记录。</p>
                        <p class="desc">7.以下协议或资料，您签署或提交得越齐全，推荐值越高。</p>
                        <p class="desc sub subfile">《平台入驻协议》《一般纳税人认定通知书》《售后回购协议》《企业股东架构》《企业财报》</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            switchValue:'',
            user:{},
            data:{}
        }
    },
    methods:{
        receviewSwitch(value){//接受开关改变
            if(value&&this.switchValue!=value){
                this.getRecommResult();
            }
            this.switchValue=value;
        },
        getRecommResult(){//获取推荐值
            customerModule.getRecommResult().then(res=>{
                if(res.statusCode=='1'){
                    this.data=res.data;
                    this.data.startRecommTime=AppUtil.transferTimeToString(this.data.startRecommTime,'-',true);
                    this.data.lastUpdateTime=AppUtil.transferTimeToString(this.data.lastUpdateTime,'-',true);
                }
            })
        },
    },
    mounted(){
        Bus.$on('recommendSwitch',this.receviewSwitch);
        this.switchValue=localStorage.getItem('recommendSwitch')=='false'?false:true;
         AppUtil.getCurrentUserInfo(user=>{
            this.user=user;
        });
        this.getRecommResult();
    }
}
</script>
<style lang="scss" scoped>
    .recommend_content{
        width:1160px;
        margin:0 auto;
        display: flex;
        padding:20px 0 40px 0px;
        .recommend_left{
            width:264px;
            box-sizing: border-box;
            padding:0 12px;
            background: #fff;
            height:277px;
            text-align: center;
            border-radius:6px;
            font-size:14px;
            margin-right: 20px;
            .recommend_icon{
                border-bottom: 1px solid rgba(244,244,244,1);
                .icon{
                    width:88px;
                    height:88px;
                    margin-top:52px;
                }
                .title{
                    padding:28px 0px;
                }
            }
            .recommend_desc{
                color: rgba(255,166,50,1);
                cursor: pointer;
                height: 26px;
                line-height: 26px;
                margin-top:14px;
                background: url('../../../img/u4148.png') no-repeat 70px center;
                background-size: 19px;
            }
        }
        .recommend_right{
            flex: 1;
            border: 1px solid rgba(237, 237, 237, 1);
            background: #fff;
            border-radius:6px;
            .title{
                line-height: 64px;
                padding-left:20px;
                border-bottom: 1px solid rgba(237, 237, 237, 1);
            }
             .circle{
                color: rgba(255,166,50,1);
                width:130px;
                height: 130px;
                box-sizing: border-box;
                border:4px solid rgba(255,166,50,1);
                border-radius: 50%;
                text-align: center;
                line-height: 130px;
                font-size: 40px;
            }
            .content{
                padding:0 22px;
            }
            .recommend_value{
                border-bottom: 1px solid rgba(244,244,244,1);
                display: flex;
                .value{
                    flex: 1;
                    .sub{
                        font-size: 15px;
                        color: rgb(41, 43, 44);
                        padding:37px 0;
                        padding-left:75px;
                        
                    }
                    .number{
                        font-size:50px;
                        color: rgba(255,166,50,1);
                        padding-left:20px;
                        padding-top:42px;
                        .union{
                            font-size:20px;
                        }
                    }
                }
                .rate{
                    flex: 1;
                    display: flex;
                    align-items: center;
                    padding:6px 0px;
                    border-left:1px solid rgba(244,244,244,1);
                    margin:48px 0px;
                    .circle{
                        margin-left:50px;
                        margin-right:14px;
                    }
                }
            }          
            .result{
                margin:0 auto;
                padding-bottom: 55px;
                .close_recommend{
                    padding-top:75px;
                    display: flex;
                    align-items: center;
                    padding-left:20px;
                    .icon{
                        margin-right:15px;
                    }
                }
                .open_recommend{
                    text-align: center;
                    padding-top:32px;
                    .circle_wrap{
                        margin:20px 0px 34px 0px;
                        position: relative;
                        width:130px;
                        height:130px;
                        line-height: 130px;
                        text-align: center;
                        font-size: 40px;
                        display: inline-block;
                        .circle_img{
                            position: absolute;
                            width:130px;
                            height:130px;
                            background: url('../../../img/u4170.png') no-repeat center;
                            background-size: 128px;
                            top:0px;
                            left:0px;
                            animation: rotatefresh 2s;
                            animation-iteration-count: infinite;
                            animation-timing-function: linear;
                        }
                        @keyframes rotatefresh {
                            from { transform: rotate(0deg) }
                            to {
                                transform: rotate(360deg);
                            }
                        }
                    }
                    .open_time{
                    }
                    .open_text{
                    }
                }
            }
            .title_sub{
                display: flex;
                align-items: center;
                font-size: 16px;
                padding-top:35px;
                .line{
                    width:6px;
                    height:12px;
                    background:rgba(255,166,50,1);
                    border-radius:3px;
                    margin-right: 14px;
                }
                .time{
                    color:rgba(153,153,153,1);
                }
            }
            .rise_up{
                margin:0 auto;
                border-top: 1px solid rgba(244,244,244,1);
                padding-bottom: 75px;
                .desc{
                    padding-left: 20px;
                    margin-top:15px;
                    &.sub{
                        line-height: 30px;
                    }
                    &.subfile{
                        margin-top:5px;
                        padding-left:18px;
                    }
                }
            }
        }
    }
</style>
