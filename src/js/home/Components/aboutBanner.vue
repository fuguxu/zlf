<template>
  <div class="about_banner">
      <slot></slot>
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
    .about_banner{
        width:100%;
        height: 522px;
        background: url('../../../img/u3353.png') center no-repeat;
        background-size: cover;
    }
</style>

