<template>
    <div class="dialog rent_dialog" v-if="visible" @click.stop="cancel">
        <div class="rent_container">
            <div class="rent_form" :class="{showClass:showClass}" @click.stop="1+1">
                <div class="head">
                    <div class="title">租赁测算体验，了解我的租赁方案</div>
                    <div class="tip">（以下测算结果仅供参考）</div>
                    <img class="close" src="../../../../img/u1284.png" alt="">
                </div>
                <div class="form_item">
                    <div class="label">您的租赁预算总金额<span class="sub">（单位：元）</span></div>               
                    <div class="input_box" :class="{active:activeRentPrice}">
                        <el-input class="input" v-model="rentPrice" @focus="activeRentPrice=true" @blur="blurRentPrice" >
                        </el-input>
                        <div class="error_message" v-if="rentPriceErrorMessage">
                            <i class="icon el-icon-remove"></i>
                            <span>{{rentPriceErrorMessage}}</span>
                        </div>
                    </div>
                </div>
                <div class="form_item">
                    <div class="label">选择租赁年化率</div>               
                    <div class="input_box" >
                        <el-select class="input" v-model="rentRate" placeholder="">
                            <el-option
                            v-for="item in rentRateOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <div class="error_message" v-if="rentRateErrorMessage">
                            <i class="icon el-icon-remove"></i>
                            <span>{{rentRateErrorMessage}}</span>
                        </div>
                    </div>
                    <div class="tips">tip:风控资料提交越齐全，您的年化率将越低。</div>
                </div>
                <div class="form_item">
                    <div class="label">您的租赁周期</div>               
                    <div class="input_box" >
                        <el-select class="input" v-model="rentTime" placeholder="">
                            <el-option
                            v-for="item in rentTimeOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <div class="error_message" v-if="rentTimeErrorMessage">
                            <i class="icon el-icon-remove"></i>
                            <span>{{rentTimeErrorMessage}}</span>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <span class="button">跳过</span>
                    <span class="button">计算</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        visible:{
            default:false
        }
    },
    data(){
        return {
            showClass:false,

            rentPrice:'',
            activeRentPrice:false,
            rentPriceErrorMessage:'',

            rentRate:'',
            rentRateErrorMessage:'',
            rentRateOptions:[{value:'8',label:'8%'},{value:'9',label:'9%'},{value:'10',label:'10%'},{value:'11',label:'11%'},{value:'12',label:'12%'}],

            rentTime:'',
            rentTimeErrorMessage:'',
            rentTimeOptions:[{value:12,label:'12个月'},{value:24,label:'24个月'},{value:36,label:'36个月'},{value:60,label:'60个月'}]
        
        }
    },
    methods:{
        cancel(){
            this.$emit('update:visible',false);
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
       height: 620px;
       overflow: hidden;
   }
    .rent_form{
        width:700px;
        height: 620px;
        background: #fff;
        position: absolute;
        left: 50%;
        margin-left:-350px;
        top:-620px;
        &.showClass{
           top: 0px;
           transition: top 1s;
       }
       .head{
           position: relative;
           height: 133px;
           background: url('../../../../img/u1218.png') center no-repeat;
           background-size: cover;
           text-align: center;
           .title{
               font-size: 20px;
               color: rgba(13, 13, 13, 0.898039215686275);
               padding:35px 0 20px;
           }
           .tip{
               font-size: 14px;
             color:  rgba(54, 54, 54, 0.898039215686275);
           }
           .close{
               width:30px;
               height:30px;
               cursor: pointer;
               position: absolute;
               top:10px;
               right:10px;
           }
       }
       .form_item{
           width:284px;
           margin-left: calc(50% - 142px);
           margin-bottom: 20px;
       }
       .label{
            font-size: 18px;
            line-height: 34px;
            color:rgba(41, 43, 44, 0.8);
            text-align: left;
            .sub{
                font-size: 12px;
            }
        }
       .input_box{
            position: relative;
            border-radius: 5px;
            .input{
                font-size: 15px;
                height: 40px;
                width:100%;
            }
            .error_message{
                position: absolute;
                left: 100%;
                font-size: 13px;
                color: #FF6C72;
                height:100%;
                display: flex;
                align-items: center;
                width: 88%;
                margin-left: 15px;
                top:0px;
                .icon{
                    margin-right: 5px;
                }
            }
        }
        .tips{
            padding-top:5px;
            font-size: 13px;
            color: rgba(41, 43, 44, 0.6);
        }

        .footer{
            padding-bottom: 50px;
            padding-top: 10px;
            .button{
                display: inline-block;
                width:84px;
                line-height: 36px;
                font-size: 16px;
                color: #F29F33;
                border: 1px solid #F29F33;
                border-radius: 5px;
                cursor: pointer;
                margin:0 20px;
                &:hover{
                    color:#fff;
                    background: #ffaa50;
                }
            }
        }
    }
</style>

