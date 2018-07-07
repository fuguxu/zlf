<template>
  <div class="news_detail_container">
      <div class="banner">
      </div>
      <div class="article_content">
        <div class="content">
          <div class="left_content">
            <div class="back_wrap">
              <!-- <img class="back" @click="toBack" src="../../../img/back.png" alt=""> -->
              <img class="back"  src="../../../img/zupng.png" alt="">
            </div>
              <p class="leftTitle font16">{{data.title}}</p>
          </div>
          <div class="right_content">
              <div class="rightTitle font30 ">{{data.title}}</div>
              <div v-html="data.content"></div>
          </div>
        </div>
        <div class="pre_next">
            <span v-if="data.id!=pre.id">上一篇：<a class="littleTitle" :href="'#/news/detail?pageNo='+(+pageNo-1||1)" >{{pre.title}}</a></span>
            <span style="width:10px;"></span>
            <span v-if="data.id!=next.id">下一篇：<a class="littleTitle" :href="'#/news/detail?pageNo='+(+pageNo+1)" >{{next.title}}</a></span>
        </div>  
      </div>
  </div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
  data(){
      return{
          pageNo:'',
          data:{},
          pre:{},
          next:{}
      }
  },
  methods:{
      getNewsDetail(){
        customerModule.getNewsDetail({pageNo:this.pageNo}).then(res=>{
          if(res.statusCode=='1'){
              this.data=res.data.current;
              this.pre=res.data.pre;
              this.next=res.data.next;
          }
        })
      },
      toBack(){
        this.$router.go(-1);
      },
      init(){
        this.pageNo=this.$route.query.pageNo;
        this.getNewsDetail();
      }
  },
  mounted(){
    this.init();
  },
  watch:{
    '$route.query.pageNo'(n,o){
        this.init();
    }
  }
}
</script>
<style lang="scss" scoped>
    .news_detail_container{
      .banner{
          width:100%;
          height: 600px;
          background: url('../../../img/u2832.png') center no-repeat;
          background-size:cover;
      }
      .article_content{
        width:1160px;
        margin:0 auto;
        background: #fff;
        // min-height: 500px;
        margin-top:50px;
        margin-bottom: 200px;
        border-radius:10px;
        .content{
          display: flex;
          min-height:100%;
          padding-top:75px;
          .left_content{
            width:307px;
            box-sizing: border-box;
            padding-left:95px;
            .leftTitle{
              word-break: break-all;
              width:117px;
              line-height: 30px;
            }
            .back_wrap{
              height:83px;
            }
            .back{
              width:60px;
              height: 60px;
              // cursor: pointer;
              // transition: all 1s;
              &:hover{
                // width:35px;
                // height:35px;
              }
            }
          }
          .right_content{
            flex: 1;
            padding-right: 160px;
            .rightTitle{
              padding:0px 0px 45px;
            }
            /deep/ img{
              width:680px;
              height:268px;
            }
          }
        }
        .pre_next{
          line-height: 32px;
          padding:100px 125px 90px 125px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #999;
          .littleTitle{
            &:hover{
              color: #797979;
            }
          }
        }
      }
    }
</style>

