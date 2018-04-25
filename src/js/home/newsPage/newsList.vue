<template>
  <div>新闻列表</div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
  data(){
      return{
          
      }
  },
  methods:{
    getNews(){
      customerModule.getNewsList({});
    }
  }
}
</script>

