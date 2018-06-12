<template>
    <div class="bussiness_province">
        <span class="label">业务覆盖范围</span>
        <div class="select_box" @click="visible=true">
            <el-input class="el-input-box" placeholder="请选择" readonly suffix-icon="el-icon-arrow-down" v-model="value"></el-input>
            <div class="error_message" v-if="errorMessage">
                <i class="icon el-icon-error"></i>
                <span>{{errorMessage}}</span>
            </div>
        </div>
        <div class="dialog" v-if="visible" @click="visible=false">
            <div class="content_container">
                <div class="content" :class="{show:showProvience}" @click.stop="1">
                    <div class="color_line"></div>
                    <div class="title">请选择业务覆盖范围<span class="sub">（可多选）</span></div>
                    <el-checkbox-group v-model="provinceList">
                        <el-checkbox v-for="item in provicen" :label="item.name" :key="item.name"></el-checkbox>
                    </el-checkbox-group>
                    <div class="dialog_footer">
                        <span @click="cancelSelect" class="button cancel">取消所有选择</span>
                        <span @click="sureSelect" class="button sure">确定</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import provicen from '../../../static/provicen';
export default {
    props:['defaultData'],
    data(){
        return {
            value:'',
            provicen:provicen,
            provinceList:[],
            visible:false,
            showProvience:false,
            errorMessage:'',
        }
    },
    methods:{
       cancelSelect(){
           this.provinceList=[];
           this.visible=false;
           this.showProvience=false;
           this.value='';
       },
       sureSelect(){
           this.visible=false;
           this.showProvience=false;
           this.value=this.provinceList.length>0?'选择成功':'';
       },
       valiate(){
            if(this.provinceList.length==0){
                this.errorMessage='请选择业务覆盖范围，可多选！';
                return false;
            }else{
                this.errorMessage='';
                return true;
            }
        }
    },
    mounted(){
        if(this.defaultData){
            this.provinceList=this.defaultData.map(item=>{
                return item.name
            })
            this.value='选择成功';
        }
    },
    watch:{
        visible(n,o){
            if(n){
                setTimeout(()=>{
                    this.showProvience=true;
                },100)
            }else{
                this.showProvience=false;
            }
        },
        provinceList(n,o){
            this.$emit('updateArea',n.map(item=>{
                return {
                    name:item
                }
            }))
        }
    }
}
</script>
<style lang="scss" scoped>
    .select_box{
        display: inline-block;
        position: relative;
    }
    .el-input-box /deep/ .el-input__inner{
        font-size: 15px;
        color: #F29F33;
    }
    .content_container{
        position: absolute;
        height:100%;
        width:100%;
        top:150px;
        overflow: hidden;
    }
    .content{
        position: absolute;
        left:50%;
        top:-380px;
        margin-left:-300px;
        width:600px;
        height: 380px;
        background: #fff;
        &.show{
            top:0px;
            transition-delay: 1s;
            transition: all 0.5s;
        }
        .color_line{
            height: 4px;
            background: #ed9f34;
            border-bottom-left-radius: 7px;
            border-bottom-right-radius: 7px;
        }
        .title{
            color: #292B2C;
            font-size:16px;
            text-align: center;
            line-height: 60px;
            border-bottom: 1px solid #dadbdb;
            .sub{
               font-size:12px;
            }
        }
        .el-checkbox-group{
            padding:0 30px;
            .el-checkbox{
                border-bottom: 1px solid #f0f0f0;
                width:90px;
                line-height: 40px;
            }
            .el-checkbox+.el-checkbox{
                margin-left:0px;
            }
        }
        .dialog_footer{
            line-height: 65px;
            background: #f8f7f7;
            text-align: center;
            .button{
                font-size:14px;
                display: inline-block;
                line-height: 30px;
                border-radius: 5px;
                cursor: pointer;
                &.cancel{
                    width:95px;
                    color: rgba(174, 174, 174, 0.90);
                    background: #fff;
                   &:hover{background: rgb(225,225,225);} 
                }
                &.sure{
                    width:70px;
                    color:rgba(255, 255, 255, 0.90);
                    background: rgba(237, 159, 52, 1);
                    margin-left:40px;
                    &:hover{
                        background: rgba(240, 177, 84, 1);
                    }
                }
            }
        }
    }
</style>
