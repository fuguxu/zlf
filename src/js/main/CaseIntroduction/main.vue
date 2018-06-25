<template>
    <div class="recommend_preview">
        <div class="recommend_content">
            <div class="title" >{{form.userAbbr}}</div>
            <div class="title_sub" >{{form.userFullname}}</div>
            <p class="content">{{form.briefIntro}}</p>
            <div class="equiment item">
                <div class="item_title">
                    <div class="line"></div>
                    <div>生产设备</div>
                </div>
                <div class="content_item" v-for="(item,index) in form.equipment" :key="index">
                    <div class="desc">{{item.content}}</div>
                    <div class="img_box">
                        <fadeIn :list="item.fileList"></fadeIn>
                    </div>
                </div>
            </div>
            <div class="equiment item">
                <div class="item_title">
                    <div class="line"></div>
                    <div>产品介绍</div>
                </div>
                <div class="content_item" v-for="(item,index) in form.product" :key="index">
                    <div class="desc">{{`产品${numbers[index]}：${item.keywords}`}}</div>
                    <div class="desc">{{item.content}}</div>
                    <div class="img_box">
                        <fadeIn :list="item.fileList"></fadeIn>
                    </div>
                </div>
            </div>
            <div class="equiment item">
                <div class="item_title">
                    <div class="line"></div>
                    <div>案例介绍</div>
                </div>
                <div class="content_item" v-for="(item,index) in form.cases" :key="index">
                    <div class="desc">{{`案例${numbers[index]}：${item.keywords}`}}</div>
                    <div class="desc">{{item.content}}</div>
                    <div class="img_box">
                        <fadeIn :list="item.fileList"></fadeIn>
                    </div>
                </div>
            </div>       
        </div>
    </div>
</template>
<script>
import fadeIn from './fadeIn';
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            form:{},
            numbers:['一','二','三','四','五'],
        }
    },
    methods:{
        handleFile(attrList){//处理附件
          return  attrList.map(item=>{
                    let fileList=[];
                    for(var i=1;i<=5;i++){
                        if(item['imgAddr'+i]){
                            fileList.push({url:item['imgAddr'+i]});
                        }
                    }
                    return {
                        ...this.commonObj,
                        ...item,
                        fileList:fileList
                    }
                })
        },
        getRecommend(){//获取详情
            customerModule.getRecommend({userNo:this.$route.query.id}).then(res=>{
                if(res.statusCode=='1'){
                    this.form=res.data;
                    this.form.briefIntro=this.form.briefIntro||'';
                    this.form.equipment=this.handleFile(this.form.equipment);
                    this.form.cases=this.handleFile(this.form.cases);
                    this.form.product=this.handleFile(this.form.product);
                }
            })
        },
    },
    mounted(){
        this.getRecommend();
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
        width:1160px;
        background: #fff;
        margin:0 auto;
        min-height: 400px;
        padding:0 52px 40px 52px;
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
            margin-bottom: 20px;
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
