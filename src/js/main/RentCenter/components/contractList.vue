<template>
    <div class="contract_list">
        <ul>
            <li tag="li"  v-for="(item,index) in list" :key="index" @click="goContractDetail(item)">
                <div class="item" @mouseenter="mouseEnter(index)" @mouseleave="mouseLeave(index)">
                     <div class="icon_wrap">
                        <img ref="hand" class="hand_icon" src="../../../../img/hand.png" alt="">
                    </div>
                    <span>{{item.leaseName+'合同执行详情'}}</span>
                </div>
            </li>  
        </ul>
        <div class="no_content font16" v-if="list.length==0&&ajaxDone">
            <img src="../../../../img/no_step.png" alt="">
            <div class="text">温馨提示：</div>
            <div class="text">交易还未进行到这一步，请耐心等候～</div>
        </div>
    </div>
</template>
<script>
import {customerModule} from '../../../api/main';
export default {
    props:['orderNo'],
    data(){
        return {
            list:[],
            ajaxDone:false
        }
    },
    methods:{
        getMainLease(){
            this.ajaxDone=false;
            customerModule.getCustomerstMainLease({
                orderNo:this.orderNo
            }).then(res=>{
                if(res.statusCode=="1"){
                    this.list=res.data;
                    this.ajaxDone=true;
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
        .no_content{
            text-align: center;
            width:300px;
            padding:30px 0px;
            .text{
                line-height: 40px;
            }
        }
    }
</style>
