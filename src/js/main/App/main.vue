<template>
    <div class="app-zlf">
        <header-bar></header-bar>
        <div class="main-container">
            <router-view></router-view>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>
<style lang="scss" scoped>
    .app-zlf{
        width: 100%;
        height: 100%;
    }
    .main-container{
        // min-height:600px;
        margin-top:51px;
        min-height:100%;
        // background:rgba(244, 244, 244, 1);
    }
</style>
<script>
    import HeaderBar from '../HeaderBar/main.vue';
    import FooterBar from '../FooterBar/main.vue';
    export default{
        data(){
            return{
            }
        },
        components:{
            'header-bar':HeaderBar,
            'footer-bar':FooterBar,
        }
    }
</script>