<template>
    <div class="dialog" v-if="visible">
        <div class="step_dialog_container">
            <div class="head">
                <span @click="close" class="close">×</span>
            </div>
            <div class="content">
                <div class="title">您还差两步就可以使用账号了</div>
                <div class="step1">Step1 完善联系人信息</div>
                <div class="step2">Step2 上传营业执照</div>
            </div>
            <div class="footer">
                <span @click="close" class="button">立即完善</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props:{
      visible:{
          default:false
      },
      stepComponent:{

      }
  },
  data(){
      return {

      }
  },
  methods:{
      close(){
          this.$emit('nextStep',this.stepComponent);
          this.$emit('update:visible',false);
      }
  }
}
</script>
<style lang="scss" scoped>
    .step_dialog_container{
        width:428px;
        height:230px;
        position: absolute;
        background: #fff;
        left:50%;
        margin-left:-214px;
        top:50%;
        margin-top:-115px;
        .head{
            line-height: 26px;
            height:26px;
            .close{
                margin-right: 5px;
                float: right;
                font-family: 'SimSun';
                font-size: 22px;
                cursor: pointer;
                color: rgba(107, 107, 107, 0.6);
            }
        }
        .content{
            font-size: 18px;
            color: rgba(0, 0, 0, 0.9);
            .title,.step1,.step2{
                margin-bottom: 15px;
                margin-left:60px;
            }
            .title{
                margin-left:30px;
            }
        }
        .footer{
            text-align: center;
            .button{
                display: inline-block;
                width:130px;
                line-height: 40px;
                font-size: 17px;
                color: #F29F33;
                border:1px solid #F29F33;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }
</style>
