<template>
    <div class="recommend_detail" :class="{readonly:!isEdit}">
        <div class="title_box">
            <span class="title font18">推荐详情</span>
            <span class="desc color6 font12">以下信息在把您推荐给客户的同时呈现给客户，是您与客户的首次接触，展现产品实力的机会，祝您脱颖而出。</span>
            <span class="button edit" @click="clickEdit">编辑</span>
            <a class="button preview" :href="`#/case?id=${user.userNo}`" target="_blank" v-if="this.form.isEdit=='1'" >推荐预览</a>
        </div>
        <div class="company_info item_info">
            <div class="title_item">
                <span class="line"></span>
                <span>公司简介</span>
            </div>
            <div class="content">
                <div class="sub_title">详细介绍</div>
                <div class="desc_box company">
                    <el-input class="company_textarea" :readonly="!isEdit" resize="none" :maxlength="companyNumber" type="textarea" :rows="4" autosize placeholder="展示公司实力，示例：**家具成立于2004年，主要从事酒店家具的生产制造，目前设有深圳、惠州两个生产基地，员工800余人，月产值2000万，致力于打造最具优秀的产品和服务，推动家具制造商的文明发展。" v-model="form.briefIntro">
                    </el-input>
                    <div v-if="isEdit" class="rest_numbers">还可输入<span :class="{'rest_ten':companyNumber-form.briefIntro.length<=10}">{{companyNumber-form.briefIntro.length}}</span>字</div>
                </div>
            </div>
        </div>
        <div class="sprite_line"></div>
        <div class="equipment_info item_info">
            <div class="title_item">
                <span class="line"></span>
                <span>生产设备</span>
            </div>
            <div class="content">
                <div class="sub_title">简单描述</div>
                <div class="desc_box equiment">
                    <el-input class="equipment_textarea" :readonly="!isEdit" resize="none" v-model="form.equipment[0].content" :maxlength="equipmentNumber" type="textarea" :rows="4" autosize placeholder="简单描述生产设备的流水线生产、自动化程度等~" >
                    </el-input>
                    <div v-if="isEdit" class="rest_numbers">还可输入<span :class="{'rest_ten':equipmentNumber-form.equipment[0].content.length<=10}">{{equipmentNumber-form.equipment[0].content.length}}</span>字</div>
                </div>
            </div>
            <div class="upload_box">
                <uploadProduct v-if="isEdit" id="equipment" :data="form.equipment[0].fileList" @updatePic="updatePic" saveType="equipment" :isEdit="isEdit"></uploadProduct>
                <previewPic :imgList="form.equipment[0].fileList" v-if="!isEdit"></previewPic>
            </div>
        </div>
        <div class="sprite_line"></div>
        <div class="product_info item_info">
            <div class="title_item">
                <span class="line"></span>
                <span>产品介绍</span>
            </div>
            <div class="content_container" v-for="(item,index) in form.product" :key="index">
                <div class="content">
                    <div class="sub_title">产品{{numbers[index]}}</div>
                    <div class="desc_box sub_desc_box">
                        <el-input v-model="item.keywords"  :readonly="!isEdit" :placeholder="`请输入产品${numbers[index]}名称`" >
                        </el-input>
                    </div>
                </div>
                <div class="content">
                    <div class="sub_title">简单描述</div>
                    <div class="desc_box">
                        <el-input class="equipment_textarea" :readonly="!isEdit" resize="none" v-model="item.content" :maxlength="item.maxLength" type="textarea" :rows="4" autosize :placeholder="`简单介绍产品${numbers[index]}，包括特点、优势...`" >
                        </el-input>
                        <div v-if="isEdit" class="rest_numbers">还可输入<span :class="{'rest_ten':item.maxLength-item.content.length<=10}">{{item.maxLength-item.content.length}}</span>字</div>
                    </div>
                </div>
                <div class="upload_box">
                    <uploadProduct v-if="isEdit" :isEdit="isEdit" :data="item.fileList" @updatePic="updatePic" saveType="product" :id="'product'+index"></uploadProduct>
                    <previewPic :imgList="item.fileList" v-if="!isEdit"></previewPic>
                </div>
            </div>
            <div v-if="isEdit" class="addarea">
                <span class="additem" @click="addProduct">
                    <i class="icon el-icon-circle-plus-outline"></i>
                    <span>新增产品介绍</span>
                    <span v-if="showProductErrorMessage" class="error_message">
                       <i class="font16 error el-icon-error"></i> <span>至多能有5个产品介绍!</span>
                    </span>
                </span>
            </div>
        </div>
        <div class="sprite_line"></div>
        <div class="product_info item_info">
            <div class="title_item">
                <span class="line"></span><span>案例介绍</span></div>
            <div class="content_container" v-for="(item,index) in form.cases" :key="index">
                <div class="content">
                    <div class="sub_title">案例{{numbers[index]}}</div>
                    <div class="desc_box sub_desc_box">
                        <el-input v-model="item.keywords" :readonly="!isEdit" :placeholder="`请输入案例${numbers[index]}名称`" >
                        </el-input>
                    </div>
                </div>
                <div class="content">
                    <div class="sub_title">简单描述</div>
                    <div class="desc_box">
                        <el-input class="equipment_textarea" :readonly="!isEdit" resize="none" v-model="item.content" :maxlength="item.maxLength" type="textarea" :rows="4" autosize :placeholder="`简单介绍案例${numbers[index]}`" >
                        </el-input>
                        <div v-if="isEdit" class="rest_numbers">还可输入<span :class="{'rest_ten':item.maxLength-item.content.length<=10}">{{item.maxLength-item.content.length}}</span>字</div>
                    </div>
                </div>
                <div class="upload_box">
                    <uploadProduct v-if="isEdit" :isEdit="isEdit" :data="item.fileList" @updatePic="updatePic" saveType="case" :id="'case'+index"></uploadProduct>
                    <previewPic :imgList="item.fileList" v-if="!isEdit"></previewPic>
                </div>
            </div>
            <div v-if="isEdit" class="addarea">
                <span class="additem" @click="addCase">
                    <i class="icon el-icon-circle-plus-outline"></i>
                    <span>新增案例介绍</span>
                    <span v-if="showCaseErrorMessage" class="error_message">
                        <i class="font16 error el-icon-error"></i><span>至多能有5个案例介绍!</span>
                    </span>
                </span>
            </div>
        </div>
        <div class="footer" v-if="isEdit">
            <span @click="clickCancel" class="button cancel">取消</span>
            <span @click="submit" class="button save edit">保存</span>
        </div>
    </div>
