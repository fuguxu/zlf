<template>
    <div class="judgement_wrap">
        <div class="check_img">
            <div class="title">
                <span class="line"></span>
                <span>验收函</span>
            </div>
            <div class="img_box">
                <div v-for="(item,index) in imgLists" :key="index" class="img_item" :class="{five:(index+1)%5==0}">
                    <img class="img" @click="previewImg(item)"  :src="item.imgAddr" alt="">
                    <div class="clickTip">点击预览</div>
                </div>
                <noUpload :role="role" v-if="imgLists.length==0"></noUpload>
            </div>
        </div>
        <div class="judgement">
            <div class="title" >
                <span class="line"></span>
                <span v-if="role=='1'">客户评价结果</span>
                <span v-if="role=='0'">评价供应商</span>
            </div>
            <div class="subtitle" v-if="role=='0'">
                <span>您的评价，是对租立方平台最大的肯定！期待您的评价</span>
                <img src="../../img/smile.png" alt="">
            </div>
            <div class="rate">
                <div class="item" v-for="(item,index) in judgementList" :key="index">
                    <span class="desc_text" v-html="item.desc"></span>
                    <el-rate :disabled="!isEdit" text-color="#333" :colors="['#FFA632','#FFA632','#FFA632']" disabled-void-color="#BDBDBD" void-color="#BDBDBD" v-model="item.value" show-text :texts="item.texts"></el-rate>
                </div>
            </div>
        </div>
        <div class="title share_title" v-if="shareWhoText">
            <span class="line"></span>
            <span>{{shareWhoText}}</span>
        </div>
        <div class="share">
            <el-input type="textarea" :readonly="!isEdit" resize="none" v-model="evaluationDesc" autosize :maxlength="maxlength" :placeholder="isEdit?'分享您的体验心得~':''"></el-input>
            <div v-if="isEdit" class="restWord">还可输入<span :class="{lessTen:maxlength-evaluationDesc.length<=10}">{{maxlength-evaluationDesc.length}}</span>字</div>
        </div>
        <div class="footer" :class="{cancel:!isEdit}" v-if="role=='0'">
            <span class="button" :class="{cancel:!isEdit}"  @click="submitJudement">{{buttonText}}</span>
            <span v-if="isEdit" class="none">公开发布为{{publishName}}   |  <span @click="clearButton" class="clear">清除</span></span>
        </div>
        <resizeImg :visible.sync="visible" :url="activeUrl"></resizeImg>
        <div class="dialog" v-if="visibleTip">
            <div class="tip_content">
                <div class="header font16">温馨提示</div>
                <div class="text">请对9个小问题给出您的评价~</div>
                <span @click="visibleTip=false;" class="button">好的</span>
            </div>
        </div>
    </div>
