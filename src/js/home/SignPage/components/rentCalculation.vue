<template>
    <div class="dialog rent_dialog" v-if="visible" @click.stop="cancel">
        <div class="rent_container">
            <div class="rent_form" :class="{showClass:showClass}" @click.stop="1+1">
                <div class="head">
                    <div class="title">租赁测算体验，了解我的租赁方案</div>
                    <div class="tip">（以下测算结果仅供参考）</div>
                    <span @click="cancel" class="close">×</span>
                </div>
                <div class="form_item">
                    <div class="label">您的租赁预算总金额<span class="sub">（单位：元）</span></div>               
                    <div class="input_box" :class="{active:activeRentPrice}">
                        <el-input class="input" v-model="rentPrice" placeholder="请输入预算总金额" @focus="activeRentPrice=true" @blur="blurRentPrice" >
                        </el-input>
                        <div class="error_message" v-if="rentPriceErrorMessage">
                            <i class="icon el-icon-error"></i>
                            <span>{{rentPriceErrorMessage}}</span>
                        </div>
                    </div>
                </div>
                <div class="form_item">
                    <div class="label">
                        <span>选择租赁年化率</span>
                        <span class="tips">认证资料提交越齐全，您的年化率将越低。</span>
                    </div>               
                    <div class="input_box" >
                        <el-select class="input" @change="blurRentRate" v-model="rentRate" placeholder="" placeholder="请选择年化率">
                            <el-option
                            v-for="item in rentRateOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <div class="error_message" v-if="rentRateErrorMessage">
                            <i class="icon el-icon-error"></i>
                            <span>{{rentRateErrorMessage}}</span>
                        </div>
                    </div>
                    
                </div>
                <div class="form_item">
                    <div class="label">您的租赁周期</div>               
                    <div class="input_box" >
                        <el-select class="input" @change="blurRentTime" v-model="rentTime" placeholder="请选择周期">
                            <el-option
                            v-for="item in rentTimeOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <div class="error_message" v-if="rentTimeErrorMessage">
                            <i class="icon el-icon-error"></i>
                            <span>{{rentTimeErrorMessage}}</span>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <span @click="nextStep" class="button cancel">跳过</span>
                    <span class="button" @click="clickCalcuate">计算</span>
                </div>
            </div>
        </div>
        <div class="dialog rent_result" v-if="visibleResult" @click.stop="cancelResult">
            <div class="result_container" @click.stop="1+1">
                <div class="result_content" :class="{showClass:showResult}">
                    <img class="background_img" src="../../../../img/u1293.png" alt="">
                    <div class="title_header">计算结果</div>
                    <div class="content">
                        <div class="title">按照银行现行标准，租赁前期费用如下：</div>
                        <div class="item">
                            保证金：<span class="number">{{data.marginAmount||0.0}}</span>元
                        </div>
                        <div class="item">
                            平台服务费：<span class="number">{{data.financingServiceFee||0.0}}</span>元
                        </div>
                        <div class="title before">《购销合同》签署后，您须缴付租金，按月份预付：</div>
                        <div class="item">
                            每月租金：<span class="number">{{data.quarterlyRent||0.0}}</span>元
                        </div>
                        <div class="footer">
                            <span @click="cancelResult" class="button agin">再算一次</span>
                            <span @click="nextStep" class="button">下一步</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {customerModule} from '../../../api/main';
