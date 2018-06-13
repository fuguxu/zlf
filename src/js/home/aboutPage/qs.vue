<template>
  <div class="qa_container">
      <div class="about_banner"></div>
      <div class="content">
          <leftContent></leftContent>
          <div class="list">
            <div class="header">
              <p class="font18 title_text">常见问题</p>
              <p class="font16">COMMON PROBLEM</p>
            </div>
              <ul class="list_left">
                  <li @click="changeChildren(item)" v-for="(item,index) in data" :key="index" class="title" :class="{active:item.id==activeId}">
                    <span>{{item.title}}</span>
                  </li>
              </ul>
              <ul class="list_right">
                  <li v-for="(item,index) in children" :key="index" class="question">
                    <div class="question_title" @click="showAnswer(item)">
                      <span class="question_text">{{item.question}}{{item.symbol||'？'}}</span>
                      <span class="icon" :class="{'el-icon-circle-plus':!item.show,'el-icon-remove':item.show}"></span>
                    </div>
                    <div class="answer" v-if="item.show">
                        <p class="answer_text" v-html="item.answer"></p>
                    </div>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>
<script>
import banner from '../Components/aboutBanner.vue';
import questionAnswer from './questionAnsower';
import leftContent from './leftContent.vue';
export default {
  data(){
      return{
          data:[],
          children:[],
          activeId:1
      }
  },
  mounted(){
    this.data=questionAnswer.map(item=>{
      item.children=item.children.map(v=>{
        return {
          ...v,
          show:false
        }
      })
      return item
    })
    this.children=this.data[0].children;
  },
  methods:{
    changeChildren(item){
      this.activeId=item.id;
      this.children=item.children;
    },
    showAnswer(item){
      item.show=!item.show;
    }
  },
  components:{
      banner,
      leftContent
  }
}
</script>
<style lang="scss" scoped>
  .qa_container{
    background: #ffffff;
  }
  .about_banner{
    width:100%;
    height: 600px;
    background: url('../../../img/about_us_qa.png') center no-repeat;
    background-size: cover;
}
  .content{
    width:1160px;
    display: flex;
    padding-bottom: 150px;
    box-sizing: border-box;
    margin:0 auto;
  }
  .list{
    flex: 1;
    .header{
      .title_text{
        padding:128px 0 5px;
      }
    }
    .list_left{
      margin-top:34px;
      display: flex;
      background:rgba(244,244,244,1);
      justify-content: space-around;
      .title{
        text-align: center;
        padding:0 18px;
        line-height: 46px;
        box-sizing: border-box;
        font-size: 16px;
        color:rgba(153,153,153,1);
        cursor: pointer;
        &:hover{
          background:rgba(0,0,0,1);
          color:#fff;
        }
        &.active{
          background:rgba(0,0,0,1);
          color:#fff;
        }
      }
    }
    .list_right{
      // margin-top:10px;
      .question{
        // width:736px;
      }
      .question_title{
        position: relative;
        width:100%;
        font-size: 14px;
        cursor: pointer;
        line-height: 66px;
        // padding-top: 21px;
        // padding-bottom: 11px;
        color:rgba(102,102,102,1);
        border-bottom: 1px solid rgba(244,244,244,1);
        .question_text{
          // color: rgba(0, 0, 0, 0.85);
        }
        &:hover .question_text{
          color: rgba(0, 0, 0, 0.647);
        }
        .icon{
          display: inline-block;
          position: absolute;
          font-size: 24px;
          color: #000;
          right: 20px;
          bottom: 20px;
          &.el-icon-remove{
            color:rgba(255,166,50,1);
          }
        }
      }
      .answer{
        padding:26px 15px;
        background:rgba(244,244,244,1);
      }
      .answer_text{
        font-size: 14px;
        line-height: 30px;
      }
    }
  }
  </style>
