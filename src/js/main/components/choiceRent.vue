<template>
    <div class="choice_rent">
        <ul>
            <li class="item" v-for="(item,index) in furniture" :key="index+'0'">
                <div class="item_title">
                    <el-checkbox @change="selectRoot(item)" v-model="item.checked">{{item.catName}}</el-checkbox>
                </div>
                <div class="extend furniture-extend" v-if="item.children.length>0&&item.checked" style="display:flex;background:#fff;">
                    <div>
                        <span>请选择</span>
                        <el-select v-model="item.optionValue" @change="changeSelect"  placeholder="">
                            <el-option v-for="(it,i) in item.children" :key="i" :value="it.id" :label="it.catName"></el-option>
                        </el-select>
                    </div>
                    <div style="display:flex;">
                        <span style="margin-right:26px;">请进一步选择</span>
                        <ul class="children_item" v-if="item.children2.length>0">
                            <li  v-for="(it,i) in item.children2" :key="i">
                                <el-checkbox @change="selectItem(it)" v-model="it.checked">{{it.catName}}</el-checkbox>
                                <el-radio-group v-if="it.checked&&it.needDetail===false" v-model="it.supplierSource">
                                    <el-radio :label="1">我已有{{it.catName}}指定的供应商</el-radio><br />
                                    <el-radio :label="0">我需要租立方推荐优质供应商</el-radio>
                                </el-radio-group>
                                <div class="need-spread" v-if="it.checked&&it.remark=='1'&&!it.click">
                                    <span>您还需要进一步细分活动家具吗？</span>
                                    <span class="button need" @click="clickNeed(it,true);" >需要</span>
                                    <span class="button no" @click="clickNeed(it,false);">不需要</span>
                                </div>
                                <ul class="children_item children_item_detail" v-if="it.checked&&it.needDetail===true&&it.children.length>0">
                                    <li class="children_li" v-for="(it2,i) in it.children" :key="i">
                                        <el-checkbox @change="selectItem(it2)" v-model="it2.checked">{{it2.catName}}</el-checkbox>
                                        <el-radio-group v-if="it2.checked" v-model="it2.supplierSource">
                                            <el-radio :label="1">我已有{{it2.catName}}指定的供应商</el-radio><br />
                                            <el-radio :label="0">我需要租立方推荐优质供应商</el-radio>
                                        </el-radio-group>
                                    </li>
                                </ul>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </li>
            <li class="item" v-for="(item,index) in data" :key="index" >
                <div class="item_title">
                    <el-checkbox @change="selectRoot(item)" v-model="item.checked">{{item.catName}}</el-checkbox>
                </div>
                <div class="extend" v-if="item.checked">
                    <el-radio-group class="only-radio-group" v-if="item.checked&&item.children.length==0" v-model="item.supplierSource">
                        <el-radio :label="1">我已有{{item.catName}}指定的供应商</el-radio><br />
                        <el-radio :label="0">我需要租立方推荐优质供应商</el-radio>
                    </el-radio-group>
                    <ul class="children_item" v-if="item.checked&&item.children.length>0">
                        <li v-for="(it,i) in item.children" :key="i" class="children_li">
                            <el-checkbox @change="selectItem(it)" v-model="it.checked">{{it.catName}}</el-checkbox>
                            <el-radio-group v-if="it.checked" v-model="it.supplierSource">
                                <el-radio :label="1">我已有{{it.catName}}指定的供应商</el-radio><br />
                                <el-radio :label="0">我需要租立方推荐优质供应商</el-radio>
                            </el-radio-group>
                        </li>
                    </ul>
                </div>
                
            </li>
        </ul>
        <div class="footer">
            <span class="button" :class="{disabled:disabled}" @click="submit">{{buttonText}}</span>
        </div>
        <confirmRentDialog :loading="loading" v-if="visible" @submit="confirm" :visible.sync="visible" :data="selectData"></confirmRentDialog>
    </div>
