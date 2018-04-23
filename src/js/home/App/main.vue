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
        margin-top:51px;
        width:100%;
        min-height:600px;
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