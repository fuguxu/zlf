<template>
  <div class="news_detail_container">
      <div class="banner">
      </div>
      <div class="article_content">
        <div class="content">
          <div class="left_content">
              <div class="back" @click="toBack"></div>
              <p class="leftTitle">{{data.title}}</p>
          </div>
          <div class="right_content">
              <div class="rightTitle">{{data.title}}</div>
              <div v-html="data.content"></div>
          </div>
        </div>
        <div class="pre_next">
            <span>上一篇：<a class="littleTitle" :href="'#/news/detail?pageNo='+(+pageNo-1||1)" target="_blank">{{pre.title}}</a></span>
            <span>下一篇：<a class="littleTitle" :href="'#/news/detail?pageNo='+(+pageNo+1)" target="_blank">{{next.title}}</a></span>
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
      }
  },
  mounted(){
    this.pageNo=this.$route.query.pageNo;
    this.getNewsDetail();
  }
}
</script>
<style lang="scss" scoped>
    .news_detail_container{
      .banner{
          width:100%;
          height: 601px;
          background: url('../../../img/u2832.jpg') center no-repeat;
          background-size:cover;
      }
      .article_content{
        width:1130px;
        margin:0 auto;
        background: #fff;
        // min-height: 500px;
        margin-top:23px;
        margin-bottom: 40px;
        .content{
          display: flex;
          min-height:100%;
          .left_content{
            width:415px;
            .leftTitle{
              font-size: 36px;
              color: rgba(107, 107, 107, 0.90);
              word-break: break-all;
              width:280px;
              margin-left:40px;
            }
            .back{
              width:45px;
              height: 45px;
              cursor: pointer;
              margin:32px 0 66px 40px;
              background: url('../../../img/u3003.png') center no-repeat;
              background-size:cover;
              &:hover{
                background: url('../../../img/u3003_mouseOver.png') center no-repeat;
                background-size:cover;
              }
            }
          }
          .right_content{
            flex: 1;
            padding-right: 64px;
            .rightTitle{
              padding:43px 0px 35px;
              line-height: 33px;
              font-size: 22px;
              color: #0D0D0D;
            }
            /deep/ img{
              width:650px;
              height:256px;
            }
          }
        }
        .pre_next{
          line-height: 32px;
          padding:50px 64px 15px 40px;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: rgba(161, 161, 161, 0.90);
          .littleTitle{
            &:hover{
              color: rgb(255, 205, 0);
            }
          }
        }
      }
    }
</style>

