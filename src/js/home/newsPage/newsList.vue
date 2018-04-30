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
                      <a href="">阅读详情</a>
                    </div>
              </div>
          </div>
          <div class="pagination_box">
                <el-pagination
                  prev-text="上一页"
                  next-text	="下一页"
                  layout="prev, pager, next"
                  :page-size="8"
                  :total="50">
                </el-pagination>
          </div>
      </div>
  </div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
  data(){
      return{
          data:[{
            title:'测试一条',
            homePage:require('../../../img/u30.png'),
            createTime:'2018-05-01',
            source:'网易新闻',
            contentRes:'万豪酒店，处在舆论谴责浪尖，却是全球第一个实现“无卡”入住的酒店。智慧酒店重在新技术的应用，而利用互联网，移动互联网，物联网和各种新技术做差异化经营是一种很好的选择。当前物联网技术发展迅速，正持续转变人们的生活模式。大数据时代下，发展智慧型酒店，离不开相关技术'
          }]
      }
  },
  methods:{
    getNews(){
      customerModule.getNewsList({
        pageNo:1,
        pageSize:8
      }).then(res=>{
        if(res.statusCode=='1'){
            this.data=res.data.recordList.map(item=>{
              return {
                ...item,
                createTime:AppUtil.transferTimeToString(item.createTime)
              }
            });
        }
      });
    }
  },
  mounted(){
    this.getNews();
    for(var i=0;i<8;i++){
      this.data.push(this.data[0]);
    }
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
            .el-pagination{
                text-align: center;
                padding-top:30px;
                /deep/ .el-pager li{
                    font-size: 13px;
                    color: #0000FF;
                    width:22px;
                    min-width: 22px;
                    height: 22px;
                    line-height: 22px;
                    padding: 0px;
                    margin-left:6px;
                    border-radius: 3px;
                    font-weight: normal;
                    border:1px solid #eee;
                    &:hover{
                        border-color:#0099ff;
                    }
                    &.active{
                      color:#000;
                      border:none;
                    }
                }
                /deep/ button,/deep/ button span{
                  height: 22px;
                  line-height: 22px;
                }
                  /deep/ button {
                      padding: 0 6px;
                      border-radius: 3px;
                      border:1px solid #eee;
                      color: #0000FF;
                      &.disabled{
                        cursor: pointer;
                      }
                      &:hover{
                          border-color:#0099ff;
                      }
                      &.btn-next{
                        margin-left:6px;
                      }
                   } 
            }
          }
        }
    }
</style>

