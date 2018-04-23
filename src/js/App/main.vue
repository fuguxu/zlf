<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>
<style lang="scss" scoped>
    .app{
        width: 100%;
        height:100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>
<script>
    export default{
        data(){
            return{
            }
        },
    }
</script>