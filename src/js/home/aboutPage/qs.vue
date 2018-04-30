<template>
  <div class="qa_container">
      <banner>
          <div class="slot">
              <div class="title">常见问题</div>
              <div class="desc">汇集常见问题，您的疑惑将在这里找到答案</div>
          </div>
      </banner>
      <div class="list">
          <ul class="list_left">
              <li @click="changeChildren(item)" v-for="(item,index) in data" :key="index" class="title" :class="{active:item.id==activeId}">
                <span>{{item.title}}</span>
              </li>
          </ul>
          <ul class="list_right">
              <li v-for="(item,index) in children" :key="index" class="question">
                <div class="question_title" @click="showAnswer(item)">
                   <span class="question_text">{{item.question}}{{item.symbol||'？'}}</span>
                   <span class="icon">{{item.show?'-':'+'}}</span>
                </div>
                <div class="answer" v-if="item.show">
                    <p class="answer_text" v-html="item.answer"></p>
                </div>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
import banner from '../Components/aboutBanner.vue';
import questionAnswer from './questionAnsower';
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
      banner
  }
}
</script>
<style lang="scss" scoped>
  .slot{
    text-align: center;
    .title{
        font-family: 'SimHei';
        font-size: 40px;
        color: #FFFFFF;
        padding-top: 168px;
        padding-bottom: 10px;
    }
    .desc{
        font-family: 'SimSun';
        font-size: 18px;
        color: rgba(255, 255, 255, 0.95);
    }
  }
  .list{
    width:1160px;
    min-height:824px;
    padding-bottom: 150px;
    box-sizing: border-box;
    margin:0 auto;
    background: #ffffff;
    margin-top:-145px;
    display: flex;
    .list_left{
      margin-left:70px;
      margin-top:24px;
      margin-right:25px;
      .title{
        width:250px;
        line-height: 40px;
        box-sizing: border-box;
        font-family: SimHei;
        font-size: 16px;
        padding-left:10px;
        color: rgba(0, 0, 0, 0.698);
        cursor: pointer;
        border-bottom: 1px solid rgb(183,183,183);
        &:hover{
          background: rgb(183,183,183);
          color:#fff;
        }
        &.active{
          background: rgb(52,52,52);
          color:#fff;
        }
      }
    }
    .list_right{
      margin-top:10px;
      .question{
        width:736px;
      }
      .question_title{
        position: relative;
        width:100%;
        font-size: 16px;
        cursor: pointer;
        padding-top: 21px;
        padding-bottom: 11px;
        border-bottom: 1px solid rgb(183,183,183);
        .question_text{
          color: rgba(0, 0, 0, 0.85);
        }
        &:hover .question_text{
          color: rgba(0, 0, 0, 0.647);
        }
        .icon{
          display: inline-block;
          position: absolute;
          width: 27px;
          height: 27px;
          font-size: 22px;
          color: #fff;
          background: #151615;
          text-align: center;
          line-height: 24px;
          right: 0;
          bottom: 0;
        }
      }
      .answer{
        padding:26px 0px;
      }
      .answer_text{
        font-size: 15px;
        color: rgba(0, 0, 0, 0.7);
        line-height: 25px;
      }
    }
  }
  </style>
