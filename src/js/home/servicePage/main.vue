<template>
  <div class="service_container">
      <img class="item item1" src="../../../img/u136.png" alt="">
      <img class="item item2" src="../../../img/u138.png" alt="">
      <img class="item item3" src="../../../img/u140.png" alt="">
  </div>
</template>
<script>
export default {
  data(){
      return{
          
      }
  }
}
</script>
<style lang="scss" scoped>
    .service_container{
      width:1200px;
      margin:0 auto;
      display: flex;
      flex-flow: column;
      align-items: center;
      text-align: center;
      padding-top:105px;
      padding-bottom: 70px;
      .item{
        width:600px;
        &.item1{
          height:550px;
        }
        &.item2{
          height:400px;
        }
        &.item3{
          height:300px;
        }
      }
    }
</style>
