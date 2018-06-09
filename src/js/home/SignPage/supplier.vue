<template>
    <div>
        <components :companyInfo="companyInfo" :kindTypeInfo="kindTypeInfo" role="supplier" @updateStep="updateStep" :is="step" stepComponent="contactInfo"></components>
    </div>
</template>
<script>
import company from './components/company';
import signForm from './components/signForm';
import contactInfo from './components/contactInfo';
import kindSupplier from './components/kindSupplier';
import supplierStartUse from './components/supplierStartUse';
export default {
    data(){
        return {
            step:'',
            companyInfo:"",
            kindTypeInfo:''
        }
    },
    methods:{
        updateStep(step,Info){
            if(step=='signForm'){
                this.step=signForm;
                this.companyInfo=Info;
            }else if(step=='kindSupplier'){
                this.step=kindSupplier;
            }else if(step=='contactInfo'){
                this.step=contactInfo;
                this.kindTypeInfo=Info;
            }
        }
    },
    mounted(){
        if(this.$route.query.cp=='startUse'){
            this.step=supplierStartUse;
        }else{
            this.step=company;
        }
        
    },
    components:{
        company,
        signForm,
        contactInfo,
        kindSupplier,
        supplierStartUse
    }
}
</script>

