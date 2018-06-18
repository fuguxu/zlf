<template>
    <div class="message_center">
        <img class="message_icon" src="../../../img/u1405.png" alt="">
        <!-- <span class="message_text">消息</span> -->
        <router-link class="message_text" to="/message">消息</router-link>
        <span v-if="number" class="number">{{number}}</span>
    </div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            number:''
        }
    },
    methods:{
        getNotReadNum(){
            customerModule.getNotReadNum().then(res=>{
                if(res.statusCode=='1'){
                    this.number=res.data;
                }
            })
        }
    },
    mounted(){
        this.getNotReadNum();
    }
}
</script>
<style lang="scss" scoped>
    .message_center{
        display: flex;
        height: 100%;
        align-items: center;
        cursor: pointer;
        margin-left:155px;
        margin-right:34px;
        .message_icon{
            // width:20px;
            // height:20px;
        }
        .message_text{
            margin:0 5px;
            font-size:14px;
            &:hover,&.router-link-active{
                color:rgba(255, 255,255, 0.75);
            }
        }
        .number{
            color: #FFD800;
        }
    }
</style>
