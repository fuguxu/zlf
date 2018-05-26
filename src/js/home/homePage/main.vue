<template>
  <div class="home_container">
      <homeBanner></homeBanner>
      <div class="home_item_list">
        <homeService></homeService>
        <homeRent></homeRent>
        <homeRentFlow></homeRentFlow>
        <homeServiceCouple></homeServiceCouple>
        <homeCity></homeCity>
        <homeBrand></homeBrand>
        <homeKnow></homeKnow>
      </div>
  </div>
</template>
<script>
import homeBanner from '../Components/homeBanner';
import homeService from '../Components/homeService'
import homeRent from '../Components/homeRent'
import homeRentFlow from '../Components/homeRentFlow'
import homeServiceCouple from '../Components/homeServiceCouple'
import homeCity from '../Components/homeCity'
import homeBrand from '../Components/homeBrand'
import homeKnow from '../Components/homeKnow'
export default {
   data(){
     return {
         
        }
   },
    mounted () {
        
    },
    methods: {
       
    },
    computed:{
    },
    components:{
      homeBanner,
      homeService,
      homeRent,
      homeRentFlow,
      homeServiceCouple,
      homeCity,
      homeBrand,
      homeKnow
    },
}
</script>
<style lang="scss" scoped>
    .home_container{
      margin-top:-53px;
    }
</style>


