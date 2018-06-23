<template>
    <div class="bussiness_province">
        <span class="label">业务覆盖范围</span>
        <div class="select_box" @click="visible=true">
            <el-input class="el-input-box" placeholder="请选择" readonly suffix-icon="icon el-icon-caret-bottom" v-model="value"></el-input>
            <div class="error_message" v-if="errorMessage">
                <i class="icon el-icon-error"></i>
                <span>{{errorMessage}}</span>
            </div>
        </div>
        <div class="dialog" v-if="visible" @click="visible=false">
            <div class="content_container">
                <div class="content" :class="{show:showProvience}" @click.stop="1">
                    <div class="title">
                        <span>请选择业务覆盖范围（可多选）</span>
                        <span @click="cancelSelect" class="close">×</span>
                    </div>
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
    .el-input-box {
        /deep/ .el-input__inner{
            font-size: 15px;
            color: rgba(255,166,50,1);
        }
        /deep/ .icon {
            color:#999;
            font-size: 12px;
        }
    }
    .content_container{
        position: absolute;
        height:100%;
        width:100%;
        top:50px;
        overflow: hidden;
    }
    .content{
        position: absolute;
        left:50%;
        top:-525px;
        margin-left:-415px;
        width:830px;
        // height: 380px;
        background: #fff;
        border-radius:4px;
        &.show{
            top:0px;
            transition-delay: 1s;
            transition: all 0.5s;
        }
        .title{
            font-size:16px;
            text-align: center;
            line-height: 60px;
            border-bottom: 1px solid rgba(238,238,238,1);
            .close{
                margin-right: 16px;
                float: right;
                font-size: 12px;
                cursor: pointer;
                color: #666666;
            }
        }
        .el-checkbox-group{
            padding-top:30px;
            margin-left:80px;
            text-align: left;
            .el-checkbox{
                width:120px;
                text-align: left;
                margin-bottom: 40px;
            }
            .el-checkbox+.el-checkbox{
                margin-left:0px;
            }
        }
        .dialog_footer{
            line-height: 80px;
            // background: #f8f7f7;
            text-align: center;
            .button{
                font-size:14px;
                line-height: 40px;
                width:140px;
                &.cancel{
                    // color: rgba(174, 174, 174, 0.90);
                    // background: #fff;
                //    &:hover{background: rgb(225,225,225);} 
                }
                &.sure{
                    margin-left:75px;
                    &:hover{
                    }
                }
            }
        }
    }
</style>
