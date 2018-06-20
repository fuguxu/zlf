<template>
    <div class="extend">
        <preview :imgList="imgList"></preview>
        <div class="desc_box">
            <p class="desc">
                <span class="sub">文字描述：</span>
                <span>{{data.contractProgressDesc}}</span>
            </p>
        </div>
        <div class="logistics" v-if="data.personLiable">
            <div class="title">其他物流信息</div>
            <div><span class="label">跟车负责人信息：</span><span>{{data.personLiable}}</span></div>
            <div><span class="label">联系手机号码：</span><span>{{data.phone}}</span></div>
            <div><span class="label">运输车辆车牌号：</span><span>{{data.carNum}}</span></div>
        </div>
    </div>
</template>
<script>
import preview from './previewPic';
export default {
    props:['data'],
    data(){
        return {
            imgList:[]
        }
    },
    mounted(){
        for(var i=1;i<6;i++){
            if(this.data['imgAddr'+i]){
                this.imgList.push({url:this.data['imgAddr'+i]})
            }
        }
    },
    components:{
        preview
    }
}
</script>
<style lang="scss" scoped>
.extend{
    border:1px solid rgba(231, 231, 231, 1);
    padding-left:60px;
    padding-bottom: 60px;
    .preview_box{
        /deep/ .small_pic{
            margin-top:30px;
        }
    }
}
    .desc_box{
        padding:20px 0px;
    }
    .desc{
        width:640px;
        font-size: 14px;
        color: rgba(102, 102, 102, 1);
        .sub{
            color:#333;
        }
    }
    .logistics{
        color: rgba(102, 102, 102, 1);
        line-height: 24px;
        .title{
            font-weight: bold;
             color:#333;
        }
        .label{
            color:#333;
        }
    }
</style>
