<template>
    <div class="dialog" v-if="visible" @click="cancel">
        <div class="img_box">
            <img ref="resize" class="resize" :src="url" alt="" @DOMMouseScroll="mousewheel" @mousewheel="mousewheel" @click.stop="1">
        </div>
    </div>
</template>
<script>
export default {
    props:{
        visible:{
            default:true
        },
        url:{

        }
    },
    data(){
        return {
            scale:1
        }
    },
    methods:{
        cancel(){
            this.$emit('update:visible',false);
        },
        mousewheel(e){//兼容火狐
            if(e.wheelDelta>0||e.detail<0){ // 向上滚动
                if(this.scale<2){
                    this.scale+=0.1
                }else{
                    this.scale=2
                }
                
                
            }else if(e.wheelDelta<0||e.detail>0){//向下滚动
                if(this.scale<=0.5){
                    this.scale=0.5
                }else{
                    this.scale-=0.1
                }
                
            }
            this.$refs.resize.style.transform=`scale(${this.scale})`;
        }
    }
}
</script>
<style lang="scss" scoped>
    .img_box{
        position: absolute;
        top:0px;
        left: 0px;
        width:100%;
        height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .resize{
        width:500px;
        height:500px;
    }
</style>
