<template>
    <div class="accountInfo">
        <div class="form_item" v-if="role=='supplier'">
            <div class="label">公司名称</div>
            <div class="item_content">{{form.userFullname}}</div>
        </div>
        <div class="form_item">
            <div class="label">会员名</div>
            <div class="item_content">{{form.userAbbr}}</div>
        </div>
        <div class="form_item">
            <div class="label">用户名</div>
            <div class="item_content">{{form.loginName}}</div>
        </div>
        <div class="supplierInfo" v-if="role=='supplier'">
            <div class="form_item" >
                <div class="label">供应商类型</div>
                <div class="item_content">{{form.supplierType}}</div>
            </div>
            <!-- <supplierType v-if="isEdit"></supplierType> -->
            <div class="form_item ">
                <div class="label label_input">员工数<span class="sub">（人）</span></div>
                <div class="item_content">
                    <el-input class="el-input-person" :disabled="!isEdit" v-model="form.employeesNum" placeholder="请输入阿拉伯数字"></el-input>
                </div>
            </div>
            <div class="form_item" v-if="!isEdit">
                <div class="label">业务覆盖范围</div>
                <div class="item_content">{{form.coverArea}}</div>
            </div>
            <bussinessProvince :defaultData="form.leaseArea" @updateArea="updateArea" v-if="isEdit"></bussinessProvince>
        </div>
        <div class="form_item">
            <div class="label">邮箱</div>
            <div class="item_content">{{form.email}}</div>
        </div>
        <div class="form_item">
            <div class="label" :class="{'label_input':isEdit}">公司地址</div>
            <div class="item_content">
                <div v-if="isEdit">
                    <el-select :disabled="!isEdit" v-model="form.province" @change="changProvicen" placeholder="请选择省份">
                        <el-option 
                        v-for="item in provicen"
                        :key="item.name"
                        :label="item.name"
                        :value="item.name">
                        </el-option>
                    </el-select>
                    <el-select :disabled="!isEdit" v-model="form.city" placeholder="请选择城市">
                        <el-option
                        v-for="item in city"
                        :key="item.name"
                        :label="item.name"
                        :value="item.name">
                        </el-option>
                    </el-select>
                    <el-input :disabled="!isEdit" v-model="form.detailAddr" placeholder="详细地址"></el-input>
                </div>
                <div v-if="!isEdit" class="address">
                    <span>{{form.province}}</span>
                    <span>{{form.city}}</span>
                    <span>{{form.detailAddr}}</span>
                </div>
            </div>
        </div>
        <div class="form_item">
            <span v-if="isEdit" @click="cancel" class="button cancel">取消</span>
            <span v-if="isEdit" @click="save" class="button sure">保存</span>
            <span v-if="!isEdit" @click="clickEdit" class="button">编辑</span>
        </div>
    </div>
</template>
<script>
import provicen from '../../../../../static/provicen';
import supplierType from '../../../components/supplierType';
import bussinessProvince from '../../../components/bussinessProvince';
import {customerModule} from '../../../api/main';
export default {
    props:{
        role:{
            
        }
    },
    data(){
        return {
            form:{
            },
            isEdit:false,
            provicen:provicen,
            city:[],
        }
    },
    methods:{
        changProvicen(value,falg){
            if(!falg){
                this.form.city='';
                this.form.detailAddr='';
            }
           this.city=AppUtil.findWhere(this.provicen,'name',value).city;
        },
        clickEdit(){
            this.isEdit=true;
        },
        cancel(){
            this.isEdit=false;
            this.initData();
        },
        initData(){
        },
        updateArea(area){//选择覆盖范围
            this.form.leaseArea=area.map(item=>{
                return {
                    ...item,
                    userNo:this.form.userNo
                }
            })
        },
        save(){//点击保存
            if(localStorage.getItem('role')=='client'){
                this.perfectUser();
            }else{
                this.changeSupplierUser();
            }
        },
        perfectUser(){//完善客户信息
            customerModule.saveOrderCustomerInfo(this.form).then(res=>{
                if(res.statusCode){
                    AppUtil.setCurrentUserInfo(this.form);
                    this.isEdit=false;
                }
            })
        },
        changeSupplierUser(){//完善供应商信息
            customerModule.changeSupplierUser(this.form).then(res=>{
                if(res.statusCode==1){
                    this.form.coverArea=this.form.leaseArea.map(item=>{
                        return '#'+item.name
                    }).join('');
                    AppUtil.setCurrentUserInfo(this.form);
                    this.isEdit=false;
                }
            })
        },
    },
    mounted(){
        this.changProvicen(this.form.province,true);
        // this.initData();
    },
    created(){
        AppUtil.getCurrentUserInfo(user=>{
            this.form=user;
        });
    },
    components:{
        supplierType,
        bussinessProvince
    }
}
</script>
<style lang="scss" scoped>
    .accountInfo{
        padding:40px 0px ;
        .supplier_type,.bussiness_province{
            margin-bottom: 22px;
            font-size:0px;
          /deep/ .label{
               width: 90px;
                color: rgba(102,102,102,1);
                font-size:14px;
                display: inline-block;
           }
           /deep/ .el-input__inner{
               height:30px;
               line-height: 30px;
            //    font-size:13px;
               cursor: pointer;
           }
           /deep/ .select_box{
               width:122px;
               cursor: pointer;
           }
       }
      .bussiness_province /deep/ .el-input__icon{
          line-height: 30px;
      }
    }
    @import '../../../../css/formItem.scss';
    .el-select{
        width:148px;
    }
   .item_content .el-input-person.el-input{
       width:148px;
       /deep/ .el-input__inner{
           padding:0px;
       }
   }
</style>
