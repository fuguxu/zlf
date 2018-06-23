<template>
    <div class="contract_detail">
        <div class="item" v-for="(item,index) in data" :key="index">
            <div class="item_sub">
                <div class="circel">{{index+1}}</div>
                <span>{{item.title}}</span>
                <i class="icon" :class="{'el-icon-caret-bottom':!item.showMore,'el-icon-caret-top':item.showMore}" @click="item.showMore=!item.showMore"></i>
            </div>
            <div v-if="item.showMore">
                <progressImg :data="item" v-if="item.imgAddr1"></progressImg>
                <noUpload v-else></noUpload>
            </div>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">6</div>
                <span>验收完成</span>
                <i class="icon" :class="{'el-icon-caret-bottom':!check,'el-icon-caret-top':check}"  @click="check=!check"></i>
            </div>
            <checkOrder class="check_wrap" role="0" :orderNo="orderNo" :proCommNo="proCommNo" :leaseNo="leaseNo" :data="acceptanceData" v-if="check"></checkOrder>
        </div>
    </div>
</template>
<script>
import progressImg from '../../components/progressImg';
import checkOrder from '../../../components/checkOrder';
import noUpload from '../../../components/noUpload';
import {customerModule} from '../../../api/main';
export default {
    props:['leaseNo','orderNo','proCommNo'],
    data(){
        return {
            check:false,
            data:[],
            acceptanceData:''
        }
    },
    methods:{
        getMainLeaseDetail(){//获取合同详情
            customerModule.getMainLeaseDetail({
                leaseNo:this.leaseNo
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.data=res.data.map(item=>{
                        return {
                            ...item,
                            showMore:false
                        }
                    });
                }
            })
        },
        getAcceptanceVO(){//获取验收信息 有验收含就显示第六步
            customerModule.getAcceptanceVO({
                leaseContractNo:this.leaseNo
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.acceptanceData=res.data;
                }
            })
        }
    },
    mounted(){
        this.getMainLeaseDetail();
        this.getAcceptanceVO();
        
    },
    components:{
        progressImg,
        checkOrder,
        noUpload
    }
}
</script>
<style lang="scss" scoped>
    .item{
        margin-bottom: 10px;
        .check_wrap{
            border:1px solid rgba(231, 231, 231, 1);
            padding:0 33px;
        }
        .item_sub{
            display: flex;
            height: 60px;
            align-items: center;
            background: rgba(244,244,244,1);
            position: relative;
            .circel{
                width:18px;
                height: 18px;
                border-radius: 50%;
                background: rgba(255,166,50,1);
                color:#fff;
                text-align: center;
                line-height: 18px;
                margin:0px 16px;
            }
        }
        .icon{
            font-size:12px;
            color:rgba(153,153,153,1);
            position: absolute;
            right: 20px;
            top: 50%;
            margin-top: -6px;
            cursor: pointer;
        }
    }
</style>
