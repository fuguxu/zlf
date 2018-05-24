<template>
    <div>
        <div class="line"></div>
        <div class="check_img">
            <div class="title">验收函</div>
            <div class="img_box">
                <img class="img" @click="previewImg(item)" v-for="(item,index) in imgLists" :key="index" :src="item.url" alt="">
            </div>
        </div>
        <div class="judgement">
            <div class="title" v-if="!isEdit">客户评价结果</div>
            <div class="title" v-if="isEdit">评价供应商</div>
            <div class="subtitle" v-if="isEdit">您的评价，是对租立方平台最大的肯定！期待您的评价</div>
            <div class="rate">
                <div class="item" v-for="(item,index) in judgementList" :key="index">
                    <span class="desc_text" v-html="item.desc"></span>
                    <el-rate text-color="#f1ba28" v-model="item.value" show-text :texts="item.texts"></el-rate>
                </div>
            </div>
        </div>
        <div class="subtitle shareWhoText" v-if="shareWhoText">{{shareWhoText}}</div>
        <div class="share">
            <el-input type="textarea" v-model="shareText" autosize :maxlength="maxlength" placeholder="分享您的体验心得~"></el-input>
            <div class="restWord">还可输入<span :class="{lessTen:maxlength-shareText.length<=10}">{{maxlength-shareText.length}}</span>字</div>
        </div>
        <div class="footer">
            <span class="button" @click="submitJudement">提交</span>
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
                    url:require('../../img/u303.png')
                },
                {
                    url:require('../../img/u303.png')
                },
                {
                    url:require('../../img/u303.png')
                },
                {
                    url:require('../../img/u225.png')
                },{
                    url:require('../../img/u303.png')
                },
                {
                    url:require('../../img/u303.png')
                },
                {
                    url:require('../../img/u303.png')
                },
                {
                    url:require('../../img/u303.png')
                }
            ],
            judgementList:[
                {
                    desc:'供应商对沟通的响应是否积极处理？',
                    texts:['很不积极，1分','不积极，2分','一般，3分','积极，4分','很积极，5分'],
                    value:4
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
            shareText:'',
            visible:false,
            activeUrl:'',
            isEdit:'',
            isSubmited:false
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
        }
    },
    computed:{
        shareWhoText(){
            if(this.isSubmited){
                return '您的体验心得：'
            }else if(!this.isEdit){
                return '客户的体验心得：'
            }else{
                return ''
            }
        }
    },
    components:{
        resizeImg
    }
}
</script>
<style lang="scss" scoped>
    .line{
        height: 5px;
        background: #ed9f36;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .img_box{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .img{
            width:113px;
            height:154px;
            cursor: pointer;
        }
    }
    .rate{
        padding-left:13px;
        margin-left:13px;
        padding-bottom: 25px;
        border-radius: 5px;
        background: #fff;
        box-shadow: 0 0 5px #d7d7d7;
        .item{
            display: flex;
            align-items: center;
            padding-top:25px;
            .desc_text{
                color: #363636;
                font-size: 14px;
                margin-right: 20px;
            }
            /deep/ .el-rate__text{
                margin-left:20px;
            }
        }
    }
    .share{
        margin-left:13px;
        border-radius: 5px;
        background: #fff;
        margin-top:20px;
        box-shadow: 0 0 5px #d7d7d7;
        /deep/ .el-textarea__inner{
            border:none;
            min-height: 182px !important;
        }
    }
    .restWord{
        text-align: right;
        color: rgba(54, 54, 54, 0.70);
        font-size:14px;
        padding:10px 10px 20px 0px;
        .lessTen{
            color:#E93F36;
        }
    }
    .footer{
        text-align: center;
        padding:20px 0 40px 0px;
        .button{
            width:110px;
            height: 40px;
            cursor: pointer;
            display: inline-block;
            font-size: 18px;
            color: #fff;
            line-height:40px;
            text-align: center;
            border-radius: 5px;
            background: #ed9f34;
            &:hover{
                background: #f1b255;
            }
        }
    }
    .title{
        font-size: 16px;
        color: #363636;
        margin:30px 0 10px 0px;
        padding-left:10px;
        border-left:3px solid #ed9f36;
    }
    .subtitle{
        font-size: 15px;
        color: rgba(54, 54, 54, 0.75);
        padding-left:13px;
        padding-bottom: 10px;
        &.shareWhoText{
            padding-top: 20px;
            padding-bottom: 0;
            margin-bottom: -15px;
        }
    }
</style>
