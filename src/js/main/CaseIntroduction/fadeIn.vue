<template>
    <div class="box">
        <img class="img" v-if="active==index" v-for="(item,index) in list" :key="index" :src="item.url" alt="">
        <div class="slide_button">
            <span v-for="(it,i) in list" @click="changeImg(i)" :key="i" class="dot" :class="{active:active==i}"></span>
        </div>
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
            active:0,
            show:false
        }
    },
    methods:{
        changeImg(i){
            this.active=i;
        }
    },
    mounted(){
        setInterval(()=>{
            this.active++;
            if(this.active>this.list.length-1){
                this.active=0;
            }
            // this.show=false;
            // setTimeout(()=>{
            //     this.show=true;
            // }, 500);
        },1500)
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
        .img{
            width:100%;
            height:100%;
            position: absolute;
            left:0px;
            top:0px;
        }
        .slide_button{
            position: absolute;
            padding:3px 8px 3px 5px;
            border-radius: 17px;
            background: rgba(255,255,255,0.5);
            display: flex;
            bottom: 40px;
            .dot{
                width:11px;
                height:11px;
                background: #fff;
                border-radius: 50%;
                margin-left:3px;
                cursor: pointer;
                &.active{
                    background:#ffd700;
                }
            }
        }
    }
</style>
