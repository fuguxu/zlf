<template>
    <div class="company_container">
        <!-- 您要为哪家公司开通账号？ -->
        <div class="company"></div>
        <div class="input_box city_box" :class="{active:activeCity}" v-if="role=='client'">
            <div class="label">城&nbsp;&nbsp;&nbsp;&nbsp;市</div>
            <el-input class="input" v-model="cityName" @focus="foucsCity" @blur="blurCity" placeholder="请选择公司所在城市，如：深圳">
                <i slot="suffix" @click="visible=true" class="icon el-icon-menu"></i>
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
            <span class="next_text" @click="nextStep">下一步</span>
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
            this.goNext();
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
        padding-left:350px;
        .company{
            line-height: 28px;
            font-size: 18px;
            color: rgba(0, 0, 0, 0.92);
            padding:48px 0 28px;;
        }
        .city_box{
            margin-bottom: 33px;
        }
        .code_box{
            margin-top:33px;
        }
        .input_box{
            display: flex;
            width:470px;
            height: 40px;
            align-items: center;
            border-radius: 5px;
            .label{
                font-size: 16px;
                color: #515151;
                width:86px;
                line-height: 36px;
                text-align: center;
                border-right: 1px solid #dbd8d3;
            }
            .input{
                flex: 1;
                font-size: 15px;
                .icon{
                    width:40px;
                    height:40px;
                    line-height: 40px;
                    cursor: pointer;
                    background: #edebe9;
                    font-size:12px;
                    color:#86837e;
                }
                /deep/ .el-input__suffix{
                    right:0; 
                }
                .icon-close{
                    line-height: 40px;
                    margin-right:10px;
                }
            }
            .error_message{
                position: absolute;
                left:86px;
                font-size: 13px;
                color: #FF6C72;
                top:100%;
                line-height: 24px;
            }
        }
        .next_step{
            width:470px;
            text-align: center;
            padding:40px 0 60px;
            .next_text{
                cursor: pointer;
                display: inline-block;
                line-height: 40px;
                width:128px;
                background: rgb(255,152,41);
                font-size: 18px;
                color: rgba(255, 255, 255, 0.92);
                &:hover{
                    background: rgb(255,166,76);
                }
            }
        }
    }
</style>
