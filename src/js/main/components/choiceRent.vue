<template>
    <div class="choice_rent">
        <ul>
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
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            data:[
                {
                    name:'家电',
                    checked:false,
                    children:[
                        {
                            name:'空调',
                            checked:false,
                        },
                        {
                            name:'热水器',
                            checked:false,
                        },
                        {
                            name:'洗衣机',
                            checked:false,
                        },
                        {
                            name:'冰箱',
                            checked:false,
                        }
                    ]
                },
                {
                    name:'机电',
                    checked:false,
                    children:[
                        {
                            name:'电梯',
                            checked:false,
                        },
                        {
                            name:'新风系统',
                            checked:false,
                        },
                        {
                            name:'太阳能系统',
                            checked:false,
                        },
                        {
                            name:'弱电',
                            checked:false,
                        }
                    ]
                },
                {
                    name:'智能系统',
                    checked:false,
                    children:[
                        {
                            name:'智能门锁',
                            checked:false,
                        },
                        {
                            name:'智能水电表',
                            checked:false,
                        },
                        {
                            name:'智能入住系统',
                            checked:false,
                        }
                    ]
                },
                {
                    name:'卫浴',
                    checked:false,
                    children:[
                        {
                            name:'水龙头',
                            checked:false,
                        },
                        {
                            name:'花洒',
                            checked:false,
                        },
                        {
                            name:'台盘',
                            checked:false,
                        },
                        {
                            name:'普通马桶',
                            checked:false,
                        },
                        {
                            name:'智能马桶',
                            checked:false,
                        }
                    ]
                },
                {
                    name:'窗帘',
                    checked:false,
                    children:[]
                }
            ]
        }
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
