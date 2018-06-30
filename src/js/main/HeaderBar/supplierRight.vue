<template>
    <div class="supplier_right">
        <span @click="tradeCenter" to="/trade" :class="{'router-link-active':$route.path.indexOf('/trade')>-1}" class="text">交易中心</span>
        <span @click="recommend" to="/recommend" class="recommend text">推荐值</span>
        <el-switch
            @change="changeSwitch"
            :width="36"
            style="display: block"
            v-model="switchValue"
            active-color="#fff"
            inactive-color="#fff"
            :inactive-text="activeText"
            >
        </el-switch>
    </div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            switchValue:'',
        }
    },
    methods:{
        getExtSupplier(){//供应商扩展信息
            customerModule.getExtSupplier().then(res=>{
                if(res.statusCode=='1'&&res.data){
                    this.switchValue=res.data.recoStatus==0?false:true;
                }
            })
        },
        openRecom(val){//推荐值开关
            customerModule.openRecom({
                isOpen:this.switchValue?1:0
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.setSwitchValue(val);
                }
            })
        },
        setSwitchValue(val){
            Bus.$emit('recommendSwitch',val);
            localStorage.setItem('recommendSwitch',val);
        },
        changeSwitch(value){
            this.switchValue=!value;
            AppUtil.getLicenseStatus(status=>{
                if(status=='1'){//营业执照通过
                    this.switchValue=value;
                }else{
                    Bus.$emit('sendLicenseStatus',status);
                }
            })
        },
        changeRoute(path){
            AppUtil.getLicenseStatus(status=>{
                if(status=='1'){//营业执照通过
                    this.$router.push(path);
                }else{
                    Bus.$emit('sendLicenseStatus',status);
                }
            })
        },
        tradeCenter(){
            this.changeRoute('/trade');
        },
        recommend(){
            this.changeRoute('/recommend');
        }
    },
    mounted(){
        this.getExtSupplier();
    },
    computed:{
        activeText(){
            return this.switchValue?'产能充足，推荐已开启':'产能不足，推荐已关闭'
        }
    },
    watch:{
        switchValue(n,o){
            if(o!==''){
                this.openRecom(n);
            }else{
                this.setSwitchValue(n);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .supplier_right{
        flex:1;
        display: flex;
        align-items: center;
        height:100%;
        justify-content: flex-end;
        .text{
            font-size: 14px;
            cursor: pointer;
            &:hover,&.router-link-active{
                color: rgba(255, 255,255, 0.75);
            }
        }
        .recommend{
            margin:0 50px;
        }
    }
</style>
<style scoped>
    .el-switch{
        margin-right: 50px;
    }
    .el-switch>>>.el-switch__core .el-switch__button{
        background-color: rgba(255,166,50,1);
    }
    .el-switch>>>.el-switch__label{
        font-size: 14px;
        color:#fff;
    }
</style>
