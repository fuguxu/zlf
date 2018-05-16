<template>
    <div class="recommend_detail">
        <div class="title_box">
            <span class="title">推荐详情</span>
            <span class="desc">以下信息在把您推荐给客户的同时呈现给客户，是您与客户的首次接触，展现产品实力的机会，祝您脱颖而出。</span>
            <span class="button edit">编辑</span>
            <span class="button preview">推荐预览</span>
        </div>
        <div class="company_info item_info">
            <div class="title_item">公司简介</div>
            <div class="content">
                <div class="sub_title">详细介绍</div>
                <div class="desc_box">
                    <el-input class="company_textarea" :maxlength="companyNumber" type="textarea" :rows="4" autosize placeholder="展示公司实力，示例：**家具成立于2004年，主要从事酒店家具的生产制造，目前设有深圳、惠州两个生产基地，员工800余人，月产值2000万，致力于打造最具优秀的产品和服务，推动家具制造商的文明发展。" v-model="companyInfo">
                    </el-input>
                    <div class="rest_numbers">还可输入<span :class="{'rest_ten':companyNumber-companyInfo.length<=10}">{{companyNumber-companyInfo.length}}</span>字</div>
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
                    <div class="rest_numbers">还可输入<span :class="{'rest_ten':equipmentNumber-equipmentInfo.length<=10}">{{equipmentNumber-equipmentInfo.length}}</span>字</div>
                </div>
            </div>
            <div class="upload_box">
                <uploadProduct></uploadProduct>
            </div>
        </div>
    </div>
</template>
<script>
import uploadProduct from '../../components/uploadProduct';
export default {
    data(){
        return {
            companyInfo:'创始人兼CEO 罗森柏告诉36氪，距离上次报道，公司的进展主要包括以下几个方面：第一，商业模式更加清晰：互联网+供应链+金融。 在金融方面，“租立方”正在申请融资租赁和商业保理的牌照。罗森柏表示，融资租赁其实对实体经济的帮助很大可以为中小企业配置办公固定资产起到杠杆的作用。但是融资租赁之前只针对大型的设备，“租立方”现在已经开始做相关的交易结构设计，想要将其下沉到家具行业，降低中小企业快速扩张中一次性购置家具。',
            companyNumber:200,
            equipmentInfo:'紧落实中。虽然获得一些其他城市同行的加盟意向，但罗森柏表示，每个区域对产品的需求不同。',
            equipmentNumber:50
        }
    },
    components:{
        uploadProduct
    }
}
</script>
<style lang="scss" scoped>
    .recommend_detail{
        .title_box{
            display: flex;
            line-height: 52px;
            background: #FAFAF9;
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
