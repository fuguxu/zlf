<template>
    <div class="choice_rent">
        <ul>
            <li class="item" v-for="(item,index) in furniture" :key="index+'0'">
                <div class="item_title">
                    <el-checkbox @change="selectRoot(item)" v-model="item.checked">{{item.catName}}</el-checkbox>
                </div>
                <div v-if="item.children.length>0&&item.checked" style="display:flex;background:#fff;">
                    <div>
                        <span>请选择</span>
                        <el-select v-model="item.optionValue" @change="changeSelect"  placeholder="">
                            <el-option v-for="(it,i) in item.children" :key="i" :value="it.id" :label="it.catName"></el-option>
                        </el-select>
                    </div>
                    <div style="display:flex;">
                        <span>请进一步选择</span>
                        <ul class="children_item" v-if="item.children2.length>0">
                            <li v-for="(it,i) in item.children2" :key="i">
                                <el-checkbox @change="selectItem(it)" v-model="it.checked">{{it.catName}}</el-checkbox>
                                <el-radio-group v-if="it.checked&&it.needDetail===false" v-model="it.supplierSource">
                                    <el-radio :label="1">我已有{{it.catName}}指定的供应商</el-radio><br />
                                    <el-radio :label="0">我需要租立方推荐优质供应商</el-radio>
                                </el-radio-group>
                                <div v-if="it.checked&&it.remark=='1'&&!it.click">
                                    <span>您还需要进一步细分活动家具吗？</span>
                                    <span @click="clickNeed(it,true);" >需要</span>
                                    <span @click="clickNeed(it,false);">不需要</span>
                                </div>
                                <ul class="children_item" v-if="it.checked&&it.needDetail===true&&it.children.length>0">
                                    <li v-for="(it2,i) in it.children" :key="i">
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
                <el-radio-group v-if="item.checked&&item.children.length==0" v-model="item.supplierSource">
                    <el-radio :label="1">我已有{{item.catName}}指定的供应商</el-radio><br />
                    <el-radio :label="0">我需要租立方推荐优质供应商</el-radio>
                </el-radio-group>
                <ul class="children_item" v-if="item.checked&&item.children.length>0">
                    <li v-for="(it,i) in item.children" :key="i">
                        <el-checkbox @change="selectItem(it)" v-model="it.checked">{{it.catName}}</el-checkbox>
                        <el-radio-group v-if="it.checked" v-model="it.supplierSource">
                            <el-radio :label="1">我已有{{it.catName}}指定的供应商</el-radio><br />
                            <el-radio :label="0">我需要租立方推荐优质供应商</el-radio>
                        </el-radio-group>
                    </li>
                </ul>
            </li>
        </ul>
        <el-button @click="submit">提交你的选择</el-button>
    </div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
    props:['orderNo'],
    data(){
        return {
            data:[],
            furniture:[],
            selectData:[],
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
        submit(){//对数据处理 选到最后一步传给后端
            console.log(this.data)
            console.log(this.furniture)
            this.selectData=[];
            let data=[...this.furniture,...this.data];
            this.handlerData(data);
            console.log(this.selectData)
            this.saveProductComm();
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
            customerModule.saveProductComm(this.selectData.map(item=>{
                return {
                    // ...item,
                    supplierSource:item.supplierSource,
                    leaseType:item.ext,
                    leaseTypeNo:item.id,
                    leaseTypeName:item.catName,
                    orderNo:this.orderNo
                }
            }))
        }
    },
    mounted(){
        this.getRoot();
    }
}
</script>
<style lang="scss" scoped>
    .item{
        // display: flex;      
        background: #f5eaa6;
        padding-left:20px;
        .item_title{
            line-height: 46px;
            border-bottom: 1px solid #eee;
            width:100%;
        }
        .children_item{
            background: #fff;
            padding-left:40px;
            li{
                line-height: 50px;
            }
        }
    }
</style>
