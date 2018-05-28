<template>
    <div id="app" :class="{letterSpace:isMac}">
        <router-view></router-view>
    </div>
</template>
<style lang="scss" scoped>
    #app{
        width: 100%;
        height:100%;
        // overflow-x: hidden;
        // overflow-y: auto;
        // position: relative;
        // z-index:99999;
    }
</style>
<script>
    export default{
        data(){
            return{
                isMac:false
            }
        },
        mounted(){
            if(window.navigator.platform.indexOf('Mac')!=-1){
                this.isMac=true;
            }
        }
    }
</script>