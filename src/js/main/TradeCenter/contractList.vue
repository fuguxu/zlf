<template>
    <div class="contract_list">
        <ul>
            <router-link tag="li"  v-for="(item,index) in list" :key="index"  :to="`/trade/detail/contract/detail?id=${$route.query.id}&leaseType=${$route.query.leaseType}&listNo=${$route.query.listNo}`">
                <div class="item" @mouseenter="mouseEnter(index)" @mouseleave="mouseLeave(index)">
                     <div class="icon_wrap">
                        <img ref="hand" class="hand_icon" src="../../../img/hand.png" alt="">
                    </div>
                    <span>{{item.name}}</span>
                </div>
            </router-link>  
        </ul>
    </div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            list:[{name:'我是一个大好人'},{name:'江湖上的事看看是否的说法是'}]
        }
    },
    methods:{
        getMainLease(){
            customerModule.getMainLease({
                orderNo:this.$route.query.id
            }).then(res=>{
                if(res.statusCode=="1"){

                }
            })
        },
        mouseEnter(index){
           var el=this.$refs.hand[index];
           el.src=require('../../../img/hand_active.png');
            el.style.transform='scale(1.5)';
            setTimeout(()=>{
                el.style.transform='scale(1.25)';
            },100)
            setTimeout(()=>{
                el.style.transform='scale(1.5)';
            },200)
        },
        mouseLeave(index){
            var el=this.$refs.hand[index];
            el.src=require('../../../img/hand.png');
            el.style.transform='scale(1)';
            setTimeout(()=>{
                el.style.transform='scale(1.25)';
            },100)
            setTimeout(()=>{
                el.style.transform='scale(1)';
            },200)
        }
    },
    mounted(){
        this.getMainLease();
    }
}
</script>
<style lang="scss" scoped>
    .contract_list{
        padding:20px;
        .item{
            line-height: 60px;
            background:rgba(244,244,244,1);
            display: flex;
            margin-bottom: 8px;
            align-items: center;
            cursor: pointer;
            &:hover{
                color:#FFA632;
            }
            .icon_wrap{
                width:58px;
                box-sizing: border-box;
                padding-left:20px;
                display: flex;
                align-items: center;
            }
            .hand_icon{
                width:16px;
                height:16px;
                
            }
        }
    }
</style>
