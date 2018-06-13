<template>
    <div class="recommend_detail">
        <div class="title_box">
            <span class="title">推荐详情</span>
            <span class="desc">以下信息在把您推荐给客户的同时呈现给客户，是您与客户的首次接触，展现产品实力的机会，祝您脱颖而出。</span>
            <span class="button edit" @click="clickEdit">编辑</span>
            <span class="button preview" @click="preview">推荐预览</span>
        </div>
        <div class="company_info item_info">
            <div class="title_item">公司简介</div>
            <div class="content">
                <div class="sub_title">详细介绍</div>
                <div class="desc_box">
                    <el-input class="company_textarea" :maxlength="companyNumber" type="textarea" :rows="4" autosize placeholder="展示公司实力，示例：**家具成立于2004年，主要从事酒店家具的生产制造，目前设有深圳、惠州两个生产基地，员工800余人，月产值2000万，致力于打造最具优秀的产品和服务，推动家具制造商的文明发展。" v-model="form.briefIntro">
                    </el-input>
                    <div v-if="isEdit" class="rest_numbers">还可输入<span :class="{'rest_ten':companyNumber-form.briefIntro.length<=10}">{{companyNumber-form.briefIntro.length}}</span>字</div>
                </div>
            </div>
        </div>
        <div class="equipment_info item_info">
            <div class="title_item">生产设备</div>
            <div class="content">
                <div class="sub_title">简单描述</div>
                <div class="desc_box">
                    <el-input class="equipment_textarea" v-model="equipmentInfo" :maxlength="equipmentNumber" type="textarea" :rows="4" autosize placeholder="简单描述生产设备的流水线生产、自动化程度等~" >
                    </el-input>
                    <div v-if="isEdit" class="rest_numbers">还可输入<span :class="{'rest_ten':equipmentNumber-equipmentInfo.length<=10}">{{equipmentNumber-equipmentInfo.length}}</span>字</div>
                </div>
            </div>
            <div class="upload_box">
                <uploadProduct id="equipment" saveType="equipment" :isEdit="isEdit"></uploadProduct>
            </div>
        </div>
        <div class="product_info item_info">
            <div class="title_item">产品介绍</div>
            <div class="content_container" v-for="(item,index) in productList" :key="index">
                <div class="content">
                    <div class="sub_title">产品{{numbers[index]}}</div>
                    <div class="desc_box sub_desc_box">
                        <el-input v-model="item.productName"  :placeholder="`请输入产品${numbers[index]}名称`" >
                        </el-input>
                    </div>
                </div>
                <div class="content">
                    <div class="sub_title">简单描述</div>
                    <div class="desc_box">
                        <el-input class="equipment_textarea" v-model="item.simbleDesc" :maxlength="item.maxLength" type="textarea" :rows="4" autosize :placeholder="`简单介绍产品${numbers[index]}，包括特点、优势...`" >
                        </el-input>
                        <div v-if="isEdit" class="rest_numbers">还可输入<span :class="{'rest_ten':item.maxLength-item.simbleDesc.length<=10}">{{item.maxLength-item.simbleDesc.length}}</span>字</div>
                    </div>
                </div>
                <div class="upload_box">
                    <uploadProduct :isEdit="isEdit" saveType="product" :id="'product'+index"></uploadProduct>
                </div>
            </div>
            <div v-if="isEdit" class="addarea">
                <span class="additem" @click="addProduct">
                    <i class="icon el-icon-circle-plus-outline"></i>
                    <span>新增产品介绍</span>
                    <span v-if="showProductErrorMessage" class="error_message">只能新增2个产品介绍</span>
                </span>
            </div>
        </div>
        <div class="product_info item_info">
            <div class="title_item">案例介绍</div>
            <div class="content_container" v-for="(item,index) in caseList" :key="index">
                <div class="content">
                    <div class="sub_title">案例{{numbers[index]}}</div>
                    <div class="desc_box sub_desc_box">
                        <el-input v-model="item.productName"  :placeholder="`请输入案例${numbers[index]}名称`" >
                        </el-input>
                    </div>
                </div>
                <div class="content">
                    <div class="sub_title">简单描述</div>
                    <div class="desc_box">
                        <el-input class="equipment_textarea" v-model="item.simbleDesc" :maxlength="item.maxLength" type="textarea" :rows="4" autosize :placeholder="`简单介绍案例${numbers[index]}`" >
                        </el-input>
                        <div v-if="isEdit" class="rest_numbers">还可输入<span :class="{'rest_ten':item.maxLength-item.simbleDesc.length<=10}">{{item.maxLength-item.simbleDesc.length}}</span>字</div>
                    </div>
                </div>
                <div class="upload_box">
                    <uploadProduct :isEdit="isEdit" saveType="case" :id="'case'+index"></uploadProduct>
                </div>
            </div>
            <div v-if="isEdit" class="addarea">
                <span class="additem" @click="addCase">
                    <i class="icon el-icon-circle-plus-outline"></i>
                    <span>新增案例介绍</span>
                    <span v-if="showCaseErrorMessage" class="error_message">只能新增2个案例介绍</span>
                </span>
            </div>
        </div>
        <div class="footer" v-if="isEdit">
            <span @click="clickCancel" class="button cancel">取消</span>
            <span class="button edit">保存</span>
        </div>
    </div>