</template>
<script>
import resizeImg from './resizeImg';
import {customerModule} from '../api/main';
import noUpload from './noUpload';
export default {
    props:['data','leaseNo','orderNo','proCommNo','role'],
    data(){
        return {
            imgLists:this.data.checks||[],
            judgementList:[
                {
                    desc:'供应商对沟通的响应是否积极处理？',
                    texts:['很不积极，1分','不积极，2分','一般，3分','积极，4分','很积极，5分'],
                    value:null
                },
                {
                    desc:'您对供应商商务沟通时的态度是否满意？',
                    texts:['很不满意，1分','不满意，2分','一般，3分','满意，4分','很满意，5分'],
                    value:null
                },
                {
                    desc:'供应商商务沟通时是否专业？',
                    texts:['很不专业，1分','不专业，2分','一般，3分','专业，4分','很专业，5分'],
                    value:null
                },
                {
                    desc:'供应商在“家具生产启动/进行中/完成/、运输包装<br />、物流运输”中，信息反馈是否积极？',
                    texts:['很不积极，1分','不积极，2分','一般，3分','积极，4分','很积极，5分'],
                    value:null
                },
                {
                    desc:'您对供应商的运输包装是否满意？',
                    texts:['很不满意，1分','不满意，2分','一般，3分','满意，4分','很满意，5分'],
                    value:null
                },
                {
                    desc:'您对供应商的物流运输是否满意？',
                    texts:['很不满意，1分','不满意，2分','一般，3分','满意，4分','很满意，5分'],
                    value:null
                },
                {
                    desc:'供应商的交期是否及时？',
                    texts:['严重延误，1分','不及时，2分','还可以，3分','及时，4分','十分及时，5分'],
                    value:null
                },
                {
                    desc:'您对供应商提供的产品安装是否满意？',
                    texts:['很不满意，1分','不满意，2分','一般，3分','满意，4分','很满意，5分'],
                    value:null
                },
                {
                    desc:'您对供应商提供的产品质量是否满意？',
                    texts:['很不满意，1分','不满意，2分','一般，3分','满意，4分','很满意，5分'],
                    value:null
                }
            ],
            maxlength:500,
            evaluationDesc:'',
            showNameStatus:1,
            visible:false,
            activeUrl:'',
            isEdit:'',
            publishName:'中租借科技',
            visibleTip:false
        }
    },
    mounted(){
        if(this.data.zlfEvaluation&&this.data.zlfEvaluation.question1){
            let zlfEvaluation=this.data.zlfEvaluation;
            this.isEdit=false;
            this.evaluationDesc=zlfEvaluation.evaluationDesc;
            this.showNameStatus=zlfEvaluation.showNameStatus;
            for(var i=0;i<this.judgementList.length;i++){
                this.judgementList[i].value=+zlfEvaluation['question'+(i+1)];
            }
        }else{
            if(this.role=='0'){
                this.isEdit=true;
            }else{
                this.isEdit=false;//供应商看的话不能编辑
            }
            
        }
    },
    methods:{
        previewImg(item){
            this.activeUrl=item.imgAddr;
            this.visible=true;
        },
        valiate(){//验证是否都评价了
            let flag=true;
            for(var val of this.judgementList){
                if(!val.value){
                    flag=false;
                    return false;
                }
            } 
            return flag;
        },
        submitJudement(){
            if(!this.isEdit) return;
            if(this.valiate()){
                this.acceptance();
            }else{
                this.visibleTip=true;
            }
        },
        clearButton(){
            this.publishName='匿名用户';
            this.showNameStatus=0;
        },
        acceptance(){
            let obj={
                zlfEvaluation:{
                    evaluationDesc:'',
                    orderNo:this.orderNo,
                    leaseContractNo:this.leaseNo,
                    proCommNo:this.proCommNo,
                    showNameStatus:this.showNameStatus
                },
            };
            obj.zlfEvaluation.evaluationDesc=this.evaluationDesc;
            for(var i=0;i<this.judgementList.length;i++){
                obj.zlfEvaluation['question'+(i+1)]=this.judgementList[i].value+'';
            }
            customerModule.acceptance(obj).then(res=>{
                if(res.statusCode=='1'){
                    this.isEdit=false;
                }
            })
        }
    },
    computed:{
        shareWhoText(){
            if(this.role=='0'){
                return '您的体验心得'
            }else if(this.role=='1'){
                return '客户的体验心得'
            }
        },
        buttonText(){
            return this.isEdit?'提交':'感谢您的评论!'
        }
    },
    components:{
        resizeImg,
        noUpload
    },
    watchs:{
        data(n,o){
            // if()
        }
    }
}
</script>
<style lang="scss" scoped>
    .img_box{
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 0px;
        .img_item{
            font-size: 0px;
            position: relative;
            margin-right: 29px;
            margin-bottom: 23px;
            &.five{
                margin-right: 0px;
            }
            .clickTip{
                position: absolute;
                line-height: 20px;
                width:100%;
                left: 0px;
                bottom: 0px;
                background:rgba(0,0,0,0.5);
                font-size: 12px;
                color:#fff;
                text-align: center;
            }
        }
        .img{
            width:126px;
            height:90px;
            cursor: pointer;
        }
    }
    .rate{
        padding:0 27px;
        padding-bottom: 25px;
        margin-bottom: 48px;
        background: rgba(244,244,244,1);
        .item{
            display: flex;
            align-items: center;
            padding-top:22px;
            .desc_text{
                color: #363636;
                font-size: 14px;
                margin-right: 20px;
                width:440px;
            }
            /deep/ .el-rate__text{
                margin-left:20px;
            }
        }
    }
    .share{
        // margin-top:20px;
        background: rgba(244,244,244,1);
        /deep/ .el-textarea__inner{
            border:none;
            background: rgba(244,244,244,1);
            min-height: 182px !important;
        }
    }
    .restWord{
        color:rgba(153,153,153,1);
        font-size:12px;
        text-align: right;
        line-height: 36px;
        padding-right:20px;
        .rest_ten{
            color:#E93F36;
        }
    }
    .footer{
        text-align: right;
        padding:20px 0 40px 0px;
        &.cancel{
            text-align: center;
            .button{
                color:#666;
            }
        }
        .button{
            width:200px;
            height: 40px;
            color: #fff;
            line-height:40px;
            margin-right: 34px;
        }
        .none{
            margin-right: 40px;
        }
        .clear{
            cursor: pointer;
            &:hover{
                color:#FF4444;
            }
        }
    }
    .title{
        // font-size: 16px;
        margin:25px 0;
        align-items: center;
        display: flex;
        .line{
            width: 6px;
            height: 12px;
            background: rgba(255,166,50,1);
            border-radius: 3px;
            margin-right: 14px;
        }
        &.share_title{
            margin-bottom: 10px;
        }
    }
    .subtitle{
        font-size: 12px;
        color:rgba(136,136,136,1);
        padding-left:20px;
        padding-bottom: 10px;
        margin-top: -10px;
        display: flex;
        align-items: center;
        img{
            margin-left:7px;
        }
    }
    .tip_content{
        width:430px;
        height:250px;
        background:rgba(255,255,255,1);
        position: absolute;
        left: 50%;
        top:50%;
        margin-top:-125px;
        margin-left:-215px;
        text-align: center;
        .header{
            line-height: 46px;
            border-bottom: 1px solid rgba(234,234,234,1);
        }
        .text{
            line-height: 120px;
        }
        .button{
            width:284px;
            line-height: 40px;
        }
    }
</style>