</template>
<script>
import uploadProduct from '../../components/uploadProduct';
import {customerModule} from '../../api/main';
import previewPic from '../components/previewPic';
export default {
    data(){
        return {
            form:{
                briefIntro:'',
                equipment:[{
                    content:'',
                    fileList:[]
                }],
                product:[],
                cases:[]
            },
            companyNumber:200,
            equipmentNumber:50,
            commonObj:{
                keywords:'',//名称
                content:'',//描述
                maxLength:50,
                fileList:[]
            },
            showProductErrorMessage:false,
            showCaseErrorMessage:false,
            numbers:['一','二','三','四','五'],
            isEdit:true,
            user:{}
        }
    },
    methods:{
        addProduct(){//增加产品
            if(this.form.product.length>=5){
                this.showProductErrorMessage=true;
                return;
            }
            this.form.product.push({...this.commonObj});
        },
        addCase(){//增加案例
             if(this.form.cases.length>=5){
                this.showCaseErrorMessage=true;
                return;
            }
            this.form.cases.push({...this.commonObj});
        },
        handleId(id,name){
          return  id.split(name)[1];
        },
        deleteAddreImg(obj){
            for(var i=1;i<=5;i++){
                delete obj['imgAddr'+i];
            }
        },
        updatePic(file,id){//接受文件
            let fileObj={};
            file.forEach((v,k)=>{
                fileObj[`imgAddr${k+1}`]=v.url;
            });
            if(id=='equipment'){
                this.deleteAddreImg(this.form.equipment[0]);//有的话先删除
                this.form.equipment[0]=Object.assign(this.form.equipment[0],fileObj);
            }else if(id.indexOf('product')>-1){
                let index=this.handleId(id,'product');
                this.deleteAddreImg(this.form.product[index]);
                this.form.product[index]=Object.assign(this.form.product[index],fileObj);
            }else if(id.indexOf('case')>-1){
                let index=this.handleId(id,'case');
                this.deleteAddreImg(this.form.cases[index]);
                this.form.cases[index]==Object.assign(this.form.cases[index],fileObj);
            }
        },
        saveRecommend(){//提交接口
            customerModule.saveRecommend(this.form).then(res=>{
                if(res.statusCode=='1'){
                    this.getRecommend();
                }
            });
        },
        submit(){//保存按钮
            this.saveRecommend();
        },
        handleFile(attrList){//处理附件
          return  attrList.map(item=>{
                    let fileList=[];
                    for(var i=1;i<=5;i++){
                        if(item['imgAddr'+i]){
                            fileList.push({url:item['imgAddr'+i]});
                        }
                    }
                    return {
                        ...this.commonObj,
                        ...item,
                        fileList:fileList
                    }
                })
        },
        getRecommend(){//获取详情
            customerModule.getRecommend({userNo:this.user.userNo}).then(res=>{
                if(res.statusCode=='1'){
                    if(res.data.isEdit=='1'){
                        this.form=res.data;
                        this.form.briefIntro=this.form.briefIntro||'';
                        this.form.equipment=this.handleFile(this.form.equipment||[{}]);
                        this.form.cases=this.handleFile(this.form.cases||[{}]);
                        this.form.product=this.handleFile(this.form.product||[{}]);
                        this.isEdit=false;
                    }else{
                        this.isEdit=true;
                        this.initData();
                    }
                }
            })
        },
        clickEdit(){//点击编辑
            this.isEdit=true;
        },
        clickCancel(){//点击取消
            this.isEdit=false;
            this.getRecommend();
        },
        initData(){
            for(var i=0;i<3;i++){
                this.form.product.push({...this.commonObj});
                this.form.cases.push({...this.commonObj});
            }
        }
    },
    mounted(){
        AppUtil.getCurrentUserInfo((user=>{
            this.user=user;
            this.getRecommend();
        }))
    },
    components:{
        uploadProduct,
        previewPic
    }
}
</script>
<style lang="scss" scoped>
    .recommend_detail{
        padding-bottom: 40px;
        .preview_box{
            // padding-left:80px;
            position: relative;
            left: 80px;
        }
        .title_box{
            display: flex;
            line-height: 64px;
            border-bottom: 1px solid rgba(237, 237, 237, 1);
            align-items: center;
            .title{
                margin:0px 12px 0 20px;
            }
            .edit{
                margin-right:15px;
            }
        }
        .sprite_line{
            margin:0 22px;
             height:1px;
            background:rgba(244,244,244,1);
        }
        .item_info{
            padding-left:20px;
            padding-right:32px;
            padding-top:40px;
            padding-bottom: 40px;
            .title_item{
                display: flex;
                font-size: 16px;
                align-items: center;
                .line{
                    width:6px;
                    height:12px;
                    background:rgba(255,166,50,1);
                    border-radius:3px;
                    margin-right:14px;
                }
            }
            .content{
                display: flex;
                padding-top:20px;
                .sub_title{
                    color:rgba(102, 102, 102, 1);
                    font-size:14px;
                    padding-left:11px;
                    padding-top:10px;
                    padding-right: 25px;
                }
                .desc_box{
                    flex:1;
                    border: 1px solid rgba(224,224,224,1);
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
                    /deep/ .el-textarea__inner{
                        min-height:44px !important;
                        &.el-textarea__inner[readonly]{
                            min-height:80px !important;
                            background:rgba(244,244,244,1);
                        }
                    }
                    &.company,&.equiment{
                        background:rgba(244,244,244,1);
                    }
                    &.company{
                        /deep/ .el-textarea__inner{
                            min-height:160px !important;
                            background:rgba(244,244,244,1);
                            &.el-textarea__inner[readonly]{
                                min-height:170px !important;
                            }
                        }
                    }
                    &.equiment{
                        /deep/ .el-textarea__inner{
                            min-height:64px !important;
                            background:rgba(244,244,244,1);
                        }
                    }
                    
                }
            }
            .upload_box{
                padding-left:11px;
                padding-top:50px;
                overflow-x: hidden;
            }
        }
        &.readonly{
            .product_info{
                .content_container{
                    background:#fff;
                    .sub_desc_box{
                        background: #fff;
                    }
                    /deep/ .el-input__inner{
                            min-width:148px;
                            width:148px;
                    }
                }
            }
           .content .desc_box{
                background:rgba(244,244,244,1);
            }
        }
        .product_info{
            .content_container{
                margin-left:20px;
                margin-top:20px;
                padding-bottom:10px;
                padding-right: 27px;
                box-sizing: border-box;
                background:rgba(244,244,244,1);
                .sub_title{
                    width:92px;
                    text-align: right;
                    box-sizing: border-box;
                }
               /deep/ .el-input__inner{
                        color:#666;
                 }
                 .sub_desc_box{
                     border:none;
                     width:auto;
                     padding:0px;
                 }
            }
        }
        .addarea{
            background: rgba(244,244,244,1);
            height:42px;
            line-height: 42px;
            margin-top:20px;
            text-align: center;
            margin-left:20px;
            &:hover{
                // background: #cfd0d0;
            }
            .additem{
                color: rgba(153, 153, 153, 1);
                cursor: pointer;
                position: relative;
                &:hover{
                    color: rgba(255,166,50,1);
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
                    font-size:12px;
                    left:100%;
                    .error{
                        margin-right: 13px;
                    }
                }
            }
        }
        .footer{
            text-align: center;
            padding-top:6px;
            padding-bottom:10px;
        }
        .button{
            width:80px;
            height: 40px;
            line-height: 40px;
            color:#fff;
            font-size:14px;
            border-radius: 4px;
            &.preview{
                background: rgba(72, 150, 255, 1);
                &:hover{
                    background: rgba(72, 150, 255, 0.8);
                }
            }
            &.save{
                width:176px;
            }
            &.cancel{
               background:rgba(240,240,240,1);
               width:176px;
               color:rgba(136,136,136,1);
               margin-right: 75px;
               &:hover{
                    background:rgba(240,240,240,0.8);
                }
            }
        }
        .el-textarea /deep/ .el-textarea__inner{
            border:none;
            font-size: 14px;
        }
    }
</style>