</template>
<script>
import uploadProduct from '../../components/uploadProduct';
export default {
    data(){
        return {
            form:{
                briefIntro:''
            },
            // form.briefIntro:'创始人兼CEO 罗森柏告诉36氪，距离上次报道，公司的进展主要包括以下几个方面：第一，商业模式更加清晰：互联网+供应链+金融。',
            companyNumber:200,
            equipmentInfo:'紧落实中。虽然获得一些其他城市同行的加盟意向，但罗森柏表示，每个区域对产品的需求不同。',
            equipmentNumber:50,
            productList:[],
            product:{
                productName:'',
                simbleDesc:'',
                maxLength:50
            },
            showProductErrorMessage:false,
            caseList:[],
            showCaseErrorMessage:false,
            numbers:['一','二','三','四','五'],
            isEdit:true
        }
    },
    methods:{
        addProduct(){
            if(this.productList.length>=5){
                this.showProductErrorMessage=true;
                return;
            }
            this.productList.push({...this.product});
        },
        addCase(){
             if(this.caseList.length>=5){
                this.showCaseErrorMessage=true;
                return;
            }
            this.caseList.push({...this.product});
        },
        clickEdit(){//点击编辑
            this.isEdit=true;
        },
        clickCancel(){//点击取消
            this.isEdit=false;
        },
        preview(){
            this.$router.push('/case')
        }
    },
    mounted(){
        for(var i=0;i<3;i++){
            this.productList.push({...this.product});
            this.caseList.push({...this.product});
        }
        
    },
    components:{
        uploadProduct
    }
}
</script>
<style lang="scss" scoped>
    .recommend_detail{
        padding-bottom: 40px;
        .title_box{
            display: flex;
            line-height: 52px;
            // background: #FAFAF9;
            padding-left:33px;
            border-bottom: 1px solid rgba(201,201,201,0.2);
            align-items: center;
            .title{
                font-size: 16px;
                color: rgb(41, 43, 44);
                margin-right:10px;
            }
            .desc{
                font-size: 13px;
                color: rgba(41, 43, 44, 0.8);
            }
        }
        .item_info{
            padding-left:33px;
            padding-top:40px;
            .title_item{
                font-size: 15px;
                color: #292B2C;
                border-left:3px solid #ed9f34;
                padding-left:8px;
            }
            .content{
                display: flex;
                padding-top:15px;
                .sub_title{
                    color:rgba(41, 43, 44, 0.8);
                    font-size:14px;
                    padding-left:11px;
                    padding-top:10px;
                    padding-right: 25px;
                }
                .desc_box{
                    width:790px;
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
            }
            .upload_box{
                padding-left:11px;
                padding-top:50px;
            }
        }
        .product_info{
            .content_container{
                width:932px;
                background: #fafafa;
                border-radius: 10px;
                margin-top:20px;
                padding-bottom:20px;
                box-sizing: border-box;
                .sub_title{
                    width:92px;
                    text-align: right;
                    box-sizing: border-box;
                }
               /deep/ .el-input__inner{
                    height: 30px !important;
                    line-height: 30px;
                    border: 1px solid #dbd8d3;
                    width:186px;
                    &:focus{
                        box-shadow: 0 0 5px #d7d7d7;
                    }
                 }
                 .sub_desc_box{
                     border:none;
                     width:auto;
                     padding:0px;
                 }
            }
        }
        .addarea{
            width:932px;
            background: #fafafa;
            height:42px;
            line-height: 42px;
            margin-top:20px;
            text-align: center;
            &:hover{
                background: #cfd0d0;
            }
            .additem{
                font-size: 16px;
                color: #292B2C;
                cursor: pointer;
                position: relative;
                &:hover{
                    color: rgb(242, 159, 51);
                }
                .icon{
                    font-size:25px;
                    position: relative;
                    top: 4px;
                    margin-right: 10px;
                }
                .error_message{
                    position: absolute;
                    width:150%;
                    color: #FF6C72;
                    font-size:14px;
                    left:100%;
                }
            }
        }
        .footer{
            text-align: center;
            padding-top:50px;
        }
        .button{
            display: inline-block;
            width:80px;
            height: 30px;
            line-height: 30px;
            border-radius: 5px;
            color:#fff;
            font-size:14px;
            text-align: center;
            cursor: pointer;
            &.edit{
                background: #ed9f34;
                margin:0 30px;
                &:hover{
                    background: #f0b154;
                }
            }
            &.preview{
                background: #5da6de;
                &:hover{
                    background: #4990d7;
                }
            }
            &.cancel{
               background: #7f7f80;
               &:hover{
                    background: #949696;
                }
            }
        }
        .el-textarea /deep/ .el-textarea__inner{
            border:none;
            font-size: 14px;
             color: rgba(41, 43, 44, 0.898039215686275);  
        }
        .company_textarea /deep/ .el-textarea__inner{
            min-height:100px !important;
        }
       /deep/ textarea::-webkit-input-placeholder,/deep/ input::-webkit-input-placeholder
       {
            font-size: 13px; 
            color: rgba(41, 43, 44, 0.6);
        }
    }
</style>
