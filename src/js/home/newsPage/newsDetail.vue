<template>
  <div class="news_detail_container">
      <div class="banner">
      </div>
      <div class="article_content">
        <div class="content">
          <div class="left_content">
              <div class="back" @click="toBack"></div>
              <p class="leftTitle font16">{{data.title}}</p>
          </div>
          <div class="right_content">
              <div class="rightTitle font30 ">{{data.title}}</div>
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
            .back{
              width:30px;
              height: 30px;
              cursor: pointer;
              margin:5px 0 48px 0px;
              background: url('../../../img/back.png') center no-repeat;
              background-size:cover;
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
          color: #888;
          .littleTitle{
            &:hover{
              color: rgba(255, 166, 50, 1);
            }
          }
        }
      }
    }
</style>

