<template>
    <div>
        <div class="small_pic">
            <div class="item_img_box" v-for="(item,index) in imgList" :key="index" @click="changeImg(item,index)" :class="{active:activeIndex==index}">
                <img class="img" :src="item.url" alt="">
                <i class="icon el-icon-caret-bottom" v-if="activeIndex==index"></i>
            </div>
        </div>
        <div class="big_pc">
            <img class="bigImg" :src="activeUrl" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
      return{
            imgList:[
                {
                    url:require('../../../img/p8.jpg')
                },
                {
                    url:require('../../../img/p10.jpg')
                },
                {
                    url:require('../../../img/p13.jpg')
                },
                {
                    url:require('../../../img/u319.png')
                },
                {
                    url:require('../../../img/u50.jpg')
                }
            ],
            activeUrl:'',
            activeIndex:0
        }
    },
    methods:{
        changeImg(item,index){
            this.activeUrl=item.url;
            this.activeIndex=index;
        }
    },
    mounted(){
        this.changeImg(this.imgList[0],0);
    }
}
</script>

<style lang="scss" scoped>
    .small_pic{
        display: flex;
        margin-top:15px;
        margin-bottom: 20px;
        .item_img_box{
            font-size: 0px;
            margin-right: 10px;
            border: 2px solid transparent;
            position: relative;
            &.active{
                border: 2px solid #ed9f36;
            }
            .icon{
                color: #ffa632;
                font-size:18px;
                position: absolute;
                bottom: 0;
                left: 50%;
                margin-bottom: -13px;
                margin-left: -9px;
            }
        }
        .img{
            width:110px;
            height:75px;
            cursor: pointer;
        }
    }
    .bigImg{
        width:640px;
        height:410px;
    }
</style>
