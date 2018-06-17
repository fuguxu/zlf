<template>
    <div class="">
        <!-- <div class="line"></div> -->
        <div class="check_img">
            <div class="title">
                <span class="line"></span>
                <span>验收函</span>
            </div>
            <div class="img_box">
                <img class="img" @click="previewImg(item)" v-for="(item,index) in imgLists" :key="index" :src="item.url" alt="">
            </div>
        </div>
        <div class="judgement">
            <div class="title" >
                <span class="line"></span>
                <span v-if="!isEdit">客户评价结果</span>
                <span v-if="isEdit">评价供应商</span>
            </div>
            <div class="subtitle" v-if="isEdit">您的评价，是对租立方平台最大的肯定！期待您的评价</div>
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
            <el-input type="textarea" :readonly="!isEdit" resize="none" v-model="shareText" autosize :maxlength="maxlength" placeholder="分享您的体验心得~"></el-input>
            <div v-if="isEdit" class="restWord">还可输入<span :class="{lessTen:maxlength-shareText.length<=10}">{{maxlength-shareText.length}}</span>字</div>
        </div>
        <div class="footer" v-if="isEdit">
            <span class="button"  @click="submitJudement">提交</span>
            <span class="none">公开发布为{{publishName}}   |  <span @click="clearButton" class="clear">清除</span></span>
        </div>
        <resizeImg :visible.sync="visible" :url="activeUrl"></resizeImg>
    </div>
</template>
<script>
import resizeImg from './resizeImg';
export default {
    props:{
        // isEdit:{
        //     default:true
        // }
    },
    data(){
        return {
            imgLists:[
                {
                    url:require('../../img/step_icon.png')
                },
                {
                    url:require('../../img/step_icon.png')
                },
                {
                    url:require('../../img/step_icon.png')
                },
                {
                    url:require('../../img/u225.png')
                },{
                    url:require('../../img/step_icon.png')
                },
                {
                    url:require('../../img/step_icon.png')
                },
                {
                    url:require('../../img/step_icon.png')
                },
                {
                    url:require('../../img/step_icon.png')
                }
            ],
            judgementList:[
                {
                    desc:'供应商对沟通的响应是否积极处理？',
                    texts:['很不积极，1分','不积极，2分','一般，3分','积极，4分','很积极，5分'],
                    value:null
                },
                {
                    desc:'您对供应商商务沟通时的态度是否满意？',
                    texts:['很不满意，1分','不满意，2分','一般，3分','满意，4分','很满意，5分'],
                    value:5
                },
                {
                    desc:'供应商商务沟通时是否专业？',
                    texts:['很不专业，1分','不专业，2分','一般，3分','专业，4分','很专业，5分'],
                    value:3
                },
                {
                    desc:'供应商在“家具生产启动/进行中/完成/、运输包装<br />、物流运输”中，信息反馈是否积极？',
                    texts:['很不积极，1分','不积极，2分','一般，3分','积极，4分','很积极，5分'],
                    value:4
                },
                {
                    desc:'您对供应商的运输包装是否满意？',
                    texts:['很不满意，1分','不满意，2分','一般，3分','满意，4分','很满意，5分'],
                    value:5
                },
                {
                    desc:'您对供应商的物流运输是否满意？',
                    texts:['很不满意，1分','不满意，2分','一般，3分','满意，4分','很满意，5分'],
                    value:4
                },
                {
                    desc:'供应商的交期是否及时？',
                    texts:['严重延误，1分','不及时，2分','还可以，3分','及时，4分','十分及时，5分'],
                    value:5
                },
                {
                    desc:'您对供应商提供的产品安装是否满意？',
                    texts:['很不满意，1分','不满意，2分','一般，3分','满意，4分','很满意，5分'],
                    value:4
                },
                {
                    desc:'您对供应商提供的产品质量是否满意？',
                    texts:['很不满意，1分','不满意，2分','一般，3分','满意，4分','很满意，5分'],
                    value:3
                }
            ],
            maxlength:500,
            shareText:'',
            visible:false,
            activeUrl:'',
            isEdit:'',
            isSubmited:false,
            publishName:'中租借科技'
        }
    },
    mounted(){
        if(localStorage.getItem('role')=='client'){
            this.isEdit=true
        }else{
            this.isEdit=false
        }
    },
    methods:{
        previewImg(item){
            this.activeUrl=item.url;
            this.visible=true;
        },
        submitJudement(){
            this.isSubmited=true;
        },
        clearButton(){
            this.publishName='匿名用户';
        }
    },
    computed:{
        shareWhoText(){
            if(this.isEdit){
                return '您的体验心得'
            }else if(!this.isEdit){
                return '客户的体验心得'
            }
        }
    },
    components:{
        resizeImg
    }
}
</script>
<style lang="scss" scoped>
    .img_box{
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 48px;
        .img{
            width:126px;
            height:90px;
            margin-right: 7px;
            margin-bottom: 20px;
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
                width:500px;
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
        font-size: 16px;
        margin:7px 0 24px 0px;
        align-items: center;
        display: flex;
        .line{
            width: 6px;
            height: 12px;
            background: #ffa632;
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
        
    }
</style>
