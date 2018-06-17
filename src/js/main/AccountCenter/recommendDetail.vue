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
                    <el-input class="equipment_textarea" v-model="form.equipment[0].content" :maxlength="equipmentNumber" type="textarea" :rows="4" autosize placeholder="简单描述生产设备的流水线生产、自动化程度等~" >
                    </el-input>
                    <div v-if="isEdit" class="rest_numbers">还可输入<span :class="{'rest_ten':equipmentNumber-form.equipment[0].content.length<=10}">{{equipmentNumber-form.equipment[0].content.length}}</span>字</div>
                </div>
            </div>
            <div class="upload_box">
                <uploadProduct id="equipment" :data="form.equipment[0].fileList" @updatePic="updatePic" saveType="equipment" :isEdit="isEdit"></uploadProduct>
            </div>
        </div>
        <div class="product_info item_info">
            <div class="title_item">产品介绍</div>
            <div class="content_container" v-for="(item,index) in form.product" :key="index">
                <div class="content">
                    <div class="sub_title">产品{{numbers[index]}}</div>
                    <div class="desc_box sub_desc_box">
                        <el-input v-model="item.keywords"  :placeholder="`请输入产品${numbers[index]}名称`" >
                        </el-input>
                    </div>
                </div>
                <div class="content">
                    <div class="sub_title">简单描述</div>
                    <div class="desc_box">
                        <el-input class="equipment_textarea" v-model="item.content" :maxlength="item.maxLength" type="textarea" :rows="4" autosize :placeholder="`简单介绍产品${numbers[index]}，包括特点、优势...`" >
                        </el-input>
                        <div v-if="isEdit" class="rest_numbers">还可输入<span :class="{'rest_ten':item.maxLength-item.content.length<=10}">{{item.maxLength-item.content.length}}</span>字</div>
                    </div>
                </div>
                <div class="upload_box">
                    <uploadProduct :isEdit="isEdit" :data="item.fileList" @updatePic="updatePic" saveType="product" :id="'product'+index"></uploadProduct>
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
            <div class="content_container" v-for="(item,index) in form.cases" :key="index">
                <div class="content">
                    <div class="sub_title">案例{{numbers[index]}}</div>
                    <div class="desc_box sub_desc_box">
                        <el-input v-model="item.keywords"  :placeholder="`请输入案例${numbers[index]}名称`" >
                        </el-input>
                    </div>
                </div>
                <div class="content">
                    <div class="sub_title">简单描述</div>
                    <div class="desc_box">
                        <el-input class="equipment_textarea" v-model="item.content" :maxlength="item.maxLength" type="textarea" :rows="4" autosize :placeholder="`简单介绍案例${numbers[index]}`" >
                        </el-input>
                        <div v-if="isEdit" class="rest_numbers">还可输入<span :class="{'rest_ten':item.maxLength-item.content.length<=10}">{{item.maxLength-item.content.length}}</span>字</div>
                    </div>
                </div>
                <div class="upload_box">
                    <uploadProduct :isEdit="isEdit" :data="item.fileList" @updatePic="updatePic" saveType="case" :id="'case'+index"></uploadProduct>
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
            <span @click="submit" class="button edit">保存</span>
        </div>
    </div>
</template>
<script>
import uploadProduct from '../../components/uploadProduct';
import {customerModule} from '../../api/main';
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
            isEdit:false
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
            customerModule.getRecommend().then(res=>{
                if(res.statusCode=='1'){
                    if(res.data.isEdit=='1'){
                        this.form=res.data;
                        this.form.equipment=this.handleFile(this.form.equipment);
                        this.form.cases=this.handleFile(this.form.cases);
                        this.form.product=this.handleFile(this.form.product);
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
        },
        preview(){
            this.$router.push('/case')
        },
        initData(){
            for(var i=0;i<3;i++){
                this.form.product.push({...this.commonObj});
                this.form.cases.push({...this.commonObj});
            }
        }
    },
    mounted(){
        this.getRecommend();
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
            // display: inline-block;
            width:80px;
            height: 30px;
            line-height: 30px;
            // border-radius: 5px;
            color:#fff;
            font-size:14px;
            // text-align: center;
            // cursor: pointer;
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
            //  color: rgba(41, 43, 44, 0.898039215686275);  
        }
        .company_textarea /deep/ .el-textarea__inner{
            min-height:100px !important;
        }
    }
</style>