</template>
<script>
import {customerModule} from '../../api/main';
import confirmRentDialog from './confirmRentDialog';
export default {
    props:['orderNo'],
    data(){
        return {
            data:[],
            furniture:[],
            selectData:[],
            visible:false,
            buttonText:'提交你的选择',
            loading:false,
            disabled:false
        }
    },
    methods:{
        getLease(item){//根据父id获取下一级
            customerModule.getLease({
                parentId:item.id
            }).then(res=>{
                if(res.statusCode=='1'){
                    if(res.data.length>0){
                        item.children=res.data.map(item=>{
                            return {
                                ...item,
                                checked:false,
                                supplierSource:'',
                                children:[]
                            }
                        })
                        if(item.ext=='1'){
                            item.optionValue=item.children[0].id;
                            this.changeSelect(item.children[0].id);
                        }else{
                            
                        }
                        
                    }else{
                        item.children=[];
                    }
                }
            })
        },
        getRoot(){//获取根节点
            customerModule.getLease({
                parentId:'0'
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.data=res.data
                    .filter(item=>{
                        return item.ext!='1'; 
                    })
                    .map(item=>{
                        return {
                            ...item,
                            checked:false,
                            supplierSource:'',
                            optionValue:'',
                            children:false
                        }
                    })
                    this.furniture=res.data.filter(item=>{
                        return item.ext=='1'; 
                    }).map(item=>{
                        return {
                            ...item,
                            checked:false,
                            supplierSource:'',
                            optionValue:'',
                            children:false,
                            children2:false
                        }
                    })
                    // console.log(this.data)
                    // console.log(this.furniture)
                }
            })
        },
        changeSelect(id){//选择家具下拉框
            customerModule.getLease({
                parentId:id
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.furniture[0].children2=res.data.map(item=>{
                        return {
                                ...item,
                                checked:false,
                                supplierSource:'',
                                needDetail:item.remark=='1'?'':false,
                                click:item.remark=='1'?false:true,
                                children:[]
                            }
                    });
                }
            })
        },
        selectRoot(item){
            item.supplierSource='';
            this.getLease(item);
        },
        selectItem(item){
            item.supplierSource='';
            if(item.remark=='1'){//固装家具
                item.click=false;
                item.needDetail='';
                if(item.children){
                    for(var v of item.children){
                        v.checked=false;
                        v.supplierSource='';
                    }
                }
            }
        },
        clickNeed(item,flag){//点击需要还是不需要
            item.needDetail=flag;
            item.click=true;
            if(flag){
                customerModule.getLease({
                    parentId:item.id
                }).then(res=>{
                    if(res.statusCode=='1'){
                        item.children=res.data.map(item=>{
                            return {
                                ...item,
                                checked:false,
                                supplierSource:'',
                                optionValue:'',
                                children:false
                            }
                        })
                    }
                })
            }
        },
        confirm(){//对数据处理 选到最后一步传给后端
            this.saveProductComm();
        },
        submit(){//出现弹窗
            // console.log(this.data)
            // console.log(this.furniture)
            if(this.disabled) return;
            this.selectData=[];
            let data=[...this.furniture,...this.data];
            this.handlerData(data);
            // console.log(this.selectData)
            this.visible=true;
        },
        handlerData(data){
            for(var val of data){
                if(val.checked&&(val.supplierSource===0||val.supplierSource===1)){
                    this.selectData.push(val);
                }else if(val.children&&val.children.length>0||val.children2&&val.children2.length>0){
                    this.handlerData(val.children2||val.children);
                }
            }
        },
        saveProductComm(){//保存清单接口
            this.loading=true
            customerModule.saveProductComm(this.selectData.map(item=>{
                return {
                    // ...item,
                    ext1:item.fullName,
                    supplierSource:item.supplierSource,
                    leaseType:item.ext,
                    leaseTypeNo:item.id,
                    leaseTypeName:item.catName,
                    orderNo:this.orderNo
                }
            })).then(res=>{
                if(res.statusCode=='1'){
                    this.loading=false;
                    this.visible=false;
                    this.disabled=true;
                    this.buttonText='提交成功，推荐结果请见下方';
                    this.$emit('updateRecommend');
                }
            })
        }
    },
    mounted(){
        this.getRoot();
    },
    components:{
        confirmRentDialog
    }
}
</script>
<style lang="scss" scoped>
.choice_rent{
    padding-bottom: 50px;
}
   .extend .children_li{
       display: flex;
   }
    .item{
        // display: block; 
        margin-bottom: 8px;     
        .item_title{
            line-height: 46px;
            padding-left:16px;
            background: rgba(255,166,50,1);
            /deep/ .el-checkbox__label{
                color:#fff;
                margin-left:9px;
                &:hover{
                    color:rgba(255,255,255,0.7);
                }
            }
        }
        
        .extend{
            padding-left:45px;
            padding-bottom: 30px;
            border:1px solid rgba(244,244,244,1);
            li{
                line-height: 40px;
                margin-top:30px;
                // height:40px;
                // display: flex;
            }
            .el-checkbox{
                min-width:110px;
            }
            /deep/ .el-checkbox__input.is-checked .el-checkbox__inner{
                background: rgba(255,166,50,1);
                &:after{
                    border: 1px solid #fff;
                    border-left: 0;
                    border-top: 0;
                }
            }
            /deep/ .el-checkbox__inner{
                border-color: rgba(244,244,244,1);
            }
            /deep/ .el-checkbox__label{
                color:rgba(102,102,102,1);
                font-size: 14px;
            }
            .only-radio-group{
                margin-top:30px;
            }
            .el-radio-group{
                border-left:1px solid rgba(214,214,214,1);
                padding:2px 0px 2px 12px;
                /deep/ .el-radio__label{
                    font-size:12px;
                    color:rgba(102,102,102,1);
                }
               /deep/ .el-radio__inner{
                   border-color: rgba(244,244,244,1);
                    background: #fff;
                   &:after{
                        background-color: rgba(255,166,50,1);
                        width: 10px;
                        height: 10px;
                    }
               }
               
            }
            &.furniture-extend{
                padding-top:15px;
                padding-bottom:20px; 
                .el-select{
                    border:1px solid rgba(244,244,244,1);
                    width:118px;
                    margin:0 75px 0 7px;
                /deep/ .el-input__inner{
                    color:rgba(102,102,102,1);
                }
                }
                li{
                    margin-top:0px;
                    &:first-child{
                         margin-bottom: 30px;
                    }
                }
                 .children_item_detail{
                    li{
                        margin-bottom: 30px;
                        padding-left:20px;
                    }
                }
                .need-spread{
                    margin-left: -110px;
                    margin-top: 20px;
                    display: flex;
                    .button{
                        font-size: 16px;
                        // text-align: center;
                        width:100px;
                        // border-radius:2px;
                        // cursor: pointer;
                        &.need{
                            background:rgba(255,166,50,1);
                            color:#fff;
                            margin:0px 23px 0px 12px;
                            &:hover{
                                background:rgba(255,166,50,0.8);
                            }
                        }
                        &.no{
                            background:rgba(244,244,244,1);
                            color:rgba(153,153,153,1);
                            &:hover{
                                background:#E1E1E1;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer{
        display: flex;
        justify-content: center;
        padding-top: 30px;
        .button{
            width:240px;
            line-height: 40px;
            // background:rgba(255,166,50,1);
            color: #fff;
            font-size: 16px;          
        }
    }
</style>
