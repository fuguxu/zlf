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
                <div class="title">推荐值</div>
                <div class="recommend_value">
                    <div class="value">
                        <p class="sub">当前推荐值：<span class="time">更新于{{data.lastUpdateTime}}</span> </p>
                        <p class="number">{{data.recommValue}}<span class="union">分</span></p>
                    </div>
                    <div class="line"></div>
                    <div class="rate">
                        <div class="circle">{{data.recommPercent}}</div>
                        <p class="text">超过平台{{data.recommPercent}}的同类供应商</p>
                    </div>
                </div>
                <div class="result">
                    <div class="title_sub">推荐结果</div>
                    <div v-if="!switchValue" class="close_recommend">当前推荐处于关闭状态，如您有足够的产能，请手动开启</div>
                    <div v-else class="open_recommend">
                        <div class="open_time"><span>开启推荐时间：</span><span class="time">{{data.startRecommTime}}</span></div>
                        <div class="circle">
                            {{data.recommNum}}
                            <div class="circle_img"></div>
                        </div>
                        <div class="open_text">截至当前，租立方已已将您推荐给<span class="number">{{data.recommNum}}</span>名客户。</div>
                    </div>
                </div>
                <div class="rise_up">
                    <div class="title_sub">提高推荐值攻略</div>
                    <p class="desc sub">租立方根据每一个供应商的推荐值分数，优先向客户推荐更高分值的供应商；推荐值是您获取客源的基础和</br >
                        前提条件，推荐值越高，您获得客户数量将越多。可以通过以下途径提高推荐值：
                    </p>
                    <p class="desc sub"></p>
                    <p class="desc">1.“公司信息”（基本信息与联系信息）填写越完善，推荐值越高；如发现填写与实际不符，根据失实程度扣取对应分值。</p>
                    <p class="desc">2.“推荐详情”填写越完善，推荐值越高；如发现填写与实际不符，酌情扣取分值。</p>
                    <p class="desc">3.在与客户沟通过程中，请保持积极的态度，若发现存在态度恶劣、沟通不积极等情况，酌情扣取分值。</p>
                    <p class="desc">4.您在租立方平台成功交易的累积金额越高，推荐越高。</p>
                    <p class="desc">5.复单数越多，推荐值越高。</p>
                    <p class="desc">6.请保持良好的企业信用记录。</p>
                    <p class="desc">7.以下协议或资料，您签署或提交得越齐全，推荐值越高。</p>
                    <p class="desc sub subfile">《平台入驻协议》</p>
                    <p class="desc sub subfile">《一般纳税人认定通知书》</p>
                    <p class="desc sub subfile">《售后回购协议》</p>
                    <p class="desc sub subfile">《企业股东架构》</p>
                    <p class="desc sub subfile">《企业财报》</p>
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
                font-size: 15px;
                height: 26px;
                line-height: 26px;
                margin-top:14px;
                background: url('../../../img/u4148.png') no-repeat 45px center;
                background-size: 26px;
            }
        }
        .recommend_right{
            flex: 1;
            border: 1px solid rgba(237, 237, 237, 1);
            background: #fff;
            border-radius:6px;
            .title{
                line-height: 64px;
                font-size: 18px;
                color: rgb(41, 43, 44);
                padding-left:21px;
                border-bottom: 1px solid rgba(237, 237, 237, 1);
            }
             .circle{
                color: rgb(242, 159, 51);
                width:143px;
                height: 143px;
                box-sizing: border-box;
                border:9px solid rgb(242, 159, 51);
                border-radius: 50%;
                text-align: center;
                line-height: 134px;
            }
            .recommend_value{
                // width:908px;
                margin:0 auto;
                height:190px;
                border-bottom: 1px solid rgba(237, 237, 237, 1);
                display: flex;
                .value{
                    flex: 1;
                    .sub{
                        font-size: 15px;
                        color: rgb(41, 43, 44);
                        padding:37px 0;
                        padding-left:75px;
                        .time{
                            font-size: 13px;
                            color: rgba(41, 43, 44, 0.6);
                        }
                    }
                    .number{
                        font-size:38px;
                        color: rgb(242, 159, 51);
                        padding-left:75px;
                        .union{
                            font-size:28px;
                        }
                    }
                }
                .line{
                    height: 108px;
                    width:1px;
                    background:rgba(237, 237, 237, 1);
                    margin-top:41px; 
                }
                .rate{
                    flex: 1;
                    display: flex;
                    .circle{
                        font-size:30px;
                        margin:14px 20px 0 80px;
                    }
                    .text{
                        line-height: 180px;
                        font-size: 16px;
                        color: rgb(41, 43, 44);
                    }
                }
            }          
            .result{
                // width:908px;
                margin:0 auto;
                padding-bottom: 102px;
                .close_recommend{
                    font-size: 16px;
                    color: rgba(41, 43, 44, 0.8);
                    background: url('../../../img/u4372.png') no-repeat 12px center;
                    background-size: 30px;
                    line-height: 30px;
                    padding-left:50px;
                }
                .open_recommend{
                    padding-left:80px;
                    .circle{
                        margin:35px 0px;
                        font-size:42px;
                        position: relative;
                        .circle_img{
                            position: absolute;
                            width:128px;
                            height:128px;
                            background: url('../../../img/u4170.png') no-repeat center;
                            background-size: 128px;
                            top:-1px;
                            left:-1px;
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
                        font-size: 15px;
                        color: #292B2C;
                        .time{
                            font-size: 20px;
                            color: rgba(41, 43, 44, 0.8);
                        }
                    }
                    .open_text{
                        font-size: 16px;
                        color: #292B2C;
                        .number{
                            color: #F29F33;
                        }
                    }
                }
            }
            .title_sub{
                color: rgb(41, 43, 44);
                font-size: 16px;
                padding-left:8px;
                margin:35px 0 20px;
                border-left: 3px solid rgb(242, 159, 51);;
            }
            .rise_up{
                height: 578px;
                // width:908px;
                margin:0 auto;
                border-top: 1px solid rgba(201,201,201,0.2);
                .desc{
                    padding-left: 12px;
                    color: rgba(41, 43, 44, 0.90);
                    font-size:14px;
                    margin-top:15px;
                    &.sub{
                        color: rgba(41, 43, 44, 0.70);
                        line-height: 24px;
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
