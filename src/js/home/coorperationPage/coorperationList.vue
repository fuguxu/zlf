<template>
  <div class="coorperation_list">
      <div class="banner"></div>
      <div class="case_list_box">
          <div class="title">
            <span @click="changeType(item)" v-for="(item,index) in dataType" :key="index" :class="{current:item.value==active}">{{item.label}}</span>
          </div>
          <div class="case_list">
              <div class="item" @click="clickItem(item)" v-for="(item,index) in dataList" :key="index">
                  <img :src="item.url" alt="">
                  <div class="item_dec">
                      <div class="name">{{item.name.replace(/\s/g,'')}}</div>
                      <div class="desc">{{item.desc}}</div>
                      <div class="line"></div>
                      <div class="room_info">
                          <ul class="info">
                            <li class="nu">{{item.rentNumber}}</li>
                            <li class="it">租赁额</li>
                          </ul>
                          <ul class="info">
                            <li class="nu">{{item.roomNumber}}</li>
                            <li class="it">房间数</li>
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
    .banner{
      height:650px;
      background: url('../../../img/u297.jpeg') center no-repeat;
      background-size: cover;
    }
    .case_list_box{
      width: 1200px;
      margin:0 auto;
      .title{
        line-height: 46px;
        font-size: 14px;
        color: #434343;
        margin: 60px 32px 12px 40px;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px #eee;
        box-sizing: border-box;
        span{
          cursor: pointer;
          margin-left: 60px;
          &:first-child{
            margin-left:30px;
          }
        }
        span:hover,.current{
          color: rgb(255, 192, 46);
        }
      }
      .case_list{
        width:100%;
        flex-wrap: wrap;
        display: flex;
        .item{
          width:350px;
          height:440px;
          margin-left:40px;
          margin-bottom: 40px;
          font-size: 0px;
          cursor: pointer;
          box-shadow: 0 0 5px rgba(215, 215, 215, 0.6);
          border-radius: 7px;
          &:hover,&:hover img{
            box-shadow: 0 0 10px rgba(255,192,46, 0.3);
          }
          img{
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
            width:350px;
            height:231px;
          }
          .name{
            font-size: 18px;
            color: #363636;
            padding: 22px 0;
            padding-left: 30px;
          }
          .desc{
            font-size: 15px;
            color: rgba(54, 54, 54, 0.75);
            padding-bottom: 22px;
            padding-left: 30px;
          }
          .line{
            height: 1px;
            width:315px;
            margin-left:17.5px;
            background:rgb(221, 220, 219);
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
              color: #FFC02E;
              font-size: 16px;
              line-height: 70px;
            }
            .it{
              font-size:13px;
             color: rgba(54, 54, 54, 0.55);
            }
          }
        }
      }
    }
</style>

