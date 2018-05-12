<template>
    <div class="supplier_type">
        <span class="label">供应商类型</span>
        <div class="select_box" :class="{active:activeBox}">
            <el-select class="el-input-box" @change="changeType" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.name" :label="item.name" :value="item.name">
                </el-option>
            </el-select>
            <div class="error_message" v-if="errorMessage">
                <i class="icon el-icon-remove"></i>
                <span>{{errorMessage}}</span>
            </div>
            <div class="item_box" >
                <div v-for="(item,index) in options" :key="index" v-if="item.children.length>0"  :class="{show:showSelect==item.name}" class="item" v-left>
                    <span class="label_sub">请进一步选择：</span>
                    <el-checkbox-group v-model="item.checkList">
                        <el-checkbox v-for="(it,i) in item.children" :label="it.name" :key="i"></el-checkbox>
                    </el-checkbox-group>
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            options:[
                {
                    name:'家具',
                    checkList:[],
                    children:[
                        {
                            name:'固装家具'
                        },
                        {
                            name:'活动板式家具'
                        },
                        {
                            name:'活动板木家具'
                        },
                        {
                            name:'活动实木家具'
                        }
                    ]
                },
                {
                    name:'家电',
                    checkList:[],
                    children:[
                        {
                            name:'空调'
                        },
                        {
                            name:'热水器'
                        },
                        {
                            name:'洗衣机'
                        },
                        {
                            name:'冰箱'
                        }
                    ]
                },
                {
                    name:'机电',
                    checkList:[],
                    children:[
                        {
                            name:'电梯'
                        },
                        {
                            name:'新风系统'
                        },
                        {
                            name:'太阳能系统'
                        },
                        {
                            name:'弱电'
                        }
                    ]
                },
                {
                    name:'智能系统',
                    checkList:[],
                    children:[
                        {
                            name:'智能门锁'
                        },
                        {
                            name:'智能水电表'
                        },
                        {
                            name:'智能入住系统'
                        }
                    ]
                },
                {
                    name:'卫浴',
                    checkList:[],
                    children:[
                        {
                            name:'水龙头'
                        },
                        {
                            name:'花洒'
                        },
                        {
                            name:'台盘'
                        },
                        {
                            name:'普通马桶'
                        },
                        {
                            name:'智能马桶'
                        }
                    ]
                },
                {
                    name:'窗帘',
                    checkList:[],
                    children:[]
                }
            ],
            value:'',
            showSelect:'',
            activeBox:false,
            errorMessage:''
        }
    },
    methods:{
        changeType(value){
            setTimeout(()=> {
                this.showSelect=value;
            }, 300);
            if(AppUtil.findWhere(this.options,'name',value).children.length>0){
                this.activeBox=true
            }else{
                this.activeBox=false
            }
        },
        valiate(){
            if(!this.value){
                this.errorMessage='请选择供应商类型！';
                return false;
            }else{
                this.errorMessage='';
                return true;
            }
        }
    },
    mounted(){

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
                width:122px;
                display: inline-block;
                font-size: 16px;
                color: #F29F33;
            }
            .el-checkbox-group{
                display:flex;
            }
        }
    }
</style>
