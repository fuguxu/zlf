<template>
    <div class="box">
        <el-carousel :interval="3000" arrow="never" height="100%" trigger="click">
            <el-carousel-item v-for="(item,index) in list" :key="index">
                <img class="img"  :src="item.url" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    props:{
        data:{
            default(){
                return []
            }
        }
    },
    data(){
        return {
            list:[
                {
                    url:require('../../../img/p8.jpg')
                },
                
                {
                    url:require('../../../img/p13.jpg')
                },
                {
                    url:require('../../../img/p10.jpg')
                },
            ],
        }
    },
    methods:{
      
    },
    mounted(){
        
    }
}
</script>
<style lang="scss" scoped>
    .box{
        width:100%;
        height:100%;
        position: relative;
        display: flex;
        justify-content: center;
        overflow: hidden;
        .el-carousel{
            width:100%;
            height:100%;
            .el-carousel-item{
                height:477px;
            }
        }
        .img{
            width:100%;
            height:100%;
        }
        /deep/ .el-carousel__indicators{
            padding:3px 8px 3px 5px;
            border-radius: 17px;
            background: rgba(255,255,255,0.5);
            display: flex;
            bottom: 20px;
            .el-carousel__button{
                display: none;
            }
            .el-carousel__indicator{
                width:11px;
                height:11px;
                background: #fff;
                border-radius: 50%;
                margin-left:3px;
                padding: 0px;
                &.is-active{
                    background:#ffd700;
                }
            }
        } 
    }   
</style>
