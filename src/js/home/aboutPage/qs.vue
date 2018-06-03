<template>
  <div class="qa_container">
      <banner></banner>
      <div class="content">
          <leftContent></leftContent>
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
  .content{
    width:1160px;
    display: flex;
    padding-bottom: 150px;
    box-sizing: border-box;
    margin:0 auto;
  }
  .list{
    flex: 1;
    .list_left{
      margin-top:24px;
      display: flex;
      background:rgba(244,244,244,1);
      .title{
        text-align: center;
        flex: 1;
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
      margin-top:10px;
      .question{
        // width:736px;
      }
      .question_title{
        position: relative;
        width:100%;
        font-size: 14px;
        cursor: pointer;
        padding-top: 21px;
        padding-bottom: 11px;
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
        padding:26px 15px;
        background:rgba(244,244,244,1);
      }
      .answer_text{
        font-size: 15px;
        line-height: 25px;
      }
    }
  }
  </style>
