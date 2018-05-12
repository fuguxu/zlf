<template>
    <div class="sumbited_container">
        <div class="content">
            <div>
                <img src="../../../img/u1642.png" alt="">
            </div>
            <p class="tip_text" v-html="tipText"></p>
        </div>
        <dialogTip></dialogTip>
    </div>
</template>
<script>
import dialogTip from './dialogTip';
export default {
    data(){
        return {
            tipText:''
        }
    },
    mounted(){
      let role =localStorage.getItem('role');
      if(role=='client'){
          this.tipText=`深圳市中租借科技有限公司，您的营业执照已提交审核，<br />
                        我们将会在2个工作日内审核完毕，并会邮件通知您，请 <br />
                        您耐心等待。`
      }else{
          this.tipText=`深圳市金凤凰家具集团，您的营业执照已提交审核，<br />
                        我们将会在2个工作日内与您取得联系，请留意。`
      }
    },
    components:{
        dialogTip
    }
}
</script>
<style lang="scss" scoped>
    .sumbited_container{
        background-color: rgba(250, 250, 250, 1);
        height:764px;
        .content{
            width:1200px;
            margin:0 auto;
            text-align: center;
            padding-top:104px;
            box-sizing: border-box;
            img{
                width:130px;
                height:130px;
            }
            .tip_text{
                padding-top:42px;
                font-size: 16px;
                color: rgba(41, 43, 44, 0.8);
                text-align: left;
                line-height: 30px;
                display: inline-block;
            }
        }
    }
</style>
