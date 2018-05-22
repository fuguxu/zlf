<template>
    <div class="app-footer">
        <div class="foot-container">
           <div class="foot-logo">
               <img class="img" src="../../../img/u714.png" alt="">
           </div>
           <p class="title text">招商局集团旗下互联网金融租赁平台</p>
            <p class="desc text">依托招商局集团海外港口资源优势，立足全球采购，整合优势资源，建立了以商流、物流、信息流、资金流四位一体的全球酒店、公寓等住宿行业供应链管理平台；为企业提供设计研发建议、生产品质把控、交付周期保证等一站式服务。</p>           
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
        height:175px;
        background-color: #4b4e53;
        .foot-container{
            width:1200px;
            height:100%;
            margin:0 auto;
            box-sizing: border-box;
            .foot-logo{
                font-size:0px;
                padding:15px 0px;
                .img{
                    width:120px;
                    height:40px;
                }
            }
            .text{
                line-height: 24px;
                padding-left: 15px;
            }
            .title{
                font-size: 15px;
                color: rgba(255, 255, 255, 0.90);
                padding-bottom: 10px;
            }
            .desc{
                font-size: 13px;
                color: rgba(255, 255, 255, 0.70);
                word-wrap: break-word;
                width: 860px;
            }
        }
    }
</style>
