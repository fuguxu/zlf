<template>
  <div class="news_list_container">
      <div class="banner">
      </div>
      <div class="content_box">
          <div class="news_item" v-for="(item,index) in data" :key="index" :class="{oddClass:index%2==1}">
              <img class="img" :src="item.homePage" alt="">
              <div class="content_text">
                    <div class="title">{{item.title}}</div>
                    <div class="sub">
                      <span class="time">{{item.createTime}}</span>
                      <span class="resouce">来自{{item.source}}</span>
                    </div>
                    <p class="contentRes">{{item.contentRes}}......</p>
                    <div class="readDetail">
                      <a :href="'#/news/detail?pageNo='+(pageSize*(pageNo-1)+index+1)">阅读详情</a>
                    </div>
              </div>
          </div>
          <div class="pagination_box">
                <pagination
                  :total="total"
                  @currentChange="currentChange"
                  >
                </pagination>
          </div>
      </div>
  </div>
</template>
<script>
import {customerModule} from '../../api/main';
import pagination from '../../components/pagination';
export default {
  data(){
      return{
          data:[],
          total:0,
          pageNo:1,
          pageSize:8
      }
  },
  methods:{
    getNews(){
      customerModule.getNewsList({
        pageNo:this.pageNo,
        pageSize:this.pageSize
      }).then(res=>{
        if(res.statusCode=='1'){
            this.data=res.data.recordList.map(item=>{
              return {
                ...item,
                createTime:AppUtil.transferTimeToString(item.createTime)
              }
            });
           this.total=res.data.totalCount;
        }
      });
    },
    currentChange(currentPage){
      this.pageNo=currentPage;
      this.getNews();
    }
  },
  mounted(){
    this.getNews();
  },
  components:{
    pagination
  }
}
</script>
<style lang="scss" scoped>
    .news_list_container{
        .banner{
          width:100%;
          height: 601px;
          background: url('../../../img/u2832.jpg') center no-repeat;
          background-size:cover;
        }
        .content_box{
          width:1200px;
          margin:0 auto;
          padding:0 25px;
          box-sizing: border-box;
          min-height: 300px;
          .news_item{
            width:100%;
            height: 280px;
            background: #fff;
            margin-top:30px;
            display: flex;
            &.oddClass{
              flex-flow:row-reverse;
            }
            &:hover{
              box-shadow: 5px 5px 5px rgba(174,174,174,0.4);
            }
            .img{
              width:430px;
              height:280px;
            }
            .content_text{
              padding:0 30px;
              flex: 1;
              position: relative;
              .title{
                 font-size: 20px;
                  color: #333333;
                  padding-top:55px;
              }
              .sub{
                line-height: 28px;
                font-family: 'SimHei';
                color: #333333;
                padding:12px 0 25px;
              }
              .contentRes{
                font-size: 13px;
                color: #333333;
                line-height: 25px;
              }
              .readDetail{
                position: absolute;
                display: inline-block;
                right: 25px;
                bottom: 25px;
                a{
                  font-family: SimHei;
                  font-size: 13px;
                  color: rgb(0, 153, 204);
                  &:hover{
                    color: rgb(254, 216, 0);
                  }
                }
              }
            }
          }
          .pagination_box{
            width:100%;
            height:104px;
          }
        }
    }
</style>

