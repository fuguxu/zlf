<template>
    <div class="item">
        <div class="content">
            <div class="sub_title">简单描述</div>
            <div class="desc_box">
                <el-input class="equipment_textarea" v-model="simbleDesc"
                 :maxlength="maxLength" type="textarea" :rows="4" autosize placeholder="简单描述您所上传的家具生产启动照片~" >
                </el-input>
                <div class="rest_numbers">还可输入<span :class="{'rest_ten':maxLength-simbleDesc.length<=10}">{{maxLength-simbleDesc.length}}</span>字</div>
            </div>
        </div>
        <div class="upload_box">
            <uploadProduct  id="product"></uploadProduct>
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
    .content{
        display: flex;
        padding-top:15px;
        .sub_title{
            color:rgba(41, 43, 44, 0.8);
            font-size:14px;
            padding-left:21px;
            padding-top:10px;
            padding-right: 25px;
        }
        .desc_box{
            width:720px;
            border: 1px solid rgba(201,201,201,0.2);
            border-radius: 5px;
            padding-right: 10px;
            background: #fff;
            .rest_numbers{
                color:rgba(54, 54, 54, 0.698039215686274);
                font-size:14px;
                text-align: right;
                line-height: 36px;
                .rest_ten{
                    color:#E93F36;
                }
            }
        }
        .el-textarea /deep/ .el-textarea__inner{
            border:none;
            font-size: 14px;
             color: rgba(41, 43, 44, 0.898039215686275);  
             min-height:60px !important;
        }
    }
    .upload_box .file-upload-container{
        padding-top:40px;
        /deep/ .label_text{
            width:103px;
            padding-left:21px;
        }
    }
    .footer{
        padding: 30px 0 30px 102px;
    }
    .button{
        display: inline-block;
        width:110px;
        height: 36px;
        line-height: 36px;
        border-radius: 5px;
        color:#fff;
        font-size:16px;
        text-align: center;
        cursor: pointer;
        &.edit{
            background: #ed9f34;
            &:hover{
                background: #f0b154;
            }
        }
    }
</style>
