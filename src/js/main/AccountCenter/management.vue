<template>
    <div class="management">
        <ul>
            <li v-for="(item,index) in data" :key="index" class="item">
                <span class="content">{{item.content}}</span>
                <span class="statusValue">{{item.statusValue}}</span>
                <span class="record" v-for="(it,i) in item.record||[]" :key="i">{{i+1+'条'}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            data:[]
        }
    },
    methods:{
        getDatum(){
            customerModule.getDatum().then(res=>{
                if(res.statusCode=='1'){
                    this.data=res.data;
                }
            })
        }
    },
    mounted(){
        this.getDatum();
    }
}
</script>
<style lang="scss" scoped>
    .management{
        padding-left: 60px;
        padding-top: 50px;
        .item{
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            .content{
                width:156px;
            }
            .statusValue,.record{
                display: inline-block;
                padding:3px 17px;
                border-radius: 10px;
                color:#fff;
                font-size:12px;
            }
            .statusValue{
                background: rgba(76,160,255,1);
            }
            .record{
                background:rgba(255,92,65,1);
                margin-left:20px;
            }
        }
    }
</style>
