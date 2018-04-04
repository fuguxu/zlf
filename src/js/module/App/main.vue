<template>
    <div class="app-laws beauty-scroll-bar">
        <header-bar></header-bar>
        <div class="main-container">
            <router-view></router-view>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>
<style lang="scss" scoped>
    .app-laws{
        width: 100%;
        height: 100%;
    }
    .main-container{
        width:1120px;
        min-height:600px;
        margin:30px auto;
        background:#fff;
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