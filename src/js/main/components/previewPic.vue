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
    props:['imgList'],
    data(){
      return{
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
        // this.changeImg(this.imgList[0],0);
    },
    watch:{
        imgList(){
            this.changeImg(this.imgList[0],0);
        }
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
                border: 2px solid rgba(255,166,50,1);
            }
            .icon{
                color: rgba(255,166,50,1);
                font-size:18px;
                position: absolute;
                bottom: 0;
                left: 50%;
                margin-bottom: -13px;
                margin-left: -9px;
            }
        }
        .img{
            width:125px;
            height:88px;
            cursor: pointer;
        }
    }
    .bigImg{
        width:678px;
        height:372px;
        border: 2px solid rgba(255,166,50,1);
    }
</style>
