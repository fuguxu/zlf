<template>
    <div class="company_container">
        <!-- 您要为哪家公司开通账号？ -->
        <!-- <div class="company"></div> -->
        <div class="content">
        <div class="input_box city_box" :class="{active:activeCity}" v-if="role=='client'">
            <div class="label">城市</div>
            <el-input class="input" v-model="cityName" @focus="foucsCity" @blur="blurCity" placeholder="请选择公司所在城市，如：深圳">
                <i slot="suffix" @click="visible=true" class="icon el-icon-caret-bottom"></i>
            </el-input>
            <div class="error_message" v-if="cityNameErrorMessage">
                <i class="icon el-icon-error"></i>
                <span>{{cityNameErrorMessage}}</span>
            </div>
        </div>
        <div class="input_box" :class="{active:activeCompany}">
            <div class="label">公司名称</div>
            <el-input class="input" v-model="companyName" @focus="activeCompany=true" @blur="blurCompany" placeholder="请于贵公司营业执照注册名保持一致">
                <i slot="suffix" class="iconfont icon-close" @click="companyName=''" v-if="companyName"></i>
            </el-input>
            <div class="error_message" v-if="companyErrorMessage">
                <i class="icon el-icon-error"></i>
                <span>{{companyErrorMessage}}</span>
            </div>
        </div>
        <div class="input_box code_box" :class="{active:activeInviteCode}" v-if="role=='supplier'">
            <div class="label">邀请码</div>
            <el-input class="input" v-model="inviteCode" @focus="activeInviteCode=true" @blur="blurInviteCode" placeholder="如果您有进驻邀请码，请务必输入">
                <i slot="suffix" class="iconfont icon-close" @click="inviteCode=''" v-if="inviteCode"></i>
            </el-input>
            <div class="error_message" v-if="inviteCodeErrorMessage">
                <i class="icon el-icon-error"></i>
                <span>{{inviteCodeErrorMessage}}</span>
            </div>
        </div>
        <div class="next_step">
            <span class="next_text button" @click="nextStep">下一步</span>
        </div>
        </div>
        <city :visible.sync="visible" @updateCity="updateCity"></city>
    </div>
</template>
<script>
import city from './city';
import {customerModule} from '../../../api/main';
export default {
    props:{
        role:{
            type:String
        }
    },
    data(){
        return {
            activeCity:false,
            activeCompany:false,
            activeInviteCode:false,
            visible:false,
            cityName:'',
            inviteCode:'',
            companyName:'',
            companyErrorMessage:'',
            inviteCodeErrorMessage:'',
            cityNameErrorMessage:'',

            // checkCompanyFlag:true
        }
    },
    methods:{
        foucsCity(){
            this.activeCity=true;
            this.visible=true;
        },
        blurCity(){
            this.activeCity=false;
            this.valiteCity();
        },
        blurCompany(){
            this.activeCompany=false;
            this.valiteCompany();
        },
        blurInviteCode(){
            this.activeInviteCode=false;
        },
        updateCity(cityName){
            this.cityName=cityName;
            this.valiteCity();
        },
        valiteCity(){
            if(!this.cityName){
                this.cityNameErrorMessage='请选择城市！';
                return false
            }else{
                this.cityNameErrorMessage='';
                return true;
            }
        },
        valiteCompany(){
            if(!this.companyName){
                this.companyErrorMessage='请输入公司名！';
                return false;
            }else if(this.companyName.length>=1&&this.companyName.length<14){
                this.companyErrorMessage='公司名称不能少于14个字符！';
                return false;
            }else{
                this.companyErrorMessage='';
                return true;
            }
        },
        checkCompany(){//检验公司名是否已注册
            customerModule.checkInfo({
                userFullname:this.companyName
            }).then(res=>{
                if(res.data){
                    this.companyErrorMessage='该公司已注册，请直接登录！';
                }else{
                     this.companyErrorMessage='';
                     this.goNext();
                }
            })
        },
        nextStep(){
            // this.goNext();
           let c= this.valiteCompany();
            if(this.role=='client'){
                let valiteCity= this.valiteCity();
                if(c&&valiteCity){
                    this.checkCompany();
                }
            }else if(this.role=='supplier'){
                if(c){
                    this.checkCompany();
                }
            }
            
        },
        goNext(){
            let companyInfo={
               city:this.cityName,
               userFullname:this.companyName,
               invitationCode:this.inviteCode
           }
           this.$emit('updateStep','signForm',companyInfo);
        }
    },
    components:{
        city
    }
}
</script>
<style lang="scss" scoped>
    .company_container{
        padding-top:185px;
        display: flex;
        justify-content: center;
        .content{
            display: inline-block;
        }
        .city_box{
        }
        .code_box{
        }
        .input_box{
            display: flex;
            height: 40px;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-bottom: 16px;
            .label{
                width:86px;
                line-height: 40px;
                box-sizing: border-box;
                padding-right: 17px;
                text-align: right;
            }
            .input{
                width:296px;
                font-size: 15px;
                .icon{
                    line-height: 40px;
                    cursor: pointer;
                    font-size:12px;
                    color:rgba(153,153,153,1);
                }
                /deep/ .el-input__suffix{
                    right:17px; 
                }
                .icon-close{
                    line-height: 40px;
                }
            }
            .error_message{
                position: absolute;
                display: flex;
                align-items: center;
                left:100%;
                min-width:66%;
                .icon{
                    // margin:0 10px 0 22px;
                }
            }
        }
        .next_step{
            text-align: right;
            padding-top:33px;
            .next_text{
                cursor: pointer;
                display: inline-block;
                width:296px;
                line-height: 40px;
                font-size: 16px;
            }
        }
    }
</style>
