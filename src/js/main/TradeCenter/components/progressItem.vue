<template>
    <div class="item_content">
        <div class="content">
            <div class="sub_title">简单描述</div>
            <div class="desc_box">
                <el-input class="equipment_textarea" v-model="simbleDesc" resize="none"
                 :maxlength="maxLength" type="textarea" :rows="4" autosize placeholder="简单描述您所上传的家具生产启动照片~" >
                </el-input>
                <div class="rest_numbers">还可输入<span :class="{'rest_ten':maxLength-simbleDesc.length<=10}">{{maxLength-simbleDesc.length}}</span>字</div>
            </div>
        </div>
        <div class="upload_box">
            <uploadProduct saveType="logistics"  id="product"></uploadProduct>
        </div>
        <div class="footer">
            <span class="button edit">提交</span>
        </div>
    </div>
</template>
<script>
import uploadProduct from '../../../components/uploadProduct';
export default {
    data(){
        return {
            simbleDesc:'',
            maxLength:100
        }
    },
    components:{
        uploadProduct
    }
}
</script>
<style lang="scss" scoped>
    .item_content{
        padding-top:28px;
        &.transfer{
            padding-top:0px;
        }
    }
    .content{
        display: flex;
        // 
        .sub_title{
            color:rgba(102, 102, 102, 1);
            padding-left:21px;
            padding-top:10px;
            padding-right: 14px;
            width:98px;
            box-sizing: border-box;
        }
        .desc_box{
            // width:720px;
            flex: 1;
            border: 1px solid rgba(237, 237, 237, 1);
            // border-radius: 5px;
            padding-right: 10px;
            background: #fff;
            .rest_numbers{
                color:rgba(153,153,153,1);
                font-size:12px;
                text-align: right;
                line-height: 36px;
                .rest_ten{
                    color:#E93F36;
                }
            }
        }
        .el-textarea /deep/ .el-textarea__inner{
            border:none;
            border-radius: 0px;
            font-size: 14px;
            //  color: rgba(41, 43, 44, 0.898039215686275);  
             min-height:60px !important;
        }
    }
    .upload_box .file-upload-container{
        padding-top:40px;
        /deep/ .label_text{
            width:98px;
            padding-left:21px;
            padding-right: 0px;
        }
    }
    .footer{
        padding: 30px 0 30px 102px;
    }
    .button{
        // display: inline-block;
        width:110px;
        height: 36px;
        line-height: 36px;
        border-radius: 5px;
        color:#fff;
        font-size:16px;
        // text-align: center;
        // cursor: pointer;
        &.edit{
            background: #ed9f34;
            &:hover{
                background: #f0b154;
            }
        }
    }
</style>
