<template>
    <div class="app-footer">
        <div class="foot-container">
           <div class="copy_right">
                <span class="item">Copyright © 2015~2017 租立方｜粤ICP备15052623号-1</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            footHide: true,
            
        }
    },
    computed:{
       
    },
    methods: {
        
    },
    created () {
       
    }
}
</script>
<style lang="scss" scoped>
    .app-footer{
        width:100%;
        height:90px;
        background-color: rgba(55, 61, 65, 1);
        .foot-container{
            width:1200px;
            height:100%;
            margin:0 auto;
            padding-top: 25px;
            padding-left: 50px;
            padding-bottom: 15px;
            box-sizing: border-box;
            display: flex;
            .copy_right{
                color: rgba(255, 255, 255, 0.65);
                .item:hover{
                    color: rgba(255, 255, 255, 0.88);
                }
            }
        }
    }
</style>
