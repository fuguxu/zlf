<template>
    <div class="supplier_type">
        <span class="label">供应商类型</span>
        <div class="select_box" :class="{active:activeBox}">
            <el-select class="el-input-box el-input-root" @change="changeType" v-model="rootValue" placeholder="请选择">
                <el-option v-for="item in options" :key="item.id" :label="item.catName" :value="item.id">
                </el-option>
            </el-select>
            <!-- <br /> -->
            <!-- <div > -->
                <el-select v-if="furnitureTypeOption.length>0"  class="el-input-box" @change="changfurnitureType" v-model="furnitureType" placeholder="再次选择">
                    <el-option v-for="item in furnitureTypeOption" :key="item.id" :label="item.catName" :value="item.id">
                    </el-option>
                </el-select>
            <!-- </div> -->
            <div class="error_message" v-if="errorMessage">
                <i class="icon el-icon-error"></i>
                <span>{{errorMessage}}</span>
            </div>
            <div class="item_box" >
                <div v-if="childenOptions.length>0"   :class="{show:showSelect}" class="item" v-left>
                    <span class="label_sub colorYellow">请进一步选择：</span>
                    <el-checkbox-group v-model="checkList" :max="max">
                        <el-checkbox v-for="(it,i) in childenOptions" :label="it.id" :key="i">{{it.catName}}</el-checkbox>
                    </el-checkbox-group>
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
import {customerModule} from '../api/main';
export default {
    data(){
        return {
            options:[],
            childenOptions:[],
            furnitureTypeOption:[],
            furnitureType:'',
            rootValue:'',
            checkList:[],
            showSelect:'',
            activeBox:false,
            errorMessage:'',
            max:99//机电只能选一个
        }
    },
    methods:{
        initData(){
            this.childenOptions=[];
            this.checkList=[];
            this.showSelect=false;
        },
        changeType(value){//选择第一级
            let item=AppUtil.findWhere(this.options,'id',value);
            if(item.catName.indexOf('机电')>-1){//机电只能单选
                this.max=1;
            }else{
                this.max=99;
            }
            this.furnitureTypeOption=[];
            this.furnitureType='';
            this.initData();
            if(item.ext!='1'){
                this.getLease(item.id);
            }else{
                this.getFurnitureOption(item.id);//获取家具第二次下拉框
            }
        },
        changfurnitureType(value){//家具第二次下拉框
            this.initData();
            this.getLeaseByfurniture(value);
        },
        getLeaseByfurniture(id,flag){//家具第二次下拉框得调2次接口
            customerModule.getLease({
                parentId:id
            }).then(res=>{
                if(res.statusCode=='1'){
                    let op1=res.data.filter(item=>{
                        return item.remark!='1'
                    })
                    let op2=res.data.filter(item=>{
                        return item.remark=='1'
                    })
                    customerModule.getLease({
                        parentId:op2[0].id
                    }).then(res=>{
                        if(res.statusCode=='1'){
                            this.childenOptions=[...op1,...res.data.map(item=>{
                                return {
                                    ...item,
                                    catName:'活动'+item.catName
                                }
                            })];
                            setTimeout(()=> {
                                this.showSelect=true;
                            }, 300);
                        }
                    })
                }
            })
        },
        valiate(){
            if(this.checkList.length==0){
                this.errorMessage='请选择供应商类型！';
                return false;
            }else{
                this.errorMessage='';
                return true;
            }
        },
        getLease(id){
            customerModule.getLease({
                parentId:id
            }).then(res=>{
                if(res.statusCode=='1'){
                    if(id=='0'){
                        this.options=res.data;
                    }else{
                        this.childenOptions=res.data;
                        if(this.childenOptions.length==0){//窗帘是此处情况
                           this.checkList=[id];
                        }
                        setTimeout(()=> {
                            this.showSelect=true;
                        }, 300);
                    }
                }
            })
        },
        getFurnitureOption(id){
            customerModule.getLease({
                parentId:id
            }).then(res=>{
                if(res.statusCode=='1'){
                   this.furnitureTypeOption=res.data;
                }
            })
        }
    },
    mounted(){
        //获取根数据
        this.getLease('0')
    },
    watch:{
        checkList(n,o){
           let checklist= (this.childenOptions.length>0?this.childenOptions:this.options).filter(item=>{
                return n.indexOf(item.id)>-1;
            })
            this.$emit('updateType',checklist.map(item=>{
                return {
                    ...item,
                    userTypeNo:item.id,
                    catFullname:item.fullName
                }
            }))
        }
    },
    directives: {
        left: {
            // 指令的定义
            inserted(el) {
                el.focus();
                el.style.left=-el.clientWidth+'px';
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .select_box{
        display: inline-block;
        position: relative;
        transition-delay: 300;
        transition: all 0.3s;
        .el-input-box{
            display: block;
            &.el-input-root{
                margin-bottom: 16px;
            }
        }
        &.active{
            margin-bottom:20px;
        }
        .item_box{
            position:absolute;
            width: 655px;
            height: 100%;
            overflow:hidden;
        }
        .item{
            position: absolute;
            display: flex;
            &.show{
                left:0 !important;
                transition:all 0.3s;
            }
            line-height: 40px;
            .label_sub{
                // width:122px;
                display: inline-block;
                text-align: left;
            }
            .el-checkbox-group{
                display:flex;
            }
        }
    }
</style>
