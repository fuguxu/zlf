<template>
    <div class="accountInfo">
        <slot name="company"></slot>
        <div class="form_item">
            <div class="label">会员名</div>
            <div class="item_content">{{form.vipName}}</div>
        </div>
        <div class="form_item">
            <div class="label">用户名</div>
            <div class="item_content">{{form.userName}}</div>
        </div>
        <slot name="supplierInfo"></slot>
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
export default {
    data(){
        return {
            form:{
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
    }
}
</script>
<style lang="scss" scoped>
    .accountInfo{
        padding:40px 0px ;
    }
    @import '../../../../css/formItem.scss';
</style>
