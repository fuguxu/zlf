<template>
    <div class="accountInfo">
        <div class="form_item" v-if="role=='supplier'">
            <div class="label">公司名称</div>
            <div class="item_content">{{form.company}}</div>
        </div>
        <div class="form_item">
            <div class="label">会员名</div>
            <div class="item_content">{{form.vipName}}</div>
        </div>
        <div class="form_item">
            <div class="label">用户名</div>
            <div class="item_content">{{form.userName}}</div>
        </div>
        <div class="supplierInfo" v-if="role=='supplier'">
            <div class="form_item" v-if="!isEdit">
                <div class="label">供应商类型</div>
                <div class="item_content">{{form.supplierType}}</div>
            </div>
            <supplierType v-if="isEdit"></supplierType>
            <div class="form_item ">
                <div class="label label_input">员工数<span class="sub">（人）</span></div>
                <div class="item_content">
                    <el-input class="el-input-person" :disabled="!isEdit" v-model="form.personNumber" placeholder="请输入阿拉伯数字"></el-input>
                </div>
            </div>
            <div class="form_item" v-if="!isEdit">
                <div class="label">业务覆盖范围</div>
                <div class="item_content">{{form.provicence}}</div>
            </div>
            <bussinessProvince v-if="isEdit"></bussinessProvince>
        </div>
        <div class="form_item">
            <div class="label">邮箱</div>
            <div class="item_content">{{form.email}}</div>
        </div>
        <div class="form_item">
            <div class="label" :class="{'label_input':isEdit}">公司地址</div>
            <div class="item_content">
                <div v-if="isEdit">
                    <el-select :disabled="!isEdit" v-model="form.provicen" @change="changProvicen" placeholder="请选择省份">
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
                    <el-input :disabled="!isEdit" v-model="form.area" placeholder="详细地址"></el-input>
                </div>
                <div v-if="!isEdit" class="address">
                    <span>{{form.provicen}}</span>
                    <span>{{form.city}}</span>
                    <span>{{form.area}}</span>
                </div>
            </div>
        </div>
        <div class="form_item">
            <span v-if="isEdit" @click="cancel" class="button cancel">取消</span>
            <span v-if="isEdit" class="button sure">保存</span>
            <span v-if="!isEdit" @click="clickEdit" class="button">编辑</span>
        </div>
    </div>
</template>
<script>
import provicen from '../../../../../static/provicen';
import supplierType from '../../../components/supplierType';
import bussinessProvince from '../../../components/bussinessProvince';
export default {
    props:{
        role:{
            
        }
    },
    data(){
        return {
            form:{
                company:'深圳市金凤凰家具集团',
                supplierType:'#活动板木家具  #固装家具  #家电  #空调',
                provicence:'#广东省  #广西  #西藏  #新疆',
                personNumber:'200',
                vipName:'新派公寓',
                userName:'13710353878',
                email:'354480928@163.com',
                provicen:'广东省',
                city:'',
                area:''
            },
            isEdit:false,
            provicen:provicen,
            city:[]
        }
    },
    methods:{
        changProvicen(value){
            this.form.city='';
            this.form.area='';
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
            this.form.provicen='广东省';
            this.form.city='深圳';
            this.form.area='招商街道沿山路火炬创业大厦';
        }
    },
    mounted(){
        this.changProvicen(this.form.provicen);
        this.initData();
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
                color: #292B2C;
                font-size:14px;
                display: inline-block;
           }
           /deep/ .el-input__inner{
               height:30px;
               line-height: 30px;
               font-size:13px;
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
   .item_content .el-input-person.el-input{
       width:122px;
       /deep/ .el-input__inner{
           padding:0px;
       }
   }
   .sub{
       font-size: 12px;
        color: rgba(41, 43, 44, 0.70);
   }
</style>
