<template>
    <div class="app-zlf">
        <header-bar></header-bar>
        <div class="main-container">
            <router-view></router-view>
            <qqWexiBackTop v-if="!$route.meta.hideBackTop"></qqWexiBackTop>
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
        margin-top:53px;
        width:100%;
        min-height:600px;
    }
</style>
<script>
    import HeaderBar from '../HeaderBar/main.vue';
    import FooterBar from '../FooterBar/main.vue';
    import qqWexiBackTop from '../../components/qqWexiBackTop.vue';
    export default{
        data(){
            return{
            }
        },
        mounted(){
        },
        components:{
            'header-bar':HeaderBar,
            'footer-bar':FooterBar,
            qqWexiBackTop
        }
    }
</script>