export default {
    props:{
        visible:{
            default:false,
            
        }
    },
    data(){
        return {
            showClass:false,
            visibleResult:false,
            showResult:false,

            rentPrice:'',
            activeRentPrice:false,
            rentPriceErrorMessage:'',

            rentRate:'',
            rentRateErrorMessage:'',
            rentRateOptions:[{value:'8',label:'8%'},{value:'9',label:'9%'},{value:'10',label:'10%'},{value:'11',label:'11%'},{value:'12',label:'12%'}],

            rentTime:'',
            rentTimeErrorMessage:'',
            rentTimeOptions:[{value:12,label:'12个月'},{value:24,label:'24个月'},{value:36,label:'36个月'},{value:60,label:'60个月'}],
            data:{}
        
        }
    },
    methods:{
        cancel(){
            this.$emit('update:visible',false);
        },
        nextStep(){
            this.$router.push('/licence')
        },
        cancelResult(){
            this.visibleResult=false;
            this.showResult=false;
        },
        blurRentPrice(){
            this.activeRentPrice=false;
            if(!this.rentPrice||(+this.rentPrice+'')=='NaN'){
                this.rentPriceErrorMessage='请输入阿拉伯数字！';
                return false;
            }else{
                this.rentPriceErrorMessage='';
                return true;
            }
        },
        blurRentRate(){
            if(!this.rentRate){
                this.rentRateErrorMessage='请选择年化率！';
                return false;
            }else{
                this.rentRateErrorMessage='';
                return true;
            }
        },
        blurRentTime(){
            if(!this.rentTime){
                this.rentTimeErrorMessage='请选择您的租赁周期！';
                return false;
            }else{
                this.rentTimeErrorMessage='';
                return true;
            }
        },
        clickCalcuate(){
            if(this.blurRentPrice()&&this.blurRentRate()&&this.blurRentTime()){
                this.calculationHttp();
            }
        },
        calculationHttp(){//计算接口
            customerModule.calculation({
                leaseTotalAmount:this.rentPrice,
                annualRate:this.rentRate,
                leaseholdCycle:this.rentTime
            }).then(res=>{
                if(res.statusCode==1){
                    this.data=res.data||{};
                    this.visibleResult=true;
                    setTimeout(()=>{
                        this.showResult=true;
                    },10)
                }
            })
        }
    },
    mounted(){
        setTimeout(()=>{
            this.showClass=true;
        },10)
    }
}
</script>
<style lang="scss" scoped>
   .rent_container{
       position: absolute;
       width:100%;
       top:58px;
       height: 568px;
       overflow: hidden;

   }
    .rent_form{
        width:460px;
        height: 568px;
        background: #fff;
        position: absolute;
        left: 50%;
        margin-left:-230px;
        top:-568px;
        border-radius:4px;
        &.showClass{
           top: 0px;
           transition: top 1s;
       }
       .head{
           position: relative;
           height: 110px;
           background: url('../../../../img/u1218.png') center no-repeat;
           background-size: cover;
           text-align: center;
           margin-bottom: 10px;
           color: #fff;
           .title{
               font-size: 20px;
               padding:35px 0 20px;
           }
           .tip{
               font-size: 12px;
           }
           .close{
              font-size: 18px;
               cursor: pointer;
               position: absolute;
               top:10px;
               right:10px;
           }
       }
       .form_item{
           padding:0 45px;
           margin-bottom: 45px;
       }
       .label{
            // font-size: 18px;
            line-height: 34px;
            text-align: left;
            .sub{
                font-size: 12px;
            }
        }
       .input_box{
            position: relative;
            // border-radius: 5px;
            .input{
                // font-size: 15px;
                height: 40px;
                width:100%;
            }
            .error_message{
                position: absolute;
                top:100%;
                // display: flex;
                // align-items: center;
                line-height: 30px;
                .icon{
                    margin-left: 0px;
                }
            }
        }
        .tips{
            font-size: 12px;
            color:rgba(136,136,136,1);
        }
    }
    .footer{
        padding-bottom: 30px;
        padding-top: 5px;
        display: flex;
        padding:0 45px;
        justify-content: space-between;
        .button{
            width:176px;
            line-height: 40px;
            font-size: 16px;
        }
    }
    .rent_result{
        z-index: 10002;
    }
    .result_container{
        width:460px;
        height: 360px;
        position: absolute;
        top:50%;
        left:50%;
        margin-left:-230px;
        margin-top:-180px;
        overflow: hidden;
    }
    .result_content{
        background: #fff;
        border-radius:4px;
        width:460px;
        height: 360px;
        position: absolute;
        left:0px;
        top:-360px;
        text-align: left;
        box-sizing: border-box;
        &.showClass{
            top:0px;
            transition: all 0.5s;
        }
        .background_img{
            position: absolute;
            top:55px;
            right:20px
        }
        .title_header{
            text-align: center;
            border-bottom: 1px solid rgba(238,238,238,1);
            line-height: 60px;
            font-size:18px;
        }
        .content{
            padding:0 44px;
        }
        .title{
            font-size: 12px;
            color:rgba(102,102,102,1);
            padding: 25px 0px 10px 0px;
            &.before{
                text-indent: -5px;
            }
        }
        .item{
            margin-bottom: 10px;
            .number{
                color: rgba(255, 166, 50, 1);
            }
        }
        .footer{
            padding: 40px 0px 20px 0px;
            .button{
                width:176px;
                &.agin{
                    background: #fff;
                    color:rgba(255,166,50,1);
                    border:1px solid rgba(255,166,50,1);
                }
            }
        }
    }
</style>

