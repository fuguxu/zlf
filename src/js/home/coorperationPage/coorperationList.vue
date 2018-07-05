<template>
  <div class="coorperation_list">
      <div class="banner"></div>
      <div class="title_box">
          <div class="title">
            <span @click="changeType(item)" v-for="(item,index) in dataType" :key="index" :class="{current:item.value==active}">{{item.label}}</span>
          </div>
      </div>
      <div class="case_list_box">
          <div class="case_list">
              <div class="item" :class="{three:(index+1)%3==0}" @click="clickItem(item)" v-for="(item,index) in dataList" :key="index">
                  <img :src="item.url" alt="">
                  <div class="item_dec">
                      <div class="name">{{item.name.replace(/\s/g,'')}}</div>
                      <div class="desc">{{item.desc}}</div>
                      <div class="line"></div>
                      <div class="room_info">
                          <ul class="info">
                            <li class="nu">{{item.rentNumber}}</li>
                            <li class="it">租赁总额</li>
                          </ul>
                          <ul class="info">
                            <li class="nu">{{item.roomNumber}}</li>
                            <li class="it">{{item.roomNumberDesc||'房间数'}}</li>
                          </ul>
                          <ul class="info">
                            <li class="nu">{{item.productStyle}}</li>
                            <li class="it">产品风格</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import filterCoorperation from './coorperationData';
export default {
  data(){
      return{
          dataList:[],
          dataType:[
            {
              value:'',
              label:'全部服务对象'
            },
            {
              value:'hotel',
              label:'酒店'
            },
            {
              value:'apartment',
              label:'公寓'
            },
            {
              value:'company',
              label:'办公场所'
            },
            {
              value:'old',
              label:'养老公寓'
            },
          ],
          active:''
      }
  },
  methods:{
    clickItem(item){
      this.$router.push({
        path:'/coorperation/detail',
        query:{
          id:item.order
        }
      })
    },
    changeType(item){
      this.active=item.value;
      this.dataList=filterCoorperation('belong',item.value);
    }
  },
  mounted(){
    this.dataList=filterCoorperation();
  }
}
</script>
<style lang="scss" scoped>
    .coorperation_list{
        background: rgba(244, 244, 244, 1);
        padding-bottom: 50px;
    }
    .banner{
      height:600px;
      background: url('../../../img/u297.png') center no-repeat;
      background-size: cover;
    }
    .title_box{
      background: #fff;
      .title{
        width:1160px;
        margin:0 auto;
        height: 72px;
        font-size: 16px;
        color:rgba(153,153,153,1);
        // border-radius: 5px;
        // box-shadow: 0 0 5px #eee;
        box-sizing: border-box;
        span{
          cursor: pointer;
          margin-left: 90px;
          display: inline-block;
          border-bottom: 4px solid transparent;
          box-sizing: border-box;
          height: 100%;
          line-height: 72px;
          &:first-child{
            margin-left:0px;
          }
        }
        span:hover,.current{
          color:rgba(255,166,50,1);
          border-bottom: 4px solid rgba(255,166,50,1);
        }
      }
    }
    .case_list_box{
      width: 1160px;
      margin:0 auto;
      box-sizing: border-box;
      padding-bottom: 40px;
      .case_list{
        width:100%;
        flex-wrap: wrap;
        display: flex;
        min-height: 300px;
        // justify-content: space-between;
        .item{
          // width:350px;
          // height:440px;
          margin-right:22px;
          &.three{
            margin-right: 0px;
          }
          background: #fff;
          margin-top: 40px;
          font-size: 0px;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(215, 215, 215, 0.6);
          border-radius: 7px;
          &:hover,&:hover img{
            box-shadow: 0 0 8px rgba(255,166,50, 0.7);
          }
          img{
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
            width:372px;
            height:290px;
          }
          .name{
            font-size: 16px;
            color:rgba(51,51,51,1);
            padding: 25px 0 11px 22px;
          }
          .desc{
            font-size: 14px;
            color:rgba(136,136,136,1);
            padding-bottom: 20px;
            padding-left: 22px;
          }
          .line{
            height: 1px;
            width:333px;
            margin-left:22px;
            background:rgba(244,244,244,1);
          }
          .room_info{
            display: flex;
            .info{
              flex: 1;
              display: flex;
              text-align: center;
              flex-flow: column;
            }
            .nu{
              color:rgba(255,166,50,1);
              font-size: 18px;
              padding:18px 0 14px 0px;
            }
            .it{
              font-size:14px;
             color:rgba(136,136,136,1);
             padding-bottom: 18px;
            }
          }
        }
      }
    }
</style>

