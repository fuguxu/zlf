<template>
    <div class="choice_rent">
        <ul>
            <!-- <li class="item" v-for="(item,index) in jiajuData" :key="index+'0'">
                <div class="item_title">
                    <el-checkbox v-model="item.checked">{{item.name}}</el-checkbox>
                </div>
                <div v-if="item.checked">
                    <div>
                        <span>请选择</span>
                        <el-select v-model="item.optionValue" placeholder="">
                            <el-option v-for="(it,i) in item.option" :key="i" :value="it.name" :label="it.name"></el-option>
                        </el-select>
                    </div>
                    <div>
                        <span>请进一步选择</span>
                        <ul class="children_item">
                            <li>
                                <el-checkbox v-model="jiajuData[0].children[0].checked">{{jiajuData[0].children[0].name}}</el-checkbox>
                                <el-radio-group v-if="jiajuData[0].children[0].checked" v-model="jiajuData[0].children[0].choice">
                                    <el-radio :label="0">我已有{{jiajuData[0].children[0].name}}指定的供应商</el-radio><br />
                                    <el-radio :label="1">我需要租立方推荐优质供应商</el-radio>
                                </el-radio-group>
                            </li>
                            <li>
                                <el-checkbox v-model="jiajuData[0].children[1].checked">{{jiajuData[0].children[1].name}}</el-checkbox>
                                <el-radio-group v-if="jiajuData[0].children[1].checked&&jiajuData[0].children[1].yes=='no'" v-model="jiajuData[0].children[1].choice">
                                    <el-radio :label="0">我已有{{jiajuData[0].children[1].name.name}}指定的供应商</el-radio><br />
                                    <el-radio :label="1">我需要租立方推荐优质供应商</el-radio>
                                </el-radio-group>
                                <ul v-if="jiajuData[0].children[1].checked&&jiajuData[0].children[1].yes=='yes'">
                                    <li v-for="(it2,i) in jiajuData[0].children[1].children" :key="i">
                                        <el-checkbox v-model="it2.checked">{{it2.name}}</el-checkbox>
                                        <el-radio-group v-if="it2.checked" v-model="it2.choice">
                                            <el-radio :label="0">我已有{{it2.name}}指定的供应商</el-radio><br />
                                            <el-radio :label="1">我需要租立方推荐优质供应商</el-radio>
                                        </el-radio-group>
                                    </li>
                                </ul>
                                <div v-if="jiajuData[0].children[1].checked&&!jiajuData[0].children[1].click">
                                    <span>您还需要进一步细分活动家具吗？</span>
                                    <span @click="jiajuData[0].children[1].yes='yes';jiajuData[0].children[1].click=true" >需要</span>
                                    <span @click="jiajuData[0].children[1].yes='no';jiajuData[0].children[1].click=true">不需要</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="item" v-for="(item,index) in data" :key="index" >
                <div class="item_title">
                    <el-checkbox v-model="item.checked">{{item.name}}</el-checkbox>
                </div>
                <ul class="children_item" v-if="item.checked&&item.children.length>0">
                    <li v-for="(it,i) in item.children" :key="i">
                        <el-checkbox v-model="it.checked">{{it.name}}</el-checkbox>
                        <el-radio-group v-if="it.checked" v-model="it.choice">
                            <el-radio :label="0">我已有{{it.name}}指定的供应商</el-radio><br />
                            <el-radio :label="1">我需要租立方推荐优质供应商</el-radio>
                        </el-radio-group>
                    </li>
                </ul>
                <el-radio-group v-if="item.checked&&item.children.length==0" v-model="item.choice">
                    <el-radio :label="0">我已有{{item.name}}指定的供应商</el-radio><br />
                    <el-radio :label="1">我需要租立方推荐优质供应商</el-radio>
                </el-radio-group>
            </li> -->
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
    </div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            jiajuData:[
                {
                    name:'家具',
                    checked:false,
                    optionValue:'酒店家具',
                    option:[
                        {
                            name:'酒店家具'
                        },
                        {
                            name:'公寓家具'
                        },
                        {
                            name:'办公家具'
                        }
                    ],
                    children:[
                        {
                            name:'固装家具',
                            checked:false,
                            choice:''
                        },
                         {
                            name:'活动家具',
                            yes:false,
                            checked:false,
                            choice:'',
                            click:false,
                            children:[
                                {
                                    name:'板式家具',
                                    choice:''
                                },
                                {
                                    name:'板木家具',
                                    choice:''
                                },
                                {
                                    name:'实木家具',
                                    choice:''
                                }
                            ]
                        }
                    ]
                }
            ],
            data:[
                // {
                //     name:'家电',
                //     checked:false,
                //     children:[
                //         {
                //             name:'空调',
                //             checked:false,
                //         },
                //         {
                //             name:'热水器',
                //             checked:false,
                //         },
                //         {
                //             name:'洗衣机',
                //             checked:false,
                //         },
                //         {
                //             name:'冰箱',
                //             checked:false,
                //         }
                //     ]
                // },
                // {
                //     name:'机电',
                //     checked:false,
                //     children:[
                //         {
                //             name:'电梯',
                //             checked:false,
                //         },
                //         {
                //             name:'新风系统',
                //             checked:false,
                //         },
                //         {
                //             name:'太阳能系统',
                //             checked:false,
                //         },
                //         {
                //             name:'弱电',
                //             checked:false,
                //         }
                //     ]
                // },
                // {
                //     name:'智能系统',
                //     checked:false,
                //     children:[
                //         {
                //             name:'智能门锁',
                //             checked:false,
                //         },
                //         {
                //             name:'智能水电表',
                //             checked:false,
                //         },
                //         {
                //             name:'智能入住系统',
                //             checked:false,
                //         }
                //     ]
                // },
                // {
                //     name:'卫浴',
                //     checked:false,
                //     children:[
                //         {
                //             name:'水龙头',
                //             checked:false,
                //         },
                //         {
                //             name:'花洒',
                //             checked:false,
                //         },
                //         {
                //             name:'台盘',
                //             checked:false,
                //         },
                //         {
                //             name:'普通马桶',
                //             checked:false,
                //         },
                //         {
                //             name:'智能马桶',
                //             checked:false,
                //         }
                //     ]
                // },
                // {
                //     name:'窗帘',
                //     checked:false,
                //     children:[]
                // }
            ],
            furniture:[]
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
                    this.data=res.data.filter(item=>{
                        return item.ext!='1'; 
                    }).map(item=>{
                        return {
                            ...item,
                            checked:false,
                            supplierSource:'',
                            children:false
                        }
                    })
                    console.log(this.data)
                }
            })
        },
        selectRoot(item){
            console.log(item);
            item.supplierSource='';
            this.getLease(item);
        },
        selectItem(item){
            console.log(item)
            item.supplierSource='';
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
