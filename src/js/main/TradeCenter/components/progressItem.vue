<template>
    <div class="item_content" :class="{show:!isEdit}">
        <div v-if="!isEdit" class="title color6">
            <span class="line"></span><span>简单描述</span>
        </div>
        <div class="content">
            <div v-if="isEdit" class="sub_title">简单描述</div>
            <div class="desc_box">
                <el-input :readonly="!isEdit" :class="{readonly:!isEdit}" class="equipment_textarea" v-model="form.contractProgressDesc" resize="none"
                 :maxlength="maxLength" type="textarea" :rows="4" autosize placeholder="简单描述您所上传的家具生产启动照片~" >
                </el-input>
                <div v-if="isEdit" class="rest_numbers">还可输入<span :class="{'rest_ten':maxLength-form.contractProgressDesc.length<=10}">{{maxLength-form.contractProgressDesc.length}}</span>字</div>
            </div>
        </div>
        <div class="upload_box">
            <uploadProduct v-if="isEdit" saveType="logistics" :isEdit="isEdit" :data="fileList" @updatePic="updatePic"  id="product"></uploadProduct>
            <previewPic v-if="!isEdit" :imgList="fileList"></previewPic>
        </div>
        <div class="footer">
            <span v-if="fileList.length>0&&isEdit" @click="submit" class="button edit">提交</span>
        </div>
    </div>
</template>
<script>
import uploadProduct from '../../../components/uploadProduct';
import previewPic from '../../components/previewPic';
import {customerModule} from '../../../api/main';
export default {
    props:['type','leaseType','transferInfo','leaseContractNo'],
    data(){
        return {
            form:{
                contractProgressDesc:'',
                type:this.type,
                leaseContractNo:this.leaseContractNo
            },
            fileObj:{},
            fileList:[],
            isEdit:true,
            maxLength:100
        }
    },
    methods:{
        updatePic(file,id){//接受附件
            let fileObj={};
            this.fileList=file;
            file.forEach((v,k)=>{
                fileObj[`imgAddr${k+1}`]=v.url;
            });
            this.fileObj=fileObj;
        },
        saveContract(){//保存接口
            customerModule.saveContract({...this.fileObj,...this.transferInfo,...this.form}).then(res=>{
                if(res.statusCode=='1'){
                    this.isEdit=false;
                    this.getContractProgress();
                }
            })
        },
        getContractProgress(){//进来获取信息  以前保存过的 不能编辑
            customerModule.getContractProgress({
                leaseContractNo:this.leaseContractNo,
                type:this.type
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.fileList=[];
                    let result= res.data||{};
                    this.form=Object.assign(this.form,result);
                    for(var i=1;i<=5;i++){
                        if(result['imgAddr'+i]){
                            this.fileList.push({url:result['imgAddr'+i]});
                        }
                    }
                    if(this.fileList.length>0){
                        this.isEdit=false;
                    }else{
                        this.isEdit=true;
                    }
                    this.$emit('updateStatus',this.isEdit,this.isEdit?false:this.form);
                }
            })
        },
        submit(){//提交按钮
            if(this.transferInfo){
                this.$emit('valiate');//先验证必填信息 又父组件来调接口
            }else{
                this.saveContract();
            }
        }
    },
    mounted(){
        this.getContractProgress();
    },
    components:{
        uploadProduct,
        previewPic
    }
}
</script>
<style lang="scss" scoped>
    .item_content{
        padding-top:28px;
        padding-right: 14px;
        background: rgba(244,244,244,1);
        &.transfer{
            padding-top:20px;
        }
        &.show{
            background: #fff;
            padding-top:0px;
            padding-right:0px;
        }
    }
    .title{
        display: flex;
        align-items: center;
        padding: 10px 0px;
        .line{
            width:6px;
            height:12px; 
            background:rgba(255,166,50,1);
            border-radius: 3px ;
            margin-right:10px;
        }
    }
    .content{
        display: flex;
        // padding-right: 14px;
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
            // padding-right: 10px;
            background: #fff;
            .rest_numbers{
                color:rgba(153,153,153,1);
                font-size:12px;
                text-align: right;
                line-height: 36px;
                padding-right: 10px;
                .rest_ten{
                    color:#E93F36;
                }
            }
        }
        .readonly.el-textarea /deep/ .el-textarea__inner{
            background: rgba(244,244,244,1);
        }
        .el-textarea /deep/ .el-textarea__inner{
            border:none;
            border-radius: 0px;
            font-size: 14px;
            //  color: rgba(41, 43, 44, 0.898039215686275);  
             min-height:70px !important;
        }
    }
    .upload_box {
        display: flex;
        justify-content: center;
        .preview_box{
            display: inline-block;
        }
        .file-upload-container{
            padding-top:25px;
            // justify-content: center;
            /deep/ .label_text{
                width:98px;
                padding-left:21px;
                padding-right: 0px;
            }
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
