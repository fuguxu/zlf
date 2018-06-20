<template>
    <div class="contract_list">
        <ul>
            <li tag="li"  v-for="(item,index) in list" :key="index" @click="goContractDetail(item)">
                <div class="item" @mouseenter="mouseEnter(index)" @mouseleave="mouseLeave(index)">
                     <div class="icon_wrap">
                        <img ref="hand" class="hand_icon" src="../../../../img/hand.png" alt="">
                    </div>
                    <span>{{item.leaseName}}</span>
                </div>
            </li>  
        </ul>
    </div>
</template>
<script>
import {customerModule} from '../../../api/main';
export default {
    props:['orderNo'],
    data(){
        return {
            list:[]
        }
    },
    methods:{
        getMainLease(){
            customerModule.getCustomerstMainLease({
                orderNo:this.orderNo
            }).then(res=>{
                if(res.statusCode=="1"){
                    this.list=res.data;
                }
            })
        },
        mouseEnter(index){
           var el=this.$refs.hand[index];
           el.src=require('../../../../img/hand_active.png');
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
            el.src=require('../../../../img/hand.png');
            el.style.transform='scale(1)';
            setTimeout(()=>{
                el.style.transform='scale(1.25)';
            },100)
            setTimeout(()=>{
                el.style.transform='scale(1)';
            },200)
        },
        goContractDetail(item){
            this.$emit('updateCp',item);
        }
    },
    mounted(){
       this.getMainLease();
    }
}
</script>
<style lang="scss" scoped>
    .contract_list{
        // padding:20px;
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
