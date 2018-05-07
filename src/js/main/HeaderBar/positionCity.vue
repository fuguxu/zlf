<template>
    <div class="position_city">
        <img src="../../../img/u1400.png" alt="">
        <span class="cityName">{{currentCity}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return {
            currentCity:''
        }
    },
    methods:{

    },
    mounted(){
        var ge =new BMap.Geolocation();
        ge.getCurrentPosition((r)=>{
          this.currentCity=r.address.city.replace(/市/,'');
        })
    }
}
</script>
<style lang="scss" scoped>
    .position_city{
        display: flex;
        align-items: center;
        padding-left:50px;
        img{
            width:25px;
            height:25px;
        }
        .cityName{
            margin-left:5px;
        }
    }
</style>
