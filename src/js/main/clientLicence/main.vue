<template>
    <div class="licence_container">
        <div class="content">
            <p class="text">距离正式开启租赁服务</p>
            <p class="text">还差一步</p>
            <span class="jangle"></span>
            <uploadLicence></uploadLicence>
        </div>
    </div>
</template>
<script>
import uploadLicence from '../../components/uploadLicence';
export default {
  data(){
      return {

      }
  },
  components:{
      uploadLicence
  }
}
</script>
<style lang="scss" scoped>
    .licence_container{
        background-color: rgba(250, 250, 250, 1);
        min-height:764px;
        .content{
            width:1200px;
            margin:0 auto;
            text-align: center;
            padding-top:92px;
            .text{
                line-height: 42px;
                font-size: 28px;
                color: rgba(41, 43, 44, 0.898);
            }
            .jangle{
                display: inline-block;
                border-left: 8px solid transparent;
                border-top: 16px solid rgb(237, 159, 52); 
                border-right: 8px solid transparent;
                margin-top:15px;
                margin-bottom: 50px;
            }
        }
    }
</style>
