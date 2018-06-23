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
        background-color: rgba(255, 255, 255, 1);
        min-height:764px;
        .content{
            width:1160px;
            margin:0 auto;
            text-align: center;
            padding-top:92px;
            .text{
                line-height: 24px;
                font-size: 18px;
            }
            .jangle{
                display: inline-block;
                border-left: 4px solid transparent;
                border-top: 8px solid rgba(242,159,50,1); 
                border-right: 4px solid transparent;
                margin-top:15px;
                margin-bottom: 50px;
            }
        }
    }
</style>
