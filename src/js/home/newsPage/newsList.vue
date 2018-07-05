<template>
  <div class="news_list_container">
      <div class="banner">
      </div>
      <div class="content_box">
          <div class="news_item" v-for="(item,index) in data" :key="index" :class="{oddClass:index%2==1}">
              <img class="img" :src="item.homePage" alt="">
              <div class="content_text" :class="{oddClass:index%2==1}">
                    <div class="title font18">{{item.title}}</div>
                    <div class="sub font12 color8">
                      <span class="time">{{item.createTime}}</span>
                      <span class="resouce">来自{{item.source}}</span>
                    </div>
                    <p class="contentRes font14">{{item.contentRes}}......</p>
                    <div class="readDetail">
                      <a target="_blank" :href="'#/news/detail?pageNo='+(pageSize*(pageNo-1)+index+1)">阅读详情</a>
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
          height: 600px;
          background: url('../../../img/u2832.png') center no-repeat;
          background-size:cover;
        }
        .content_box{
          width:1200px;
          margin:0 auto;
          padding:0 20px;
          box-sizing: border-box;
          min-height: 300px;
          .news_item{
            width:100%;
            height: 290px;
            background: #fff;
            margin-top:20px;
            display: flex;
            &.oddClass{
              flex-flow:row-reverse;
            }
            &:hover{
              box-shadow: 5px 5px 5px rgba(174,174,174,0.5);
            }
            .img{
              width:372px;
              height:290px;
            }
            .content_text{
              padding:0 58px;
              &.oddClass{
                padding:0 73px 0px 43px;
              }
              flex: 1;
              position: relative;
              .title{
                  padding-top:45px;
              }
              .sub{
                padding:28px 0 32px;
              }
              .contentRes{
                line-height: 28px;
              }
              .readDetail{
                padding-top:35px;
                a{
                  font-size: 14px;
                  color:rgba(42, 157, 255, 1);
                  &:hover{
                    color: #FFA632;
                  }
                }
              }
            }
          }
          .pagination_box{
            width:100%;
            padding:82px 0px 62px 0px;
          }
        }
    }
</style>

